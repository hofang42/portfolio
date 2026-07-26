"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal, Command as CommandIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import CommandPalette, { usePalette } from "@/components/CommandPalette";

const NAV_ITEMS = [
  { href: "#home", label: "~/home" },
  { href: "#about", label: "~/about" },
  { href: "#experience", label: "~/ops_log" },
  { href: "#aws", label: "~/accelerator" },
  { href: "#projects", label: "~/projects" },
  { href: "#stack", label: "~/stack" },
  { href: "#education", label: "~/edu" },
  { href: "#contact", label: "~/contact" },
];

function Clock() {
  const [time, setTime] = useState<string>("");

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

  return <span>{time} ICT</span>;
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const palette = usePalette();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
          className="flex items-center gap-2 font-mono text-sm text-neon transition-colors"
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

        <div className="ml-auto hidden md:flex items-center gap-3 font-mono text-[11px] text-ink-faint whitespace-nowrap">
          <button
            onClick={() => palette.setOpen(true)}
            aria-label="Open command palette"
            className="group inline-flex items-center gap-1.5 rounded-sm border border-line bg-bg-soft/50 px-2 py-1 text-ink-dim hover:text-neon hover:border-neon/50 transition-colors"
          >
            <CommandIcon className="h-3 w-3" />
            <span className="tracking-wide">K</span>
          </button>
          <span className="text-line">|</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-neon/80">online</span>
          </span>
          <span className="text-line">|</span>
          <Clock />
        </div>

        <div className="lg:hidden ml-auto flex items-center gap-2">
          <button
            onClick={() => palette.setOpen(true)}
            aria-label="Open command palette"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-sm border border-line font-mono text-[11px] text-ink-dim hover:text-neon hover:border-neon/60"
          >
            &gt;_
          </button>
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-sm border border-line text-ink-dim hover:text-neon hover:border-neon/60"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <CommandPalette open={palette.open} setOpen={palette.setOpen} />

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-line/80 bg-bg/95 backdrop-blur-md">
          <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 grid grid-cols-2 gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="nav-link px-3 py-2.5 font-mono text-xs text-ink-dim hover:text-neon hover:bg-neon/[0.06] rounded-sm"
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
