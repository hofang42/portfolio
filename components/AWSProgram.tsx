"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Cpu,
  GraduationCap,
  Layers,
  MapPin,
  Rocket,
  Users,
} from "lucide-react";

const PILLARS = [
  {
    icon: Rocket,
    title: "Job-Ready in 4–6 Months",
    desc: "Intensive, project-based curriculum focused on immediately deployable cloud & DevOps skills.",
  },
  {
    icon: Layers,
    title: "Flexible Blended Learning",
    desc: "Online + offline sessions in Da Nang, with mentorship from working AWS practitioners.",
  },
  {
    icon: GraduationCap,
    title: "High-Demand Certifications",
    desc: "Preparation toward AWS Certified Cloud Practitioner & Solutions Architect Associate.",
  },
];

export default function AWSProgram() {
  return (
    <section id="aws" className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="mb-6">
        <div className="font-mono text-xs text-ink-faint mb-2">
          <span className="text-neon">$</span> aws describe-program
          --name xbrain-accelerator
        </div>
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink">
          <span className="text-ink-dim">#</span>{" "}
          <span className="text-glow-amber text-amber">Xbrain × AWS Accelerator</span>
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative rounded-md overflow-hidden border border-amber/40 bg-gradient-to-br from-amber/[0.05] via-bg-soft/30 to-transparent"
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 0% 0%, rgba(245,166,35,0.25), transparent 60%)",
          }}
        />

        <div className="relative p-5 sm:p-7 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-amber/50 bg-amber/[0.08] font-mono text-xs text-amber">
              <Cloud className="h-3.5 w-3.5" />
              AWS · Powered
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-line font-mono text-xs text-ink-dim">
              <MapPin className="h-3.5 w-3.5" />
              Da Nang · Online + Offline
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-line font-mono text-xs text-ink-dim">
              <Users className="h-3.5 w-3.5" />
              Cohort 2026
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-neon/40 bg-neon/[0.06] font-mono text-xs text-neon">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
              enrolled
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-7 lg:gap-10">
            <div>
              <p className="text-ink-dim text-base sm:text-lg leading-relaxed">
                A fast-track accelerator program preparing engineers for
                cloud-first careers. Two parallel tracks —{" "}
                <span className="text-neon font-mono">Cloud</span> and{" "}
                <span className="text-amber font-mono">AI</span> — combine
                hands-on labs, real-world projects, and certification
                preparation, with placement into internship and full-time
                roles upon completion.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="border border-line rounded-sm p-3 font-mono text-xs">
                  <div className="text-ink-faint">duration</div>
                  <div className="text-amber text-base mt-0.5">4 – 6 months</div>
                </div>
                <div className="border border-line rounded-sm p-3 font-mono text-xs">
                  <div className="text-ink-faint">eligible_for</div>
                  <div className="text-ink text-base mt-0.5">
                    Internship · Full-time
                  </div>
                </div>
                <div className="border border-line rounded-sm p-3 font-mono text-xs">
                  <div className="text-ink-faint">tracks</div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm border border-neon/40 bg-neon/[0.06] text-neon text-[11px]">
                      <Cloud className="h-3 w-3" /> Cloud
                    </span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm border border-amber/40 bg-amber/[0.06] text-amber text-[11px]">
                      <Cpu className="h-3 w-3" /> AI
                    </span>
                  </div>
                </div>
                <div className="border border-line rounded-sm p-3 font-mono text-xs">
                  <div className="text-ink-faint">delivery</div>
                  <div className="text-ink text-base mt-0.5">Blended</div>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group relative border border-line rounded-sm p-4 bg-bg-soft/40 hover:border-amber/60 hover:bg-amber/[0.04] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 grid place-items-center rounded-sm border border-amber/40 bg-amber/[0.08] text-amber shrink-0">
                      <p.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-mono text-sm text-ink">
                        {p.title}
                      </div>
                      <div className="text-xs text-ink-dim mt-1 leading-relaxed">
                        {p.desc}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-7 pt-5 border-t border-amber/20 font-mono text-[11px] text-ink-faint flex flex-wrap gap-x-5 gap-y-2">
            <span>
              <span className="text-amber">▲</span> partner: AWS
            </span>
            <span>
              <span className="text-amber">▲</span> operator: Xbrain
            </span>
            <span>
              <span className="text-amber">▲</span> region: ap-southeast-1
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
