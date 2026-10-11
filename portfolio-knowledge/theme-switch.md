---
type: Engineering Decision
title: Theme Switch
description: Custom ThemeProvider implementation, dark/light/system behavior, known FOUC risk, and next-themes migration consideration.
tags: [theme, dark-mode, hydration, next-themes]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-02T12:19:31Z }
sources:
  - id: theme-provider
    resource: /components/theme-provider.tsx
    title: theme-provider.tsx — custom implementation
  - id: theme-toggle
    resource: /components/theme-toggle.tsx
    title: theme-toggle.tsx — toggle button component
  - id: package-json
    resource: /package.json
    title: package.json — dependency manifest
  - id: globals-css
    resource: /app/globals.css
    title: globals.css — CSS variable swap under .dark
---

# Overview

Custom `ThemeProvider` built with React context + `useState` + `useEffect`.
Supports three modes: `light`, `dark`, `system` (respects `prefers-color-scheme`).
`next-themes` is installed (`package.json`) but not used — custom provider written instead.

# Storage

Theme persisted to `localStorage` under key `"studio-theme"`.
On mount: reads `localStorage` and sets state. Guards against `localStorage` unavailability (try/catch).

# DOM Mechanism

Resolved theme applied by toggling `dark` class on `document.documentElement`.
CSS variables under `.dark {}` in `globals.css` swap all color tokens.
Tailwind `darkMode: "class"` in `tailwind.config.ts` — `dark:` utilities depend on `.dark` on `<html>`.

# Known FOUC Risk

Initial server render: `useState<Theme>("system")` + `useState<"light"|"dark">("light")`.
Server always renders light-mode HTML. Client corrects in first `useEffect`.
Result: dark-mode users see a brief flash-of-light before React hydrates.

`suppressHydrationWarning` on `<html>` in `app/layout.tsx` suppresses the React mismatch warning but does not eliminate the visual flash.

`next-themes` solves this with an inline `<script>` that sets the class before React hydrates — zero flash.

# Migration Consideration

`next-themes` is already in `package.json` (installed, unused).
Migration is a 1-file swap: replace custom `ThemeProvider` with `next-themes` `ThemeProvider`.
Blocker: none. Deferred because current FOUC is low-visibility (brief, only on dark system preference + cold load).

Priority: LOW — fix before production launch to avoid first-impression flash.

# ThemeToggle

`components/theme-toggle.tsx` — simple button, shows sun (light) or moon (dark) SVG icon.
Uses `mounted` state guard to avoid SSR hydration mismatch on the icon.
Shape: `rounded-pill` — matches nav link shape (consistency fix applied 2026-10-02).
No animation on icon swap — intentional; keep toggle lightweight.

# Color Tokens (Dark Mode)

See [design-system](./design-system.md) for full dark mode color token table.
The `.dark` class swaps `--color-paper`, `--color-ink`, `--color-line`, `--color-accent-text`, and `--color-on-accent`.
`--color-accent` (`#547A63`) is the same value in both modes — the accent does not shift under dark mode.
`--color-accent-text` in dark mode → `#8FB59A` (lighter sage, accessible on dark backgrounds).
