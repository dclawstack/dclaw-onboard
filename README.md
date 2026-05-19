# DClaw Onboard

> **AI-powered employee onboarding platform.**
> Automated journeys, document collection, stakeholder introductions, and an AI copilot that guides every new hire.

## What This Is

This scaffold contains the **complete boilerplate** for any DClaw vertical SaaS app:
- ✅ FastAPI backend with correct SQLAlchemy 2.0 setup
- ✅ Next.js 14 frontend with Tailwind + pre-built UI components
- ✅ Docker + docker-compose with working healthchecks
- ✅ Helm chart for Kubernetes deployment
- ✅ Alembic migrations setup
- ✅ pytest test harness with pinned pytest-asyncio==0.24.0
- ✅ GitHub Actions CI
- ✅ `AGENTS.md` + `PLAN-v1.2.md` templates
- ✅ Pre-built UI components (no shadcn CLI needed)

## How to Use

```bash
# 1. Clone the scaffold
git clone https://github.com/dclawstack/dclaw-scaffold.git dclaw-YOURAPP
cd dclaw-YOURAPP

# 2. Find/replace placeholders
# {APP_NAME}    -> Your app name (e.g., CRM)
# {BACKEND_PORT}-> Next free port (see port registry below)
# {FRONTEND_PORT}-> Next free port
# {DB_NAME}     -> dclaw_yourapp

# 3. Write your PRODUCT-SPEC.md
# See PRODUCT-SPEC.md.template for the format

# 4. Hand to your coding agents
# See SCALING-PLAYBOOK.md for the parallel agent workflow
```

## Critical Rules for Agents

### DO NOT install shadcn CLI
The scaffold includes pre-built UI components in `frontend/src/components/ui/`. Installing `shadcn` v4 or `@base-ui/react` will break the Tailwind v3 build.

### DO NOT change the Postgres test port
`backend/tests/conftest.py` uses `localhost:5432`. GitHub Actions CI maps the Postgres service to port 5432. Changing this breaks CI.

### DO NOT delete `.github/workflows/ci.yml`
This file is required for GitHub Actions to run tests on every push.

### DO NOT upgrade pytest-asyncio
Keep `pytest-asyncio==0.24.0` pinned in `requirements.txt`. v1.3.0 breaks fixture scoping.

## Contributors

- **ramsai** (kamavaram.ramsai@gmail.com) — Feature landing pages, JSON-driven frontend architecture, PLAN-v1.2 implementation

---

## Feature Landing Pages (PLAN-v1.2)

All 12 features from [PLAN-v1.2.md](./PLAN-v1.2.md) have dedicated, JSON-driven landing pages:

| # | Priority | Feature | Route |
|---|----------|---------|-------|
| 1 | P0 | AI Onboarding Copilot | `/features/ai-onboarding-copilot` |
| 2 | P0 | Journey Builder & Checklists | `/features/journey-builder` |
| 3 | P0 | Document Collection & E-Sign | `/features/document-collection` |
| 4 | P0 | Stakeholder Introductions | `/features/stakeholder-introductions` |
| 5 | P1 | Equipment & Access Provisioning | `/features/equipment-provisioning` |
| 6 | P1 | Culture & Values Integration | `/features/culture-values` |
| 7 | P1 | Manager Dashboard & Alerts | `/features/manager-dashboard` |
| 8 | P1 | Feedback & Pulse Checks | `/features/feedback-pulse` |
| 9 | P2 | AI-Generated Learning Paths | `/features/ai-learning-paths` |
| 10 | P2 | Gamification & Achievements | `/features/gamification` |
| 11 | P2 | Pre-Boarding | `/features/pre-boarding` |
| 12 | P2 | Offboarding Companion | `/features/offboarding-companion` |

All content is stored in `frontend/src/data/features.json` and rendered by reusable components in `frontend/src/components/landing/`.

## Files You Must Customize

| File | What to Change |
|------|---------------|
| `backend/app/core/config.py` | `app_name`, default database name |
| `backend/app/api/main.py` | Wire v1 routers |
| `frontend/package.json` | Package name |
| `frontend/src/app/layout.tsx` | Title, description |
| `frontend/src/app/page.tsx` | Dashboard content |
| `docker-compose.yml` | Port mappings |
| `helm/Chart.yaml` | Chart name |
| `helm/values.yaml` | Image repository names |
| `AGENTS.md` | App identity, port numbers |
| `PLAN-v1.2.md` | Feature backlog |
| `PRODUCT-SPEC.md` | (Create this) Domain models, business logic |

## What You Should NOT Change

- `app/models/base.py` — `DeclarativeBase` pattern
- `app/core/database.py` — Engine/session factory
- `docker-compose.yml` healthcheck commands
- `frontend/Dockerfile` `ARG NEXT_PUBLIC_API_URL` pattern
- `tests/conftest.py` — Test DB override pattern (keep `localhost:5432`)
- `frontend/src/components/ui/*.tsx` — Pre-built components (use as-is)
- `requirements.txt` — Keep `pytest-asyncio==0.24.0` pinned
- `.github/workflows/ci.yml` — Do not delete
