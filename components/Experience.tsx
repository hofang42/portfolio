"use client";

type Entry = {
  range: string;
  title: string;
  role?: string;
  stack?: string;
  highlight?: string;
  bullets?: string[];
  status?: "active" | "shipped";
  featured?: boolean;
};

const ENTRIES: Entry[] = [
  {
    range: "[2026-04 → present]",
    title: "XBrain × AWS Accelerator · Cloud/DevOps Intern",
    role: "Cloud Infrastructure & DevOps (CDO track)",
    bullets: [
      "P1 Foundation: 3-tier HA on AWS with VPC, IAM least-privilege, KMS, RDS/DynamoDB, plus a Bedrock Knowledge Base + RAG pipeline over an OpenSearch vector store.",
      "P2 IaC + K8s: Terraform with remote state (S3 + DynamoDB lock) and modules; Docker + Kubernetes (minikube / EKS) deployed via Helm.",
      "P2 Delivery: GitOps with ArgoCD, GitHub Actions CI/CD, and Argo Rollouts canary that auto-aborts on bad metrics.",
      "P2 Observability & security: OpenTelemetry → Prometheus/Grafana/Loki, SLO burn-rate alerts, RBAC + OPA/Gatekeeper, Trivy/Cosign supply-chain, External Secrets.",
      "P3 Service takeover: operating a live 18-microservice AI storefront (gRPC + Kafka on K8s) with build→ECR→Helm, on-call incident response, cost/SLO under real constraints.",
    ],
    status: "active",
    featured: true,
  },
  {
    range: "[2026-01 → 2026-06]",
    title: "GZMart · E-commerce Platform",
    role: "Fullstack Member",
    stack: "React 18, TypeScript, Tailwind, Redux, Socket.IO, Ant Design",
    highlight: "Multi-role ERP system (Buyer / Seller / Admin)",
    status: "shipped",
  },
  {
    range: "[2025-09 → 2025-12]",
    title: "VIC SPORT · Online Sport Booking",
    role: "Project Lead",
    stack: "React, TypeScript, Vite, Ant Design, Google Maps API, Socket.IO",
    status: "shipped",
  },
  {
    range: "[2025-05 → 2025-09]",
    title: "FLearning · Online Learning Platform",
    role: "Project Lead",
    stack:
      "React.js, Redux Toolkit, Axios, Socket.IO, Vercel, GitHub Actions (CI/CD)",
    highlight: "First CI/CD pipeline with GitHub Actions, the DevOps entry point",
    status: "shipped",
  },
  {
    range: "[2025-01 → 2025-05]",
    title: "FPT Software",
    role: "Frontend Developer Intern",
    status: "shipped",
  },
];

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="mb-6">
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink">
          <span className="text-neon">#</span> Ops Log
        </h2>
        <p className="text-ink-dim mt-2 max-w-2xl text-sm sm:text-base">
          A chronological deployment log of cloud infra built and projects shipped.
        </p>
      </div>

      <div className="terminal-frame rounded-md relative overflow-hidden">
        <div className="px-5 py-3 border-b border-line/70 flex items-center justify-between font-mono text-[11px] text-ink-faint">
          <span>./deployments.log</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-neon/80">streaming</span>
          </span>
        </div>

        <ol className="relative">
          {ENTRIES.map((e, i) => (
            <li
              key={i}
              className={`timeline-entry relative px-5 py-4 sm:py-5 border-b border-line/50 last:border-b-0 transition-colors ${
                e.featured
                  ? "bg-neon/[0.04] border-l-2 border-l-neon shadow-[inset_0_0_24px_-12px_rgba(0,255,148,0.25)] hover:bg-neon/[0.07]"
                  : "hover:bg-bg-soft/40"
              }`}
            >
              {e.featured && (
                <div className="absolute top-3 right-4 flex items-center gap-1.5 font-mono text-[11px] tracking-widest">
                  <span className="text-neon">★</span>
                  <span className="text-neon">FEATURED</span>
                </div>
              )}
              <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-5 font-mono text-sm">
                <div className="flex items-start gap-2 text-ink-faint">
                  <span
                    className={
                      e.status === "active"
                        ? "h-2 w-2 mt-2 rounded-full bg-neon animate-pulse shrink-0"
                        : "h-2 w-2 mt-2 rounded-full bg-ink-faint/60 shrink-0"
                    }
                  />
                  <span
                    className={`text-xs sm:text-sm whitespace-nowrap ${
                      e.featured ? "text-neon/85" : "text-amber/80"
                    }`}
                  >
                    {e.range}
                  </span>
                </div>
                <div className="space-y-1.5 min-w-0">
                  <h3 className="text-ink text-base sm:text-lg break-words font-normal">
                    {e.title}
                    {e.status === "active" && (
                      <span className="ml-2 text-[11px] uppercase tracking-widest text-neon border border-neon/40 bg-neon/[0.06] px-1.5 py-0.5 rounded-sm align-middle">
                        live
                      </span>
                    )}
                  </h3>
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
                      <span className="text-ink-dim break-words font-sans">
                        {e.stack}
                      </span>
                    </div>
                  )}
                  {e.highlight && (
                    <div className="text-xs sm:text-sm flex flex-wrap items-baseline gap-1.5">
                      <span className="text-amber/80">└─</span>
                      <span className="text-amber/80">Highlight:</span>
                      <span className="text-ink">{e.highlight}</span>
                    </div>
                  )}
                  {e.bullets && (
                    <ul className="mt-2 space-y-1.5">
                      {e.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="text-xs sm:text-sm flex items-start gap-2 text-ink-dim"
                        >
                          <span className="text-neon/80 shrink-0 mt-0.5">└─</span>
                          <span className="text-ink/90 break-words font-sans leading-relaxed">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
