# Essayy — Comprehensive Project Plan

> Living document outlining scope, timeline, resources, and success criteria.  Review every sprint and update as reality shifts.

## 1 · Objectives
- Launch an MVP of Essayy that reliably generates, humanises, and detects essays within **10 weeks**.
- Attain **100 paying users** and **1 000 free trials** within 60 days of launch.
- Achieve detector accuracy parity with leading academic tools (> 95 % F1).

## 2 · Key Deliverables
| Milestone | Deliverable | Owner |
|-----------|-------------|-------|
| M0 | Architecture docs & repo scaffold | Lead Eng |
| M1 | Essay Generator MVP | Full‑stack Squad |
| M2 | Humanizer + Detector integrated | Backend Eng |
| M3 | Billing & Auth complete | Platform Eng |
| M4 | Responsive Landing + 30 SEO pages | FE Eng / Designer |
| M5 | Beta Test Report & QA sign‑off | QA Lead |
| M6 | Public Launch on Vercel | PM |

## 3 · Timeline (Gantt‑style in weeks)
| Week | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|------|---|---|---|---|---|---|---|---|---|----|
| Kickoff & Setup | █ |   |   |   |   |   |   |   |   |    |
| Core Architecture | █ | █ |   |   |   |   |   |   |   |    |
| Essay Generator |   | █ | █ | █ |   |   |   |   |   |    |
| Humanizer API |   |   | █ | █ |   |   |   |   |   |    |
| Detector API |   |   |   | █ | █ |   |   |   |   |    |
| Billing & Auth |   |   |   |   | █ | █ |   |   |   |    |
| Front‑end Polish |   |   |   |   |   | █ | █ | █ |   |    |
| QA & Beta |   |   |   |   |   |   | █ | █ |   |    |
| Launch Prep |   |   |   |   |   |   |   | █ | █ |    |
| Public Release |   |   |   |   |   |   |   |   | █ | █  |

## 4 · Team & Roles
- **Product Manager** – defines roadmap, coordinates sprints.
- **Lead Engineer** – owns architecture, code reviews.
- **Full‑stack Engineers (2)** – feature implementation.
- **Frontend Engineer** – UX, Shadcn components, SEO pages.
- **Backend / Platform Engineer** – API wrappers, Supabase, Stripe, DevOps.
- **QA Lead** – automated tests, regression sweeps.
- **Designer (PT)** – branding, UI mock‑ups, landing pages.

## 5 · Dependencies
- Azure OpenAI quota approval.
- RapidAPI keys & paid tier limits.
- Stripe account & webhook endpoint whitelisting.
- Supabase project & RLS policies.
- Firebase GA4 property + API secret for Measurement Protocol.
- Resend account and verified sender domain.

## 6 · Risk Register · Risk Register
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Azure API latency / limits | Medium | High | Implement retry + caching layer |
| RapidAPI cost overruns | Medium | Medium | Monitor usage, set hard daily budgets |
| Academic AI‑detection arms race | High | High | Continuous model fine‑tuning |
| SEO ranking delays | Medium | Medium | Publish content 4 weeks pre‑launch |
| Scope creep | High | Medium | Strict MVP gate, backlog grooming |

## 7 · KPIs & Success Metrics
- **Activation rate**: > 40 % of sign‑ups create first essay.
- **Conversion**: 5 % of free users upgrade to paid within 30 days.
- **Churn**: < 3 % monthly logo churn in first quarter.
- **Performance**: Avg essay gen time < 15 s at P95.
- **Detector Accuracy**: F1‑score ≥ 0.95 on internal benchmark.

## 8 · Communication & Process
- Weekly sprint planning Monday 10:00 GMT.
- Daily async stand‑up in Slack (#essayy‑dev).
- Demo & retro every second Friday.
- Linear for issue tracking, Figma for design, Notion for docs.

> **Versioning**: Semantic (0.1.0 pre‑launch). Feature flags guard unfinished work.

---
_This plan feeds directly into NEXT_STEPS.md and should evolve as we learn from users._ 