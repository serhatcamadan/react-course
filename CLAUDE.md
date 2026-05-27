# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a React learning workspace containing multiple independent sub-projects. Each sub-project is a self-contained Vite + React app with its own `node_modules` and `package.json`.

**Lecture projects** (numbered, follow course progression):
- `01-lecture1-react-temelleri` through `08-travel-list` — in-lecture exercises covering React basics, props, useState, and state management

**Practice/personal projects** (built independently):
- `calculator/`, `eat-n-split/`, `usepopcorn/`, `todos-app/` — each is its own git repo
- `github-user-finder/` — uses Tailwind CSS v4
- `movie_track/` — uses Tailwind CSS v4 + shadcn/ui + Radix UI + Base UI
- `challenges/` — scratch file for isolated React experiments and code challenges
- `how-react-works/` — exercises exploring React internals

**Reference material:**
- `ultimate-react-course/` — Jonas Schmedtmann's course starter/final code (not actively modified)
- `level1-react-exercises/` — plain HTML files that load React via CDN (no build step)
- `todo-list-roadmap.md` — detailed Turkish-language architecture doc for the todos-app

## Commands

All numbered lecture folders and practice projects share identical scripts. Run these from inside the specific sub-project directory:

```bash
npm run dev       # start Vite dev server (localhost:5173)
npm run build     # production build
npm run lint      # ESLint check
npm run preview   # preview production build
```

There are no tests configured in any project.

The root `package.json` only contains Tailwind v4 dev dependencies and is not an app entry point.

## Tech Stack

- **React 19** + **Vite 8** across all projects
- **JSX** (`.jsx` files); no TypeScript except `movie_track/src/lib/utils.ts`
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (no `tailwind.config.js` needed)
- **ESLint** with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- `movie_track` additionally uses: shadcn/ui, Radix UI, Base UI, lucide-react, clsx, tailwind-merge

## Architecture Patterns

Every app follows the same layout: `src/main.jsx` bootstraps React, `src/App.jsx` is the root component. State is lifted to `App.jsx` and passed down via props — there is no global state management (no Redux, no Context) in the lecture/practice projects.

For multi-component projects, components live directly in `src/` (e.g., `StarRating.jsx` in `usepopcorn`). `movie_track` uses `src/components/ui/` for shadcn primitives and `src/lib/` for utilities.

Course materials are in Turkish; comments, variable names, and documentation may be in Turkish.
