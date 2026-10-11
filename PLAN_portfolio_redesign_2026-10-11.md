# Plan: Verification, Mobile Optimization, and Asset Hookup

**Date:** 2026-10-11  
**Status:** PLANNED  
**Bead(s):** none  
**Epic:** Portfolio Polish & Finalization  
**Context:** See `HANDOFF_portfolio_redesign_2026-10-11.md` for session data, technical decisions, and baseline evidence.

---

## Problem Statement

The core visual overhaul of the portfolio (projects card hover expansion, MagnificationDock navbar, design tokens, and typography hierarchy) is complete and builds cleanly. However, interactive behavior needs responsive and real-world asset validation: mobile viewport interaction for dock navbar and expanding cards, repository links verification in `content/site.ts`, and visual audit across all sections.

See Evidence & Data in `HANDOFF_portfolio_redesign_2026-10-11.md`.

## Key Findings

- Grid stretch bug resolved by `items-start` on card container → drives Phase 1 (verification).
- Pure CSS `group-hover:max-h-[420px]` is reliable, but mobile touch needs smooth tap behavior without cursor bugs → drives Phase 1.
- Magnification dock works smoothly on desktop, but small touchscreens should avoid subpixel text jitter → drives Phase 1.
- Project links currently use placeholder paths for non-live projects → drives Phase 2.
- Rest of the page (`Expertise`, `Currently`, `About`, `Achievements`) must match the elevated project card polish → drives Phase 3.

## Anti-Goals (What NOT To Do)

- Do NOT revert to generic developer portfolio templates, 3D cubes, particle effects, or floating cards.
- Do NOT convert text navigation links into icon-only buttons or hide link labels behind tooltips.
- Do NOT bring back "Intent" and "Outcome" labels in the project cards.
- Do NOT add heavy drop shadows; keep low-elevation borders and subtle tint fills (`DESIGN.md`).

## Plan

### Phase 1: Responsive & Interaction Audit

**Goal:** Ensure dock navbar and expanding project cards feel seamless on mobile and tablet screens without touch lag or visual clipping.

**Why this approach:** Touch devices trigger focus differently than mouse cursors. The CSS expansion must work comfortably when tapped without causing erratic scroll jumps.

- Test mobile navigation layout under `640px` (ensure dock padding and tap target sizes `min-h-[40px]`).
- Verify `useReducedMotion()` behavior across all animated components.
- Check cards on mobile screen widths: verify single column stack, readability of normal state, and expand transition behavior on tap.
- Ensure `max-h-[420px]` is sufficient for all project stories on narrow viewports without overflowing cards.

**Files:**
- `components/sections/nav.tsx`
- `components/ui/project-card.tsx`
- `components/sections/projects.tsx`

**Validates with:**
- Browser devtools responsive inspection (375px, 768px, 1024px, 1440px).
- `npm run build` static verification.

**Rollback:**
- Revert touch-specific CSS additions if they introduce layout shifts.

### Phase 2: Content & Asset Finalization

**Goal:** Replace all remaining placeholder URLs and verify project metadata with the user.

**Why this approach:** Inaccurate or placeholder links reduce credibility on an engineering portfolio.

- Audit `content/site.ts` for all 4 projects:
  - `Electronics.LLM`: live URL `https://electronics.vedantd.in`, verify repository link.
  - `Atlas`: GitHub link `https://github.com/vedant-io/graphrag-atlas`.
  - `Chatter`: live URL `https://chatter.vedantd.in`, verify repository link.
  - `Homelab`: verify tags, status, and description clarity.
- Verify user profile links (GitHub, LinkedIn, Email) in `siteConfig`.

**Files:**
- `content/site.ts`
- `types/content.ts`

**Validates with:**
- All links verified for correct target, syntax, and `noopener noreferrer` attributes.

**Rollback:**
- Git checkout `content/site.ts` to prior commit state if edits introduce typos.

### Phase 3: Global Section Harmony & Production Polish

**Goal:** Ensure visual rhythm across all sections (`Currently`, `Expertise`, `About`, `Notes`, `Footer`) matches the upgraded project cards and navbar.

**Why this approach:** Individual section upgrades can cause visual dissonance if adjacent sections feel neglected or use disparate border weights.

- Check section padding and border dividers across light and dark modes.
- Verify Caveat display font hierarchy consistency between Hero, About signature, and Footer.
- Run final `impeccable detect` suite across entire codebase.

**Files:**
- `components/sections/currently.tsx`
- `components/sections/about.tsx`
- `components/sections/footer.tsx`
- `app/globals.css`

**Validates with:**
- `/home/tarnished/.claude/plugins/cache/impeccable/impeccable/4.4.0/skills/impeccable/scripts/impeccable detect --json`
- `npm run build`

**Rollback:**
- Revert localized section CSS adjustments.

## Dependencies & Order

1. Phase 1 (Responsive & Interaction) must run first to ensure touch ergonomics.
2. Phase 2 (Content) can run in parallel with Phase 3.
3. Phase 3 (Global Harmony) seals the release before deployment.

## Risks & Mitigations

- **Risk:** Mobile card expansion overflows viewport when story text is long.
  - **Mitigation:** Allow fluid `max-height` or scroll containment if story length grows.
- **Risk:** Magnification spring calculations impact battery on low-end mobile.
  - **Mitigation:** Disable `mouseX` event tracking on touch-only media queries (`@media (hover: none)`).

## Success Criteria

- Clean production build with 0 TypeScript/ESLint warnings (`npm run build`).
- Dock nav expands smoothly on desktop and degrades to clean static pills on touch/reduced-motion.
- Project cards expand independently on hover/focus without stretching sibling cards.
- 0 design detector violations.

## Quick Start

```bash
# 1. Restore context
cat HANDOFF_portfolio_redesign_2026-10-11.md

# 2. Key source files
# components/sections/nav.tsx
# components/ui/project-card.tsx
# components/sections/projects.tsx
# content/site.ts

# 3. Verify starting state
npm run build

# 4. First concrete action
# Inspect components/ui/project-card.tsx mobile touch behavior and @media (hover: hover) query integration.
```
