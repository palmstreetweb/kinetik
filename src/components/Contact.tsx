"use client";

import { motion, useReducedMotion } from "motion/react";
import { business } from "@/lib/business";
import { content } from "@/lib/content";

export default function Contact() {
  const reduced = useReducedMotion();
  const c = content.contact;

  return (
    <section id="contact" className="relative border-b border-ink/15 overflow-hidden">
      <motion.div
        aria-hidden
        animate={reduced ? undefined : { x: ["-15%", "15%", "-15%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 right-0 display uppercase text-[clamp(8rem,28vw,28rem)] text-accent/[0.06] leading-[0.85] whitespace-nowrap select-none"
      >
        MAKE THINGS MOVE — MAKE THINGS MOVE —
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-40">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          {c.eyebrow}
        </span>
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 display text-[clamp(3rem,10vw,11rem)] uppercase leading-[0.9] tracking-[-0.03em] max-w-[16ch]"
        >
          {c.heading}
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-8 font-sans text-lg leading-relaxed text-ink-muted max-w-[60ch]"
        >
          {c.body}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.18, duration: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <motion.a
            href={c.primary.href}
            whileHover={reduced ? undefined : { x: 8 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
            className="inline-flex items-center gap-3 bg-accent text-on-accent font-sans font-bold text-base uppercase tracking-[0.16em] px-8 h-16 min-h-[48px]"
          >
            {c.primary.text}
          </motion.a>
          <a
            href={c.secondary.href}
            className="cursor-arrow inline-flex items-center gap-2 border border-ink/40 text-ink font-sans text-sm uppercase tracking-[0.16em] px-6 h-16 min-h-[48px] hover:border-accent hover:text-accent transition-colors"
          >
            {c.secondary.text}
          </a>
        </motion.div>

        {/* Bottom info row */}
        <div className="mt-20 pt-6 border-t border-ink/20 grid md:grid-cols-3 gap-6 font-mono text-[11px] uppercase tracking-[0.22em]">
          <div>
            <div className="text-ink-faint mb-2">EMAIL</div>
            <a className="text-ink hover:text-accent" href={`mailto:${business.email}`}>
              {business.email}
            </a>
          </div>
          <div>
            <div className="text-ink-faint mb-2">PHONE</div>
            <div className="text-ink">{business.phone}</div>
          </div>
          <div>
            <div className="text-ink-faint mb-2">STUDIO</div>
            <div className="text-ink">{business.address}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
