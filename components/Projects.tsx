"use client";

import { useCallback } from "react";
import {
  Github,
  ExternalLink,
  Boxes,
  Radar,
  AppWindow,
} from "lucide-react";

type InfraProject = {
  name: string;
  phase: string;
  status: "live" | "shipped";
  tagline: string;
  points: string[];
  stack: string[];
};

const INFRA_PROJECTS: InfraProject[] = [
  {
    name: "AI Storefront · Production Takeover",
    phase: "accelerator/p3",
    status: "live",
    tagline:
      "Operating a live 18-microservice AI storefront on Kubernetes as a real on-call engineer.",
    points: [
      "Polyglot gRPC + Kafka system: build → ECR → Helm deploy",
      "On-call incident response · SLO error budgets · decision logs (ADRs)",
      "Security, reliability, performance, cost & auditability under real constraints",
    ],
    stack: ["Kubernetes", "gRPC", "Kafka", "Helm", "ECR", "Postgres", "Valkey", "OpenTelemetry"],
  },
  {
    name: "Cloud-Native Delivery Platform",
    phase: "accelerator/p2",
    status: "shipped",
    tagline:
      "A mini platform built end-to-end: IaC → Kubernetes → GitOps → progressive delivery → observability.",
    points: [
      "Terraform with remote state (S3 + DynamoDB lock) and reusable modules",
      "EKS via Helm · ArgoCD GitOps · Argo Rollouts canary with metric auto-abort",
      "OTel → Prometheus/Grafana/Loki · SLO burn-rate alerts · OPA + Trivy/Cosign",
    ],
    stack: ["Terraform", "EKS", "Helm", "ArgoCD", "GitHub Actions", "Argo Rollouts", "Grafana", "OPA"],
  },
];

type AppProject = {
  name: string;
  tagline: string;
  stack: string[];
  github?: string;
  live?: string;
};

const APP_PROJECTS: AppProject[] = [
  {
    name: "GZMart",
    tagline:
      "Multi-role e-commerce platform with AI features (Gemini AI, Google Vision).",
    stack: ["React 18", "TypeScript", "Redux", "Socket.IO", "Gemini AI"],
    github: "https://github.com/hofang42",
  },
  {
    name: "FLearning",
    tagline:
      "Online learning platform: first GitHub Actions CI/CD pipeline (DevOps entry point).",
    stack: ["React", "Redux Toolkit", "Socket.IO", "Vercel", "GitHub Actions"],
    github: "https://github.com/hofang42",
  },
  {
    name: "VIC SPORT",
    tagline: "Online sports booking with Google Maps & OAuth integrations.",
    stack: ["React", "TypeScript", "Vite", "Google Maps API"],
    github: "https://github.com/hofang42",
  },
  {
    name: "TourHub",
    tagline: "Tour booking website with VietQR payment integration.",
    stack: ["Java Servlet", "JSP", "SQL Server", "VietQR"],
    github: "https://github.com/hofang42",
  },
];

/* spotlight hover: track mouse pos in CSS vars consumed by .spotlight-card */
function useSpotlight() {
  return useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);
}

export default function Projects() {
  const onMove = useSpotlight();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="mb-6">
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink">
          <span className="text-neon">#</span> Projects
        </h2>
      </div>

      {/* ── Featured: infrastructure ─────────────────────────── */}
      <div className="flex items-center gap-2 mb-3 font-mono text-xs text-ink-dim">
        <Boxes className="h-3.5 w-3.5 text-neon" />
        <span className="tracking-widest text-neon/90">// INFRASTRUCTURE</span>
        <span className="text-ink-faint">· XBrain × AWS Accelerator</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 mb-8">
        {INFRA_PROJECTS.map((p) => (
          <article
            key={p.name}
            onMouseMove={onMove}
            className="project-card spotlight-card group terminal-frame rounded-md p-5 sm:p-6 relative transition-all border-neon/25 hover:border-neon/60 hover:shadow-neon-sm"
          >
            <span className="corner-tl" />
            <span className="corner-tr" />
            <span className="corner-bl" />
            <span className="corner-br" />

            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="min-w-0">
                <div className="font-mono text-[11px] text-ink-faint">
                  ./{p.phase}
                </div>
                <h3 className="font-mono text-lg sm:text-xl mt-1 text-neon break-words">
                  {p.name}
                </h3>
              </div>
              <span
                className={`shrink-0 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm border ${
                  p.status === "live"
                    ? "border-neon/40 bg-neon/[0.06] text-neon"
                    : "border-line text-ink-dim"
                }`}
              >
                {p.status === "live" && (
                  <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
                )}
                {p.status}
              </span>
            </div>

            <p className="text-ink-dim text-sm leading-relaxed">{p.tagline}</p>

            <ul className="mt-3 space-y-1.5">
              {p.points.map((pt) => (
                <li
                  key={pt}
                  className="text-xs sm:text-[13px] flex items-start gap-2 text-ink-dim"
                >
                  <span className="text-neon/70 shrink-0 font-mono mt-0.5">└─</span>
                  <span className="break-words">{pt}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-line/70 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] px-1.5 py-0.5 rounded-sm border border-neon/25 text-ink-dim bg-neon/[0.03]"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* ── Application projects ─────────────────────────────── */}
      <div className="flex items-center gap-2 mb-3 font-mono text-xs text-ink-dim">
        <AppWindow className="h-3.5 w-3.5 text-ink-faint" />
        <span className="tracking-widest text-ink-dim">// APP DEV</span>
        <span className="text-ink-faint">· fullstack background</span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        {APP_PROJECTS.map((p) => (
          <article
            key={p.name}
            onMouseMove={onMove}
            className="project-card spotlight-card group terminal-frame rounded-md p-5 relative transition-all hover:border-ink-faint/50"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <div className="font-mono text-[11px] text-ink-faint">
                  ./projects/{p.name.toLowerCase().replace(/\s+/g, "-")}
                </div>
                <h3 className="font-mono text-lg mt-1 text-ink">{p.name}</h3>
              </div>
            </div>

            <p className="text-ink-dim text-sm leading-relaxed min-h-[42px]">
              {p.tagline}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] px-1.5 py-0.5 rounded-sm border border-line text-ink-dim bg-bg-soft/40"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-line/70 flex items-center gap-3 font-mono text-xs">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} on GitHub`}
                  className="inline-flex items-center gap-1.5 text-ink-dim hover:text-neon transition-colors"
                >
                  <Github className="h-3.5 w-3.5" /> github
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} live site`}
                  className="inline-flex items-center gap-1.5 text-ink-dim hover:text-amber transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> live
                </a>
              )}
              <span className="ml-auto text-ink-faint flex items-center gap-1.5">
                <Radar className="h-3 w-3" />
                shipped
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
