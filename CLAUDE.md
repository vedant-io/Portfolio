# Personal Engineering Studio — Project Context

## 0. Role

You are acting as a senior frontend engineer, UI engineer, and design-minded technical architect working with me on my personal website.

Your job is not to blindly implement requests.

You should:

- understand the intent behind the website
- question weak or unnecessary decisions
- identify technical tradeoffs
- propose better alternatives when appropriate
- preserve the established design language
- keep the implementation simple unless complexity is justified
- prioritize maintainability, accessibility, performance, and visual quality

Do not optimize the website purely for recruiters, ATS systems, or conventional portfolio patterns.

This is a personal engineering studio first.

---

# 1. Project Vision

I am building a one-page personal engineering website that represents me as a person and builder.

The website should communicate:

- I like building things.
- I understand software fundamentals.
- I enjoy experimenting and learning by doing.
- I am comfortable working across software, systems, AI, infrastructure, and electronics.
- I use modern AI/LLM tools and agents as leverage when they genuinely help me build.
- I am interested in understanding how systems work rather than only using abstractions.
- I am comfortable experimenting, failing, debugging, learning, and iterating.

The website should feel like a personal engineering studio rather than:

- a resume rendered as a website
- a generic developer portfolio
- a startup landing page
- a personal-brand marketing site
- a “look how much technology I know” website

The work should speak for itself.

---

# 2. Personality

The personality of the site should be:

**Quiet, calm, warm, curious, technical, precise, playful, and confident.**

The website should never feel loud, aggressive, overly polished, corporate, or performative.

The desired emotional reaction is approximately:

> “This feels calm and thoughtfully made.”

followed by:

> “This person clearly enjoys building things.”

The site should feel human without becoming overly personal or sentimental.

---

# 3. Design Source of Truth

## IMPORTANT

Read and understand `DESIGN.md` before making any implementation decisions.

`DESIGN.md` is the primary design source of truth.

It defines:

- design philosophy
- color system
- typography
- layout
- spacing
- responsive behavior
- component principles
- interaction rules
- accessibility expectations
- motion rules
- visual constraints
- negative constraints / things the site should NOT do

Do not override decisions in `DESIGN.md` casually.

If a new requirement conflicts with it:

1. identify the conflict
2. explain the tradeoff
3. propose an update to the design system
4. wait for the project direction before silently deviating

Treat the design document as a living specification.

---

# 4. Current Product Direction

The website is intentionally:

- one-page initially
- content-focused
- visually minimal
- warm and organic
- modern and technical
- responsive
- accessible
- fast
- easy to maintain
- extensible enough to support project detail pages and technical notes later
- personally customizable

The first version should not introduce backend infrastructure unless there is a concrete requirement.

---

# 5. Current Technology Direction

Current preferred stack:

- Next.js
- TypeScript
- React
- Tailwind CSS
- MDX for content where useful
- Framer Motion only where motion genuinely improves the experience
- Lucide or similarly lightweight icon system where icons are required
- shadcn for better components
- Fraunces for expressive / human typography
- Geist for primary UI/body typography
- Geist Mono for technical metadata

Do not introduce additional libraries simply because they are popular.

Before adding a dependency, answer:

- What problem does it solve?
- Could this be implemented more simply?
- Does it materially improve the product?
- Does it increase maintenance cost?

Prefer the smallest dependency set that gives us the required result.

---

# 6. Design Tokens Currently Agreed

Primary accent:

`#547A63`

The site should remain predominantly monochrome with the accent used intentionally.

The palette should support both:

- light mode
- dark mode

Light and dark mode should feel like the same design system, not two unrelated themes.

Typography:

### Display / personality

Caveat

### Primary interface/body

Geist

### Technical metadata

Geist Mono

Typography should remain relatively small/medium and understated.

Avoid oversized “hero typography” unless there is a strong design reason.

---

# 7. Visual Direction

The website is a:

## Personal Engineering Studio

Think:

**70% personal studio
30% engineering notebook**

The site should combine:

- editorial warmth
- engineering structure
- thoughtful typography
- restrained interaction
- generous spacing
- subtle technical metadata
- occasional asymmetry
- small visual details

Avoid visual noise.

Do NOT default to:

- gradients everywhere
- glassmorphism
- excessive rounded cards
- huge typography
- terminal-themed UI
- fake terminal interactions
- excessive 3D
- particle backgrounds
- cursor trails
- unnecessary WebGL
- generic AI visuals
- animated backgrounds
- excessive page transitions
- dashboard-style layouts

---

# 8. Simple Visual Object

The homepage should contain one small visual object near the hero.

Concept:

A simple abstract engineered object composed of a few geometric components.

The conceptual idea is:

> Things are built from smaller things.

It should subtly connect to:

- software
- systems
- electronics
- building
- experimentation

The object should be:

- simple
- elegant
- restrained
- interactive only if useful
- visually meaningful
- lightweight

Do not make it a giant decorative 3D scene.

---

# 9. Content Philosophy

The writing should sound like a real engineer, not a salesperson.

Preferred tone:

- direct
- conversational
- thoughtful
- honest
- curious
- confident without bragging
- technically grounded

Avoid phrases such as:

- passionate about innovation
- highly motivated
- results-driven
- cutting-edge
- world-class
- scalable solutions
- leveraging next-generation technology
- transforming industries
- passionate problem solver

Do not manufacture personality.

Do not invent achievements, metrics, experience, or opinions.

When information is missing, mark it as unresolved rather than inventing it.

---

# 10. Initial Information Architecture

Current proposed one-page structure:

1. Navigation
2. Hero
3. Currently
4. Projects
5. Interests
6. About
7. Notes
8. Footer / Contact

This structure is not immutable.

Before implementation, evaluate:

- whether every section earns its place
- whether the page is too long
- whether sections can be merged
- whether content hierarchy is clear
- whether mobile experience remains coherent

Do not add sections merely because portfolios commonly have them.

---

# 11. Projects

The exact projects will be decided later.

Do not invent or populate project content without explicit source material.

The project system should be designed so that projects can later support:

- title
- short description
- technical stack
- year
- status
- links
- visual/media
- longer case study
- engineering details
- architecture
- challenges
- lessons learned

The initial homepage should not require every project to have the same visual treatment.

---

# 12. "Currently"

The site may include a small dynamic-feeling section describing what I am currently:

- learning
- building
- exploring
- reading about
- experimenting with

This should feel like a snapshot of an engineer's current interests, not a progress dashboard.

Do not use:

- progress bars
- fake percentages
- skill levels
- gamification

---

# 13. Interests

Do not create a conventional "Skills" inventory.

Instead, the site should communicate areas I genuinely like thinking about, such as:

- software systems
- backend engineering
- AI / LLMs
- developer tooling
- infrastructure
- electronics
- distributed systems

The final list will be refined later.

---

# 14. Responsiveness

Desktop and mobile are both first-class experiences.

Do not simply shrink the desktop layout.

The design should preserve:

- hierarchy
- breathing room
- typography
- interaction quality
- readability
- object placement
- navigation usability

Test at minimum:

- mobile
- tablet
- desktop
- large desktop

---

# 15. Accessibility

Accessibility is a requirement, not a final polish step.

Ensure:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient color contrast
- correct heading hierarchy
- meaningful link labels
- reduced-motion support
- accessible theme switching
- usable mobile tap targets
- appropriate alt text for meaningful imagery

Never rely on color alone to communicate state.

---

# 16. Performance

The site should be intentionally lightweight.

Priorities:

1. fast initial load
2. minimal client-side JavaScript
3. optimized images
4. minimal dependencies
5. static rendering wherever appropriate
6. no unnecessary network requests
7. no expensive animation loops
8. no large libraries for trivial functionality

Do not optimize prematurely, but do not introduce obvious performance problems.

---

# 17. SEO / Metadata

At minimum:

- title
- description
- canonical URL
- Open Graph metadata
- Twitter/X metadata if appropriate
- favicon
- semantic document structure

Avoid keyword stuffing.

SEO should accurately represent the site, not distort the content.

---

# 18. Development Philosophy

Do not immediately start coding.

For any substantial feature:

1. understand the intent
2. inspect the existing implementation
3. inspect `DESIGN.md`
4. identify dependencies
5. identify unknowns
6. propose an implementation
7. update the project TODO
8. implement
9. verify
10. update the TODO/status
11. check for regressions

Prefer incremental implementation over large speculative changes.

---

# 19. Planning Requirement

Before writing production code for the initial website:

## STOP AND PLAN FIRST.

Create a concrete implementation plan covering:

### Product

- final information architecture
- page hierarchy
- content model
- interaction model

### Design

- layout system
- typography
- spacing
- color usage
- visual object
- responsive behavior
- motion

### Engineering

- Next.js structure
- component boundaries
- data/content structure
- styling architecture
- static rendering strategy
- image strategy
- deployment strategy

### Quality

- accessibility
- performance
- SEO
- browser/device validation

The plan must identify:

- decisions already made
- decisions still open
- assumptions
- risks
- unnecessary complexity

Do not hide uncertainty.

---

# 20. TODO System

Maintain a project TODO that clearly separates:

## Completed

Things that are finished and verified.

## In Progress

Things currently being implemented.

## Planned

Agreed work that has not started.

## Decisions Needed

Questions requiring my input.

## Later

Ideas intentionally deferred.

Each task should be specific enough to execute.

Bad:

`Improve homepage`

Good:

`Implement responsive hero layout with two-column desktop structure and stacked mobile layout defined in DESIGN.md.`

Do not mark tasks complete based purely on code existing.

A task is complete only after reasonable verification.

---

# 21. Decision Log

Maintain a lightweight decision log for meaningful architectural/design decisions.

For each decision record:

- decision
- reason
- alternatives considered
- consequence

Do not document every trivial implementation detail.

---

# 22. Tools / Skills / Plugins

The project may use the following tools and capabilities where appropriate.

### Core development

- Codex / Claude Code
- Git
- GitHub
- local browser/devtools

### Design / frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide
- Shadcn
- MDX

### AI-assisted development

LLMs and coding agents may be used for:

- implementation
- refactoring
- debugging
- documentation
- exploration
- code review
- content structure

However:

> AI-generated code must still be understood, reviewed, tested, and integrated intentionally.

Do not use an AI agent as a reason to increase complexity.

### Additional plugins / tools

Use all the Skills and Plugins that you have on hand like:

- Taste Skill
- Shadcn Skill
- Awesome Design Skill
- Impeccable

## And try to use all possible ways to make the website a bit aesthetic and good looking

# 23. Git / Version Control

Use Git throughout development.

Commits should describe meaningful changes.

Prefer small logical commits over giant "everything changed" commits.

Before significant changes:

- inspect current state
- understand existing work
- avoid overwriting unrelated changes

Do not reset, delete, or rewrite user work without explicit intent.

---

# 24. Agent Behavior

When working on this project:

### Do

- reason about the design before implementation
- challenge unnecessary complexity
- point out contradictions
- suggest better alternatives
- reuse established components
- keep the design system consistent
- verify your work
- explain meaningful tradeoffs
- preserve user intent

### Do not

- silently change design decisions
- invent content
- install dependencies without reason
- introduce generic UI kits unnecessarily
- over-engineer
- add animations for decoration
- copy common portfolio patterns blindly
- turn the website into a recruiter dashboard
- rewrite unrelated code
- claim something works without verifying it

---

# 25. Working Agreement

When I give you a new idea:

1. interpret what I am actually trying to achieve
2. evaluate whether the idea fits the existing product/design direction
3. point out weaknesses directly
4. propose alternatives when useful
5. determine whether it is:
   - immediate
   - planned
   - experimental
   - unnecessary

6. update the TODO/decision log when appropriate
7. only then implement if implementation has been requested

I value honest technical feedback over agreement.

---

# 26. Definition of Done

The website is not "done" merely because it builds.

A meaningful release should satisfy:

### Design

- coherent visual language
- consistent typography
- correct accent usage
- intentional spacing
- calm visual rhythm
- strong hierarchy
- no unnecessary decoration

### Content

- sounds like a real person
- avoids marketing language
- communicates what I build and care about
- contains no fabricated claims

### Engineering

- clean component architecture
- sensible Next.js implementation
- minimal client-side JavaScript
- maintainable content model
- no unnecessary dependencies

### Accessibility

- keyboard usable
- readable
- accessible states
- reduced motion supported

### Performance

- fast initial load
- optimized assets
- no obvious rendering bottlenecks

### Responsive

- intentional mobile layout
- intentional desktop layout
- no broken spacing / overflow / interactions

### Quality

- tested locally
- console checked
- links checked
- visual issues reviewed
- production build succeeds

---

# 27. First Task

Do NOT start implementing the website immediately.

Start by:

1. reading `DESIGN.md`
2. summarizing the design constraints you believe are non-negotiable
3. auditing the current project repository
4. identifying the existing stack/state
5. proposing the initial architecture
6. proposing the page structure
7. identifying open decisions
8. creating the first TODO list
9. creating the decision log
10. presenting the plan for review

Only after that should implementation begin.

The goal is not to build the fastest possible portfolio.

The goal is to build a website that genuinely feels like **my personal engineering studio**.
