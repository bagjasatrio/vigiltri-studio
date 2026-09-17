# Vigiltri Studio

Website profil dan katalog Vigiltri Studio — game studio & rekayasa IT.

## Stack
- Framework: Astro 5 (`@astrojs/react`)
- UI: React 19 + TypeScript
- Styling: Tailwind CSS v4 (`@tailwindcss/vite`)
- Animation: Framer Motion + GSAP + Lenis smooth scroll
- Icons: `lucide-react`

## Package Manager
Gunakan **npm**:
- `npm run dev`: Jalankan local development server
- `npm run build`: Build static bundle ke `dist/`
- `npm run preview`: Preview hasil build lokal

## Commands
| Task | Command |
|------|---------|
| Typecheck | `npx tsc --noEmit` |
| Astro Check | `npx astro check` |
| Build | `npm run build` |

## Project Structure
- `src/pages/index.astro`: Entry point halaman utama
- `src/components/`: Komponen UI modular (hero, about, games, services, team, triad, contact, navigation)
- `src/styles/global.css`: Base CSS + Tailwind directives
- `src/dokumen/`: Dokumentasi internal (PRD, Brand Guideline)
- `public/`: Static asset & images
