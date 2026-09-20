"use client";

import { motion } from "framer-motion";
import { Wrench, TrendingUp } from "lucide-react";

const advantages = [
  "Senior engineers only — no hand-offs to juniors: your product is built by the people you meet on day one",
  "Ship in weeks, not quarters: our battle-tested playbook delivers production software 3× faster than typical agencies",
  "Global standards, local pricing: international-quality delivery with rates that respect your runway",
];

const whyUs = [
  {
    icon: Wrench,
    title: "You own 100% of the code",
    text: "Every file and repo, handed over at launch — no lock-in, ever.",
  },
  {
    icon: TrendingUp,
    title: "Built to scale",
    text: "Architecture that handles your first user and your millionth, without a rewrite.",
  },
];

export function ServicesList() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Three main advantages */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl font-bold leading-snug text-white/70 md:text-4xl"
          >
            Three main advantages
            <br />
            <span className="text-white">of working with us:</span>
          </motion.h3>

          <ul className="space-y-6 border-l-2 border-neon/40 pl-8">
            {advantages.map((a, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative leading-relaxed text-white/65"
              >
                <span className="absolute -left-[41px] top-2 h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_12px_rgba(204,255,0,0.8)]" />
                {a}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Why choose us */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-neon/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neon text-black">
                <w.icon size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold">{w.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {w.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
