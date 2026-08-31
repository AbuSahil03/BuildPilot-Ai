# BuildPilot AI

BuildPilot AI is a production-oriented AI SaaS that turns a raw software idea into an executable project blueprint, workspace, roadmap, and delivery system.

This repository is scaffolded as a monorepo with a Next.js frontend and a FastAPI backend. Phase 1 focuses on architecture, repository setup, and a clean foundation for the later feature phases.

## Current Scope

- Product architecture and platform decisions
- Repository and environment setup
- FastAPI application shell
- Next.js application shell
- Shared project documentation

## Repository Layout

```text
buildpilot-ai/
├── backend/
├── docs/
├── frontend/
├── infra/
├── render.yaml
├── .env.example
├── .editorconfig
├── .gitignore
├── .nvmrc
├── Makefile
├── package.json
└── pnpm-workspace.yaml
```

## Architecture Reference

The primary architecture document for Phase 1 lives at [docs/architecture/foundation.md](/Users/abusahilislamsardar/Documents/New%20project/buildpilot-ai/docs/architecture/foundation.md).

## Quick Start

1. Copy environment files:

   - `cp .env.example .env`
   - `cp backend/.env.example backend/.env`
   - `cp frontend/.env.example frontend/.env.local`

2. Install frontend dependencies:

   - `cd frontend && pnpm install`

3. Create a Python virtual environment and install backend dependencies:

   - `cd backend`
   - `python3 -m venv .venv`
   - `. .venv/bin/activate`
   - `pip install --upgrade pip`
   - `pip install -e ".[dev]"`

4. Run the applications:

   - Frontend: `make dev-web`
   - Backend: `make dev-api`

## Phase 1 Verification

- Backend health route test: `make test-api`
- Python syntax check: `make check-api`
- Frontend lint and typecheck:
  - `cd frontend && pnpm lint`
  - `cd frontend && pnpm typecheck`

## Backend Deployment Target

The backend is designed to deploy to Render. [render.yaml](/Users/abusahilislamsardar/Documents/New%20project/buildpilot-ai/render.yaml) defines the initial API web service, Render PostgreSQL database, and private Render Key Value service. It keeps third-party secrets out of source control and includes the API health check at `/api/v1/health`.

## Notes

- The surrounding workspace already contained a legacy PHP storefront. This application was intentionally scaffolded in its own `buildpilot-ai/` directory to avoid mixing unrelated codebases.
- Database modeling, authentication flows, CRUD APIs, AI orchestration, and infrastructure automation begin in the next phases.
