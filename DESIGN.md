---
version: "1.0"
name: "Vedant — Personal Engineering Studio"
description: "A confident, warm, editorial engineering studio. Calm presence with visual richness. Not quiet to the point of dull — precise and considered, with moments of personality."
colors:
  ink: "#171816"
  ink-soft: "#4E504B"
  paper: "#F7F6F2"
  paper-raised: "#FCFBF8"
  line: "#DFDED8"
  line-strong: "#C9C8C0"
  accent: "#547A63"
  accent-light-text: "#496B56"
  accent-dark: "#8FB59A"
  dark: "#111211"
  dark-raised: "#171917"
  dark-line: "#2C2E2B"
  dark-ink-soft: "#A2A39C"
  on-accent: "#F7F6F2"
typography:
  display:
    fontFamily: "Caveat, Georgia, serif"
    fontSize: "4.5rem"
    fontWeight: "600"
    lineHeight: "0.95"
    letterSpacing: "-0.03em"
  h1:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: "600"
    lineHeight: "1.1"
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: "600"
    lineHeight: "1.25"
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: "400"
    lineHeight: "1.65"
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.65"
    letterSpacing: "-0.005em"
  body-sm:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: "400"
    lineHeight: "1.55"
    letterSpacing: "0"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.625rem"
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: "0.12em"
  mono:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: "400"
    lineHeight: "1.4"
    letterSpacing: "0"
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  pill: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "20px"
  6: "24px"
  8: "32px"
  10: "40px"
  12: "48px"
  16: "64px"
  20: "80px"
  24: "96px"
  32: "128px"
components:
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "16px 0"
  hero-title:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "0"
  hero-accent-title:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "0"
  section-label:
    textColor: "{colors.accent-light-text}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0"
  project-entry:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "24px 0"
  project-entry-hover:
    textColor: "{colors.accent-light-text}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "24px 0"
  metadata:
    textColor: "{colors.ink-soft}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "0"
  link:
    textColor: "{colors.accent-light-text}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0"
  status:
    textColor: "{colors.accent-light-text}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  visual-object:
    textColor: "{colors.accent}"
    rounded: "{rounded.none}"
    size: "320px"
    padding: "0"
---

## Overview

### Design Identity

This is a **personal engineering studio**: warm, confident, editorial, and technically precise.

The site belongs to a builder who works across software, AI, systems, and hardware. The design communicates presence through craft rather than volume. It doesn't shout, but it doesn't hide. Think: a well-lit workshop where every tool has a place, but the work on the bench is unmistakably ambitious.

Mental reference:

> **Editorial design meets engineering precision.**
> Clear typographic hierarchy, expressive display type for key personality moments, restrained monochrome palette with intentional sage green accents, and surfaces that feel considered rather than generated.

Inspired by the editorial rhythm of acharyashailesh.com.np: clear sections, rich cards with subtle depth, alternating layouts for visual interest, and human touches throughout.

### Emotional Target

The visitor should feel:

1. **At ease** — the interface is calm and has breathing room.
2. **Engaged** — visual rhythm and alternating layouts keep curiosity alive.
3. **Interested in the person** — personality appears through prominent display typography, casual greetings, and authentic descriptions.
4. **Confident in the craft** — every border, alignment, and type step feels intentional.

### Design Psychology / Rationale

**Confidence through contrast, not volume.** The previous version was too timid — monochrome without presence felt sterile. This revision adds visual warmth through:

- **Expressive display typography:** Caveat at scale in the hero ("hey, i'm / Vedant") gives human warmth immediately.
- **Intentional accent fills:** Using `#547A63` at 8–15% opacity for status badges, tags, and project preview placeholders provides visual anchor points without breaking the monochrome discipline.
- **Alternating layout rhythm:** Project entries alternate visual-left / visual-right on desktop, breaking the monotone list feel.
- **Surface hierarchy:** Subtle contrast between `paper` (`#F7F6F2`) and `paper-raised` (`#FCFBF8`) plus thin 1px borders gives depth without relying on drop shadows.
- **Editorial section framing:** Every section begins with a monospace uppercase category label and a confident heading, giving structure to the narrative.

---

## Colors

Small, intentional palette: warm neutrals for the environment; sage green as the single expressive accent.

### Light Mode

- **Paper (`#F7F6F2`)** — Primary background. Warm off-white.
- **Paper Raised (`#FCFBF8`)** — Elevated cards and alternating sections.
- **Ink (`#171816`)** — Primary text and headings.
- **Ink Soft (`#4E504B`)** — Secondary text and descriptions.
- **Line (`#DFDED8`)** — Primary dividers and borders.
- **Line Strong (`#C9C8C0`)** — Hover borders.
- **Accent (`#547A63`)** — Brand accent. Signals, rules, active states.
- **Accent Tint (`#547A63` at 8–15%)** — Subtle fills for badges, pill tags, and placeholders.
- **Accent Text (`#496B56`)** — High-contrast sage for small text on light backgrounds.

### Dark Mode

Dark mode is the same studio at night. Warm darks, never pure black + neon.

- **Dark (`#111211`)** — Primary background.
- **Dark Raised (`#171917`)** — Elevated cards and alternating sections.
- **Ink Light (`#F0EFEA`)** — Primary text.
- **Dark Ink Soft (`#A2A39C`)** — Secondary text.
- **Dark Line (`#2C2E2B`)** — Borders.
- **Accent Dark (`#8FB59A`)** — Accessible sage for dark backgrounds.

### Accent Rules

- `#547A63` is the canonical brand color.
- No second accent hue.
- Accent is allowed as a tinted fill (8–15% opacity) for tags, badges, and project thumbnail placeholders.
- Never use accent gradients.
- Never tint every section green.

---

## Typography

Three intentional type families:

1. **Caveat** — The human voice. Used prominently in the hero display name, greeting, signature, and personality annotations.
2. **Geist** — The engineering foundation. Used for headings, body copy, and UI text.
3. **Geist Mono** — Technical metadata. Used for dates, tags, status pills, and section category eyebrows.

### Hierarchy & Scale

- Hero display name: Caveat, ~5–6rem, leading-none.
- Section headings: Geist, 1.75–2rem, semibold, tight tracking.
- Section label eyebrows: Geist Mono, 10px, uppercase, tracking-[0.12em].
- Project titles: Geist, 1.25–1.5rem, semibold.
- Body: Geist, 1rem, comfortable 1.65 line-height, max 68ch measure.
- Metadata: Geist Mono, 11px.

---

## Layout & Components

### Hero

- Left column (7 cols): Greeting pill, large Caveat name, punchy headline, description, CTA links ("View Work ↓", "GitHub ↗").
- Right column (5 cols): Interactive LivingAssembly visual object.
- Subtle blueprint coordinate lines for engineering texture.

### Currently

- 3-card grid on `paper-raised` background.
- Each card has a hover accent line on top, category label, index (01/02/03), title, detail.

### Projects

- Editorial project presentation.
- Alternating thumbnail placeholder (left/right) on desktop.
- Number, year, title, description, badge tags, repo/live links.

### Interests

- 2-column grid. Domain title with accent indicator dot, summary, topic badges.

### About

- Single reading column (~640px).
- First paragraph highlighted with an accent left border.
- Handwritten Caveat signature at the bottom.

### Notes

- Clean technical log with tags, read time, date.

### Footer

- Large Caveat "Let's connect." heading.
- Social links with arrow indicators.
- Right-aligned colophon with tech stack note.

---

## Do's and Don'ts

### Do

- Make the page visually engaging and warm — not sterile or dull.
- Use Caveat boldly in the hero and personal identity moments.
- Use accent tints (8–15%) for subtle card surfaces and badges.
- Keep alternating project layouts to break visual monotony.
- Maintain WCAG AA contrast on all text.
- Support reduced motion properly.

### Don't

- Do not use generic developer portfolio tropes (giant gradients, floating 3D cubes, particle effects).
- Do not make dark mode pitch black (#000000).
- Do not use cards for everything — preserve editorial spacing.
- Do not invent project details, metrics, or personal achievements.
