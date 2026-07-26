"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-16 border-t border-line/80 bg-bg/60 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 py-5">
        <div className="flex items-center gap-2 mb-3 opacity-60">
          <span className="text-ink text-[10px] font-mono tracking-widest">∞</span>
          <div className="flex-1 h-px bg-ink/30" />
          <span className="text-neon/80 text-[10px] font-mono tracking-widest">
            END.OF.LOG
          </span>
          <div className="w-8 h-px bg-ink/70" />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 font-mono text-[11px] text-ink-faint">
          <div className="flex items-center gap-2">
            <span className="text-neon">$</span>
            <span>
              exit 0 · © {year} Phan Lê Thanh Hoàng
            </span>
          </div>

          <div className="sm:ml-auto flex items-center gap-3 flex-wrap">
            <span>Next.js × Tailwind × Framer Motion</span>
            <span className="hidden sm:inline text-line">|</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
              <span className="text-neon/80">deployed</span>
            </span>
            <span className="hidden sm:inline text-line">|</span>
            <span className="text-amber/80">V2.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
