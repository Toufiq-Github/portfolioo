# Replit.md

## Overview

This is a personal portfolio website for Shafaeat Hasan Toufiq, a Computer Science graduate. It's a full-stack application with a React frontend and Express backend, backed by a PostgreSQL database. The portfolio showcases projects, skills, experience/education timeline, YouTube content, and contact information. The site features a dark theme with animated sections, smooth scrolling, and a modern glassmorphism design aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework:** React with TypeScript (no SSR, SPA mode)
- **Routing:** Wouter (lightweight client-side router) — single page at `/` renders the Portfolio
- **Styling:** Tailwind CSS with CSS variables for theming, dark mode by default
- **UI Components:** shadcn/ui (new-york style) with Radix UI primitives — components live in `client/src/components/ui/`
- **Animations:** Framer Motion for scroll-triggered animations, TypeAnimation for typewriter effect in hero
- **Icons:** react-icons (FontAwesome and SimpleIcons for social/skill icons)
- **Smooth Scrolling:** react-scroll for navigating between sections
- **Data Fetching:** TanStack React Query for server state management
- **Forms:** react-hook-form with zod validation via @hookform/resolvers
- **Path aliases:** `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend Architecture
- **Runtime:** Node.js with Express
- **Language:** TypeScript, executed via tsx
- **Build:** Vite for client bundling, esbuild for server bundling (see `script/build.ts`)
- **Dev Server:** Vite dev server runs as middleware in Express during development (HMR enabled)
- **Production:** Static files served from `dist/public`, server bundle at `dist/index.cjs`
- **API Pattern:** REST endpoints under `/api/` — projects, skills, timeline (GET), messages (POST)
- **API Contract:** Shared route definitions in `shared/routes.ts` with Zod schemas for validation

### Data Storage
- **Database:** PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM:** Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema:** Defined in `shared/schema.ts` — four tables: `messages`, `projects`, `skills`, `timeline`
- **Migrations:** Drizzle Kit with `db:push` command for schema syncing
- **Seeding:** Database is seeded on server startup in `server/routes.ts` (clears and re-inserts data each time)

### Key Design Decisions
1. **Shared schema between frontend and backend** — `shared/` directory contains both the Drizzle schema and route contracts, ensuring type safety across the stack
2. **Database-seeded content** — Portfolio content (projects, skills, timeline) is stored in the database and seeded programmatically rather than hardcoded in the frontend
3. **No authentication** — This is a public portfolio site; the contact form simply inserts messages into the database
4. **Single-page architecture** — The entire portfolio is one page with smooth-scrolling sections (Hero, About, Skills, Projects, Experience, YouTube, Contact)

### Project Structure
```
client/              # Frontend React app
  src/
    components/      # Feature components (Hero, Navbar, ProjectCard, etc.)
    components/ui/   # shadcn/ui primitives
    hooks/           # Custom hooks (use-portfolio, use-toast, use-mobile)
    lib/             # Utilities (queryClient, cn helper)
    pages/           # Page components (Portfolio, not-found)
server/              # Express backend
  index.ts           # Server entry point
  routes.ts          # API routes + database seeding
  storage.ts         # Database access layer (IStorage interface)
  db.ts              # Database connection setup
  vite.ts            # Vite dev middleware setup
  static.ts          # Production static file serving
shared/              # Shared between client and server
  schema.ts          # Drizzle ORM table definitions + Zod schemas
  routes.ts          # API route contracts
attached_assets/     # Static assets (profile photos, reference docs)
migrations/          # Drizzle migration output directory
```

## External Dependencies

### Database
- **PostgreSQL** — Primary data store, connected via `DATABASE_URL` environment variable, accessed through `pg` Pool and Drizzle ORM

### Key NPM Packages
- **drizzle-orm / drizzle-kit** — ORM and migration tooling for PostgreSQL
- **express** — HTTP server framework
- **@tanstack/react-query** — Server state management on the client
- **framer-motion** — Animation library for scroll-triggered effects
- **react-type-animation** — Typewriter text effect
- **react-scroll** — Smooth scrolling navigation
- **react-icons** — Icon library (GitHub, LinkedIn, YouTube icons)
- **zod** — Runtime schema validation (shared between client and server)
- **react-hook-form** — Form state management
- **shadcn/ui + Radix UI** — Accessible component primitives

### Replit-specific
- **@replit/vite-plugin-runtime-error-modal** — Error overlay in development
- **@replit/vite-plugin-cartographer** — Dev tooling (dev only)
- **@replit/vite-plugin-dev-banner** — Dev banner (dev only)

### External Links (not API integrations, but referenced in the app)
- GitHub: https://github.com/Toufiq-Github
- LinkedIn: https://www.linkedin.com/in/shafaeat-hasan-toufiq/
- YouTube: https://www.youtube.com/@CodeRunnerr
- Published paper on ScienceDirect (linked in experience section)