# Handoff: Portfolio Redesign, Projects Section & Magnification Navbar

**Date:** 2026-10-11  
**Status:** IN_PROGRESS  
**Branch:** `main`  
**Working Directory:** `/home/tarnished/Projects/Portfolio`

---

## 1. Executive Summary

This session executed a major aesthetic, structural, and behavioral overhaul of Vedant's personal portfolio website (Next.js 15, Tailwind CSS, `motion/react`, shadcn/base-nova primitives). The user rejected a previous overly cautious "engineering studio" framing that appeared dull, requiring instead a confident, polished, and exciting personal portfolio with high craft.

Key outcomes achieved in this session:
1. **Design System & Strategy Realignment:** Rewrote `DESIGN.md` and `CLAUDE.md` to establish a confident, warm editorial design language. Established `#547A63` sage accent fills (8-15%), warm paper/dark palette, and strict typography rules (Caveat display, Geist UI/body, Geist Mono metadata).
2. **Projects Section Overhaul:** Transformed generic cards into a unified, reusable `ProjectCard` system featuring 4 real projects (`Electronics.LLM`, `Atlas`, `Chatter`, `Homelab`). Implemented compact normal state with intent-driven summaries and smooth hover/focus reveal for detailed first-person technical narratives.
3. **Critical Layout Bug Resolution:** Eliminated grid row stretch bug (`align-items: stretch`) by enforcing `items-start`, preventing sibling cards from opening empty or sticking open. Replaced flakey React state tracking with reliable CSS `group-hover` and `group-focus-within` transitions.
4. **Magnification Dock Navbar:** Adapted macOS dock magnification physics from a provided component reference into the horizontal sticky header (`Nav`). Nav labels remain visible, scaling smoothly to `1.14x` with a `-2.5px` vertical spring lift based on mouse proximity, with full accessibility and `useReducedMotion` fallbacks.
5. **Quality Verification:** Verified with `npm run build` (production static prerender successful) and zero Impeccable design detector findings.

---

## 2. Environment & Technical Stack

- **Framework:** Next.js `15.3.4` (App Router, static prerendered)
- **UI & Styling:** React 19, Tailwind CSS v4, `@base-ui/react`, `@tailwindcss/postcss`
- **Animation / Motion:** `motion` (`12.18.1`) via `motion/react`
- **Icons:** `lucide-react` (`1.49.0`), `@phosphor-icons/react` (`2.1.7`)
- **Utility:** `clsx`, `tailwind-merge`, `class-variance-authority`, `cn`
- **Design Tokens:**
  - Light: `--color-paper` (`#F7F6F2`), `--color-paper-raised` (`#FCFBF8`), `--color-ink` (`#171816`), `--color-accent` (`#547A63`)
  - Dark: `--color-paper` (`#111211`), `--color-paper-raised` (`#171917`), `--color-ink` (`#F0EFEA`), `--color-accent-dark` (`#8FB59A`)
  - Fonts: Caveat (`--font-caveat`), Geist (`--font-geist-sans`), Geist Mono (`--font-geist-mono`)

---

## 3. Work Completed & File Changes

### A. Navigation Component (`components/sections/nav.tsx`)
- Adapted `MagnificationDock` physics to the horizontal navbar.
- Implemented `DockNavLink` calculating center-point delta relative to container `mouseX`.
- Dynamic spring scaling: `scale` mapped `[-110, 0, 110]` to `[1, 1.14, 1]`; vertical lift `y` mapped to `[0, -2.5, 0]`.
- Maintained visible text labels (`Work`, `Expertise`, `About`, `Contact`), brand lockup (`shortName.`), and theme toggle.
- Added accessibility guard: `useReducedMotion()` returns static links without spring transforms.

### B. Projects Section & Data Model (`types/content.ts`, `content/site.ts`, `components/sections/projects.tsx`, `components/ui/project-card.tsx`)
- Updated `Project` interface with `story: string` field.
- Configured 4 real projects:
  1. `Electronics.LLM` (RAG, agentic workflows, hardware validation, FastAPI, Next.js, MongoDB)
  2. `Atlas` (GraphRAG codebase exploration, Neo4j, 2D/3D visual mapping, Python, React)
  3. `Chatter` (1-to-1 WebSockets, presence, image sharing, multi-stage Docker, Nginx)
  4. `Homelab` (10+ containerized workloads, Linux, Traefik, Prometheus, Cloudflare Tunnels)
- Created `ProjectCard` component:
  - Header: Mono index (`#01`, etc.), year, pulse dot status badge (`Live`, `In progress`, `Running`).
  - Title: Geist semibold with accent hover transition.
  - Normal description: Crisp summary of motivation and functionality.
  - Expandable story: Hidden by default (`max-h-0 opacity-0 pointer-events-none`), reveals on `group-hover` and `group-focus-within` up to `420px` height.
  - Footer: Badge tag pill list, direct Repo / Live external links, optional verified metrics (`18s → <50ms API latency`).
- Section wrapper in `projects.tsx`: Uses `grid grid-cols-1 md:grid-cols-2 gap-6 items-start` to avoid sibling row stretching.

### C. System Design Truth (`DESIGN.md`, `CLAUDE.md`)
- Overhauled documentation to ban timid design choices.
- Documented prominent Caveat identity usage, intentional 8-15% accent tints, and low-elevation borders over heavy shadows.
- Documented rejection of fake corporate buzzwords, generic ATS optimizations, and empty portfolio templates in favor of direct, honest engineering narration.

### D. CSS Variables & Theme Configuration (`app/globals.css`, `tailwind.config.ts`)
- Preserved custom studio color tokens:
  - `--color-paper` (`#F7F6F2`), `--color-paper-raised` (`#FCFBF8`), `--color-ink` (`#171816`), `--color-ink-soft` (`#4E504B`), `--color-line` (`#DFDED8`), `--color-accent` (`#547A63`), `--color-accent-text` (`#496B56`), `--color-accent-dark` (`#8FB59A`).
- Remapped shadcn CSS variables:
  - `--background`: mapped to paper values
  - `--foreground`: mapped to ink values
  - `--border`: mapped to line values
  - `--primary`: mapped to accent `#547A63`
  - `--radius`: locked to tight `0.25rem` (avoids generic soft-pill cards).
- Configured custom scrollbar styles and accessible `:focus-visible` outlines using `--color-accent`.

---

## 4. Key Discoveries & Gotchas

1. **Grid Stretch vs Dynamic Expand:** When two cards sit side-by-side in a CSS Grid row, default `align-items: stretch` forces the unexpanded sibling to match the height of the expanded sibling. Adding `items-start` on the grid container isolates height changes.
2. **Hover State Flakiness:** Combining React state (`isHovered`) with layout transitions on adjacent cards causes state de-synchronization when cursor moves across boundaries. Moving expansion to CSS class selectors (`group-hover:max-h-[420px] group-hover:opacity-100`) ensures immediate teardown on mouse leave.
3. **Motion Package Naming:** Project uses `motion/react` directly rather than legacy `framer-motion` imports.
4. **Magnification Physics Tuning:** Horizontal dock magnification on textual links requires tighter proximity bounds (`MAGNIFY_DISTANCE = 110px`) than vertical macOS icon docks (`200px+`) to prevent excessive jitter across tight typography. The spring parameters `{ mass: 0.1, stiffness: 180, damping: 14 }` give snappy feedback without overshoot.
5. **No Label Hiding:** Tooltip-based icon docks destroy portfolio wayfinding. Retaining clear text labels (`Work`, `Expertise`, `About`, `Contact`) while magnifying scale and vertical offset preserves instant readability.

---

## 5. Verification & Test Evidence

- `npm run build`: Compiled with 0 errors. Prerendered `/` and `/_not-found` statically.
- Impeccable Design Detector: Ran `/home/tarnished/.claude/plugins/cache/impeccable/impeccable/4.4.0/skills/impeccable/scripts/impeccable detect --json` on modified UI files; returned `[]` (0 issues).
- Local Dev Server: Tested on port 3000. Verified scroll behavior, dark/light theme switching, and smooth card expansion.

---

## 6. Open Items & Next Steps

1. Verify live browser interaction across screen sizes (mobile breakpoint check on dock navbar).
2. Connect real repository URLs in `content/site.ts` (currently `https://github.com/vedant-io/...` placeholders where not live).
3. Finalize image/diagram preview integration in project cards if visual assets become available.
4. Verify other page sections (`Expertise`, `Currently`, `Achievements`) maintain visual harmony with the newly updated project cards.

---

## 7. User Requirements Captured

### Portfolio direction

The user explicitly rejected framing the site as an abstract "personal engineering studio" product. The site is a personal portfolio. It should feel exciting, modern, personal, and visually polished. Technical depth should come from authentic project descriptions, not from labels or corporate language.

### Projects interaction

The user asked for all project cards to stay visually consistent. Repetition is acceptable and intentional. They wanted most text hidden in the default state, with fuller detail visible when hovering a card. The user also required that the expanded state remain standalone and concise, not become a full case study.

The user explicitly rejected visible words or labels such as `Intent` and `Output`. The story should read naturally in first person. Normal state should show enough information to avoid feeling empty: project title, short explanation of why it exists / what it does, metadata, tags, and available links. Expanded state adds the longer supplied narrative.

### Exact project source material

The user provided the following factual source context. It is the authority for project copy:

- **Electronics.LLM:** Built to learn RAG and agentic AI pipelines while helping electronics students who typically copy-paste Arduino/ESP32 code without understanding it. Uses AI agents with retrieval-augmented generation to enforce structured learning: interactive modules, quiz gates, project-tailored code and wiring generation, and mentor progress tracking.
- **Chatter:** Built to get hands-on experience with WebSockets, full-stack state management, and containerization. 1-to-1 chat with real-time messaging, online presence, photo sharing, multi-stage Docker builds, and Nginx.
- **Homelab:** Built to understand project deployment, service management, Docker, reverse proxies, and monitoring on modest hardware while managing multiple services.
- **Atlas:** Built to understand why naive codebase RAG misses architectural relationships. Explores entities as nodes, dependencies as edges, graph context for LLMs, polyglot codebase mapping, 2D/3D visual mapping, blast-radius checks, and automated code edits.

### Navbar source material

The user supplied a `MagnificationDock` reference implementation. They asked for its interaction ideas — fluid hover response, spring physics, and subtle movement — adapted into the existing horizontal top navbar. They explicitly required preserving visible text labels and existing navigation function. No icon-only navigation, bottom dock, or hidden labels.

Existing navbar destinations:
- `Work` → `#projects`
- `Expertise` → `#expertise`
- `About` → `#about`
- `Contact` → `#contact`
- Theme toggle remains on right.

---

## 8. Chronological Session Record

1. Existing project was audited. It is a Next.js App Router portfolio with custom warm paper / ink / sage tokens and placeholder content in the earliest state.
2. Reference website `acharyashailesh.com.np` was inspected for editorial rhythm, section hierarchy, personal greeting, and richer portfolio composition.
3. shadcn was initialized with `base-nova` and `@base-ui/react`. Studio CSS tokens were preserved and shadcn semantic variables were remapped.
4. `DESIGN.md` received a full rewrite. New design psychology centered on confidence through contrast, expressive Caveat type, accent tint surfaces, and editorial hierarchy.
5. `CLAUDE.md` received updates to project vision, personality, and Caveat usage.
6. Project cards were redesigned as reusable `ProjectCard` components. Initial React hover state caused sibling-card stretch and stale expanded appearance.
7. Grid `items-start` isolated card heights. CSS `group-hover` and `group-focus-within` replaced React hover state, fixing teardown when pointer exits.
8. User requested stronger normal-state descriptions and simpler section heading. `Selected Work` became `Software & Systems`; `hover to expand` helper text was later removed in favor of uncluttered presentation; section heading became `Things I've built`.
9. Four project records and longer `story` fields were added to `content/site.ts`; `Project` interface was extended.
10. User then requested navbar refinement using MagnificationDock principles. `nav.tsx` now tracks pointer x-position and applies spring scale/lift to links.
11. Production builds and Impeccable detector passed after each major UI change.
12. This handoff and next-session execution plan were written in the repository root.

---

## 9. Important Current Source Shapes

### `Project` interface

Current required fields: `number`, `title`, `description`, `story`, `tags`, `year`. Optional fields: `status`, `github`, `live`, `note`, `metric`, `tone`.

### Project card default state

Visible: metadata header, title, richer short description, technology tags, available links, metric. Hidden: `story` narrative.

### Project card expanded state

CSS target selectors:
- `.group-hover:max-h-[420px]`
- `.group-hover:opacity-100`
- `.group-hover:pointer-events-auto`
- matching `.group-focus-within:*` selectors.

Card uses `tabIndex={0}` and `aria-label` for keyboard discoverability. External links stop click propagation.

### Navbar animation

`DockNavLink` owns one link's transforms. Parent `nav` updates shared `mouseX`; link reads element bounds. Reduced motion returns a plain `Link`. Desktop interaction uses `MAGNIFY_DISTANCE = 110`, spring `{ mass: 0.1, stiffness: 180, damping: 14 }`.

---

## 10. Files Touched During Broader Work

The working tree contains modifications beyond the two latest feature files. Inspect `git status --short` before committing. Known modified paths include:

- `.gitignore`
- `app/layout.tsx`
- `app/page.tsx`
- `components/sections/about.tsx`
- `components/sections/achievements.tsx`
- `components/sections/currently.tsx`
- `components/sections/footer.tsx`
- `components/sections/hero.tsx`
- `components/sections/interests.tsx`
- `components/sections/nav.tsx`
- `components/sections/notes.tsx`
- `components/sections/projects.tsx`
- `components/theme-toggle.tsx`
- `components/ui/reveal.tsx`
- `components/visual-object.tsx`
- `content/site.ts`
- `lib/motion.ts`
- `types/content.ts`
- `components/ui/project-card.tsx` (new)
- `.impeccable/review/*` (generated visual review captures)
- `portfolio-knowledge/` (untracked project knowledge files)

Do not blindly discard unrelated modifications. Determine whether generated review images and `portfolio-knowledge/` belong in the next commit or should remain untracked.

---

## 11. Constraints for Next Session

- Read this handoff and paired plan before exploration.
- Do not reset or overwrite user work.
- Do not invent project claims, metrics, repository links, screenshots, or assets.
- Keep project cards consistent; do not revert to alternating card layouts.
- Do not add visible `Intent`, `Output`, `Outcome`, `Problem`, or `Solution` labels.
- Keep text navigation labels visible in navbar.
- Preserve `prefers-reduced-motion`, keyboard focus, semantic links, and mobile usability.
- Use `motion/react`, not `framer-motion` imports, unless dependency direction changes explicitly.
- Keep studio color tokens and shadcn mappings aligned with `DESIGN.md`.
- Run build and Impeccable detector after UI edits.

