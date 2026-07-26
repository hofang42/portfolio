"use client";

import { Award, GraduationCap } from "lucide-react";

const CERTS = [
  { name: "Project Management", year: "2025" },
  { name: "React Ultimate · Udemy", year: "2025" },
  { name: "Research Methods", year: "2025" },
  { name: "Web Design for Everybody", year: "2024" },
  { name: "Software Development Lifecycle", year: "2024" },
];

export default function Education() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="mb-6">
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink">
          <span className="text-neon">#</span> Education &amp; Certs
        </h2>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5 lg:gap-6">
        <div className="terminal-frame rounded-md p-5 sm:p-6 relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-sm border border-neon/40 bg-neon/[0.06] grid place-items-center">
              <GraduationCap className="h-5 w-5 text-neon" />
            </div>
            <div>
              <h3 className="font-mono text-sm text-neon">FPT University</h3>
              <div className="text-[11px] font-mono text-ink-faint">
                Bachelor · Software Engineering
              </div>
            </div>
          </div>

          <dl className="space-y-2.5 font-mono text-sm">
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-ink-faint text-xs">period</dt>
              <dd className="text-ink">2022 – 2026</dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-ink-faint text-xs">major</dt>
              <dd className="text-ink">Software Engineering</dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-ink-faint text-xs">gpa</dt>
              <dd>
                <span className="text-glow-neon text-neon text-lg">8.62</span>
                <span className="text-ink-faint text-xs"> / 10</span>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-ink-faint text-xs">graduating</dt>
              <dd className="text-amber">2026</dd>
            </div>
          </dl>

          <div className="mt-5 pt-4 border-t border-line/70">
            <div className="font-mono text-[11px] text-ink-faint mb-2">
              progress
            </div>
            <div className="h-1.5 rounded-full bg-bg-soft overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-neon to-amber"
                style={{ width: "92%" }}
              />
            </div>
            <div className="font-mono text-[11px] text-ink-faint mt-1.5 flex justify-between">
              <span>Y1</span>
              <span>Y2</span>
              <span>Y3</span>
              <span className="text-neon">Y4 ●</span>
            </div>
          </div>
        </div>

        <div className="terminal-frame rounded-md p-5 sm:p-6 relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-sm border border-amber/40 bg-amber/[0.06] grid place-items-center">
              <Award className="h-5 w-5 text-amber" />
            </div>
            <div>
              <h3 className="font-mono text-sm text-amber">Certifications</h3>
              <div className="text-[11px] font-mono text-ink-faint">
                ./certs/*.crt
              </div>
            </div>
          </div>

          <ul className="divide-y divide-line/60">
            {CERTS.map((c) => (
              <li
                key={c.name}
                className="cert-pill flex items-baseline justify-between gap-3 py-2 font-mono text-xs"
              >
                <span className="text-ink leading-tight">{c.name}</span>
                <span className="text-ink-faint shrink-0 text-[11px]">
                  {c.year}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-3 border-t border-line/70 font-mono text-[11px] text-ink-faint">
            <span className="text-amber/90">cloud training:</span> XBrain × AWS
            Accelerator · see ~/ops_log
          </div>
        </div>
      </div>
    </div>
  );
}
