# PROJECT MASTER PROMPT — ILACAF · IA Profesional

> Repository: `belentani7/ilacaf-taller-ia`.
> Product: a real, public-access professional learning environment for **auditing, law, compliance and finance**, not a promotional placeholder and not a clone of ManosAbiertas.

## Identity and source of truth

The product already has a Next.js App Router site, three professional learning tracks, nine lessons in `app/curso/page.tsx`, a five-case formative assessment in `components/PracticeLab.tsx`, and no accounts or backend. The existing Spanish educational material, brand and low-pressure access model are authoritative. Preserve them. Do not invent accredited qualifications, course seats, enrollment availability, official legal endorsements, or prices.

## Maximum useful destination

An accessible, mobile-first learning system where professionals can study, practice, verify and safely keep ownership of their work:

1. **Curriculum and navigation**: nine substantive lessons initially; modular tracks, prerequisites, deep links and search. Expand content only with reviewed, accurate professional examples.
2. **Per-lesson workspace**: browser-only notes, review status, export and explicit deletion. No unnecessary registration or server transfer of confidential data. A shared device is not a vault.
3. **Formative practice**: existing five cases enhanced with explainable scoring, mistake review, varying scenarios and rubric-based feedback. Never present scores as certificates.
4. **Verification lab**: structured activities where a learner checks a citation's original source, reconciles numeric assumptions, separates hypotheses from verified findings, and records what remains unknown.
5. **Teacher tooling (future, opt-in)**: authoring, versioned curriculum and publication review only after authentication, access control, accessibility and data protection are demonstrably implemented.
6. **Responsible AI (optional)**: only if provider keys remain server-side, user consent and processing disclosures are clear, rate limits and cost controls exist, and responses identify uncertainty and require source checking.
7. **Delivery**: keyboard/screen reader usability, multi-device layouts, deterministic quality checks, preview deployment, real domain verification and consent-aware analytics (prefer none by default).

## Canonical implementation

- Next.js 16 / React 19 / TypeScript / Tailwind CSS 4.
- Pages: `/`, `/curso`. Components: `PracticeLab`, `LessonWorkspace`.
- Client-side progress: `lib/lessonProgress.mjs`; keys `ilacaf-lesson-v1:01-1` through `03-3`. Preserve and validate old local values. Never mix ILACAF progress with ABRAZO or ManosAbiertas.
- Commands: `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, combined `npm run quality:check`.
- **Known limitation**: no package-lock.json is currently committed. CI must install dependencies until a verified lockfile is generated on a network-capable machine. Do not claim deterministic installs before that happens.

## Success criteria and execution sequence

1. The lesson workspace survives reload, can export notes, marks completion, and requires confirmation before deletion. Run tests for malformed local state.
2. A real runner must pass lint, typecheck, Node unit tests and Next production build. Fix failures in code, not by disabling checks. Validate at least one rendered mobile and keyboard journey.
3. Extend exercise cases and content with verified references (regional law must explicitly state jurisdiction and date; avoid fabricated authorities).
4. Add a local course progress overview and a user-directed export of **all** notes (never silently transmit personal drafts).
5. Enable production publication only after environment, canonical URLs, privacy, domain and smoke tests are confirmed.

## Agent operating contract

Deliver code increments with tests, not repeat generic audits. Inspect the relevant current files before touching them. Preserve the repository and its original purpose. Make reversible changes on a branch; verify and merge only after passing checks. Never generate related repositories automatically; never expose learner notes, upload secrets, or make private content public without explicit authorization.

## Implemented on 2026-10-23 (branch: agent/ilacaf-lesson-workspace-20261023)

- A workspace attached to all nine lessons with local notes, review checkbox, text export, confirmed deletion and explicit shared-device privacy warning.
- Recovery and bounds checking for locally stored progress, with Node built-in tests for invalid data and all nine lesson keys.
- A named `quality:check` script and CI job updated to run it on Node 22.

**Verification remaining:** online workflow results, typecheck, production build and deployment must be confirmed; these modifications do not yet mean the product is fully delivered.
