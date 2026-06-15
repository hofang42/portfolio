# Phan Lê Thanh Hoàng — Portfolio

Dark terminal / ops aesthetic portfolio for a Software Engineering student
pivoting into **DevOps & Cloud Engineering** via the Xbrain × AWS Accelerator
program in Da Nang, Vietnam.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom dark palette: `#0D1117` / `#00FF94` / `#F5A623`)
- **Framer Motion** (typewriter & scroll reveals)
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

1. Hero — terminal boot sequence with typewriter animation
2. About — mission statement + Xbrain × AWS program sidebar card
3. Tech Stack — Current vs. Learning columns
4. Ops Log — vertical experience timeline
5. AWS Program — Xbrain × AWS Accelerator feature card
6. Projects — GZMart, FLearning, VIC SPORT, TourHub
7. Education & Certs — FPT University + certifications grid
8. Contact — terminal-style form (opens default mail client) + channels

## CV

Drop the resume PDF at `public/cv/Phan-Le-Thanh-Hoang-CV.pdf` — the
"Download CV" button in the hero already points there.

## Customize

- Color tokens: `tailwind.config.ts`
- Boot lines: `components/Hero.tsx` → `BOOT_LINES`
- Timeline entries: `components/Experience.tsx` → `ENTRIES`
- Projects: `components/Projects.tsx` → `PROJECTS`
