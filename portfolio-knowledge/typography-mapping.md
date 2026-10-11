---
type: Engineering Decision
title: Typography Mapping
description: Font family assignments, Tailwind aliases, where each font is used, and the rationale for Caveat as display vs Fraunces as serif.
tags: [typography, fonts, design, tailwind]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-02T12:19:31Z }
sources:
  - id: design-md
    resource: /DESIGN.md
    title: DESIGN.md — typography spec
    author: human:vedant-io
  - id: tailwind-config
    resource: /tailwind.config.ts
    title: tailwind.config.ts — font family aliases
  - id: fonts-ts
    resource: /lib/fonts.ts
    title: lib/fonts.ts — next/font/google definitions
  - id: globals-css
    resource: /app/globals.css
    title: globals.css — CSS font stack variables
---

# Overview

Four fonts loaded: Geist Sans, Geist Mono, Caveat, Fraunces.
DESIGN.md intent: Caveat for personality/identity moments, Geist for UI/body, Geist Mono for metadata.

# Tailwind Font Aliases

| Tailwind class | CSS var | Font | Role |
|---|---|---|---|
| `font-sans` | `--font-geist-sans` | Geist Sans | Primary UI, body, headings |
| `font-mono` | `--font-geist-mono` | Geist Mono | Technical metadata, eyebrows |
| `font-display` | `--font-fraunces` | Fraunces | Loaded but NOT used for headings |
| `font-script` | `--font-caveat` | Caveat | Hero name, nav logo, script flourishes |

**Important:** `font-display` maps to Fraunces (serif) not Caveat. The alias name is misleading.
Headings use `font-sans` (Geist). Caveat is `font-script`.

# Where Each Font Is Used

## `font-script` (Caveat)
- Hero H1: "Vedant" — `text-6xl sm:text-7xl md:text-8xl font-bold leading-[0.9]`
- Nav logo: site short name + accent dot
- Projects section: "things i've made" annotation — `text-3xl -rotate-2`
- Footer: site short name signature — `text-3xl -rotate-2`
- About: name signature — `text-3xl -rotate-2`
- VisualObject: "that's me 👋" annotation — `text-sm -rotate-2`

Caveat is used exclusively for identity/personality moments. Never for body copy or navigation links.

## `font-sans` (Geist)
- All section headings: `text-4xl md:text-5xl font-semibold tracking-tight`
- Hero role subtitle: `font-light italic text-2xl sm:text-3xl md:text-4xl`
- Body copy, descriptions, bios
- Project card titles: `text-3xl font-semibold`
- Achievement headings
- Navigation links
- CTAs

## `font-mono` (Geist Mono)
- Section eyebrows: `text-[10px] uppercase tracking-[0.12em]`
- Project metadata: year, status labels, tags
- Currently section: category labels, index numbers
- Interests: domain labels, index numbers
- Footer: year, stack credits

# Fraunces Status

Fraunces is loaded via `next/font/google` for potential future use (pull quotes, editorial accents).
Currently unused in any component — `font-display` class not applied anywhere after audit cleanup.
Consider removing from `lib/fonts.ts` if no use case emerges within 2 releases to reduce font bundle size.

See [design-system](./design-system.md) for full token reference.

# Typography Scale

| Element | Size | Weight | Leading |
|---|---|---|---|
| Hero name (Caveat) | `text-6xl sm:text-7xl md:text-8xl` | `font-bold` | `leading-[0.9]` |
| Section heading | `text-4xl md:text-5xl` | `font-semibold` | `leading-none` |
| Hero role subtitle | `text-2xl sm:text-3xl md:text-4xl` | `font-light` | `leading-snug` |
| Project card title | `text-3xl` | `font-semibold` | `leading-tight` |
| Body | `text-base` | regular | `leading-relaxed` (1.65) |
| Body secondary | `text-sm` | regular | `leading-relaxed` |
| Eyebrow label | `text-[10px]` | `font-semibold` | — |
| Metadata | `text-xs` | regular | — |

Body letter-spacing: `-0.005em` globally via `body` in globals.css.
