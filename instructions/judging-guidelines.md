# Official Grading Checklist & Evaluation Metrics (Round 1)

This file acts as the definitive validation layer for the Antigravity Pro agent. [cite_start]It maps out the exact 100-point scoring matrix and strict failure parameters defined in the Problem Statement[cite: 68].

---

## 🚨 AUTOMATIC DISQUALIFICATION CONDITIONS

[cite_start]If any of these conditions are triggered, the project scores an immediate zero (0)[cite: 91]:

1. [cite_start]**Banned UI/Animation Components:** The presence of `framer-motion`, `@radix-ui/*`, `shadcn`, `headlessui`, or `tailwind-ui` inside the project dependencies for the core features[cite: 58, 101].
2. [cite_start]**Hardcoded Metrics Engine:** Hardcoding final numbers or layout assets into Feature 1 instead of running a dynamic multi-dimensional calculation matrix[cite: 70, 102].
3. [cite_start]**Broken Links & Server Faults:** Any submitted repository links that are private, invalid, or throw 404/500 errors during build time or browser refresh[cite: 97, 98].
4. [cite_start]**Boilerplate Plagiarism:** Duplicate files, matching code repositories, or unmodified template structures lifted from other contestants[cite: 99].
5. [cite_start]**Mock / Empty Implementations:** Repositories containing setup configuration rules without fully coded, operational feature code[cite: 100].

---

## 📊 100-POINT GRADING SCORE DISTRIBUTION

### 1. Logic, Architecture & State Isolation (40 Points)

- [cite_start]**[ ] Feature 1 Pricing Matrix (15 Pts):** Fully calculation-driven multi-currency engine tracking INR, USD, and EUR across alternating cycles safely without hardcoded shortcuts[cite: 42, 70].
- [cite_start]**[ ] State Isolation Guardrail (15 Pts):** Zero global component re-renders or parent layout container reflows when currency or billing changes[cite: 59, 71, 73]. [cite_start]Chrome DevTools verification must prove updates apply strictly to targeted localized text blocks[cite: 60, 71, 72].
- [cite_start]**[ ] Feature 2 Zero-Dependency Assembly (10 Pts):** Clean Bento-to-Accordion view transition tracking the exact active index state across mobile viewport window resizing without any third-party UI packages[cite: 74, 75].

### 2. SEO Optimization & Semantic HTML Structure (30 Points)

- [cite_start]**[ ] Semantic DOM Layout (15 Pts):** Use correct semantic containers (`<main>`, `<header>`, `<section>`, `<nav>`, `<footer>`) instead of nested generic `<div>` layouts[cite: 78].
- [cite_start]**[ ] SEO Hygiene & Meta Elements (10 Pts):** Implementation of complete header definitions, Open Graph (OG) tags, accessible media properties (`alt` variables), and crawlable text arrays[cite: 79].
- [cite_start]**[ ] Loading Threshold Optimization (5 Pts):** The application entry loader must finish execution inside a **500ms envelope** with zero TTI drag[cite: 62, 80].

### 3. UI/UX Usability & Motion Matching (30 Points)

- [cite_start]**[ ] Asset Compliance & Styling (15 Pts):** Clean integration of all files provided in `asset_package.zip` (SVGs, font mappings, and exact hex parameters)[cite: 83]. [cite_start]Points docked heavily for omitted elements[cite: 84].
- [cite_start]**[ ] Breakpoint Fluidity (10 Pts):** Flawless layout adaptation across 375px mobile, tablet, and widescreen layouts[cite: 85]. [cite_start]**Zero horizontal clipping or overflow scrollbars allowed[cite: 85].**
- [cite_start]**[ ] Motion Accuracy (5 Pts):** Perfect hardware-accelerated curves replicating the animations, timing parameters, and layout ease values shown in `demo.mp4`[cite: 32, 65, 87].
