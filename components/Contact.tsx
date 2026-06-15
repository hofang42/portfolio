"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[portfolio] message from ${name || "anonymous"}`
    );
    const body = encodeURIComponent(message);
    window.location.href = `mailto:hoangplt.work@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
      <div className="mb-6">
        <div className="font-mono text-xs text-ink-faint mb-2">
          <span className="text-neon">$</span> ./contact --interactive
        </div>
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-ink">
          <span className="text-ink-dim">#</span>{" "}
          <span className="text-glow-neon text-neon">Contact</span>
          <span className="animate-blink text-neon">_</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-5 lg:gap-6">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="terminal-frame rounded-md p-5 sm:p-6 relative"
        >
          <span className="corner-tl" />
          <span className="corner-tr" />
          <span className="corner-bl" />
          <span className="corner-br" />

          <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-line/70 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-danger/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon/80" />
              <span className="ml-2 text-ink-faint">tty/contact</span>
            </div>
            <span className="text-neon/80 hidden sm:inline">utf-8</span>
          </div>

          <div className="font-mono text-sm space-y-3">
            <div className="text-ink-dim">
              <span className="text-neon">$</span> send_message
              <span className="text-amber"> --to</span>
              <span className="text-ink-dim">=</span>
              <span className="text-ink">hoangplt.work@gmail.com</span>
            </div>

            <label className="block">
              <span className="flex items-center gap-2 text-ink-dim">
                <span className="text-neon">{">"}</span>
                <span>name:</span>
              </span>
              <div className="mt-1 flex items-center gap-2 border border-line bg-bg-soft/40 rounded-sm px-2.5 py-2 focus-within:border-neon/60 focus-within:shadow-neon-sm transition-all">
                <span className="text-neon/70 select-none">$</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="who-am-i"
                  className="flex-1 bg-transparent outline-none text-ink placeholder:text-ink-faint font-mono text-sm"
                />
                <span className="w-1.5 h-4 bg-neon animate-blink" />
              </div>
            </label>

            <label className="block">
              <span className="flex items-center gap-2 text-ink-dim">
                <span className="text-neon">{">"}</span>
                <span>message:</span>
              </span>
              <div className="mt-1 flex items-start gap-2 border border-line bg-bg-soft/40 rounded-sm px-2.5 py-2 focus-within:border-neon/60 focus-within:shadow-neon-sm transition-all">
                <span className="text-neon/70 select-none mt-0.5">$</span>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="echo 'hi hoang...'"
                  className="flex-1 bg-transparent outline-none text-ink placeholder:text-ink-faint font-mono text-sm resize-none"
                />
              </div>
            </label>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-sm border border-neon/60 bg-neon/[0.08] px-4 py-2 text-sm font-mono text-neon hover:bg-neon/[0.16] hover:shadow-neon-md transition-all"
              >
                <span className="text-ink-dim">[</span>
                <Send className="h-3.5 w-3.5" />
                <span>SEND</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
                <span className="text-ink-dim">]</span>
              </button>
              {sent && (
                <span className="text-[11px] font-mono text-neon">
                  ✓ mail client opened — sending via your default app
                </span>
              )}
            </div>
          </div>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="terminal-frame rounded-md p-5 sm:p-6 relative"
        >
          <span className="corner-tl" />
          <span className="corner-tr" />
          <span className="corner-bl" />
          <span className="corner-br" />

          <div className="font-mono text-[11px] text-ink-faint mb-3">
            ./channels.json
          </div>

          <ul className="space-y-2.5 font-mono text-sm">
            <li>
              <a
                href="mailto:hoangplt.work@gmail.com"
                className="group flex items-center justify-between gap-3 border border-line rounded-sm px-3 py-2.5 bg-bg-soft/30 hover:border-neon/50 hover:bg-neon/[0.04] transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-neon" />
                  <span className="text-ink-dim text-xs">email</span>
                </span>
                <span className="text-ink truncate">hoangplt.work@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hofang42"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 border border-line rounded-sm px-3 py-2.5 bg-bg-soft/30 hover:border-neon/50 hover:bg-neon/[0.04] transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <Github className="h-4 w-4 text-neon" />
                  <span className="text-ink-dim text-xs">github</span>
                </span>
                <span className="text-ink">@hofang42</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 border border-line rounded-sm px-3 py-2.5 bg-bg-soft/30 hover:border-neon/50 hover:bg-neon/[0.04] transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <Linkedin className="h-4 w-4 text-neon" />
                  <span className="text-ink-dim text-xs">linkedin</span>
                </span>
                <span className="text-ink">Thanh Hoàng</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+84836040204"
                className="group flex items-center justify-between gap-3 border border-line rounded-sm px-3 py-2.5 bg-bg-soft/30 hover:border-amber/50 hover:bg-amber/[0.04] transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-amber" />
                  <span className="text-ink-dim text-xs">phone</span>
                </span>
                <span className="text-ink">0836 040 204</span>
              </a>
            </li>
          </ul>

          <div className="mt-5 pt-4 border-t border-line/70 font-mono text-[11px] text-ink-faint flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
            <span>response_time ≈ within 24h</span>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
