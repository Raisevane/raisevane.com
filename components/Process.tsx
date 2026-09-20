"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";
import { SectionTag } from "./SectionTag";

const STEPS = [
  {
    n: "01",
    icon: Compass,
    title: "Discover",
    text: "A free call to understand your goals, users, and budget. You get a clear scope, timeline, and fixed quote — no surprises later.",
  },
  {
    n: "02",
    icon: PenTool,
    title: "Design",
    text: "Wireframes first, then pixel-perfect UI. You see and approve every screen before a single line of code is written.",
  },
  {
    n: "03",
    icon: Code2,
    title: "Build",
    text: "Weekly demos of a live staging link — you watch your product grow in real time and give feedback as we go.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Launch & scale",
    text: "We deploy, monitor, and stay on for updates and growth. Your product ships fast and keeps getting better.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionTag>How We Work</SectionTag>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-white/55"
        >
          Four steps. Zero chaos. You always know what&apos;s happening,
          what&apos;s next, and what it costs.
        </motion.p>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent lg:block"
          />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-neon/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon transition-colors duration-300 group-hover:bg-neon group-hover:text-black">
                  <s.icon size={26} />
                </div>
                <span className="text-4xl font-bold text-white/10 transition-colors duration-300 group-hover:text-neon/30">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
