"use client";

import { useEffect } from "react";

const SECTION_MESSAGES: Record<string, string> = {
  about: "> loading cloud_engineer.profile...",
  stack: "> scanning aws_stack.sh --verbose...",
  experience: "> git log --all --oneline...",
  aws: "> aws describe-deliverables --live...",
  projects: "> kubectl get deployments...",
  education: "> verifying credentials.crt...",
  contact: "> ssh -i key.pem hoang@cloud...",
};

const STAGGER_SELECTOR =
  ".project-card, .skill-badge, .cert-pill, .timeline-entry";

const PROMPT_HOLD = 80;
const CHAR_DELAY = 12;
const STAGGER_STEP = 35;
const STAGGER_CAP = 180;

function typeText(
  el: HTMLElement,
  message: string,
  onDone: () => void
): () => void {
  let i = 0;
  let cancelled = false;
  el.textContent = "";
  const caret = document.createElement("span");
  caret.className = "caret";
  el.appendChild(caret);

  const tick = () => {
    if (cancelled) return;
    i += 1;
    el.textContent = message.slice(0, i);
    el.appendChild(caret);
    if (i < message.length) {
      window.setTimeout(tick, CHAR_DELAY);
    } else {
      window.setTimeout(() => {
        if (cancelled) return;
        caret.remove();
        el.classList.add("typer-done");
        onDone();
      }, 80);
    }
  };
  window.setTimeout(tick, 0);

  return () => {
    cancelled = true;
  };
}

export default function ScrollFX() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ── 4. progress bar ─────────────────────────────────────── */
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);

    let scrollRaf = 0;
    const updateProgress = () => {
      scrollRaf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = `scaleX(${pct})`;
    };
    const onScroll = () => {
      if (!scrollRaf) scrollRaf = requestAnimationFrame(updateProgress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();

    /* ── 5. parallax hero ────────────────────────────────────── */
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>(".parallax-hero-bg")
    );
    let parallaxRaf = 0;
    const updateParallax = () => {
      parallaxRaf = 0;
      const y = Math.min(window.scrollY, 400) * 0.25;
      parallaxEls.forEach((el) => {
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };
    const onParallaxScroll = () => {
      if (!parallaxRaf) parallaxRaf = requestAnimationFrame(updateParallax);
    };
    if (!reduceMotion && parallaxEls.length) {
      window.addEventListener("scroll", onParallaxScroll, { passive: true });
      updateParallax();
    }

    /* ── 3. active nav highlight ─────────────────────────────── */
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".nav-link[href^='#']")
    );
    const linkBySection = new Map<string, HTMLAnchorElement>();
    navLinks.forEach((a) => {
      const id = a.getAttribute("href")?.slice(1);
      if (id) linkBySection.set(id, a);
    });

    /* ── reduced motion: bail out of advanced anim ───────────── */
    if (reduceMotion) {
      document
        .querySelectorAll<HTMLElement>("section[data-section]")
        .forEach((s) => {
          s.dataset.revealed = "true";
          s.dataset.stagger = "true";
        });

      const navObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && e.intersectionRatio >= 0.5) {
              const id = (e.target as HTMLElement).id;
              navLinks.forEach((l) => l.classList.remove("nav-active"));
              linkBySection.get(id)?.classList.add("nav-active");
            }
          });
        },
        { threshold: [0.5] }
      );
      document
        .querySelectorAll<HTMLElement>("section[data-section]")
        .forEach((s) => navObs.observe(s));

      return () => {
        window.removeEventListener("scroll", onScroll);
        if (scrollRaf) cancelAnimationFrame(scrollRaf);
        bar.remove();
        navObs.disconnect();
      };
    }

    /* ── 1+2+7. reveal + stagger + typewriter via ONE observer ─ */
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-section]")
    );

    sections.forEach((s) => {
      if (s.dataset.revealed !== "true") s.dataset.revealed = "false";
    });

    const revealed = new WeakSet<HTMLElement>();
    const cancelers: Array<() => void> = [];

    const triggerReveal = (section: HTMLElement) => {
      if (revealed.has(section)) return;
      revealed.add(section);

      const id = section.id;
      const message = SECTION_MESSAGES[id];
      const typer = section.querySelector<HTMLElement>(".section-typer");

      const fireRevealAndStagger = () => {
        section.dataset.revealed = "true";
        section.dataset.stagger = "true";
        const items = section.querySelectorAll<HTMLElement>(STAGGER_SELECTOR);
        items.forEach((el, i) => {
          const delay = Math.min(i * STAGGER_STEP, STAGGER_CAP);
          el.style.animationDelay = `${delay}ms`;
          el.classList.add("stagger-item");
        });
        // strip will-change once transition is done
        window.setTimeout(() => {
          section.style.willChange = "auto";
        }, 600);
      };

      if (typer && message) {
        typer.style.display = "block";
        const holdTimer = window.setTimeout(() => {
          const cancel = typeText(typer, message, () => {});
          cancelers.push(cancel);
        }, PROMPT_HOLD);
        cancelers.push(() => window.clearTimeout(holdTimer));
      }
      fireRevealAndStagger();
    };

    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            triggerReveal(e.target as HTMLElement);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    sections.forEach((s) => {
      // hero starts already revealed
      if (s.id === "home") {
        s.dataset.revealed = "true";
        s.dataset.stagger = "true";
      } else {
        revealObs.observe(s);
      }
    });

    /* nav highlight: separate observer with rootMargin biasing center */
    const navObs = new IntersectionObserver(
      (entries) => {
        // pick the entry with highest intersectionRatio currently
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const id = (visible[0].target as HTMLElement).id;
        navLinks.forEach((l) => l.classList.remove("nav-active"));
        linkBySection.get(id)?.classList.add("nav-active");
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-30% 0px -30% 0px",
      }
    );
    sections.forEach((s) => navObs.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onParallaxScroll);
      cancelers.forEach((c) => c());
      revealObs.disconnect();
      navObs.disconnect();
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      if (parallaxRaf) cancelAnimationFrame(parallaxRaf);
      bar.remove();
    };
  }, []);

  return null;
}
