# DClaw Onboard — v1.2 Feature Roadmap

> 📘 **REVISED PRD v2.3 available:** See `REVISED-PRD.md` for complete gap analysis, current state, and full feature roadmap.


> Based on: Y Combinator vertical SaaS principles, trending GitHub repos (checklist-app), AI product research (BambooHR, Workday, Sapling, Enboarder)

## Pre-Flight Checklist

- [ ] `frontend/package-lock.json` committed after any `npm install` / dependency change
- [ ] `frontend/next-env.d.ts` exists and is committed
- [ ] `docker-compose.yml` healthchecks correct
- [ ] `frontend/Dockerfile` declares `ARG NEXT_PUBLIC_API_URL` before `RUN npm run build`

## v1.0 Feature Inventory (Current)

- [ ] Onboarding journey templates
- [ ] Task assignment & tracking
- [ ] New hire portal
- [ ] Document collection
- [ ] Real backend CRUD (no mocks)
- [ ] Docker + Helm deployment
- [ ] Alembic migrations
- [ ] Backend tests

---

## v1.2 Roadmap

### P0 — Must Have (Ship in v1.0, demo-ready)

#### 1. AI Onboarding Copilot (Buddy Bot)
**Description:** AI-powered virtual buddy that guides new hires through their first 30/60/90 days. Answers questions, reminds of tasks, and surfaces resources.
- **AI Angle:** RAG over company wiki + policies + onboarding docs. Proactive nudges.
- **Backend:** `/api/v1/ai/onboard-chat` endpoint. Scheduled reminder engine.
- **Frontend:** Chat widget in new hire portal. Daily digest cards.
- **Files:** `backend/app/services/onboard_ai.py`, `frontend/src/components/onboard-copilot.tsx`

#### 2. Journey Builder & Checklists
**Description:** Visual builder for onboarding journeys with tasks, deadlines, dependencies, and role-based paths.
- **Backend:** Journey template engine. Task dependency graph.
- **Frontend:** Drag-and-drop journey builder. Progress tracker.
- **Files:** `backend/app/services/journeys.py`, `frontend/src/app/journeys/builder.tsx`

#### 3. Document Collection & E-Sign
**Description:** Auto-request documents (ID, tax forms, contracts). Track completion. E-signature integration.
- **Backend:** Document request workflow. File storage. E-sign webhooks.
- **Frontend:** Document checklist with upload widgets. Signature request UI.
- **Files:** `backend/app/services/documents.py`

#### 4. Stakeholder Introductions
**Description:** Auto-schedule 1:1s with key team members. Generate intro briefs for each meeting.
- **AI Angle:** LLM-generated intro briefs ("Meet Sarah, your design lead. She joined in 2019...").
- **Backend:** Calendar integration. Brief generation API.
- **Frontend:** Meeting schedule view with brief cards.
- **Files:** `backend/app/services/introductions.py`

### P1 — Should Have (v1.1–1.2)

#### 5. Equipment & Access Provisioning
**Description:** IT equipment requests, software license provisioning, access group assignments.
- **Backend:** IT request workflow. Integration with identity providers (Okta/Azure AD).
- **Frontend:** Equipment catalog. Access request forms.

#### 6. Culture & Values Integration
**Description:** Interactive culture modules, values quizzes, team stories, and social connection prompts.
- **Backend:** Content module delivery. Engagement tracking.
- **Frontend:** Interactive culture cards. Team matching (coffee chat roulette).

#### 7. Manager Dashboard & Alerts
**Description:** Manager view of all direct report onboarding progress. Alerts for stalled journeys.
- **Backend:** Aggregate progress API. Alert rules engine.
- **Frontend:** Manager dashboard with progress bars and risk flags.

#### 8. Feedback & Pulse Checks
**Description:** Micro-surveys at day 7, 30, 60, 90. Sentiment tracking.
- **Backend:** Survey delivery + response collection.
- **Frontend:** Survey widget. Manager sentiment dashboard.

### P2 — Could Have (v1.3+)

#### 9. AI-Generated Role-Specific Learning Paths
**Description:** Curate and generate personalized learning content for each role.

#### 10. Gamification & Achievements
**Description:** Onboarding badges, progress celebrations, team leaderboards.

#### 11. Pre-Boarding (Offer Accepted → Day 1)
**Description:** Engage candidates between offer acceptance and start date. Reduce ghosting.

#### 12. Offboarding Companion (Cross-sell to dclaw-offboard)
**Description:** Smooth handoff to offboarding module for departing employees.

---

## Implementation Priority

1. **Week 1–2:** AI Onboarding Copilot (P0.1) + Journey Builder (P0.2)
2. **Week 3–4:** Document Collection (P0.3) + Stakeholder Introductions (P0.4)
3. **Week 5–6:** Equipment Provisioning (P1.5) + Culture Integration (P1.6)
4. **Week 7–8:** Manager Dashboard (P1.7) + Feedback Pulse (P1.8)
