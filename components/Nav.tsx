"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#home", label: "~/home" },
  { href: "#about", label: "~/about" },
  { href: "#stack", label: "~/stack" },
  { href: "#experience", label: "~/ops_log" },
  { href: "#aws", label: "~/accelerator" },
  { href: "#projects", label: "~/projects" },
  { href: "#education", label: "~/edu" },
  { href: "#contact", label: "~/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors",
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-line/80"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 h-14 flex items-center gap-4">
        <Link
          href="#home"
          className="flex items-center gap-2 font-mono text-sm text-neon hover:text-glow-neon transition-colors"
        >
          <Terminal className="h-4 w-4" />
          <span>hoang@cloud</span>
          <span className="text-ink-dim">:~$</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link px-2.5 py-1 font-mono text-xs text-ink-dim hover:text-neon hover:bg-neon/[0.06] rounded-sm transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden md:flex items-center gap-3 font-mono text-[11px] text-ink-faint">
          <span className="hidden xl:inline tracking-widest">16.05°N · 108.20°E</span>
          <span className="hidden xl:inline text-line">|</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-neon/80">online</span>
          </span>
          <span className="text-line">|</span>
          <span>{time} ICT</span>
        </div>

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden ml-auto inline-flex items-center justify-center h-9 w-9 rounded-sm border border-line text-ink-dim hover:text-neon hover:border-neon/60"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line/80 bg-bg/95 backdrop-blur-md">
          <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 grid grid-cols-2 gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="nav-link px-3 py-2 font-mono text-xs text-ink-dim hover:text-neon hover:bg-neon/[0.06] rounded-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
