# PLAN v1.3 — Industry Modernization Changelog

> **Date:** 2026-05-19  
> **Branch:** `feature/plan-v1.3-modernization`  
> **Based on:** 2025–2026 HR Tech industry trends (Josh Bersin, Deloitte Human Capital Trends, Gartner HCM, ISO 45003)

---

## Executive Summary

PLAN-v1.2 was solid but reflects 2023-era HR tech thinking. The 2025-2026 landscape has shifted significantly:

1. **AI moved from copilot to agent.** AI doesn't just answer questions — it acts autonomously.
2. **Skills-based organizations (SBO)** are the #1 transformation in HR. Onboarding must map to competency frameworks.
3. **Compliance complexity exploded.** US state laws, EU AI Act, GDPR updates demand AI-driven compliance.
4. **DEI is table stakes.** Not a module — embedded into every interaction from day 0.
5. **Hybrid is the default.** Remote onboarding is no longer a "special case."
6. **Gamification as standalone is dead.** Progress celebrations are UX, not a feature.
7. **Offboarding is a separate category.** The market bifurcated; deserves dedicated product.

---

## Removed Features (2)

### ❌ Gamification & Achievements (was P2.10)

**Why removed:** Standalone gamification platforms peaked in 2020-2022. In 2025+, progress celebrations, badges, and leaderboards are expected as embedded UX patterns — not a separate product module. Buyers no longer evaluate "gamification" as a feature; they expect delightful micro-interactions everywhere.

**Mitigation:** Celebration moments (confetti, milestone markers) are now part of the Journey Builder and Wellness Pulse. Not a separate landing page.

### ❌ Offboarding Companion (was P2.12)

**Why removed:** The offboarding market has matured into its own product category (Peakon exits, Enboarder offboard, ServiceNow exit management). DClaw already plans `dclaw-offboard` as a separate app. Bundling it inside Onboard creates confusion and scope creep.

**Mitigation:** When dclaw-offboard ships, a cross-link from the Onboard dashboard will provide seamless transition for departing employees.

---

## Added Features (2)

### ✅ Compliance Auto-Pilot (NEW → P0.4)

**Why added:** Regulatory compliance is the #1 pain point for HR teams in 2025. US states now have competing privacy/employment laws (CA, NY, CO, TX, IL). The EU AI Act impacts HR tech directly. I-9 verification, E-Verify, right-to-work checks, and GDPR-compliant data handling can't be manual anymore.

**What it does:**
- AI continuously monitors regulatory changes across jurisdictions
- Auto-adjusts document collection requirements based on employee location
- Real-time compliance scoring per new hire
- Audit trail generation for every compliance action
- Integration with government verification systems (E-Verify, right-to-work)

### ✅ DEI-Embedded Onboarding (NEW → P1.6)

**Why added:** In 2025, DEI is no longer a separate HR initiative — it's a design principle. Onboarding is the critical moment where new hires form their perception of company culture. Research shows inclusive onboarding increases retention by 50%+ for underrepresented groups.

**What it does:**
- Inclusive language analysis on all onboarding content (job titles, docs, welcome messages)
- Accessibility-first design (WCAG 2.2 AA compliance built-in)
- Bias-aware buddy matching (avoids demographic clustering)
- Pronoun and name pronunciation collection with respect-first defaults
- Belonging micro-surveys at day 1/7/30
- ERG (Employee Resource Group) introductions based on self-identification

---

## Modernized Features (8 retained, 6 renamed)

| v1.2 Name | v1.3 Name | What Changed |
|-----------|-----------|--------------|
| AI Onboarding Copilot | **Agentic AI Onboarding** | Copilot → Agent: AI acts autonomously (provisions accounts, schedules meetings, assigns tasks) not just answers questions |
| Journey Builder & Checklists | **Skills-Based Journey Builder** | Role-based → Skills-based: maps to competency frameworks, auto-generates paths from skill gaps |
| Document Collection & E-Sign | Same | Kept. Added AI document validation and compliance scoring |
| Stakeholder Introductions | Same | Kept. Enhanced with DEI-aware matching and async-first scheduling |
| Equipment & Access Provisioning | Same | Kept. Added zero-touch provisioning and automated deprovisioning |
| Culture & Values Integration | **Hybrid-First Experience** | Culture is now embedded across all features. Replaced with hybrid/remote-first design patterns |
| Manager Dashboard & Alerts | **Manager Command Center** | Dashboard → Command: adds action capabilities (intervene, reassign, escalate), not just view |
| Feedback & Pulse Checks | **Wellness & Belonging Pulse** | Feedback → Wellness: adds psychological safety checks, burnout signals, and belonging metrics |
| AI-Generated Learning Paths | Same | Kept. Enhanced with skills-gap-driven curriculum generation |
| Pre-Boarding | **Pre-Day-1 Engagement** | Modernized name. Added async content delivery and mobile-first experience |
| Gamification | REMOVED | — |
| Offboarding Companion | REMOVED | — |

---

## Timeline Impact

| Week | v1.2 Plan | v1.3 Plan |
|------|----------|----------|
| 1-2 | AI Copilot + Journey Builder | Agentic AI + Skills-Based Journey Builder |
| 3-4 | Document Collection + Stakeholder Intros | Compliance Auto-Pilot + Document Collection |
| 5-6 | Equipment + Culture | DEI-Embedded + Equipment Provisioning |
| 7-8 | Manager Dashboard + Feedback | Hybrid-First + Wellness & Belonging |

---

## Industry References

- **Josh Bersin, 2025:** "The agentic AI revolution in HR is here. 70% of CHROs plan to deploy AI agents in 2025."
- **Deloitte Human Capital Trends 2025:** "Skills-based organizations outperform peers by 2x on talent mobility."
- **Gartner HCM 2025:** "By 2026, 60% of large enterprises will use AI for compliance automation."
- **ISO 45003:2021:** "Psychological health and safety at work — guidelines for managing psychosocial risks."
- **WCAG 2.2 (Oct 2023):** Accessibility standard now referenced in US DOJ Title II regulations.

---

*Changelog prepared by: ramsai (kamavaram.ramsai@gmail.com)*
