# Antigravity Pro Agent Workflows & Structural Implementation Methods

## 1. Antigravity Pro Core Agent Instructions & Token Guardrails

- **Agent Execution Model:** You are a senior frontend design engineer operating inside the Antigravity Pro agentic runtime sandbox.
- **Task Orchestration Policy:** Before making file alterations, output a strict, sequential Task List and Execution Blueprint for authorization. Do not run parallel, multi-model background loops or spin up unprompted asynchronous sub-agents to protect credit allocations and token overhead.
- **No Automated Browser or MCP Sourcing Tasks:** DO NOT initialize headless browser instances, run automated browser tests, or trigger automated registry/MCP searches to look up component code. These multi-turn loops consume massive amounts of tokens.
- **The Manual Escalation Protocol:** If implementing a section requires a complex third-party animation pattern or component block, STOP. Do not guess or search blindly. Instead, output the direct reference link (e.g., to 21st.dev, Magic UI, React Bits, or Aceternity UI) and explicitly ask the user to fetch the raw code template. The user will paste it back to you to minimize token consumption.
- **Context Hygiene:** Enforce tight codebase filtering. Only ingest explicitly referenced context anchors (e.g., using precise file path symbols). Do not map the entire project memory tree blindly during simple logic repairs.

## 2. Component Sourcing Matrix & Strict Dependency Bans

When processing code primitives from external registries, you must abide by the following technical limits to avoid immediate disqualification:

- **Absolute Library Ban:** You are strictly barred from installing or using pre-built UI components or runtime animation engines (e.g., Shadcn, Radix, HeadlessUI, Framer Motion, Tailwind UI) for the core feature components[cite: 1]. All structures and transitions must be coded completely from scratch[cite: 1].
- **Permitted Native Animations:** All motion sequences must utilize hardware-accelerated, native CSS Transitions/Animations or the optimized native Web Animations API (WAAPI)[cite: 1].
- **Timing & Easing Deadlines:**
  - _Micro-interactions (Hovers/Toggles):_ 150ms - 200ms using an `ease-out` curve[cite: 1].
  - _Structural Layout Reflows:_ 300ms - 400ms using an `ease-in-out` curve[cite: 1].
- **Animation SEO Guard:** If an animation hides text using non-text elements or complex canvases, you MUST immediately wrap it with standard hidden semantic text fields (`sr-only` utility classes) so search crawlers can fully index the platform content[cite: 1].

## 3. UI/UX Pro Max Skill Matrix - Mobile-First & System Brand Constraints

Enforce these exact typography, brand color, and layout laws across the entire application:

- **System Typography Setup:** Configure the custom head/CSS layers to use these exact families:
  - `JetBrains Mono`: Use strictly for Headers, Landing Page Titles, Code Blocks, and specialized tech labels.
  - `Inter`: Use for Body Text, Paragraphs, UI Elements, and pricing matrices.
- **System Color Palette (Tailwind v4 native CSS Variables):** Map these hex definitions into your `src/index.css` theme configuration block:
  - `--color-arctic-powder`: `#F1F6F4`
  - `--color-forsythia`: `#FFC801`
  - `--color-nocturnal-expedition`: `#114C5A`
  - `--color-mystic-mint`: `#D9E8E2`
  - `--color-deep-saffron`: `#FF9932`
  - `--color-oceanic-noir`: `#172836`
- **Mobile-First Responsive Paradigm:** Write utility classes starting from the base mobile view up. Build everything to look flawless on phone screens first, then append responsive variant tags (`md:`, `lg:`, `xl:`) to adapt layouts for wider viewports[cite: 1].
- **Atmospheric Blending & Visual Polish:** Prioritize deep, immersive atmospheric styling similar to premium high-contrast layouts (e.g., reference layout `image_bd7ffc.jpg`). Use smooth text gradients, precise font pairings, and deep ambient radial glows behind the official assets to make the provided ZIP imagery pop without replacing them[cite: 1].
- **Ergonomics & Touch-Targets:** Ensure all interactive features (dropdowns, billing switches, accordions) feature a minimum clickable surface area of 44x44 pixels on mobile devices to satisfy strict usability rules.

## 4. Advanced Logic & Feature Architecture State Isolation

- **Feature 1: Multi-Currency Pricing Engine:**
  - Compute final values dynamically using a multi-dimensional configuration matrix/object factoring in: base tier rate, a flat 20% annual discount multiplier, and regional tariff variables[cite: 1]. Do not hardcode UI values[cite: 1].
  - Must seamlessly toggle billing cycles (Monthly/Annual) across three currencies: INR (₹), USD ($), and EUR (€)[cite: 1].
  - _Re-render & State Isolation Guardrail:_ Changing the billing toggle or currency dropdown must NOT trigger global state reflows or re-render parent components[cite: 1]. Updates must be strictly isolated to the localized DOM text nodes containing the price strings[cite: 1].
- **Feature 2: Bento-to-Accordion Wrapper with State Persistence:**
  - _Desktop View:_ Render core features using a clean Bento-Grid layout[cite: 1].
  - _Mobile View:_ Refactor fluidly into a touch-optimized Accordion list[cite: 1].
  - _Context Lock Constraint:_ If a user is actively hovering over or interacting with a specific bento-node on desktop and the browser window resizes past the mobile breakpoint, programmatically transfer that exact active index context over to the mobile Accordion state, ensuring the corresponding panel is open smoothly upon layout transition[cite: 1].

## 5. Mandatory Engineering & SEO/Lighthouse Auditing Standards

- **Tailwind v4 Engine Rules:** All component styles must comply natively with Tailwind CSS v4. Do not create, modify, or look for a legacy `tailwind.config.js` file. Inject all custom system utilities, brand color hex extensions, or keyframe overrides directly into `src/index.css` using modern native CSS variables.
- **Competition Asset Integration:** Unpack all basic UI elements from the provided assets straight into the `/public/assets/` folder directory[cite: 1]. Reference media pathways using absolute root mappings (e.g., `<img src="/assets/logo.svg" />`)[cite: 1]. Missing or unused assets will incur heavy point penalties[cite: 1].
- **Initial Performance Cap:** The initial loading sequence and entry animations must not block semantic HTML indexing, delay Time to Interactive (TTI), or exceed a total orchestration timeline of **500ms**[cite: 1].
- **Core Web Vitals & SEO Strict Rule Set:**
  - **Semantic Hierarchy Rule:** Every page must feature exactly one `<h1>` tag matching the primary page focus[cite: 1]. Subsections must decrement sequentially (`<h2>`, `<h3>`) without gaps.
  - **Semantic Layout Containers:** Every structure mapping MUST use distinct semantic containers (`<main>`, `<section>`, `<nav>`, `<header>`, `<footer>`) instead of generic nested `<div>` fields[cite: 1].
  - **Asset Descriptions:** Every image component or SVG asset must feature explicit descriptive `alt="..."` attributes[cite: 1]. If an asset is purely decorative, enforce `alt="" role="presentation"`.
  - **Interactive Labels:** Every icon-only button or custom toggle control must include an unambiguous, human-readable `aria-label="..."` property[cite: 1].
  - **No Horizontal Scroll Defect:** Ensure `overflow-x-hidden` rules are enforced correctly on layout wraps so no elements break container constraints and cause unwanted horizontal layout shaking on mobile browsers[cite: 1].
- **Vercel Rewrite Guard:** The root `vercel.json` file contains a critical catch-all rewrite rule mapping everything back to `/index.html` to prevent 404 deployment crashes during live browser refreshes[cite: 1]. Do not let AI agents delete or replace this rule when configuring fresh route directories.
