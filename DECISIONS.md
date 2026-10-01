# Architectural Decision Log

1. **2026-10-01 - Content Strategy**: Hardcode content via typed local `.ts` files rather than CMS or MDX for v1.
   - *Reason*: Eliminates backend infrastructure per CLAUDE.md §4 and keeps the codebase simple, fast, and maintainable.
   - *Alternatives*: Full MDX compilation or headless CMS.
   - *Consequence*: Content updates require code changes in `content/site.ts`, matching the engineering studio notebook philosophy.

2. **2026-10-01 - CSS & Token Architecture**: Tailwind CSS v4 with custom design tokens mapped in `globals.css`.
   - *Reason*: Strictly enforces the paper-and-ink palette (`#F7F6F2`, `#171816`, `#547A63`) for light and dark modes with zero runtime layout shift.
   - *Alternatives*: Vanilla CSS modules, generic UI kit.
   - *Consequence*: Pure token fidelity to `DESIGN.md`.

3. **2026-10-01 - Visual Object Implementation**: Inline SVG with `motion/react` spring physics.
   - *Reason*: Fulfills "things built from smaller things" concept without heavy 3D WebGL runtimes. Fully respects `prefers-reduced-motion`.
   - *Alternatives*: Three.js canvas or static PNG.
   - *Consequence*: Zero external 3D bundle weight, responsive across viewports.

4. **2026-10-01 - Icon Strategy**: Clean inline SVG paths for ThemeToggle and unicode `↗` for external links.
   - *Reason*: Avoids server/client hydration boundary mismatches in Next.js 15 App Router with React 19.
   - *Alternatives*: Heavy icon font or runtime icon imports.
   - *Consequence*: Completely zero client bundle footprint for icons.
