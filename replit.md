# cheimediv Portfolio

## Overview

A personal portfolio website for Madi Cheima (cheimediv), showcasing skills, projects, education, and experience. Built as a full-stack TypeScript application with a React frontend and Express backend, using PostgreSQL for data persistence. The portfolio features a modern dark theme with animated UI components and a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom dark theme (deep space aesthetic)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll reveals
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (ESM modules)
- **API Pattern**: REST endpoints defined in shared/routes.ts with Zod schemas
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development**: Vite dev server with HMR proxied through Express

### Data Storage
- **Database**: PostgreSQL (connection via DATABASE_URL environment variable)
- **Schema Location**: shared/schema.ts using Drizzle table definitions
- **Migrations**: Drizzle Kit with `db:push` command
- **Tables**: skills, projects, education, experience, contact_messages
- **Seeding**: Automatic data seeding on server startup (clears and re-inserts)

### Shared Code Pattern
- Schema definitions in `shared/schema.ts` are shared between frontend and backend
- API route definitions with Zod validation in `shared/routes.ts`
- Type inference using Drizzle's `$inferSelect` and `$inferInsert`

### Build System
- Development: `npm run dev` runs tsx with Vite middleware
- Production: Custom build script bundles server with esbuild, client with Vite
- Output: `dist/` directory with `index.cjs` (server) and `public/` (client assets)

## External Dependencies

### Database
- **PostgreSQL**: Primary database, requires DATABASE_URL environment variable
- **connect-pg-simple**: Session storage (available but sessions not currently configured)

### UI Libraries
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, tooltip, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component
- **cmdk**: Command palette component
- **Vaul**: Drawer component

### Fonts
- **Google Fonts**: Outfit (display) and Plus Jakarta Sans (body) via CSS imports
- Custom font CSS variables: `--font-display` and `--font-body`

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (dev only)
- **Drizzle Kit**: Database schema management and migrations

### Form & Validation
- **Zod**: Schema validation shared between client and server
- **drizzle-zod**: Auto-generates Zod schemas from Drizzle tables
- **@hookform/resolvers**: Connects Zod to React Hook Form