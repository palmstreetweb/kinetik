"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { content } from "@/lib/content";

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const marqueeX = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -400]);
  const h = content.hero;

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden border-b border-ink/15"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 w-full">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-accent/40 text-accent rounded-full px-4 py-1.5 font-mono text-[11px] tracking-[0.22em] uppercase"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-accent"
            animate={reduced ? undefined : { scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          {h.status}
        </motion.div>

        {/* Kinetic words */}
        <div className="mt-12 md:mt-16">
          {h.words.map((word, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`display text-[clamp(3.5rem,13vw,13rem)] uppercase ${
                i === 2 ? "text-accent" : i === 3 ? "italic text-ink-muted [text-shadow:_0_0_1px_var(--color-ink)]" : ""
              } ${i === 1 ? "md:pl-[8%]" : ""} ${i === 3 ? "md:pl-[18%]" : ""}`}
            >
              <AnimatePresence mode="popLayout">
                {word.split("").map((letter, li) => (
                  <motion.span
                    key={`${i}-${li}`}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2 + i * 0.12 + li * 0.025,
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Body + CTA */}
        <div className="mt-16 grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="md:col-span-7 font-sans text-lg leading-relaxed text-ink-muted max-w-[58ch]"
          >
            {h.body}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="md:col-span-5 flex flex-wrap items-center gap-3 md:justify-end"
          >
            <motion.a
              href={h.ctaHref}
              whileHover={reduced ? undefined : { x: 6 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              className="inline-flex items-center gap-3 bg-accent text-on-accent font-sans font-bold text-base uppercase tracking-[0.16em] px-7 h-14 min-h-[48px]"
            >
              {h.ctaText}
            </motion.a>
            <a
              href="#reel"
              className="inline-flex items-center gap-2 border border-ink/40 text-ink font-sans text-sm uppercase tracking-[0.16em] px-5 h-14 min-h-[48px] hover:border-accent hover:text-accent transition-colors"
            >
              ↓ Showreel
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll-linked marquee */}
      <div className="mt-24 overflow-hidden">
        <motion.div
          style={{ x: marqueeX }}
          className="flex items-center gap-12 whitespace-nowrap will-change-transform"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className="display text-[clamp(3rem,10vw,10rem)] uppercase text-ink-faint/40 flex-shrink-0"
            >
              {h.marquee}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
