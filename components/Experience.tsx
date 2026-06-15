"use client";

import { motion } from "framer-motion";

type Entry = {
  range: string;
  title: string;
  role?: string;
  stack?: string;
  highlight?: string;
  status?: "active" | "shipped";
};

const ENTRIES: Entry[] = [
  {
    range: "[2026-01 → present]",
    title: "GZMart E-commerce Platform",
    role: "Frontend Lead",
    stack: "React 18, TypeScript, Tailwind, Redux, Socket.IO, Ant Design",
    highlight: "Built multi-role ERP system (Buyer / Seller / Admin)",
    status: "active",
  },
  {
    range: "[2025-09 → 2025-12]",
    title: "VIC SPORT — Online Sport Booking",
    stack: "React, TypeScript, Vite, Ant Design, Google Maps API, Socket.IO",
    status: "shipped",
  },
  {
    range: "[2025-05 → 2025-09]",
    title: "FLearning — Online Learning Platform",
    role: "Project Lead",
    stack:
      "React.js, Redux Toolkit, Axios, Socket.IO, Vercel, GitHub Actions (CI/CD)",
    highlight: "First CI/CD pipeline with GitHub Actions — DevOps entry point",
    status: "shipped",
  },
  {
    range: "[2025-01 → 2025-05]",
    title: "FPT Software",
    role: "Front End Developer Intern",
    status: "shipped",
  },
  {
    range: "[2024-08 → 2024-12]",
    title: "TourHub — Tour Booking Website",
    stack: "Java Servlet, JSP, SQL Server, VietQR Payment",
    status: "shipped",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="mb-6">
        <div className="font-mono text-xs text-ink-faint mb-2">
          <span className="text-neon">$</span> tail -f ops.log
        </div>
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink">
          <span className="text-ink-dim">#</span>{" "}
          <span className="text-glow-neon text-neon">Ops Log</span>
        </h2>
        <p className="text-ink-dim mt-2 max-w-2xl text-sm sm:text-base">
          A chronological deployment log of projects shipped and roles held.
        </p>
      </div>

      <div className="terminal-frame rounded-md relative overflow-hidden">
        <span className="corner-tl" />
        <span className="corner-tr" />
        <span className="corner-bl" />
        <span className="corner-br" />

        <div className="px-5 py-3 border-b border-line/70 flex items-center justify-between font-mono text-[11px] text-ink-faint">
          <span>./deployments.log</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-neon/80">streaming</span>
          </span>
        </div>

        <ol className="relative">
          {ENTRIES.map((e, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative px-5 py-4 sm:py-5 border-b border-line/50 last:border-b-0 hover:bg-bg-soft/40"
            >
              <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-5 font-mono text-sm">
                <div className="flex items-start gap-2 text-ink-faint">
                  <span
                    className={
                      e.status === "active"
                        ? "h-2 w-2 mt-2 rounded-full bg-neon animate-pulse shrink-0"
                        : "h-2 w-2 mt-2 rounded-full bg-ink-faint/60 shrink-0"
                    }
                  />
                  <span className="text-xs sm:text-sm text-amber/80 whitespace-nowrap">
                    {e.range}
                  </span>
                </div>
                <div className="space-y-1.5 min-w-0">
                  <div className="text-ink text-base sm:text-lg break-words">
                    {e.title}
                    {e.status === "active" && (
                      <span className="ml-2 text-[10px] uppercase tracking-widest text-neon border border-neon/40 bg-neon/[0.06] px-1.5 py-0.5 rounded-sm align-middle">
                        live
                      </span>
                    )}
                  </div>
                  {e.role && (
                    <div className="text-xs sm:text-sm text-ink-dim flex flex-wrap items-center gap-1.5">
                      <span className="text-neon/70">└─</span>
                      <span className="text-ink-faint">Role:</span>
                      <span className="text-ink">{e.role}</span>
                    </div>
                  )}
                  {e.stack && (
                    <div className="text-xs sm:text-sm text-ink-dim flex flex-wrap items-baseline gap-1.5">
                      <span className="text-neon/70">└─</span>
                      <span className="text-ink-faint">Stack:</span>
                      <span className="text-ink-dim break-words">{e.stack}</span>
                    </div>
                  )}
                  {e.highlight && (
                    <div className="text-xs sm:text-sm flex flex-wrap items-baseline gap-1.5">
                      <span className="text-amber/80">└─</span>
                      <span className="text-amber/80">Highlight:</span>
                      <span className="text-ink">{e.highlight}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
