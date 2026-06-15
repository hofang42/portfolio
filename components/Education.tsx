"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const CERTS = [
  { name: "Project Management", year: "2025" },
  { name: "React Ultimate — Udemy", year: "2025" },
  { name: "Research Methods", year: "2025" },
  { name: "Web Design for Everybody", year: "2024" },
  { name: "Software Development Lifecycle", year: "2024" },
];

export default function Education() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="mb-6">
        <div className="font-mono text-xs text-ink-faint mb-2">
          <span className="text-neon">$</span> cat education.yml
        </div>
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink">
          <span className="text-ink-dim">#</span>{" "}
          <span className="text-glow-neon text-neon">Education &amp; Certs</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5 lg:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="terminal-frame rounded-md p-5 sm:p-6 relative"
        >
          <span className="corner-tl" />
          <span className="corner-tr" />
          <span className="corner-bl" />
          <span className="corner-br" />

          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-sm border border-neon/40 bg-neon/[0.06] grid place-items-center">
              <GraduationCap className="h-5 w-5 text-neon" />
            </div>
            <div>
              <div className="font-mono text-sm text-neon">FPT University</div>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="terminal-frame rounded-md p-5 sm:p-6 relative"
        >
          <span className="corner-tl" />
          <span className="corner-tr" />
          <span className="corner-bl" />
          <span className="corner-br" />

          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-sm border border-amber/40 bg-amber/[0.06] grid place-items-center">
              <Award className="h-5 w-5 text-amber" />
            </div>
            <div>
              <div className="font-mono text-sm text-amber">Certifications</div>
              <div className="text-[11px] font-mono text-ink-faint">
                ./certs/*.crt
              </div>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 gap-2">
            {CERTS.map((c) => (
              <li key={c.name} className="cert-pill">
                <div className="font-mono text-xs border border-line rounded-sm px-3 py-2 bg-bg-soft/30 hover:border-amber/50 hover:bg-amber/[0.04] transition-colors">
                  <div className="text-ink leading-tight">{c.name}</div>
                  <div className="text-amber/80 mt-1 text-[11px]">
                    issued · {c.year}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
