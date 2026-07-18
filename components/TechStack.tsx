"use client";

import { Cloud, Cpu, Eye, Boxes } from "lucide-react";
import { cn } from "@/lib/utils";

const CLOUD = [
  "AWS EC2",
  "S3",
  "RDS",
  "DynamoDB",
  "VPC",
  "IAM",
  "KMS",
  "Lambda",
  "ECR",
  "Amazon Bedrock",
];

const DEVOPS = [
  "Terraform (IaC)",
  "Docker",
  "Kubernetes (K8s/EKS)",
  "Helm",
  "GitOps (ArgoCD)",
  "GitHub Actions",
  "Argo Rollouts (Canary)",
];

const OBS = [
  "OpenTelemetry",
  "Prometheus / Grafana",
  "Loki",
  "SLO / Burn-rate Alerts",
  "AWS CloudWatch",
  "CloudTrail",
  "OPA / Gatekeeper",
  "Trivy + Cosign",
  "External Secrets",
  "Cost Guard (Lambda + EventBridge)",
];

const APPDEV = [
  "React 18",
  "TypeScript",
  "Redux Toolkit",
  "Node.js",
  "Socket.IO",
  "MongoDB",
  "SQL Server",
];

type Tone = "neon" | "amber" | "blue";

const toneMap: Record<
  Tone,
  {
    text: string;
    border: string;
    bg: string;
    hover: string;
    dot: string;
    shadow: string;
  }
> = {
  neon: {
    text: "text-neon",
    border: "border-neon/40",
    bg: "bg-neon/[0.04]",
    hover: "hover:border-neon/70 hover:bg-neon/[0.08] hover:shadow-neon-sm",
    dot: "bg-neon",
    shadow: "shadow-neon-sm",
  },
  amber: {
    text: "text-amber",
    border: "border-amber/40",
    bg: "bg-amber/[0.04]",
    hover: "hover:border-amber/70 hover:bg-amber/[0.08] hover:shadow-amber-sm",
    dot: "bg-amber",
    shadow: "shadow-amber-sm",
  },
  blue: {
    text: "text-sky-400",
    border: "border-sky-400/40",
    bg: "bg-sky-400/[0.04]",
    hover:
      "hover:border-sky-400/70 hover:bg-sky-400/[0.08] hover:shadow-[0_0_0_1px_rgba(56,189,248,0.4),0_0_14px_-2px_rgba(56,189,248,0.5)]",
    dot: "bg-sky-400",
    shadow: "",
  },
};

function Column({
  title,
  subtitle,
  items,
  tone,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  items: string[];
  tone: Tone;
  icon: typeof Cpu;
}) {
  const t = toneMap[tone];

  return (
    <div className="terminal-frame rounded-md p-5 sm:p-6 relative">
      <span className="corner-tl" />
      <span className="corner-tr" />
      <span className="corner-bl" />
      <span className="corner-br" />

      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-line/70">
        <Icon className={cn("h-4 w-4", t.text)} />
        <div>
          <div className={cn("font-mono text-sm", t.text)}>{title}</div>
          <div className="text-[11px] font-mono text-ink-faint">{subtitle}</div>
        </div>
      </div>

      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="skill-badge">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-sm border transition-all cursor-default",
                t.border,
                t.bg,
                t.hover
              )}
            >
              <span className={cn("h-1.5 w-1.5 rounded-full", t.dot)} />
              <span className="text-ink">{item}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="mb-6">
        <div className="font-mono text-xs text-ink-faint mb-2">
          <span className="text-neon">$</span> ls -la ./skills/ --recursive
        </div>
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink">
          <span className="text-ink-dim">#</span>{" "}
          <span className="text-glow-neon text-neon">Tech Stack</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
        <Column
          title="// CLOUD PLATFORM"
          subtitle="aws · core services"
          items={CLOUD}
          tone="neon"
          icon={Cloud}
        />
        <Column
          title="// DEVOPS & AUTOMATION"
          subtitle="iac · containers · cd"
          items={DEVOPS}
          tone="amber"
          icon={Boxes}
        />
        <Column
          title="// OBSERVABILITY & SECURITY"
          subtitle="slo · supply-chain · cost"
          items={OBS}
          tone="blue"
          icon={Eye}
        />
      </div>

      {/* Supporting row — App Dev background */}
      <div className="mt-5 lg:mt-6 border border-dashed border-line/70 rounded-md p-4 sm:p-5 bg-bg-soft/20">
        <div className="flex items-center gap-2 mb-3">
          <Cpu className="h-3.5 w-3.5 text-ink-faint" />
          <span className="font-mono text-xs text-ink-faint">
            // APP DEV — supporting role
          </span>
          <span className="ml-auto font-mono text-[10px] text-ink-faint/70">
            ./background
          </span>
        </div>
        <ul className="flex flex-wrap gap-1.5">
          {APPDEV.map((item) => (
            <li key={item} className="skill-badge">
              <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded-sm border border-line text-ink-dim/80 bg-bg/40 hover:text-ink hover:border-ink-faint/60 transition-colors cursor-default">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
