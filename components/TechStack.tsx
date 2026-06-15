"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

const CURRENT = [
  "Java",
  "JavaScript / TypeScript",
  "React",
  "Node.js",
  "MongoDB",
  "SQL Server",
  "Git",
  "REST APIs",
  "Socket.IO",
];

const LEARNING = [
  "AWS · EC2",
  "AWS · S3",
  "AWS · Lambda",
  "AWS · IAM",
  "GitHub Actions",
  "Docker",
  "Linux",
  "Cloud Architecture",
  "DevOps Pipelines",
];

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
  tone: "neon" | "amber";
  icon: typeof Cpu;
}) {
  const toneText = tone === "neon" ? "text-neon" : "text-amber";
  const toneBorder = tone === "neon" ? "border-neon/40" : "border-amber/40";
  const toneBg = tone === "neon" ? "bg-neon/[0.04]" : "bg-amber/[0.04]";
  const toneHover =
    tone === "neon"
      ? "hover:border-neon/70 hover:bg-neon/[0.08] hover:shadow-neon-sm"
      : "hover:border-amber/70 hover:bg-amber/[0.08] hover:shadow-amber-sm";

  return (
    <div className="terminal-frame rounded-md p-5 sm:p-6 relative">
      <span className="corner-tl" />
      <span className="corner-tr" />
      <span className="corner-bl" />
      <span className="corner-br" />

      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-line/70">
        <Icon className={cn("h-4 w-4", toneText)} />
        <div>
          <div className={cn("font-mono text-sm", toneText)}>{title}</div>
          <div className="text-[11px] font-mono text-ink-faint">{subtitle}</div>
        </div>
      </div>

      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-sm border transition-all cursor-default",
                toneBorder,
                toneBg,
                toneHover
              )}
            >
              <span className={cn("h-1.5 w-1.5 rounded-full", tone === "neon" ? "bg-neon" : "bg-amber")} />
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
    <section id="stack" className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="mb-6">
        <div className="font-mono text-xs text-ink-faint mb-2">
          <span className="text-neon">$</span> ls -la ./skills/
        </div>
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink">
          <span className="text-ink-dim">#</span>{" "}
          <span className="text-glow-neon text-neon">Tech Stack</span>
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-5 lg:gap-6"
      >
        <Column
          title="// CURRENT"
          subtitle="shipped & in production"
          items={CURRENT}
          tone="neon"
          icon={Cpu}
        />
        <Column
          title="// LEARNING via AWS Program"
          subtitle="building toward cloud_ops"
          items={LEARNING}
          tone="amber"
          icon={Cloud}
        />
      </motion.div>
    </section>
  );
}
