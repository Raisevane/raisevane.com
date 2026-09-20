"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X, Rocket, Clock3, Layers } from "lucide-react";

interface Project {
  title: string;
  category: string;
  blurb: string;
  image: string; // unsplash url
  color: string;
  duration: string;
  stack: string[];
  outcome: string;
  points: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Finlytics — SaaS Analytics Platform",
    category: "Web App · SaaS",
    blurb:
      "A real-time analytics dashboard for a fintech startup — from Figma to 10k users in 6 months.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    color: "#5eead4",
    duration: "12 weeks",
    stack: ["Next.js", "PostgreSQL", "AWS", "Recharts"],
    outcome: "10k users in 6 months · 99.98% uptime",
    points: [
      "Real-time dashboards processing 2M+ events/day",
      "Role-based access for 3 user tiers",
      "Migrated from a legacy PHP app with zero downtime",
    ],
  },
  {
    title: "UrbanEats — Food Delivery App",
    category: "Mobile · iOS & Android",
    blurb:
      "On-demand food delivery for a local chain — live order tracking, payments, and a rider app.",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1200&q=80&auto=format&fit=crop",
    color: "#a3e635",
    duration: "16 weeks",
    stack: ["Flutter", "Node.js", "Stripe", "Google Maps"],
    outcome: "4.8★ on both stores · 30k orders/month",
    points: [
      "Live rider tracking with ETA predictions",
      "One-tap reordering — 40% of all orders",
      "Integrated payments with automatic refunds",
    ],
  },
  {
    title: "MediSync — AI Clinic Assistant",
    category: "AI · Automation",
    blurb:
      "An AI assistant that handles appointment booking, reminders, and intake forms for clinics.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop",
    color: "#ec4899",
    duration: "10 weeks",
    stack: ["OpenAI", "Next.js", "Twilio", "PostgreSQL"],
    outcome: "70% fewer no-shows · 6 hrs admin saved daily",
    points: [
      "Natural-language booking over chat and SMS",
      "Automatic intake forms before each visit",
      "HIPAA-conscious data handling",
    ],
  },
  {
    title: "NovaRealty — Property Platform",
    category: "Web · Marketplace",
    blurb:
      "A property marketplace with map search, virtual tours, and instant valuation tools.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop",
    color: "#eab308",
    duration: "14 weeks",
    stack: ["Next.js", "Mapbox", "PostGIS", "Vercel"],
    outcome: "3× more qualified leads · 250k monthly visits",
    points: [
      "Map-first search across 50k listings",
      "3D virtual tours built into listing pages",
      "Instant valuation model trained on local data",
    ],
  },
  {
    title: "TrackFit — Wearable Fitness App",
    category: "Mobile · Health",
    blurb:
      "A fitness companion that syncs with wearables and turns raw data into personal coaching.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop",
    color: "#5eead4",
    duration: "12 weeks",
    stack: ["Flutter", "HealthKit", "Firebase", "OpenAI"],
    outcome: "120k downloads · 62% 30-day retention",
    points: [
      "Syncs with Apple Health & Google Fit",
      "AI coach that adapts plans weekly",
      "Offline-first — works without signal",
    ],
  },
  {
    title: "LedgerLoop — B2B Payments",
    category: "Web App · Fintech",
    blurb:
      "Invoice automation for SMEs — from sending to reconciliation, hands-free.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop",
    color: "#a3e635",
    duration: "18 weeks",
    stack: ["React", "Node.js", "PostgreSQL", "Plaid"],
    outcome: "$4M invoices processed monthly",
    points: [
      "Auto-matching payments to invoices via bank feeds",
      "Smart reminders that recover late payments",
      "Multi-currency with real-time FX",
    ],
  },
];

export function Portfolio() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.button
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpen(p)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-left transition-all duration-500 hover:-translate-y-2 hover:border-white/25"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span
                  className="absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-xs font-semibold text-black"
                  style={{ backgroundColor: p.color }}
                >
                  {p.category}
                </span>
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {p.blurb}
                </p>
                <p
                  className="mt-4 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: p.color }}
                >
                  {p.outcome.split("·")[0]}
                </p>
              </div>
              {/* color glow */}
              <span
                className="pointer-events-none absolute -bottom-10 left-1/3 h-28 w-28 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                style={{ backgroundColor: p.color }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#0b0b0b]"
            >
              <div className="relative h-56 md:h-64">
                <img
                  src={open.image}
                  alt={open.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-black/30" />
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:text-neon"
                >
                  <X size={16} />
                </button>
                <span
                  className="absolute bottom-4 left-6 rounded-full px-3.5 py-1.5 text-xs font-semibold text-black"
                  style={{ backgroundColor: open.color }}
                >
                  {open.category}
                </span>
              </div>

              <div className="p-6 md:p-9">
                <h3 className="text-2xl font-bold md:text-3xl">{open.title}</h3>

                <div className="mt-5 flex flex-wrap gap-5 text-sm text-white/60">
                  <span className="flex items-center gap-2">
                    <Clock3 size={15} className="text-neon" /> {open.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Layers size={15} className="text-neon" /> {open.stack.join(" · ")}
                  </span>
                </div>

                <ul className="mt-7 space-y-3.5 border-l-2 border-neon/40 pl-6">
                  {open.points.map((pt) => (
                    <li key={pt} className="relative text-white/70">
                      <span className="absolute -left-[31px] top-2 h-2 w-2 rounded-full bg-neon" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-7 flex items-start gap-3 rounded-2xl border p-4"
                  style={{ borderColor: `${open.color}44`, backgroundColor: `${open.color}0d` }}
                >
                  <Rocket size={18} className="mt-0.5 shrink-0" style={{ color: open.color }} />
                  <p className="text-sm font-medium" style={{ color: open.color }}>
                    {open.outcome}
                  </p>
                </div>

                <a
                  href="/#contact"
                  onClick={() => setOpen(null)}
                  className="mt-8 block rounded-full bg-neon py-3.5 text-center font-semibold text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(204,255,0,0.45)]"
                >
                Start a project like this
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
