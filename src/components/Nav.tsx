"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { business } from "@/lib/business";
import { content } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = previous;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span aria-hidden className="block w-2.5 h-2.5 bg-accent rounded-full mr-1 self-center" />
          <span className="font-sans font-black text-lg tracking-[0.2em] uppercase">
            {business.name}
          </span>
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
            ° L A
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em]">
          {content.nav.links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="draw-link hover:text-accent transition-colors"
            >
              <span className="text-ink-faint mr-1">0{i + 1}/</span>
              {l.name}
            </a>
          ))}
        </nav>

        <a
          href={content.nav.cta.href}
          className="hidden md:inline-flex items-center gap-2 bg-accent text-on-accent font-sans font-bold text-[12px] uppercase tracking-[0.16em] px-5 h-11 min-h-[44px] hover:bg-ink hover:text-accent transition-colors"
        >
          {content.nav.cta.name} →
        </a>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden font-mono text-[11px] tracking-[0.2em] uppercase border border-ink/30 px-4 h-11 min-h-[44px]"
        >
          MENU +
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] bg-bg flex flex-col"
          >
            <div className="px-6 h-16 flex items-center justify-between border-b border-ink/15">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                MENU / {business.name}
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="font-mono text-[11px] uppercase tracking-[0.2em] border border-ink/30 px-4 h-11 min-h-[44px]"
              >
                CLOSE ×
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-6 gap-2 overflow-hidden">
              {content.nav.links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="display text-7xl uppercase"
                >
                  <span className="text-accent text-2xl align-top mr-3">
                    0{i + 1}
                  </span>
                  {l.name}
                </motion.a>
              ))}
              <motion.a
                href={content.nav.cta.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.45 }}
                className="mt-10 inline-flex items-center bg-accent text-on-accent font-sans font-bold text-base uppercase tracking-[0.18em] px-7 h-14 self-start min-h-[48px]"
              >
                {content.nav.cta.name} →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
