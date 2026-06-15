"use client";

import {
  Boxes,
  Brain,
  Calendar,
  Cloud,
  CloudCog,
  Cpu,
  MapPin,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const DELIVERABLES = [
  {
    icon: ShieldCheck,
    title: "3-tier HA architecture on AWS",
    desc: "Multi-AZ VPC failover with hardened IAM, KMS, and security groups.",
  },
  {
    icon: CloudCog,
    title: "Terraform IaC",
    desc: "Zero manual provisioning. Remote state, modules, reproducible environments.",
  },
  {
    icon: Boxes,
    title: "Kubernetes on EKS",
    desc: "Auto-scaling cluster with isolated workloads and rolling deployments.",
  },
  {
    icon: Brain,
    title: "Amazon Bedrock RAG pipeline",
    desc: "Knowledge Base + retrieval-augmented AI embedded into app backend.",
  },
  {
    icon: Wallet,
    title: "Cost Guard automation",
    desc: "Lambda + EventBridge real-time budget alerts with CloudWatch dashboards.",
  },
];

export default function AWSProgram() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="mb-6">
        <div className="font-mono text-xs text-ink-faint mb-2">
          <span className="text-neon">$</span> aws describe-program
          --name xbrain-accelerator
        </div>
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink">
          <span className="text-ink-dim">#</span>{" "}
          <span className="text-glow-amber text-amber">XBrain × AWS Accelerator</span>
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

          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-7 lg:gap-10">
            <div>
              <p className="text-ink-dim text-base sm:text-lg leading-relaxed">
                Real, production-style cloud work — not slideware. Designing
                hardened, cost-aware AWS infrastructure with{" "}
                <span className="text-neon font-mono">Terraform</span>,{" "}
                <span className="text-amber font-mono">Kubernetes</span>, and{" "}
                <span className="text-ink font-mono">Bedrock</span>. Below is
                what's been built and shipped under this program.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
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
                  <div className="text-ink-faint">duration</div>
                  <div className="text-amber text-base mt-0.5">4 – 6 months</div>
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
            </div>

            {/* deliverables list */}
            <div className="space-y-2.5">
              <div className="font-mono text-[11px] text-ink-faint mb-1 flex items-center gap-2">
                <span className="text-neon">$</span>
                <span>cat deliverables.md</span>
              </div>
              {DELIVERABLES.map((d) => (
                <div
                  key={d.title}
                  className="group relative border border-line rounded-sm p-3.5 bg-bg-soft/40 hover:border-neon/60 hover:bg-neon/[0.04] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 grid place-items-center rounded-sm border border-neon/40 bg-neon/[0.08] text-neon shrink-0">
                      <d.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-sm text-ink truncate">
                        {d.title}
                      </div>
                      <div className="text-xs text-ink-dim mt-0.5 leading-relaxed">
                        {d.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
