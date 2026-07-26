"use client";

import {
  Calendar,
  Cloud,
  GitBranch,
  MapPin,
  Radar,
} from "lucide-react";

type Phase = {
  tag: string;
  icon: typeof Cloud;
  title: string;
  weeks: string;
  desc: string;
  items: string[];
  accent: "neon" | "amber";
  status: "shipped" | "active";
};

const PHASES: Phase[] = [
  {
    tag: "phase_1",
    icon: Cloud,
    title: "Foundation · AWS Core",
    weeks: "W1–W7",
    desc: "3-tier app hardened week over week, capped by a 48h AI-SaaS hackathon on a personal account under a $100 cap.",
    items: [
      "Well-Architected 6-pillar design · VPC, subnets, IAM least-privilege, KMS",
      "RDS / DynamoDB · Lambda · CloudFormation · S3 storage tiers",
      "Amazon Bedrock Knowledge Bases + RAG over OpenSearch vector store",
      "Network Firewall, VPC Peering / Transit Gateway, Flow Logs, AWS Backup",
      "FinOps: tagging + Cost Explorer, Automated Cost Guard, self-healing security",
    ],
    accent: "neon",
    status: "shipped",
  },
  {
    tag: "phase_2",
    icon: GitBranch,
    title: "Specialization · Cloud / DevOps (CDO)",
    weeks: "W8–W12",
    desc: "Building a mini platform end-to-end: IaC → K8s → GitOps → observability → progressive delivery → cluster-level security.",
    items: [
      "Terraform IaC: remote state (S3 + DynamoDB lock), modules, ADRs",
      "Kubernetes (minikube / EKS) · Helm · GitOps with ArgoCD",
      "GitHub Actions CI/CD · Argo Rollouts canary with metric auto-abort",
      "OpenTelemetry + Prometheus / Grafana / Loki · SLO burn-rate alerts",
      "RBAC + OPA/Gatekeeper · External Secrets · Trivy + Cosign supply chain",
    ],
    accent: "amber",
    status: "shipped",
  },
  {
    tag: "phase_3",
    icon: Radar,
    title: "Service Takeover · Production Ops",
    weeks: "live",
    desc: "Operating a live 18-microservice AI storefront on Kubernetes as a real engineer: own the SLA, run incidents, improve under real constraints.",
    items: [
      "Build → ECR → Helm deploy of a polyglot gRPC + Kafka microservice system",
      "5 pillars: Security · Reliability · Performance · Cost · Auditability",
      "On-call incident response, SLO error budgets, decision logs (ADRs)",
      "Postgres / Valkey / Kafka, OpenTelemetry stack, injected-fault resilience",
    ],
    accent: "neon",
    status: "active",
  },
];

export default function AWSProgram() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="mb-6">
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink">
          <span className="text-amber">#</span> XBrain × AWS Accelerator
        </h2>
      </div>

      <div className="relative rounded-md overflow-hidden border border-amber/40 bg-gradient-to-br from-amber/[0.05] via-bg-soft/30 to-transparent">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 0% 0%, rgba(245,166,35,0.25), transparent 60%)",
          }}
        />

        <div className="relative p-5 sm:p-7 md:p-10">
          {/* meta chips */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-amber/50 bg-amber/[0.08] font-mono text-xs text-amber">
              <Cloud className="h-3.5 w-3.5" />
              AWS · Powered
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-neon/50 bg-neon/[0.08] font-mono text-xs text-neon">
              <Calendar className="h-3.5 w-3.5" />
              Live since: April 2026
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-line font-mono text-xs text-ink-dim">
              <MapPin className="h-3.5 w-3.5" />
              Da Nang · Blended
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-neon/40 bg-neon/[0.06] font-mono text-xs text-neon">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
              actively shipping
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-7 lg:gap-10">
            <div>
              <p className="text-ink-dim text-base sm:text-lg leading-relaxed">
                Real, production-style cloud work, not slideware. A three-phase
                accelerator: build the AWS{" "}
                <span className="text-neon font-mono">foundation</span>,
                specialize on the{" "}
                <span className="text-amber font-mono">Cloud / DevOps</span>{" "}
                track, then{" "}
                <span className="text-ink font-mono">take over a live AI product</span>{" "}
                and operate it under real SLAs, budgets, and incidents.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="border border-line rounded-sm p-3 font-mono text-xs">
                  <div className="text-ink-faint">track</div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm border border-amber/40 bg-amber/[0.06] text-amber text-[11px]">
                      <GitBranch className="h-3 w-3" /> CDO · Cloud/DevOps
                    </span>
                  </div>
                </div>
                <div className="border border-line rounded-sm p-3 font-mono text-xs">
                  <div className="text-ink-faint">structure</div>
                  <div className="text-amber text-base mt-0.5">3 phases</div>
                </div>
                <div className="border border-line rounded-sm p-3 font-mono text-xs">
                  <div className="text-ink-faint">role</div>
                  <div className="text-ink text-base mt-0.5">
                    CloudOps Intern
                  </div>
                </div>
                <div className="border border-line rounded-sm p-3 font-mono text-xs">
                  <div className="text-ink-faint">region</div>
                  <div className="text-ink text-base mt-0.5">
                    ap-southeast-1
                  </div>
                </div>
              </div>

              <div className="mt-4 border border-line rounded-sm p-3.5 font-mono text-xs bg-bg-soft/30">
                <div className="text-ink-faint mb-2">// evaluated on</div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "architecture",
                    "IaC",
                    "GitOps",
                    "observability",
                    "security",
                    "cost",
                    "incident response",
                    "decision defense",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded-sm border border-line text-ink-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* phase timeline */}
            <div className="space-y-2.5">
              <div className="font-mono text-[11px] text-ink-faint mb-1 flex items-center gap-2">
                <span className="text-neon">$</span>
                <span>cat program-phases.md</span>
              </div>
              {PHASES.map((p) => {
                const isNeon = p.accent === "neon";
                const accentText = isNeon ? "text-neon" : "text-amber";
                const accentBorder = isNeon
                  ? "border-neon/40 bg-neon/[0.08]"
                  : "border-amber/40 bg-amber/[0.08]";
                const hoverBorder = isNeon
                  ? "hover:border-neon/60 hover:bg-neon/[0.04]"
                  : "hover:border-amber/60 hover:bg-amber/[0.04]";
                return (
                  <div
                    key={p.tag}
                    className={`group relative border border-line rounded-sm p-4 bg-bg-soft/40 transition-colors ${hoverBorder}`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`h-8 w-8 grid place-items-center rounded-sm border ${accentBorder} ${accentText} shrink-0`}
                      >
                        <p.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-mono text-sm text-ink font-normal">
                            <span className={`${accentText}`}>{p.tag}</span>
                            <span className="text-ink-faint"> · </span>
                            {p.title}
                          </h3>
                          <span
                            className={`font-mono text-[11px] px-1.5 py-0.5 rounded-sm border shrink-0 ${
                              p.status === "active"
                                ? "border-neon/40 bg-neon/[0.06] text-neon"
                                : "border-line text-ink-faint"
                            }`}
                          >
                            {p.weeks}
                          </span>
                        </div>
                        <div className="text-xs text-ink-dim mt-1 leading-relaxed font-sans">
                          {p.desc}
                        </div>
                        <ul className="mt-2.5 space-y-1">
                          {p.items.map((it) => (
                            <li
                              key={it}
                              className="text-[11px] font-mono text-ink-dim/90 flex items-start gap-1.5"
                            >
                              <span className={`${accentText} shrink-0`}>
                                └─
                              </span>
                              <span className="break-words">{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-7 pt-5 border-t border-amber/20 font-mono text-[11px] text-ink-faint flex flex-wrap gap-x-5 gap-y-2">
            <span>
              <span className="text-amber">▲</span> partner: AWS
            </span>
            <span>
              <span className="text-amber">▲</span> operator: XBrain
            </span>
            <span>
              <span className="text-amber">▲</span> region: ap-southeast-1
            </span>
            <span className="ml-auto text-neon">
              ● status: actively shipping
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
