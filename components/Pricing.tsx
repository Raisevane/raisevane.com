"use client";

import { motion } from "framer-motion";
import { SectionTag } from "./SectionTag";
import { Check, ShieldCheck, ReceiptText, LifeBuoy, Clock3 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    per: "/ project",
    desc: "For small businesses getting online.",
    features: [
      "Landing page or small site",
      "1–2 week delivery",
      "Basic SEO setup",
      "1 revision round",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,499",
    per: "/ project",
    desc: "For products that need to scale.",
    features: [
      "Full website or web app",
      "UI/UX design included",
      "API & database setup",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "",
    desc: "For teams with advanced needs.",
    features: [
      "Dedicated product team",
      "Mobile + web development",
      "Cloud & DevOps setup",
      "Ongoing partnership",
    ],
    cta: "Talk to Us",
    popular: false,
  },
];

const guarantees = [
  {
    icon: ShieldCheck,
    color: "text-neon",
    title: "You own 100% of the code",
    text: "Every file and repo, handed over at launch.",
  },
  {
    icon: ReceiptText,
    color: "text-teal-300",
    title: "Fixed price, no surprise bills",
    text: "The number we quote is the number you pay.",
  },
  {
    icon: LifeBuoy,
    color: "text-yellow-300",
    title: "Free support after launch",
    text: "We stay after go-live to fix and tune — free.",
  },
  {
    icon: Clock3,
    color: "text-pink-400",
    title: "Reply within 2 hours",
    text: "Real answers from real engineers, fast.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            Transparent pricing
          </p>
          <div className="mt-6">
            <SectionTag className="scale-110 md:scale-125">Pricing</SectionTag>
          </div>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={
                p.popular
                  ? "relative rounded-3xl border-2 border-neon bg-gradient-to-b from-neon/10 to-transparent p-8 shadow-[0_0_60px_rgba(204,255,0,0.12)]"
                  : "relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-white/25"
              }
            >
              {p.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-neon px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-5xl font-bold">{p.price}</span>
                {p.per && (
                  <span className="text-white/40">{p.per}</span>
                )}
              </div>
              <p className="mt-3 text-white/55">{p.desc}</p>

              <ul className="mt-7 space-y-3.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/70">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-neon" size={16} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-9 block rounded-full bg-neon py-3.5 text-center font-semibold text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(204,255,0,0.45)]"
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* guarantees */}
        <p className="mt-24 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
          Every project, guaranteed in writing
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors duration-500 hover:border-white/25"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
                <g.icon size={20} className={g.color} />
              </div>
              <h4 className="mt-4 font-bold">{g.title}</h4>
              <p className="mt-1.5 text-sm text-white/50">{g.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
