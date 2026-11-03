# Bhavik Sadiwala — Staff Android Engineer

A recruiter-ready portfolio presenting Bhavik Sadiwala's verified Android engineering, AI mobile work, technical leadership, and public contact links.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/bhavik-resume/` — public portfolio website and privacy-redacted resume download
- `artifacts/api-server/src/routes/ambassador.ts` — evidence-grounded recruiter chat endpoint
- `lib/api-spec/openapi.yaml` — source of truth for the ambassador API contract
- `artifacts/mockup-sandbox/src/components/mockups/bhavik-resume/` — portfolio design directions on the Design canvas

## Architecture decisions

- The ambassador answers one question at a time from curated, verified portfolio facts; chats are not persisted.
- Model calls stay on the API server; the browser never receives AI credentials.
- The downloadable resume is a public copy with private phone and postal details redacted; the attached original must not be published.

## Product

Recruiters can scan role fit, inspect project evidence and experience, download a public resume, follow verified demo and writing links, contact Bhavik, or ask an evidence-only virtual ambassador.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
