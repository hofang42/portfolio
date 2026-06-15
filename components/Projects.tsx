"use client";

import { Github, ExternalLink, Sparkles } from "lucide-react";

type Project = {
  name: string;
  tagline: string;
  stack: string[];
  github?: string;
  live?: string;
  accent: "neon" | "amber";
};

const PROJECTS: Project[] = [
  {
    name: "GZMart",
    tagline:
      "Multi-role e-commerce platform with AI features (Gemini AI, Google Vision).",
    stack: [
      "React 18",
      "TypeScript",
      "Tailwind",
      "Redux",
      "Socket.IO",
      "Ant Design",
      "Gemini AI",
    ],
    github: "https://github.com/hofang42",
    accent: "neon",
  },
  {
    name: "FLearning",
    tagline:
      "Online learning platform with real-time chat & GitHub Actions CI/CD pipeline.",
    stack: [
      "React",
      "Redux Toolkit",
      "Socket.IO",
      "Vercel",
      "GitHub Actions",
    ],
    github: "https://github.com/hofang42",
    accent: "amber",
  },
  {
    name: "VIC SPORT",
    tagline: "Online sports booking with Google Maps & OAuth integrations.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Ant Design",
      "Google Maps API",
      "Socket.IO",
    ],
    github: "https://github.com/hofang42",
    accent: "neon",
  },
  {
    name: "TourHub",
    tagline: "Tour booking website with VietQR payment integration.",
    stack: ["Java Servlet", "JSP", "SQL Server", "VietQR"],
    github: "https://github.com/hofang42",
    accent: "amber",
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="mb-6">
        <div className="font-mono text-xs text-ink-faint mb-2">
          <span className="text-neon">$</span> ls ./projects | grep -v archive
        </div>
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink">
          <span className="text-ink-dim">#</span>{" "}
          <span className="text-glow-neon text-neon">Projects</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        {PROJECTS.map((p, i) => {
          const isNeon = p.accent === "neon";
          const accentText = isNeon ? "text-neon" : "text-amber";
          const accentBorder = isNeon ? "hover:border-neon/60" : "hover:border-amber/60";
          const accentShadow = isNeon ? "hover:shadow-neon-sm" : "hover:shadow-amber-sm";
          return (
            <article
              key={p.name}
              className={`project-card group terminal-frame rounded-md p-5 sm:p-6 relative transition-all ${accentBorder} ${accentShadow}`}
            >
              <span className="corner-tl" />
              <span className="corner-tr" />
              <span className="corner-bl" />
              <span className="corner-br" />

              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="font-mono text-[11px] text-ink-faint">
                    ./projects/{p.name.toLowerCase().replace(/\s+/g, "-")}
                  </div>
                  <h3
                    className={`font-mono text-xl sm:text-2xl mt-1 ${accentText}`}
                  >
                    {p.name}
                  </h3>
                </div>
                <Sparkles
                  className={`h-4 w-4 ${accentText} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </div>

              <p className="text-ink-dim text-sm leading-relaxed min-h-[42px]">
                {p.tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] px-1.5 py-0.5 rounded-sm border border-line text-ink-dim bg-bg-soft/40"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-line/70 flex items-center gap-3 font-mono text-xs">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
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
                    className="inline-flex items-center gap-1.5 text-ink-dim hover:text-amber transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> live
                  </a>
                )}
                <span className="ml-auto text-ink-faint">
                  build:{" "}
                  <span className={accentText}>
                    {isNeon ? "passing" : "stable"}
                  </span>
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
