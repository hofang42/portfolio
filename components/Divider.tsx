"use client";

type Props = {
  label?: string;
  cmd?: string;
};

export default function Divider({ label, cmd }: Props) {
  return (
    <div
      aria-hidden
      className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 my-10 sm:my-14"
    >
      <div className="flex items-center gap-3 font-mono text-[11px] sm:text-xs text-ink-faint">
        <span className="text-neon/60">─┤</span>
        {label && (
          <span className="text-neon/80 tracking-[0.3em]">{label}</span>
        )}
        <span className="text-neon/60">├─</span>
        <span className="ascii-divider flex-1 truncate">
          ─────────────────────────────────────────────────────────────────────
        </span>
        {cmd && (
          <span className="hidden sm:inline whitespace-nowrap">
            <span className="text-neon">$</span> {cmd}
          </span>
        )}
      </div>
    </div>
  );
}
