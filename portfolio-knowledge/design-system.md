---
type: Design Specification
title: Design System
description: Core design constraints, color tokens, spacing, and visual rules for the Personal Engineering Studio portfolio.
tags: [design, tokens, colors, spacing, typography]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-02T12:19:31Z }
sources:
  - id: design-md
    resource: /DESIGN.md
    title: DESIGN.md — primary design source of truth
    author: human:vedant-io
  - id: globals-css
    resource: /app/globals.css
    title: globals.css — CSS token definitions
    author: human:vedant-io
---

# Overview

Personal Engineering Studio: warm-monochrome, editorial, technically precise.
Single accent `#547A63` (sage green). Predominantly monochrome with accent used sparingly.
Light + dark mode parity — same design system, different lighting.

Emotional target: "well-lit workshop with unmistakably good craft."

# Color Tokens

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--color-paper` | `#F7F6F2` | `#111211` | Primary background |
| `--color-paper-raised` | `#FCFBF8` | `#171917` | Elevated cards, alternating sections |
| `--color-ink` | `#171816` | `#F0EFEA` | Primary text |
| `--color-ink-soft` | `#4E504B` | `#A2A39C` | Secondary text, metadata |
| `--color-line` | `#DFDED8` | `#2C2E2B` | Borders |
| `--color-line-strong` | `#C9C8C0` | `#3D403A` | Strong borders |
| `--color-accent` | `#547A63` | `#547A63` | Brand accent |
| `--color-accent-text` | `#496B56` | `#8FB59A` | Accent text on light/dark |
| `--color-accent-dark` | `#8FB59A` | `#8FB59A` | Accessible sage on dark |
| `--color-on-accent` | `#F7F6F2` | `#111211` | Text on accent fills |
| `--color-accent-wash` | `rgba(84,122,99,0.09)` | `rgba(143,181,154,0.10)` | Tinted fills for tags/badges |

Accent rules:
- Never use accent gradients.
- Never tint every section green.
- Accent fill at 8-15% opacity for tags, badges, project thumbnail placeholders only.
- No second accent hue.

# Spacing Scale

`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128px`
Section vertical padding: `py-20 md:py-28` (standard) or `py-20 md:py-32` (spacious).

# Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-none` | `0px` | Raw edges |
| `rounded-sm` | `6px` | Small UI elements |
| `rounded` / `rounded-md` | `10px` | Default |
| `rounded-lg` | `14px` | Medium cards |
| `rounded-xl` | `18px` | Large cards |
| `rounded-2xl` | `22px` | Larger cards |
| `rounded-3xl` | `28px` | Project cards |
| `rounded-pill` | `999px` | CTAs, badges, nav links, status pills |

Shape consistency rule: pick one radius scale per component type; never mix pill CTAs with square-corner cards in same visual group.

# Shadows

| Token | Value |
|---|---|
| `shadow-card` | `0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)` |
| `shadow-card-hover` | `0 2px 6px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.08)` |
| `shadow-soft` | `0 1px 2px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.05)` |

Use cards only when elevation communicates real hierarchy. Otherwise group with `border-t`, `divide-y`, or negative space.

# Visual Constraints (Do Not)

- No gradients everywhere
- No glassmorphism
- No excessive rounded cards
- No huge "hero" typography
- No terminal-themed UI
- No excessive 3D, particles, cursor trails, WebGL
- No animated backgrounds
- No generic AI visuals
- No dashboard-style layouts
- No oversized H1 screaming

See [typography-mapping](./typography-mapping.md) for font rules and [animation-tuning](./animation-tuning.md) for motion rules.
