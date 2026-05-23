"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { content } from "@/lib/content";

export default function Capabilities() {
  const reduced = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);
  const c = content.capabilities;

  return (
    <section id="capabilities" className="border-b border-ink/15 py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-baseline justify-between mb-16 flex-wrap gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {c.eyebrow}
          </span>
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="display text-[clamp(2.5rem,6vw,5.5rem)] uppercase max-w-[20ch]"
          >
            {c.heading}
          </motion.h2>
        </div>

        <ul className="border-t border-ink/15">
          {c.items.map((item, i) => (
            <motion.li
              key={item.number}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="border-b border-ink/15 py-6 md:py-8 grid grid-cols-12 gap-4 items-baseline group cursor-pointer relative overflow-hidden"
            >
              <motion.span
                aria-hidden
                initial={false}
                animate={{ width: hover === i ? "100%" : "0%" }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                className="absolute left-0 top-0 bottom-0 bg-accent-soft pointer-events-none"
              />
              <div className="relative col-span-2 md:col-span-1 font-mono text-sm tracking-[0.2em] text-ink-muted group-hover:text-accent transition-colors">
                {item.number}
              </div>
              <h3 className="relative col-span-10 md:col-span-5 display text-3xl md:text-5xl uppercase group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <div className="relative col-span-12 md:col-span-6 flex flex-wrap gap-2 md:justify-end">
                <AnimatePresence>
                  {item.tags.map((tag, ti) => (
                    <motion.span
                      key={tag}
                      initial={false}
                      animate={{
                        opacity: hover === i ? 1 : 0.5,
                        y: hover === i ? 0 : 4,
                      }}
                      transition={{ duration: 0.3, delay: hover === i ? ti * 0.04 : 0 }}
                      className="font-mono text-[11px] uppercase tracking-[0.16em] border border-ink/30 px-3 py-1.5"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
