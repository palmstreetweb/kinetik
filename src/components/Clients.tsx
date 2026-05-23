"use client";

import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function Clients() {
  const reduced = useReducedMotion();
  const c = content.clients;

  // Duplicate list for infinite marquee
  const doubled = [...c.list, ...c.list];

  return (
    <section id="clients" className="relative border-b border-ink/15 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {c.eyebrow}
          </span>
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="display text-3xl md:text-5xl uppercase"
          >
            {c.heading}
          </motion.h2>
        </div>
      </div>

      {/* Two marquee rows, opposite directions */}
      {[0, 1].map((row) => (
        <div key={row} className="overflow-hidden py-3">
          <motion.div
            animate={reduced ? undefined : { x: row === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{
              duration: row === 0 ? 42 : 56,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-12 whitespace-nowrap will-change-transform"
          >
            {doubled.map((client, i) => (
              <span
                key={`${row}-${i}-${client.name}`}
                className="flex items-baseline gap-3 flex-shrink-0"
              >
                <span className="display text-5xl md:text-7xl uppercase text-ink hover:text-accent transition-colors">
                  {client.name}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint">
                  · {client.detail} ·
                </span>
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
}
