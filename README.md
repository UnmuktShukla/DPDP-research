# DPDP Startup Research

A Next.js research workspace for exploring India's Digital Personal Data Protection (DPDP) landscape — market intelligence, regulatory notes, competitive analysis, startup strategy, and evidence-backed research in one editable app.

**Disclaimer:** Content in this workspace is research scaffolding, not legal advice. DPDP notes are high-level public-structure reminders only. Confirm every legal claim against the Act, Rules, and qualified counsel before relying on it.

## Features

- **Executive overview** — thesis, business plan, and research progress at a glance
- **Market research** — size, segments, pain points, demand signals, trends
- **DPDP regulatory map** — Act, rules, compliance, consent, rights, SDF, penalties
- **Competition** — profiles, comparison, pricing, positioning, gaps
- **Startup planning** — problem/solution, product, GTM, moat, risks, roadmap
- **Research OS** — sources, interviews, evidence, hypotheses, assumptions, log
- **Strategy** — opportunities, options, decisions, experiments, next steps
- **Local persistence** — edits saved to browser `localStorage` with seed reset
- **Command palette** — `⌘K` / `Ctrl+K` to jump anywhere in the workspace

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- [shadcn/ui](https://ui.shadcn.com) + Radix UI

## Getting started

### Prerequisites

- Node.js 20+
- npm (or pnpm / yarn / bun)

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Environment variables

Copy the example file and set your deployment URL for correct Open Graph / sitemap links:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL (e.g. `https://your-domain.com`). Falls back to `VERCEL_URL` on Vercel, then `http://localhost:3000`. |

No API keys or database are required — workspace data lives in seed JSON and browser storage.

## Project structure

```
src/
├── app/           # Routes (one page per research section)
├── components/    # UI shell, editorial primitives, shadcn components
├── data/          # Seed workspace content
├── lib/           # Types, store, navigation, search, labels
└── views/         # Page-level view components
```

## Deploy

### Vercel (recommended)

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Deploy — no extra configuration needed.

### Other hosts

Any Node.js host that supports Next.js 16 can run `npm run build` and `npm start`.

## Editing content

- **In the UI:** Click editable fields to update thesis, notes, and research items. Changes persist locally in the browser.
- **Seed data:** Edit `src/data/seed.ts` to change default content shipped with the app.
- **Navigation:** Update `src/lib/nav.ts` to add or reorder sections.

Use **Reset seed** in the top bar to discard local edits and restore defaults.

## License

Private research workspace. All rights reserved unless otherwise noted by the repository owner.
