<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Context & Protection Rules

## 1. Frozen Areas (Do Not Modify)
- **Desktop Layout (Base CSS):** Do NOT modify existing desktop CSS rules outside media queries (especially in `src/styles/home.module.css`, `HeaderNav.module.css`, etc.). The desktop version (1440px) is approved and frozen.
- **Refyne Architecture & Semantic Names:** Preserve domain-driven folder structure (`src/components/home/`, `src/components/about/`, `src/components/blogs/`, `src/components/contact/`, `src/components/common/`). Never revert semantic components to non-semantic names (e.g., do NOT rename back to generic "Section" or "Frame").


- **Completed Hero Tablet Layout:** The Hero section tablet styling (proportional canvas scaling at 768x1024 base canvas, background image offset/zoom, portrait zoom, bottom tagline row) is approved and completed. Do not alter it unless specifically requested.

## 2. Responsive Scoping & Breakpoint Boundaries
- **Tablet Scoping:** All tablet styles MUST be strictly scoped inside:
  `@media (min-width: 768px) and (max-width: 1024px)`
  *(Covers iPad Mini 768px, iPad Air 820px, Surface Pro 912px, iPad Pro 1024px)*
- **Smaller Laptops & Desktop:** Handled from `1025px+` up to 1440px with fluid clamps.
- **Mobile Scoping:** All mobile styles MUST be strictly scoped inside:
  `@media (max-width: 767px)`
  *(Dedicated 425px mobile layout)*
- **No Cascade Bleed:** Never write unscoped `@media (max-width: ...)` that cascades down into mobile or leaks into desktop base rules.

## 3. Workflow & Interaction Rules
- **Incremental Section-by-Section Progress:** Work on responsiveness section-by-section.
- **Clean Code Integrity:** Keep CSS free of stray syntax or unclosed blocks, and ensure `npm run build` succeeds.

