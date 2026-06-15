"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import Link from "next/link";

type BootLine = {
  prompt: string;
  text: string;
  value?: string;
  tone: "dim" | "neon" | "amber";
};

const BOOT_LINES: BootLine[] = [
  { prompt: ">", text: "initializing portfolio.sh...", tone: "dim" },
  { prompt: ">", text: "loading profile: ", value: "PHAN LE THANH HOANG", tone: "neon" },
  { prompt: ">", text: "role: ", value: "devops_engineer | cloud_ops_trainee", tone: "amber" },
  { prompt: ">", text: "location: ", value: "Da Nang, Vietnam 🇻🇳", tone: "dim" },
  { prompt: ">", text: "status: ", value: "AVAILABLE FOR HIRE ✓", tone: "neon" },
];

const CHAR_DELAY = 18;
const LINE_DELAY = 220;

function useTypewriter(lines: BootLine[]) {
  const [completedLines, setCompletedLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (completedLines >= lines.length) {
      setDone(true);
      return;
    }
    const line = lines[completedLines];
    const fullText = line.text + (line.value ?? "");
    let i = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      i += 1;
      setCurrentText(fullText.slice(0, i));
      if (i < fullText.length) {
        setTimeout(tick, CHAR_DELAY);
      } else {
        setTimeout(() => {
          if (cancelled) return;
          setCompletedLines((c) => c + 1);
          setCurrentText("");
        }, LINE_DELAY);
      }
    };

    const startTimer = setTimeout(tick, completedLines === 0 ? 350 : 80);
    return () => {
      cancelled = true;
      clearTimeout(startTimer);
    };
  }, [completedLines, lines]);

  return { completedLines, currentText, done };
}

function toneClass(tone: string) {
  switch (tone) {
    case "neon":
      return "text-neon text-glow-neon";
    case "amber":
      return "text-amber text-glow-amber";
    default:
      return "text-ink-dim";
  }
}

export default function Hero() {
  const { completedLines, currentText, done } = useTypewriter(BOOT_LINES);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
    >
      {/* ─── Layered background ─────────────────────────────── */}
      <div className="absolute inset-0 z-0 grid-bg constellation-bg" aria-hidden />
      <div className="absolute inset-0 z-0 stars-bg opacity-60 animate-drift" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.22] animate-flicker"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(0,255,148,0.22), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(245,166,35,0.14), transparent 60%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent animate-scan" />
      </div>

      {/* ─── Corner frame accents ───────────────────────────── */}
      <span className="frame-corner tl" aria-hidden />
      <span className="frame-corner tr" aria-hidden />
      <span className="frame-corner bl" aria-hidden />
      <span className="frame-corner br" aria-hidden />

      {/* ─── Hero internal header (UIMIX-style brand row) ───── */}
      <div className="relative z-10 border-b border-ink/15 bg-bg/30 backdrop-blur-[2px] mt-14">
        <div className="container mx-auto px-4 lg:px-10 py-3 lg:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="font-mono text-ink text-xl lg:text-2xl font-bold tracking-[0.3em] italic -skew-x-12 select-none">
              HOANG<span className="text-neon">.</span>OPS
            </div>
            <div className="h-3 lg:h-4 w-px bg-ink/40" />
            <span className="text-ink-faint text-[8px] lg:text-[10px] font-mono tracking-widest">
              EST. 2026
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-[10px] font-mono text-ink-faint">
            <span>LAT: 16.0544°N</span>
            <div className="w-1 h-1 bg-ink-faint/70 rounded-full" />
            <span>LONG: 108.2022°E</span>
            <div className="w-1 h-1 bg-ink-faint/70 rounded-full" />
            <span className="text-neon/80">ap-southeast-1</span>
          </div>
        </div>
      </div>

      {/* ─── Main hero content ──────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 lg:py-14">
        <div className="w-full max-w-5xl mx-auto">
          {/* infinity flourish */}
          <div className="flex items-center gap-2 mb-4 opacity-70">
            <div className="w-8 h-px bg-ink/70" />
            <span className="text-ink text-[10px] font-mono tracking-widest">∞</span>
            <div className="flex-1 h-px bg-ink/30" />
            <span className="text-neon/80 text-[10px] font-mono tracking-widest">
              BOOT_SEQUENCE.LOG
            </span>
          </div>

          {/* Terminal card */}
          <div className="terminal-frame rounded-md p-5 sm:p-7 md:p-9 scanline relative overflow-hidden">
            <span className="corner-tl" />
            <span className="corner-tr" />
            <span className="corner-bl" />
            <span className="corner-br" />

            <div className="flex items-center gap-2 pb-4 border-b border-line/60 mb-5">
              <span className="h-3 w-3 rounded-full bg-danger/80" />
              <span className="h-3 w-3 rounded-full bg-amber/80" />
              <span className="h-3 w-3 rounded-full bg-neon/80" />
              <div className="ml-3 text-[11px] sm:text-xs font-mono text-ink-dim flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5" />
                <span>~/hoang/portfolio.sh</span>
              </div>
              <div className="ml-auto text-[11px] sm:text-xs font-mono text-ink-faint tracking-widest">
                tty/01
              </div>
            </div>

            <div className="font-mono text-sm sm:text-base md:text-lg leading-relaxed min-h-[240px] sm:min-h-[220px]">
              {BOOT_LINES.slice(0, completedLines).map((line, idx) => (
                <div key={idx} className="flex flex-wrap gap-x-2">
                  <span className="text-neon/70 select-none">{line.prompt}</span>
                  <span className="text-ink-dim">{line.text}</span>
                  {line.value ? (
                    <span className={toneClass(line.tone)}>{line.value}</span>
                  ) : null}
                </div>
              ))}
              {!done && completedLines < BOOT_LINES.length && (
                <div className="flex flex-wrap gap-x-2">
                  <span className="text-neon/70 select-none">
                    {BOOT_LINES[completedLines].prompt}
                  </span>
                  <span className="text-ink">{currentText}</span>
                  <span className="inline-block w-2 h-5 bg-neon align-middle animate-blink translate-y-0.5" />
                </div>
              )}
              {done && (
                <div className="flex flex-wrap gap-x-2 mt-1">
                  <span className="text-neon/70 select-none">$</span>
                  <span className="inline-block w-2 h-5 bg-neon align-middle animate-blink translate-y-0.5" />
                </div>
              )}
            </div>
          </div>

          {/* dotted decoration */}
          <div className="hidden lg:flex gap-1 mt-5 opacity-50">
            {Array.from({ length: 56 }).map((_, i) => (
              <div
                key={i}
                className={`w-0.5 h-0.5 rounded-full ${
                  i % 7 === 0 ? "bg-neon" : i % 11 === 0 ? "bg-amber" : "bg-ink/70"
                }`}
              />
            ))}
          </div>

          {/* Title + description */}
          <div className="relative mt-6 lg:mt-7">
            <div className="hidden lg:block absolute -left-3 top-0 bottom-0 w-1 dither-pattern opacity-50" />
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: done ? 1 : 0.4, y: done ? 0 : 8 }}
              transition={{ duration: 0.5 }}
              className="font-mono font-bold text-ink text-2xl sm:text-3xl md:text-5xl tracking-[0.18em] leading-tight"
            >
              ENDLESS{" "}
              <span className="text-glow-neon text-neon">DEPLOYMENT</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: done ? 0.85 : 0, y: done ? 0 : 6 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-ink-dim text-sm sm:text-base font-mono mt-3 max-w-2xl leading-relaxed"
            >
              Frontend engineer pivoting into <span className="text-neon">cloud</span> &amp;{" "}
              <span className="text-amber">DevOps</span>. Every pipeline, every container,
              every IAM policy — pushed forward, one commit at a time.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: done ? 1 : 0, y: done ? 0 : 8 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 rounded-sm border border-neon/60 bg-neon/[0.06] px-5 py-2.5 text-sm font-mono text-neon hover:bg-neon hover:text-bg hover:shadow-neon-md transition-all"
            >
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-neon opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-neon opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-current/70">[</span>
              <span>VIEW PROJECTS</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="text-current/70">]</span>
            </Link>
            <a
              href="/cv/Phan-Le-Thanh-Hoang-CV.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-2 rounded-sm border border-amber/60 bg-amber/[0.06] px-5 py-2.5 text-sm font-mono text-amber hover:bg-amber hover:text-bg hover:shadow-amber-sm transition-all"
            >
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-amber opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-amber opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-current/70">[</span>
              <Download className="h-4 w-4" />
              <span>DOWNLOAD CV</span>
              <span className="text-current/70">]</span>
            </a>
          </motion.div>

          {/* protocol notation */}
          <div className="hidden lg:flex items-center gap-2 mt-7 opacity-50">
            <span className="text-ink text-[9px] font-mono">∞</span>
            <div className="flex-1 h-px bg-ink/30" />
            <span className="text-neon/80 text-[9px] font-mono tracking-widest">
              HOANG.PROTOCOL
            </span>
            <div className="w-8 h-px bg-ink/70" />
          </div>
        </div>
      </div>

      {/* ─── Hero internal footer (status bar) ──────────────── */}
      <div className="relative z-10 border-t border-ink/15 bg-bg/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-10 py-2 lg:py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-6 text-[8px] lg:text-[10px] font-mono text-ink-faint">
            <span className="flex items-center gap-1.5 text-neon/85">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neon" />
              </span>
              <span className="hidden sm:inline">SYSTEM.ACTIVE</span>
              <span className="sm:hidden">SYS.ACT</span>
            </span>
            <div className="hidden lg:flex items-end gap-0.5 h-3.5">
              {[6, 11, 8, 13, 5, 12, 9, 14].map((h, i) => (
                <span
                  key={i}
                  className="block w-0.5 bg-ink/60 animate-audio"
                  style={{
                    height: `${h}px`,
                    animationDelay: `${i * 0.12}s`,
                    animationDuration: `${1 + (i % 3) * 0.2}s`,
                  }}
                />
              ))}
            </div>
            <span>V1.0.0</span>
          </div>

          <div className="flex items-center gap-2 lg:gap-4 text-[8px] lg:text-[10px] font-mono text-ink-faint">
            <span className="hidden lg:inline text-amber/80">◐ RENDERING</span>
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-neon/80 rounded-full animate-pulse" />
              <span
                className="w-1 h-1 bg-neon/60 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="w-1 h-1 bg-neon/30 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </span>
            <span className="hidden sm:inline">UPTIME: ∞</span>
          </div>
        </div>
      </div>
    </section>
  );
}
