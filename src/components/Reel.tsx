"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { content } from "@/lib/content";

export default function Reel() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // 5 panels worth of scroll → translate negative across
  const x = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["0%", "-80%"]);

  const r = content.reel;

  return (
    <section id="reel" ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden border-b border-ink/15 bg-bg">
        <div className="px-6 md:px-10 pt-24 pb-8 flex items-baseline justify-between flex-wrap gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {r.eyebrow}
          </span>
          <h2 className="display text-3xl md:text-5xl uppercase">{r.heading}</h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint hidden md:block">
            ← Scroll →
          </span>
        </div>
        <motion.div
          style={{ x }}
          className="flex-1 flex items-center gap-6 md:gap-10 px-6 md:px-10 will-change-transform"
        >
          {r.items.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              whileHover={reduced ? undefined : { scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="group flex-shrink-0 w-[78vw] md:w-[58vw] lg:w-[44vw] h-[68vh] relative overflow-hidden bg-bg-card"
            >
              <Image
                src={p.image.src}
                alt={p.image.alt}
                fill
                priority={i < 2}
                sizes="(max-width: 768px) 80vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/0 to-bg/0"
              />
              {/* Top meta */}
              <div className="absolute top-5 left-5 right-5 flex items-baseline justify-between font-mono text-[11px] tracking-[0.22em] uppercase text-ink/85">
                <span>NO. {String(i + 1).padStart(3, "0")}</span>
                <span className="text-accent">● {p.tag}</span>
              </div>
              {/* Bottom meta */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-3">
                  <span>{p.client}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="display text-3xl md:text-5xl uppercase leading-[0.9]">
                  {p.title}
                </h3>
                <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  → Watch case
                </div>
              </div>
            </motion.a>
          ))}
          <div className="flex-shrink-0 w-[40vw] flex items-center justify-center">
            <a
              href="#contact"
              className="display text-3xl uppercase border border-accent text-accent px-8 h-16 inline-flex items-center hover:bg-accent hover:text-on-accent transition-colors min-h-[64px]"
            >
              Make next →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
