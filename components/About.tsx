"use client";

import { Cloud, Cpu, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2">
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink mb-5">
            <span className="text-neon">#</span> About
          </h2>
          <p className="text-ink-dim leading-relaxed text-base sm:text-lg max-w-2xl">
            Software Engineer with a solid full-stack background, transitioning
            strongly into{" "}
            <span className="text-neon font-mono">Cloud Architecture</span> and{" "}
            <span className="text-amber font-mono">DevOps</span>. Designing and
            hardening highly available AWS environments with Infrastructure as
            Code (Terraform), container orchestration (Docker / Kubernetes),
            GitOps delivery, and SLO-driven{" "}
            <span className="text-ink font-mono">observability</span>, building
            scalable, cost-aware, secure infrastructure. Bridging application
            development with resilient cloud operations.
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {[
              { k: "current_role", v: "CloudOps Intern", c: "text-neon" },
              { k: "track", v: "Cloud / DevOps (CDO)", c: "text-amber" },
              { k: "open_to", v: "Internship · Full-time", c: "text-ink" },
            ].map((s) => (
              <div
                key={s.k}
                className="font-mono text-xs border border-line rounded-sm bg-bg-soft/40 px-3 py-2.5"
              >
                <div className="text-ink-faint">{s.k}</div>
                <div className={`${s.c} text-sm mt-0.5`}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="relative">
          <div className="terminal-frame rounded-md p-5 relative">
            <div className="font-mono text-[11px] text-ink-faint mb-3 flex items-center justify-between">
              <span>./program-badge.json</span>
              <span className="text-amber">●</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-sm border border-amber/50 bg-amber/[0.08] grid place-items-center">
                <Cloud className="h-5 w-5 text-amber" />
              </div>
              <div>
                <h3 className="font-mono text-sm text-amber">XBrain × AWS</h3>
                <div className="text-[11px] font-mono text-ink-faint">
                  Accelerator Internship
                </div>
              </div>
            </div>

            <dl className="space-y-2.5 font-mono text-xs">
              <div className="flex justify-between gap-3">
                <dt className="text-ink-faint">structure</dt>
                <dd className="text-ink">3 phases</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-faint">track</dt>
                <dd className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm border border-amber/40 text-amber bg-amber/[0.06]">
                    <Cpu className="h-3 w-3" /> Cloud / DevOps
                  </span>
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-faint">location</dt>
                <dd className="text-ink">Da Nang, VN</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-faint">mode</dt>
                <dd className="text-ink">Online + Offline</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-faint">status</dt>
                <dd className="text-neon flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
                  phase 3 · operating
                </dd>
              </div>
            </dl>

            <div className="mt-5 pt-4 border-t border-line/70 flex items-center gap-2 font-mono text-[11px] text-ink-faint">
              <GraduationCap className="h-3.5 w-3.5 text-neon" />
              <span>cohort_2026 // job-ready</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
