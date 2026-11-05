# PROJECT CONTEXT & DEVELOPMENT DIRECTIVES

> **IMPORTANT CURRENT STATUS: UI CHANGES IN PROGRESS**
> The user is currently performing specific, targeted UI and styling adjustments.

---

## STRICT RULES FOR CODE MODIFICATIONS

### 1. ONLY MODIFY THE EXACT SECTION SPECIFIED
- **Zero collateral changes**: When the user requests a change to a specific section, component, or element, make changes **ONLY** to that specific section.
- **Leave all other sections untouched**: Do not modify, refactor, clean up, or restyle any other parts of the file or codebase.
- **Surgical precision**: Limit diffs to the minimum required lines to satisfy the exact user request.

### 2. STRICTLY LOCAL WORK (NO AUTOMATIC GIT COMMITS OR PUSHES)
- **Do NOT run `git commit` or `git push`** unless the user explicitly gives a direct instruction (e.g., *"commit these changes"* or *"push to github"*).
- All changes must remain purely local in the workspace for user inspection and local preview.

### 3. PRESERVE EXISTING CODE INTEGRITY
- Do not remove or alter comments, docstrings, attributes, or logic in surrounding code.
- Ensure that whatever is already working remains completely intact and functional.

---

## PROJECT QUICK REFERENCE
- **Framework**: Next.js 16 (App Router) + Tailwind CSS + Framer Motion
- **Working Directory**: `D:\Workspace\sini_rajesh-main\sini_rajesh-main`
- **Dev Server Command**: `npm run dev` (run from inside `sini_rajesh-main`)
- **Primary Font**: Cormorant Garamond (`font-serif`, 700, Italic) for major titles / headings; Manrope (`font-sans`) for body text.

