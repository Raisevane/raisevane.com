"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionTag } from "./SectionTag";

const FAQS = [
  {
    q: "How much does a project cost?",
    a: "Most projects land between $1,500 and $15,000 depending on scope — a landing page sits at the low end, a full SaaS platform at the top. After our first call you get a fixed quote, so the price never changes mid-project.",
  },
  {
    q: "How long does it take to build?",
    a: "A marketing site ships in 1–2 weeks. A mobile or web app typically takes 4–12 weeks. We show you a live staging link every week, so you see progress from day one — not just at the end.",
  },
  {
    q: "Do you work with clients outside Nepal?",
    a: "Yes — most of our clients are in the US, UK, Australia, and India. We overlap with your working hours, run everything over Slack/Zoom, and you can pay in USD via bank transfer, Wise, or card.",
  },
  {
    q: "What if I don't like the design?",
    a: "You approve every screen before we write code, and every package includes revision rounds. We iterate until you're happy — that's part of the process, not an extra charge.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Every project includes 30 days of free bug-fix support. After that, most clients keep a monthly care plan for updates, monitoring, and new features — but it's optional, never forced.",
  },
  {
    q: "Who owns the code and design?",
    a: "You do — 100%. On final payment, we hand over the full repository, design files, and deployments. No lock-in, no hostage situations.",
  },
];

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        open ? "border-neon/50 bg-white/[0.04]" : "border-white/10 bg-white/[0.02] hover:border-white/25"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={open ? "text-neon" : "text-white/40"}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 leading-relaxed text-white/60">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionTag>FAQ</SectionTag>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center text-3xl font-bold md:text-4xl"
        >
          Questions? <span className="text-white/50">Answered.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 space-y-4"
        >
          {FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center text-white/50"
        >
          Still curious?{" "}
          <a href="#contact" className="font-semibold text-neon hover:underline">
            Talk to us directly →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
