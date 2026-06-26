# Frontend Battle 3.0 - Official Guidelines & Constraints

Flagship event of the Web and Design Society (WebnD), IIT Bhubaneswar.

## 1. Timeline & Submission Deadlines (Hard Rules)

- **Round 1 (The Qualifying Round):** June 26th, 2026
  - **Problem Statement Release:** 2:00 PM
  - **Duration:** 4 Hours
  - **Submission Deadline:** 6:00 PM SHARP
  - **Deliverable:** Fully responsive, SEO-optimized Web pages based on a provided pre-packed asset ZIP. Live Vercel deployment link required.
- **Round 2 (The Finale):** June 28th, 2026 (For qualifiers only)
  - **Problem Statement Release:** 10:00 AM
  - **Duration:** 12 Hours
  - **Submission Deadline:** 10:00 PM
  - **Bonus:** Surprise "Bounty Segment" introduced during the finale.

## 2. Technical Stack Rules & Compliance

- **Frameworks Allowed:** React, Next.js, Vue, Nuxt, SolidJS, Angular, Vanilla JS, or 3D frameworks (like Three.js).
  - _Current Setup Constraint:_ This repository is locked to **React (Vite SPA) + TypeScript**.
- **Styling Tools:** Tailwind CSS, Bootstrap, or custom CSS.
  - _Current Setup Constraint:_ This repository is locked to **Tailwind CSS v4** engine rules.
- **AI Tooling Policy:** **100% Permitted with NO limitations.** Use of code generation models, Vercel v0, Cursor Agents, Windsurf, or specialized MCP setups is fully allowed and encouraged due to the event being a vibe-coded sprint.

## 3. Disqualification & Quality Penalties

- **Asset Packing Rule:** You will be provided with a pre-packed asset ZIP at 2:00 PM. Failing to extract, structure, and cleanly display these assets according to the problem statement instructions drops categories instantly.
- **Responsive Web Design:** Layouts must be tested and fully responsive across Mobile, Tablet, and Desktop viewport sizes.
- **SEO Optimization Requirements:** Automated crawlers (like Google Lighthouse) must detect proper semantic structures, meta headers, and missing descriptive markers (like image alt tags).
- **Compilation Crashes:** Running `npm run build` locally must pass without fatal TypeScript errors or lint blocks before pushing to the Vercel branch.
