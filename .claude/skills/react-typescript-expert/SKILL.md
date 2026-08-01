---
name: react-typescript-expert
description: Use when writing, refactoring, or reviewing any React/TypeScript code in this project (components, hooks, styles, project structure, README). Enforces clean architecture and documentation standards.
---

# React + TypeScript Expert

Stack: React 19 + TypeScript, Create React App (`react-scripts`), lives in `frontend/`.

## Architecture
- Structure `frontend/src/` by feature, not by file type:
  - `components/` — reusable, presentational, no business logic
  - `features/<name>/` — feature-specific components + hooks + types together
  - `hooks/` — shared custom hooks (`useX` naming)
  - `styles/` — global styles, design tokens (CSS variables)
  - `types/` — shared types only; keep feature types next to the feature
- One component per file. File name = component name (`HeroSection.tsx`).
- Components are function components with typed props via `interface XProps`. No `any`, no `React.FC`.
- Extract logic into hooks when a component exceeds ~100 lines or mixes concerns.
- Props flow down, callbacks flow up. Reach for context only when prop drilling exceeds 2 levels.

## Quality bar
- Strict typing: explicit return types on exported functions and hooks.
- Every exported component/hook gets a one-line JSDoc saying what it's for.
- No dead code, no commented-out blocks, no unused imports.
- Accessibility: semantic HTML first, `aria-*` only when semantics can't express it.

## Documentation
- Keep `frontend/README.md` current: how to install, run (`npm start`), build, test, plus a short folder-structure overview. Update it whenever structure or scripts change.
