"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { content } from "@/lib/content";

function Line({ text, progress, start, end }: { text: string; progress: import("motion/react").MotionValue<number>; start: number; end: number }) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const x = useTransform(progress, [start, end], [-20, 0]);
  const isCapWord = /^[A-Z]+\.$|^[A-Z]{3,}\.?$/.test(text.trim());

  return (
    <motion.div
      style={{ opacity, x }}
      className={`display uppercase leading-[0.9] tracking-[-0.03em] will-change-transform ${
        isCapWord
          ? "text-accent text-[clamp(4rem,11vw,12rem)]"
          : "text-ink text-[clamp(2rem,6vw,6rem)]"
      }`}
    >
      {text}
    </motion.div>
  );
}

export default function Manifesto() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const m = content.manifesto;
  const n = m.lines.length;

  if (reduced) {
    return (
      <section id="manifesto" ref={ref} className="border-b border-ink/15 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-8">
            {m.eyebrow}
          </div>
          <div className="space-y-2">
            {m.lines.map((l, i) => (
              <div
                key={i}
                className={`display uppercase ${
                  /^[A-Z]+\.$|^[A-Z]{3,}\.?$/.test(l.trim()) ? "text-accent text-7xl" : "text-7xl"
                }`}
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="manifesto" ref={ref} className="border-b border-ink/15 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-12">
          {m.eyebrow}
        </div>
        <div className="space-y-1 md:space-y-2">
          {m.lines.map((l, i) => {
            const start = 0.05 + (i / n) * 0.7;
            const end = start + 0.06;
            return (
              <Line key={i} text={l} progress={scrollYProgress} start={start} end={end} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
