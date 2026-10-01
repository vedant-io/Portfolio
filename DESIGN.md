---
version: "alpha"
name: "Vedant — Personal Engineering Studio"
description: "A calm, warm, understated personal engineering studio for a builder who works across software, AI, systems, infrastructure, and electronics."
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
    fontSize: "3.5rem"
    fontWeight: "500"
    lineHeight: "0.98"
    letterSpacing: "-0.03em"
  h1:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: "600"
    lineHeight: "1.1"
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "Caveat, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: "500"
    lineHeight: "1.15"
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
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
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: "0.09em"
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
    typography: "{typography.h1}"
    rounded: "{rounded.none}"
    padding: "0"
  hero-accent-title:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "0"
  section-label:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0"
  project-entry:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "24px 0"
  project-entry-hover:
    textColor: "{colors.accent-light-text}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
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
    rounded: "{rounded.pill}"
    padding: "6px 9px"
  visual-object:
    textColor: "{colors.accent}"
    rounded: "{rounded.none}"
    size: "160px"
    padding: "0"
---

## Overview

### Design identity

This is a **personal engineering studio**: calm, warm, precise, curious, and quietly confident.

The site belongs to a builder who likes understanding how things work, building them, testing them, breaking them, debugging them, and trying again. He knows the fundamentals and also knows how to use modern tools—especially LLMs and AI agents—as leverage rather than as a substitute for understanding.

The visual language should communicate that attitude without announcing it. The site should feel like a carefully kept workspace, not a marketing page and not a developer-theme showcase.

The closest mental reference is:

> **A contemporary independent design studio notebook for an engineer.**
>
> Think warm paper, precise typesetting, small technical annotations, restrained geometry, thoughtful whitespace, and objects that look designed rather than decorated.

Do not interpret “engineering” as a command to add terminal windows, code rain, neon gradients, circuit-board backgrounds, 3D cubes, particle fields, or stereotypical hacker imagery.

Do not interpret “personal” as a command to add excessive biography, motivational slogans, forced humor, or visual novelty.

### Emotional target

The visitor should feel:

1. **At ease** — the interface does not demand attention.
2. **Curious** — the work invites exploration.
3. **Trustful** — the visual system is consistent and considered.
4. **Interested in the person** — personality appears through choices and writing, not gimmicks.
5. **Confident in the craft** — the work feels deliberate without being self-congratulatory.

The design is understated first. Personality is revealed through typography, composition, copy, project details, and small interactions.

### Design psychology / rationale

This document intentionally uses a specific world rather than a loose adjective list. A concrete visual reference gives an AI agent more useful constraints than words such as “modern”, “premium”, or “clean” alone. The DESIGN.md project explicitly recommends concrete references and negative constraints because they narrow the generation space and preserve intent across agents.

The restrained hierarchy is also intentional: reduce simultaneous visual competition, establish clear grouping, and keep the number of interactive decisions small. Visual consistency and perceived usability are related in human-computer interaction research; this design therefore favors coherence over ornamental complexity.

Useful references:

- Google Labs Code — DESIGN.md philosophy: https://github.com/google-labs-code/design.md/blob/main/PHILOSOPHY.md
- Google Labs Code — DESIGN.md specification: https://github.com/google-labs-code/design.md/blob/main/docs/spec.md
- Nielsen Norman Group — Aesthetic-Usability Effect: https://www.nngroup.com/articles/aesthetic-usability-effect/

### Content philosophy

The website is not a sales pitch. Copy must sound like a real engineer describing what he is doing.

Prefer:

- direct statements
- concrete descriptions
- first-person language when useful
- specific technical details
- honest descriptions of tradeoffs, limitations, and lessons
- curiosity over self-promotion

Avoid:

- “passionate”, “results-driven”, “innovative”, “world-class”, “rockstar”, “10x”, “cutting-edge” unless the user deliberately supplies the language
- empty claims about scalability or impact without evidence
- recruiter-facing language such as “why hire me” or “I can help your company…”
- exaggerated claims about AI expertise
- pretending every project was successful or production-ready

Do not invent project metrics, technologies, outcomes, dates, employers, clients, or responsibilities. Unknown content should remain a placeholder or be omitted.

### Content hierarchy

The homepage should answer, in order:

**Who am I? → What am I building? → What am I currently curious about? → What else can I explore? → How do I reach you?**

The site should not become a résumé rendered as HTML.

### Preferred implementation context

The visual design is framework-agnostic, but the preferred implementation is:

- Next.js
- TypeScript
- Tailwind CSS or equivalent token-driven CSS
- MDX for technical notes when needed
- Static-first deployment
- No database or backend unless a later feature genuinely requires one

Avoid introducing a UI component library that overrides the design language. Components should be small, composable, and local to the site.

---

## Colors

The palette is intentionally small: warm neutrals provide the environment; sage green is the single expressive accent. The interface should feel closer to paper and ink than a dashboard.

### Light mode

- **Paper (`#F7F6F2`)** — primary page background. Warm off-white; never replace it with pure white globally.
- **Paper Raised (`#FCFBF8`)** — optional slightly lighter surface for rare elevated areas. Use sparingly.
- **Ink (`#171816`)** — primary text, headings, and high-emphasis content.
- **Ink Soft (`#4E504B`)** — secondary text, descriptions, metadata where stronger than muted captions is needed.
- **Line (`#DFDED8`)** — primary borders and dividers.
- **Line Strong (`#C9C8C0`)** — interaction borders or stronger separation only when needed.
- **Accent (`#547A63`)** — canonical brand accent. Use for visual marks, rules, icons, indicators, and large text where contrast permits.
- **Accent Light Text (`#496B56`)** — darkened sage for small interactive text on light backgrounds.

### Dark mode

Dark mode is the same design, not a separate visual identity. It should feel like the same studio later in the day.

- **Dark (`#111211`)** — primary background.
- **Dark Raised (`#171917`)** — rare elevated surface.
- **Light text** — use a soft off-white rather than pure white.
- **Dark Ink Soft (`#A2A39C`)** — secondary text and metadata.
- **Dark Line (`#2C2E2B`)** — dividers and borders.
- **Accent Dark (`#8FB59A`)** — accessible lighter sage for small text and interactive elements on dark backgrounds.

### Accent rules

`#547A63` is the canonical identity color and must remain recognizable across the site.

Do not introduce a second accent hue without explicit approval.

Do not use the accent as a large background fill except for a genuinely meaningful control or visual object. The accent is a signal, not wallpaper.

Do not use gradients involving the accent.

Do not use rainbow or multi-accent palettes.

Do not tint every section green.

Do not use the accent for normal body text when the contrast is insufficient. Use the semantic darker/lighter accent token where required.

### Contrast

Accessibility takes precedence over literal reuse of a brand token. Small text must satisfy WCAG AA contrast requirements against its actual background. Use the semantic accent text variants when the canonical accent does not provide enough contrast.

Do not solve contrast problems by adding shadows or outlines to text.

---

## Typography

Typography is one of the primary personality carriers.

### Font roles

**Caveat** is the human layer: playful, sophisticated, slightly expressive, and warm. Use it selectively.

**Geist** is the engineering layer: modern, clean, precise, and quiet. It is the default interface and reading face.

**Geist Mono** is metadata only. It provides technical texture without turning the site into a terminal.

Do not use more than these three families unless explicitly required.

### Usage rules

Use Caveat for:

- the occasional personal statement
- short expressive headings
- select project titles where a human touch improves the composition
- small moments of emphasis

Use Geist for:

- navigation
- body copy
- project descriptions
- headings that need technical clarity
- buttons and links
- labels

Use Geist Mono for:

- year
- status
- stack labels
- version-like information
- small technical annotations

Never use monospace for paragraphs.

Never make the whole site serif.

Never use all-caps for large headlines.

All-caps labels are acceptable only at small sizes and with restrained letter spacing.

### Scale and rhythm

Typography is intentionally small-to-medium. Large display text is an exception, not the default.

Desktop target range:

- small navigation: ~14px
- metadata: ~12px
- section labels: ~11px
- body: ~16px
- comfortable reading text: ~17px
- project headings: ~24px
- page heading: ~36px
- expressive display: ~56px maximum, used sparingly

At smaller breakpoints, reduce display sizes rather than letting text dominate the viewport.

### Line length

Long-form text should generally stay around 55–75 characters per line. Use a reading column around 620–700px rather than stretching prose across the entire desktop canvas.

### Typography behavior

Headings should have tight tracking and compact line height.

Body copy should have comfortable line height and normal tracking.

Avoid aggressive optical sizing, exaggerated letter spacing, text outlines, gradient text, or animated text effects.

---

## Layout

The layout should feel editorial and engineered at the same time: a stable grid with small moments of asymmetry.

### Canvas

- maximum content width: approximately 1160px
- desktop side gutter: approximately 40px
- tablet side gutter: approximately 28px
- mobile side gutter: 20px
- reading width: approximately 640–700px

The exact CSS can adapt by viewport, but the perceived proportions must remain consistent.

### Grid

Desktop: 12-column grid with generous gutters.

Tablet: 6-column adaptation.

Mobile: 4-column or simplified single-column flow.

Do not force every section to occupy all columns.

Use the grid to create hierarchy and whitespace, not to create dashboard-like density.

### Vertical rhythm

Major sections should feel separated by roughly 64–128px depending on viewport and importance.

Related content should usually sit within 16–40px.

Use the spacing scale; do not invent dozens of one-off values.

### Homepage structure

The intended initial information architecture is:

1. **Navigation** — name, primary anchors, external links.
2. **Hero** — understated identity statement + short introduction + simple visual object.
3. **Currently** — a lightweight snapshot of what the user is learning, building, or exploring now.
4. **Projects** — primary proof of craft. Project selection is deliberately content-driven and can change later.
5. **Interests** — the areas the user genuinely enjoys exploring.
6. **About** — concise personal context and engineering philosophy.
7. **Notes** — optional technical writing / learning archive.
8. **Footer** — direct contact and external links.

Do not add sections merely because a portfolio template normally contains them.

### Hero composition

The hero should be visually balanced, not dramatic.

Target pattern:

- left: understated text identity
- right: simple visual object
- generous empty space around both
- no full-viewport marketing statement
- no giant text filling the first screen

On mobile, stack the text above the object and reduce the object's footprint.

### Responsive behavior

Responsive design is not “desktop squeezed into mobile”. Recompose the hierarchy when necessary.

On mobile:

- navigation becomes minimal and touch-friendly
- hero text remains readable without excessive wrapping
- visual object may move below the hero text
- project entries become one-column
- metadata wraps naturally
- no horizontal scrolling

Do not hide meaningful content just to make mobile look cleaner.

### Anchors and navigation

Use simple, descriptive labels such as `Projects`, `About`, and `Notes`.

Avoid novelty labels that require interpretation.

External links should clearly indicate they leave the site, preferably with a small `↗` treatment.

---

## Elevation & Depth

This is a low-elevation design.

Prefer:

- borders
- whitespace
- tonal differences
- composition

over:

- shadows
- glassmorphism
- blur-heavy surfaces
- floating cards

Most sections should appear to sit directly on the page canvas.

### Shadows

Default: none.

Use a very subtle shadow only when a control genuinely needs separation from the background. Never use large soft shadows around project cards.

### Surfaces

Cards are not the default container primitive. A project should usually read as an editorial entry with a divider, image, or open composition.

Use a raised surface only when there is a clear semantic reason.

---

## Shapes

The visual geometry is mostly crisp with restrained softness.

Default border radius: `0–4px`.

Use `8px` only for controls or small interactive surfaces where it improves usability.

Use pill shapes only for compact status indicators, not for major buttons, navigation, or decorative chips.

Do not create a page made of rounded rectangles.

Do not use giant 24–32px radius values as the dominant shape language.

The visual object should be geometric, modular, and slightly organic through proportion rather than curves everywhere.

### Simple visual object

The hero includes one small visual object that symbolizes **building from smaller parts**.

It should be:

- abstract rather than literal
- 2–4 simple geometric components
- primarily monochrome with restrained sage usage
- flat or lightly dimensional, not full 3D
- approximately 120–180px on desktop
- rendered efficiently, preferably inline SVG or CSS geometry
- understandable as a composition rather than an illustration

The object can suggest:

- modules fitting together
- a small system diagram
- an assembled mechanism
- layers/components interacting

It must not depict:

- a robot
- a glowing AI brain
- a laptop
- a circuit-board cliché
- code brackets as decoration
- a spinning cube
- a generic abstract blob

### Object interaction

Default state: calm and mostly static.

Optional interaction: a very small pointer-responsive translation/parallax or component shift, capped so the object moves only a few pixels.

Interaction must stop or simplify for users who request reduced motion.

---

## Components

Components should feel like parts of one studio, not a collection of unrelated UI widgets.

### Navigation

Purpose: orientation, not decoration.

Structure:

`VEDANT` on one side; `Projects`, `About`, `Notes` and selected external links on the other.

Keep it visually light. No oversized sticky header.

A theme toggle is acceptable but should be compact and understandable.

### Hero

Purpose: immediate identity and tone.

Content should remain concise. Do not fill the hero with skills, metrics, or a résumé summary.

Use one short identity statement, one supporting paragraph, location or contextual metadata if useful, and the visual object.

### Section header

Use a tiny label such as:

`PROJECTS`

plus a subtle index such as `01` when useful.

The section header should establish location in the page without becoming decorative chrome.

### Currently

Purpose: make the site feel alive.

Preferred structure:

- learning
- building
- exploring

Each can have one short value. Do not turn this into a task manager or progress dashboard.

### Project entry

Projects are the primary content unit, but their exact number and visual treatment are intentionally undecided until the user chooses the work to showcase.

Default entry should support:

- project number
- project name
- one-sentence description
- technical metadata
- optional status/year
- optional visual
- external link

Prefer open layouts over boxed cards.

Project presentation may alternate composition between entries so the page feels authored rather than templated.

### Project detail

A project detail page should document the work rather than market it.

Recommended narrative order when information exists:

`Context → Problem → Approach → Architecture → Important technical decisions → What broke → What changed → Result → What I learned → Links`

Do not force every project to have every section.

Never fabricate metrics or “impact”.

### Interests

Show real areas of curiosity rather than a technology inventory.

Examples of categories, not fixed copy:

`Systems · AI · Infrastructure · Developer Tools · Electronics · Distributed Systems`

Do not use skill bars, percentage proficiency, logos of every framework, or “beginner/intermediate/expert” ratings.

### About

Keep it human and concise.

The section may mention the user's path from electronics into software, interest in systems and AI, and preference for learning by building, but the final copy must be supplied or approved by the user rather than invented by the agent.

### Notes

Notes are optional. They should feel like a technical notebook, not an SEO content farm.

Useful note types:

- debugging writeups
- architecture explanations
- build logs
- experiments
- lessons learned
- focused technical investigations

A note may be small. Do not demand every note look like a polished essay.

### Links

Prefer text links with clear labels.

Use `↗` to indicate an external destination.

Avoid oversized CTA buttons unless an action genuinely benefits from button treatment.

### Theme toggle

Support light and dark themes without changing layout, typography, or hierarchy.

Respect the user's system preference by default and persist the explicit user choice.

---

## Do's and Don'ts

### Do

- Build around restraint.
- Use the warm paper background as the visual environment.
- Use `#547A63` as the recognizable accent family.
- Pair Fraunces with Geist so human warmth and technical precision coexist.
- Use whitespace as an active design element.
- Use thin rules and small metadata to add structure.
- Let projects carry most of the proof.
- Allow honest discussion of failed or abandoned work when the content warrants it.
- Keep animation subtle and purposeful.
- Prefer real screenshots, diagrams, terminal output, architecture drawings, or project artifacts over generic illustrations.
- Keep the visual object small and meaningful.
- Make accessibility part of implementation, not a cleanup step.
- Preserve the system across pages, breakpoints, and future content additions.

### Don't

- Do not make the site look like a SaaS landing page.
- Do not use dark mode as pure black + neon.
- Do not use neon gradients, glow effects, glassmorphism, or excessive blur.
- Do not add particles, star fields, cursor trails, floating 3D objects, or scroll hijacking.
- Do not use huge hero typography by default.
- Do not put every project in an identical card.
- Do not use giant rounded corners everywhere.
- Do not turn the site into a terminal emulator.
- Do not add a “skills” wall with logos or percentages.
- Do not use motivational slogans or startup-style marketing copy.
- Do not invent credentials, metrics, project outcomes, or technical details.
- Do not add UI sections solely because they are common on portfolio templates.
- Do not sacrifice readability for aesthetics.
- Do not introduce a second accent hue.
- Do not add animation merely because a library makes it easy.

### Agent decision rules

When a future design decision is not explicitly specified, follow this priority order:

1. Preserve the overall identity: **calm, warm, understated, curious, precise**.
2. Prefer the simplest solution that expresses the content clearly.
3. Prefer typography, spacing, alignment, and borders over decorative effects.
4. Use the existing tokens before creating new ones.
5. Reuse an existing component pattern before inventing a new visual primitive.
6. Preserve responsive behavior and accessibility.
7. If content is unknown, leave it structurally open rather than inventing facts.
8. When two solutions are equally valid, choose the quieter one.

### Final quality test

Before considering a page complete, verify:

- Does it feel calm within the first few seconds?
- Does the visual hierarchy work without animation?
- Is the accent visible but restrained?
- Does the serif/sans pairing feel intentional rather than ornamental?
- Does the page feel like one person's studio rather than a template?
- Is there enough whitespace to breathe without becoming empty?
- Can a visitor understand what the page is about without decoding design tricks?
- Does every decorative element have a reason to exist?
- Does light mode and dark mode feel like the same place?
- Does mobile preserve the personality rather than simply shrinking desktop?
- Has anything been added because “portfolios usually have it” rather than because it belongs here?

If the answer to the last question is yes, remove it.
