"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
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
  { prompt: ">", text: "role: ", value: "devops_engineer | cloudops_intern @ XBrain x AWS", tone: "amber" },
  { prompt: ">", text: "stack: ", value: "terraform | k8s | argocd | helm | aws | otel", tone: "dim" },
  { prompt: ">", text: "location: ", value: "Da Nang, Vietnam", tone: "dim" },
  { prompt: ">", text: "status: ", value: "ACTIVELY BUILDING CLOUD INFRA ✓", tone: "neon" },
];

const CHAR_DELAY = 18;
const LINE_DELAY = 220;

function useTypewriter(lines: BootLine[]) {
  const [completedLines, setCompletedLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [done, setDone] = useState(false);
  const reduceMotion = useReducedMotion();

  const skip = () => {
    setCompletedLines(lines.length);
    setCurrentText("");
    setDone(true);
  };

  useEffect(() => {
    if (reduceMotion) {
      skip();
      return;
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedLines, lines, reduceMotion]);

  return { completedLines, currentText, done, skip };
}

/* ─── animated metric counter ──────────────────────────────────── */

function CountUp({
  to,
  decimals = 0,
  suffix = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // safety net: always land on the final value even if the observer
    // or animation frames never fire (hidden tab, old browser)
    const fallback = window.setTimeout(() => {
      el.textContent = to.toFixed(decimals) + suffix;
    }, 3000);
    if (!inView) return () => window.clearTimeout(fallback);
    if (reduceMotion) {
      el.textContent = to.toFixed(decimals) + suffix;
      return () => window.clearTimeout(fallback);
    }
    const controls = animate(0, to, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = v.toFixed(decimals) + suffix;
      },
    });
    return () => {
      window.clearTimeout(fallback);
      controls.stop();
    };
  }, [inView, to, decimals, suffix, reduceMotion]);

  // initial content is always "0" so server and client markup match;
  // the effect fills in the final value (instantly under reduced motion)
  return (
    <span ref={ref} className="tabular-nums">
      {"0" + suffix}
    </span>
  );
}

const METRICS: Array<{
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  tone: "neon" | "amber" | "ink";
}> = [
  { value: 18, label: "microservices in production ops", tone: "neon" },
  { value: 3, label: "accelerator phases · P3 live", tone: "amber" },
  { value: 10, suffix: "+", label: "AWS services deployed", tone: "ink" },
  { value: 8.62, decimals: 2, label: "GPA @ FPT University", tone: "ink" },
];

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
  const { completedLines, currentText, done, skip } = useTypewriter(BOOT_LINES);

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col">
      {/* ─── Layered background ─────────────────────────────── */}
      <div className="parallax-hero-bg absolute inset-0 z-0 grid-bg constellation-bg" aria-hidden />
      <div className="parallax-hero-bg absolute inset-0 z-0 stars-bg opacity-60" aria-hidden />
      <div
        aria-hidden
        className="parallax-hero-bg pointer-events-none absolute inset-0 z-0 opacity-[0.22]"
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
            <div className="font-mono text-ink text-xl lg:text-2xl font-bold tracking-[0.3em] select-none">
              HOANG<span className="text-neon">.</span>OPS
            </div>
            <div className="h-3 lg:h-4 w-px bg-ink/40" />
            <span className="text-ink-faint text-[10px] font-mono tracking-widest">
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
          <div
            className={`terminal-frame rounded-md p-5 sm:p-7 md:p-9 scanline relative overflow-hidden ${
              done ? "" : "cursor-pointer"
            }`}
            onClick={() => !done && skip()}
          >
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
                {done ? (
                  "tty/01"
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      skip();
                    }}
                    className="text-ink-faint hover:text-neon transition-colors"
                  >
                    [ skip ]
                  </button>
                )}
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

          {/* Title + description */}
          <div className="relative mt-6 lg:mt-7">
            <div className="hidden lg:block absolute -left-3 top-0 bottom-0 w-1 dither-pattern opacity-50" />
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-mono font-bold text-ink text-2xl sm:text-3xl md:text-5xl tracking-[0.18em] leading-tight"
            >
              <span className="sr-only">
                Phan Lê Thanh Hoàng, DevOps &amp; Cloud Engineer.{" "}
              </span>
              ENDLESS{" "}
              <span className="text-glow-neon text-neon">DEPLOYMENT</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-ink-dim text-sm sm:text-base mt-3 max-w-2xl leading-relaxed"
            >
              CloudOps intern @{" "}
              <span className="text-amber font-mono">XBrain × AWS Accelerator</span>:
              building HA infrastructure with{" "}
              <span className="text-neon font-mono">Terraform</span>,{" "}
              <span className="text-neon font-mono">Kubernetes</span> &amp; GitOps,
              operating a live 18-microservice AI storefront.
            </motion.p>
          </div>

          {/* Metrics strip */}
          <motion.dl
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 grid grid-cols-2 lg:grid-cols-4 border border-line/80 rounded-sm bg-bg-soft/30 overflow-hidden"
          >
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className={`px-4 py-3 flex flex-col border-line/60 ${
                  i % 2 === 1 ? "border-l" : ""
                } ${i >= 2 ? "border-t lg:border-t-0" : ""} ${
                  i === 2 ? "lg:border-l" : ""
                }`}
              >
                <dt className="order-2 font-mono text-[10px] leading-snug text-ink-dim mt-1">
                  {m.label}
                </dt>
                <dd
                  className={`order-1 font-mono text-xl sm:text-2xl ${
                    m.tone === "neon"
                      ? "text-neon"
                      : m.tone === "amber"
                        ? "text-amber"
                        : "text-ink"
                  }`}
                >
                  <CountUp
                    to={m.value}
                    decimals={m.decimals ?? 0}
                    suffix={m.suffix ?? ""}
                  />
                </dd>
              </div>
            ))}
          </motion.dl>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
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
              href="/cv/Phan-Le-Thanh-Hoang-CV-2026.pdf"
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

        </div>
      </div>

      {/* ─── Hero internal footer (status bar) ──────────────── */}
      <div className="relative z-10 border-t border-ink/15 bg-bg/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-10 py-2 lg:py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-6 text-[10px] font-mono text-ink-faint">
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
            <span>V2.0.0</span>
          </div>

          <div className="flex items-center gap-2 lg:gap-4 text-[10px] font-mono text-ink-faint">
            <span className="hidden lg:inline">18 services · gRPC + Kafka</span>
            <span className="hidden lg:inline text-line">|</span>
            <span className="hidden sm:inline text-amber/90">on-call</span>
            <span className="hidden sm:inline text-line">|</span>
            <span>ap-southeast-1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
