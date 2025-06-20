### Pages / Routes (App Router)
- `/` Landing (marketing stack powered by MDX)
- `/app`
  - `/essay/new`
  - `/essay/[id]`
  - `/detector`
  - `/humanizer`
  - `/billing`
  - `/settings`

#### Landing Sub‑pages

**Use‑case Pages**  
_Thirty SEO‑friendly slugs that showcase how students **and teachers** benefit from Essayy._

| Slug | Purpose |
|------|---------|
| `/use-case/student-essays` | Quick drafts for homework and coursework |
| `/use-case/scholarship-essays` | Tailored submissions for scholarship committees |
| `/use-case/college-personal-statement` | Stand‑out undergraduate admission essays |
| `/use-case/graduate-sop` | Statement of purpose for Masters & PhD applications |
| `/use-case/persuasive-essay` | Argumentative essays backed by evidence |
| `/use-case/book-report` | Structured summaries and analyses of books |
| `/use-case/literature-critique` | Critical literary analyses |
| `/use-case/compare-contrast` | Side‑by‑side comparison papers |
| `/use-case/research-paper` | Formal academic papers with citations |
| `/use-case/ielts-toefl` | Practice essays for language‑proficiency exams |
| `/use-case/sat-act` | Timed test‑prep essay drills |
| `/use-case/mba-essay` | Business school application narratives |
| `/use-case/med-school-personal` | Personal statements for MD programmes |
| `/use-case/law-school` | JD admissions essays |
| `/use-case/cover-letter` | Job application cover letters |
| `/use-case/grant-proposal` | Persuasive funding/grant requests |
| `/use-case/blog-article` | Long‑form blog post drafts |
| `/use-case/reflection-paper` | Reflective / response essays |
| `/use-case/film-critique` | Analytical reviews of films |
| `/use-case/history-essay` | Evidence‑driven historical analyses |
| `/use-case/ai-detection-grading` | Teachers auto‑check essays for AI‑generated content |
| `/use-case/assignment-authenticity` | Verify originality before grading |
| `/use-case/plagiarism-ai-detector` | Combined plagiarism + AI detection for educators |
| `/use-case/grading-rubric-assistant` | Generate rubric‑aligned feedback & scores |
| `/use-case/feedback-generator` | Personalised textual feedback for each student |
| `/use-case/lesson-plan-essays` | Draft exemplar essays for classroom discussion |
| `/use-case/peer-review-facilitator` | Structure peer‑review sheets for students |
| `/use-case/essay-question-bank` | Auto‑build question banks & prompts |
| `/use-case/classroom-writing-assignment` | Scaffold writing tasks with clear criteria |
| `/use-case/teacher-progress-report` | Summarise class‑wide writing strengths & gaps |


**Feature Pages**  
_Detail‑rich explanations of core product capabilities._

- `/features/essay-writer`
- `/features/ai-content-detector`
- `/features/ai-humanizer`
- `/features/citation-manager`
- `/features/export-pdf-docx`
- `/features/cloud-sync`
- `/features/custom-style-learning`
- `/features/team-collaboration`

### Core Components
- `TopicInput.tsx`
- `LengthSlider.tsx`
- `EssayTypeSelect.tsx`
- `StylePicker.tsx` (Standard | Custom with DropZone for sample)
- `CitationSelect.tsx`
- `EssayEditor.tsx` (TipTap + slash commands)
- `DetectorResult.tsx`
- `HumanizerProgress.tsx`
```sh
pnpm i
pnpm supabase start
cp .env.example .env.local
pnpm dev
``` 