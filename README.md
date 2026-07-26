# Phan Lê Thanh Hoàng — Portfolio

Dark terminal / ops aesthetic portfolio for a Software Engineering student
pivoting into **DevOps & Cloud Engineering** via the XBrain × AWS Accelerator
program in Da Nang, Vietnam.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom dark palette: `#0D1117` / `#00FF94` / `#F5A623`)
- **Framer Motion** (typewriter, count-up metrics & scroll reveals)
- **cmdk** (terminal-style command palette — press `Ctrl/⌘ + K`)
- **Lucide React** (icons)
- **JetBrains Mono** + **Inter** (Google Fonts)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Sections

1. Hero — terminal boot sequence (click / ⏎ to skip) + live metrics strip
2. About — mission statement + XBrain × AWS program sidebar card
3. Ops Log — vertical experience timeline (XBrain accelerator featured)
4. AWS Program — XBrain × AWS Accelerator feature card
5. Projects — infrastructure first (P2 platform, P3 takeover), app dev below
6. Tech Stack — Cloud / DevOps / Observability columns + app-dev background
7. Education & Certs — FPT University + compact certification list
8. Contact — terminal-style form (opens default mail client) + channels

## CV

The resume PDF lives at `public/cv/Phan-Le-Thanh-Hoang-CV-2026.pdf` — the
hero "Download CV" button and the command palette both point there.

## Customize

- Color tokens: `tailwind.config.ts`
- Boot lines & metrics: `components/Hero.tsx` → `BOOT_LINES`, `METRICS`
- Timeline entries: `components/Experience.tsx` → `ENTRIES`
- Projects: `components/Projects.tsx` → `INFRA_PROJECTS`, `APP_PROJECTS`
- Command palette entries: `components/CommandPalette.tsx` → `SECTIONS`
