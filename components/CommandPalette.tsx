"use client";

import { useCallback, useEffect, useState } from "react";
import { Command } from "cmdk";
import {
  Cloud,
  Copy,
  Download,
  FolderGit2,
  Github,
  GraduationCap,
  Home,
  Layers,
  Mail,
  ScrollText,
  Send,
  Terminal,
  User,
} from "lucide-react";

const EMAIL = "hoangplt.work@gmail.com";

const SECTIONS = [
  { id: "home", label: "~/home", hint: "boot sequence", icon: Home },
  { id: "about", label: "~/about", hint: "profile", icon: User },
  { id: "experience", label: "~/ops_log", hint: "experience timeline", icon: ScrollText },
  { id: "aws", label: "~/accelerator", hint: "XBrain × AWS program", icon: Cloud },
  { id: "projects", label: "~/projects", hint: "infra + apps", icon: FolderGit2 },
  { id: "stack", label: "~/stack", hint: "tech stack", icon: Layers },
  { id: "education", label: "~/edu", hint: "education & certs", icon: GraduationCap },
  { id: "contact", label: "~/contact", hint: "get in touch", icon: Send },
];

export function usePalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return { open, setOpen };
}

export default function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) setCopied(false);
  }, [open]);

  const goto = useCallback(
    (id: string) => {
      setOpen(false);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    },
    [setOpen]
  );

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setOpen(false), 650);
    } catch {
      // clipboard unavailable — jump to the contact section where the
      // address is visible instead of surprising the user with a mailto
      goto("contact");
    }
  }, [setOpen, goto]);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      loop
      overlayClassName="cmdk-backdrop"
      contentClassName="cmdk-content"
    >
      <div className="cmdk-panel terminal-frame">
        <div className="cmdk-header">
          <Terminal aria-hidden className="h-3.5 w-3.5 text-neon" />
          <span className="text-ink-dim">hoang@cloud</span>
          <span className="text-ink-faint">:~$</span>
          <Command.Input
            autoFocus
            placeholder="type a command or section…"
            className="cmdk-input"
          />
          <kbd className="cmdk-kbd">esc</kbd>
        </div>

        <Command.List className="cmdk-list">
          <Command.Empty className="cmdk-empty">
            command not found. try &quot;projects&quot; or &quot;cv&quot;
          </Command.Empty>

          <Command.Group heading="goto" className="cmdk-group">
            {SECTIONS.map((s) => (
              <Command.Item
                key={s.id}
                value={`${s.label} ${s.hint}`}
                onSelect={() => goto(s.id)}
                className="cmdk-item"
              >
                <s.icon aria-hidden className="h-3.5 w-3.5" />
                <span>{s.label}</span>
                <span className="cmdk-hint">{s.hint}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="run" className="cmdk-group">
            <Command.Item
              value="download cv resume pdf"
              onSelect={() => {
                setOpen(false);
                window.open("/cv/Phan-Le-Thanh-Hoang-CV-2026.pdf", "_blank");
              }}
              className="cmdk-item"
            >
              <Download aria-hidden className="h-3.5 w-3.5" />
              <span>download --cv</span>
              <span className="cmdk-hint">resume.pdf</span>
            </Command.Item>
            <Command.Item
              value="email mail contact send"
              onSelect={() => {
                setOpen(false);
                window.location.href = `mailto:${EMAIL}`;
              }}
              className="cmdk-item"
            >
              <Mail aria-hidden className="h-3.5 w-3.5" />
              <span>mail --to hoang</span>
              <span className="cmdk-hint">{EMAIL}</span>
            </Command.Item>
            <Command.Item
              value="copy email clipboard"
              onSelect={copyEmail}
              className="cmdk-item"
            >
              <Copy aria-hidden className="h-3.5 w-3.5" />
              <span>{copied ? "copied ✓" : "copy --email"}</span>
              <span className="cmdk-hint">to clipboard</span>
            </Command.Item>
            <Command.Item
              value="github open profile source"
              onSelect={() => {
                setOpen(false);
                window.open("https://github.com/hofang42", "_blank");
              }}
              className="cmdk-item"
            >
              <Github aria-hidden className="h-3.5 w-3.5" />
              <span>open --github</span>
              <span className="cmdk-hint">@hofang42</span>
            </Command.Item>
          </Command.Group>
        </Command.List>

        <div className="cmdk-footer">
          <span>
            <kbd className="cmdk-kbd">↑↓</kbd> navigate
          </span>
          <span>
            <kbd className="cmdk-kbd">↵</kbd> run
          </span>
          <span className="ml-auto text-neon/70">tty/palette</span>
        </div>
      </div>
    </Command.Dialog>
  );
}
