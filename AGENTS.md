# AGENTS.md

## Project

Raahat Foundation Website — React 19 + Vite 6 + Tailwind CSS v4 + TypeScript 5.8.  
Entrypoint: `src/main.tsx` → `src/App.tsx` (routes via react-router-dom v7).

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts dev server on **port 3000**, bound to `0.0.0.0` |
| `npm run build` | Production build via Vite |
| `npm run preview` | Preview production build |
| `npm run lint` | Actually runs `tsc --noEmit` (type-check only, no ESLint) |

No test framework is installed.

## Environment

- `GEMINI_API_KEY` — required for Gemini AI API calls. Set in `.env.local` (file is gitignored by `.env*`).
- `APP_URL` — injected at runtime by AI Studio for self-referential links / callbacks.
- Copy `.env.example` to `.env.local` as a starting point.
- `DISABLE_HMR=true` disables Vite HMR (used in AI Studio; edit `vite.config.ts` if HMR flickers).

## Config quirks

- **`@` path alias** maps to project root (both `tsconfig.json` `paths` and Vite `resolve.alias`). Import like `@/src/components/...` or `@/src/pages/...`.
- **Tailwind v4** uses `@import "tailwindcss"` + `@theme` directives in `index.css` (no `tailwind.config.js`).
- `noEmit: true` in tsconfig — Vite handles bundling, tsc is only for type-checking.
- `tsc --noEmit` is the **only** static check; there is no ESLint, Prettier, or other linter/formatter.
- `useDefineForClassFields: false` + `experimentalDecorators: true` in tsconfig.

## Structure

```
src/
  main.tsx          — bootstrap
  App.tsx           — router + DonateProvider wrapper
  pages/            — 9 page components (Home, About, Work, etc.)
  components/       — shared UI (Layout, Navbar, Footer, DonateModal, etc.)
  context/          — DonateContext (cart/donation state)
  data/             — events.ts (static event data)
```

## Routing

All routes are nested under `<Layout />` at `/`. There is no dedicated API route layer; Express is a dependency but not wired in the frontend workspace (likely used in AI Studio deployment).

## Misc

- No test infrastructure at all.
- HMR is intentionally controllable via env var — don't remove the `DISABLE_HMR` check.
