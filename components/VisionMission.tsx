"use client";

import { motion } from "framer-motion";
import { SectionTag } from "./SectionTag";
import { Compass, Rocket, Gem } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Our Vision",
    text: "A world where every ambitious idea — from a Kathmandu garage to a Silicon Valley boardroom — can ship world-class software without friction.",
  },
  {
    icon: Rocket,
    title: "Our Mission",
    text: "To design, build and scale digital products that outperform expectations: fast to launch, beautiful to use, engineered to last.",
  },
  {
    icon: Gem,
    title: "Our Values",
    text: "Radical transparency. Ownership of outcomes. Craft over shortcuts. We say what we do, we do what we say, and we ship what we promised.",
  },
];

export function VisionMission({ showTag = true }: { showTag?: boolean }) {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-neon/5 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {showTag && (
          <div className="flex justify-center">
            <SectionTag>Who We Are</SectionTag>
          </div>
        )}

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-neon/50 hover:shadow-[0_20px_60px_rgba(204,255,0,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon/10 text-neon transition-transform duration-500 group-hover:scale-110">
                <p.icon size={22} />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-white/55">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
