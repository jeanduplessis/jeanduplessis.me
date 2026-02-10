# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/resume website for Jean du Plessis — a single-page site built with Next.js (Pages Router), React, and Tailwind CSS. All content is hardcoded in React components (no CMS or MDX).

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build (runs `next build && next-sitemap`)
- `npm run lint` — ESLint with Next.js core web vitals rules
- `npm start` — Start production server

Requires Node.js >= 22.

## Architecture

**Pages Router** — uses `pages/` directory (not App Router):
- `pages/index.js` — Home page, composes all section components
- `pages/_app.js` — App wrapper with global layout
- `pages/_document.js` — Custom document with Vercel Analytics/Speed Insights
- `pages/404.js` — Custom error page

**Components** (`components/`) — All functional, presentational components with minimal state:
- `content-section.js` — Shared layout wrapper for content areas
- One component per page section (header, about, career, contact, etc.)

**Styling** — Tailwind CSS 4 with `@tailwindcss/postcss`. CSS modules used for content sections (`styles/`). Custom fonts: Roboto, Roboto Slab, Roboto Mono. Typography plugin for rich text.

**No TypeScript** — Pure JavaScript codebase.

## Configuration Notes

- **Security headers** defined in `next.config.js` (CSP, X-Frame-Options)
- **Image optimization** enabled with SVG support (`dangerouslyAllowSVG`), AVIF/WebP formats
- **Sitemap** auto-generated via `next-sitemap` (config in `next-sitemap.config.js`, base URL: `https://jeanduplessis.me`)
- **Stylelint** enforces CSS property order (idiomatic-order) and Prettier formatting
- **ESLint config** uses modern flat config format (`eslint.config.mjs`)

## Environment

- `SITE_URL` — Override base URL for sitemap generation (default: `https://jeanduplessis.me`)

## Gotchas

- **Relative imports only** — No jsconfig.json or path aliases; all imports use relative paths (e.g., `../components/header`).
- **Content section heading markers** — `content-section.module.css` adds `##`, `###`, `####` prefixes to headings via `::before` pseudo-elements. These are styled markers, not markdown.
- **No test framework** — No jest/vitest/playwright configured. `npm run lint` is the only code quality check.

## Deployment

Deployed on Vercel. Vercel Analytics and Speed Insights are integrated via `_document.js`.
