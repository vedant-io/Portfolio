---
type: Engineering Decision
title: Animation Tuning
description: Current easing, duration, stagger configuration and reduced-motion behavior for scroll reveals and hero entry animations.
tags: [animation, motion, accessibility, performance]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-02T12:19:31Z }
sources:
  - id: lib-motion
    resource: /lib/motion.ts
    title: lib/motion.ts — shared animation primitives
  - id: reveal-component
    resource: /components/ui/reveal.tsx
    title: Reveal component — scroll-triggered wrapper
  - id: apple-design-wwdc
    resource: https://developer.apple.com/videos/play/wwdc2018/803/
    title: Designing Fluid Interfaces — WWDC 2018
  - id: audit-2026-10-02
    resource: /portfolio-knowledge/log.md
    title: apple-design audit findings, 2026-10-02
---

# Overview

All scroll reveals use `motion/react` (Framer Motion). No GSAP, no CSS `@keyframes` for entrance animations.
`prefers-reduced-motion` honored via `useReducedMotion()` hook in every animated component.
Global CSS `animation-duration: 0.01ms !important` in `globals.css` catches any CSS animation leakage.

# Easing Curve

```ts
export const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
```

Fast-out / expo-out cubic bezier. Starts immediately at full velocity, decelerates into target.
Previous value `[0.25, 0.46, 0.45, 0.94]` (ease-in-out) felt sluggish — slow start + slow end.
Decision: expo-out gives snappier, more physical feel for entrance animations.[^audit-2026-10-02]

# Hero Entry Animations

```ts
export function heroReveal(i: number, reduce: boolean | null) {
  if (reduce) return {};
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.09, duration: 0.55, ease },
  };
}
```

- 4 staggered elements: status pill (0s), name block (0.09s), bio (0.18s), CTAs (0.27s)
- VisualObject: `y: 20 → 0` fade-up (not scale) — scale on profile photo felt heavy
- `reduce`: returns `{}` — no initial/animate props = element renders in final state immediately

# Scroll Reveal Variants

```ts
export const scrollRevealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: Math.min(i * 0.07, 0.28),   // capped — long lists don't drag
      duration: 0.55,
      ease,
    },
  }),
};
```

Stagger cap `Math.min(i * 0.07, 0.28)`: 4 items = 0.28s max, 8 items still 0.28s.
Previous uncapped `i * 0.08` → 8th item delayed 0.64s, felt like loading indicator.

# Reduced Motion Variants

```ts
export const scrollRevealVariantsReduced: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      delay: Math.min(i * 0.05, 0.2),
      duration: 0.35,
      ease: "easeOut",
    },
  }),
};
```

Fade only — no `y` translate. `easeOut` rather than custom curve is sufficient at reduced intensity.

# Reveal Component

```tsx
<motion.div
  initial="hidden"       // was `false` — bug: in-viewport elements on load never animated
  whileInView="visible"
  viewport={{ once: true, margin: "-10% 0px" }}
  variants={reduce ? scrollRevealVariantsReduced : scrollRevealVariants}
  custom={delayIndex}
>
```

`viewport.once: true` — only animates once; does not re-trigger on scroll back up.
`margin: "-10% 0px"` — triggers when element is 10% inside viewport (not flush at edge).

# Known Tradeoffs

- `once: true` means no re-animation on back-scroll. Intentional — avoids visual noise on scroll-up.
- `animate-pulse` on project status dots: applied via conditional className in Server Components.
  Projects.tsx is a Server Component so cannot use `useReducedMotion()` — dots pulse unconditionally.
  Acceptable because global CSS reduced-motion override catches it. Low priority to convert to Client Component.
- No spring physics for hover interactions — CSS `transition-[transform,box-shadow]` used instead.
  Acceptable for card hovers; not gesture-driven so interruptibility is not a concern.

[^audit-2026-10-02]: Easing and `initial={false}` bug found in apple-design audit, 2026-10-02.
