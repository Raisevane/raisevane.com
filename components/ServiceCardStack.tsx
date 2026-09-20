"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Megaphone,
  AppWindow,
  Box,
  BarChart3,
  Database,
  CloudUpload,
  Palette,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Check,
  type LucideIcon,
} from "lucide-react";

interface StackCard {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  /** two-stop gradient matching the site's neon palette */
  art: string;
  color: string;
  details: string[];
}

const CARDS: StackCard[] = [
  {
    title: "App Development",
    subtitle: "Fast, reliable iOS & Android apps",
    icon: Smartphone,
    art: "linear-gradient(135deg, #0f3d3a 0%, #5eead4 60%, #ccff00 100%)",
    color: "#5eead4",
    details: [
      "Flutter & React Native — one codebase, both stores",
      "Live tracking, payments & push notifications",
      "App Store / Play Store submission handled for you",
    ],
  },
  {
    title: "Web Development",
    subtitle: "Responsive sites built on modern frameworks",
    icon: AppWindow,
    art: "linear-gradient(135deg, #3b0764 0%, #ec4899 55%, #f97316 100%)",
    color: "#ec4899",
    details: [
      "Next.js & React — blazing-fast and SEO-ready",
      "Pixel-perfect on every screen size",
      "CMS & e-commerce ready from day one",
    ],
  },
  {
    title: "AI Automation",
    subtitle: "Automate the boring, scale the brilliant",
    icon: Box,
    art: "linear-gradient(135deg, #1a2e05 0%, #a3e635 55%, #ccff00 100%)",
    color: "#a3e635",
    details: [
      "Chatbots that handle support & sales 24/7",
      "Workflow automation that cuts manual work",
      "Custom integrations with OpenAI & more",
    ],
  },
  {
    title: "Data Analytics",
    subtitle: "Raw data in, smart decisions out",
    icon: BarChart3,
    art: "linear-gradient(135deg, #0c2a3d 0%, #38bdf8 55%, #5eead4 100%)",
    color: "#38bdf8",
    details: [
      "Real-time dashboards your team actually uses",
      "KPI tracking & automated reporting",
      "Predictive insights powered by AI",
    ],
  },
  {
    title: "Cloud Services",
    subtitle: "Secure infrastructure that scales as you grow",
    icon: CloudUpload,
    art: "linear-gradient(135deg, #1e1b4b 0%, #818cf8 55%, #ccff00 100%)",
    color: "#818cf8",
    details: [
      "AWS / GCP architecture & zero-downtime migration",
      "Cost optimization without cutting performance",
      "24/7 monitoring, backups & support",
    ],
  },
  {
    title: "Cyber Security",
    subtitle: "Audits and best practices, baked in",
    icon: ShieldCheck,
    art: "linear-gradient(135deg, #14532d 0%, #4ade80 55%, #ccff00 100%)",
    color: "#4ade80",
    details: [
      "Security audits & penetration testing",
      "Compliance-ready data protection",
      "Hardening baked into every build, not bolted on",
    ],
  },
  {
    title: "Digital Marketing",
    subtitle: "Attention in, revenue out",
    icon: Megaphone,
    art: "linear-gradient(135deg, #4a044e 0%, #e879f9 55%, #fbbf24 100%)",
    color: "#e879f9",
    details: [
      "SEO that puts you on page one",
      "Social & ad campaigns engineered to convert",
      "Content strategy that compounds your brand",
    ],
  },
  {
    title: "Data Engineering",
    subtitle: "Pipelines & warehouses, ready for AI",
    icon: Database,
    art: "linear-gradient(135deg, #292524 0%, #fbbf24 60%, #ccff00 100%)",
    color: "#fbbf24",
    details: [
      "ETL pipelines that move data reliably at scale",
      "Warehouses on Snowflake, BigQuery & Redshift",
      "Clean, fast data your AI can trust",
    ],
  },
  {
    title: "UI/UX Design",
    subtitle: "Interfaces that convert visitors into users",
    icon: Palette,
    art: "linear-gradient(135deg, #500724 0%, #fb7185 55%, #5eead4 100%)",
    color: "#fb7185",
    details: [
      "Research-driven wireframes & prototypes",
      "Design systems that scale with your product",
      "Motion & polish users can feel",
    ],
  },
];

export function ServiceCardStack() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const count = CARDS.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  // auto-advance
  useEffect(() => {
    if (paused || dragging) return;
    const t = setInterval(() => go(1), 4200);
    return () => clearInterval(t);
  }, [paused, dragging, go]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const offsetFrom = (i: number) => {
    let d = i - index;
    // shortest signed distance (wrap-around)
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  };

  return (
    <section
      className="relative py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setDragging(false);
      }}
    >
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
          What we do
        </p>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          One team, <span className="text-neon">nine superpowers</span>
        </h2>
      </div>

      {/* stage */}
      <div
        className="relative mx-auto mt-14 h-[500px] w-full max-w-4xl select-none md:h-[480px]"
        style={{ perspective: "1400px" }}
      >
        {CARDS.map((card, i) => {
          const d = offsetFrom(i);
          const abs = Math.abs(d);
          const front = d === 0;
          const visible = abs <= 2;

          return (
            <motion.div
              key={card.title}
              className="absolute inset-x-0 mx-auto cursor-grab overflow-hidden rounded-3xl border border-white/15 shadow-2xl active:cursor-grabbing md:inset-x-10"
              style={{
                height: "100%",
                transformStyle: "preserve-3d",
                willChange: "transform, opacity",
                zIndex: 50 - abs,
                pointerEvents: front ? "auto" : "none",
              }}
              initial={false}
              animate={{
                x: `${d * -34}%`,
                scale: 1 - abs * 0.11,
                rotateY: d * -26,
                rotateZ: d * -3.5,
                opacity: visible ? 1 - abs * 0.28 : 0,
                filter: front ? "brightness(1)" : "brightness(0.55)",
              }}
              transition={{ type: "spring", stiffness: 210, damping: 26 }}
              drag={front ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragStart={() => setDragging(true)}
              onDragEnd={(_, info) => {
                setDragging(false);
                if (info.offset.x < -70) go(1);
                else if (info.offset.x > 70) go(-1);
              }}
            >
              {/* gradient art */}
              <div className="absolute inset-0" style={{ background: card.art }} />
              {/* sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10" />
              {/* subtle animated light streak */}
              <motion.div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.35) 46%, transparent 60%)",
                  backgroundSize: "250% 100%",
                }}
                animate={{ backgroundPositionX: ["120%", "-20%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                  delay: i * 0.4,
                }}
              />

              {/* content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-black/40 text-white backdrop-blur-md"
                  aria-hidden
                >
                  <card.icon size={26} strokeWidth={2.1} />
                </span>
                <h3 className="text-3xl font-bold text-white drop-shadow-lg md:text-4xl">
                  {card.title}
                </h3>
                <p className="max-w-md text-base text-white/85 md:text-lg">
                  {card.subtitle}
                </p>

                <ul className="mt-1 space-y-2 text-left">
                  {card.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex max-w-md items-start gap-2.5 text-sm text-white/90 md:text-[15px]"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-white"
                        strokeWidth={3}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>

                {front && (
                  <a
                    href="/#contact"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2 rounded-full bg-white/90 px-7 py-2.5 text-sm font-semibold text-black backdrop-blur transition-all duration-300 hover:bg-white"
                  >
                    Start a project
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous service"
          className="absolute left-0 top-1/2 z-[60] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition-all duration-300 hover:border-neon hover:text-neon md:-left-4"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next service"
          className="absolute right-0 top-1/2 z-[60] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition-all duration-300 hover:border-neon hover:text-neon md:-right-4"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* dots */}
      <div className="mt-8 flex items-center justify-center gap-2.5">
        {CARDS.map((c, i) => (
          <button
            key={c.title}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${c.title}`}
            className="group relative h-2.5 w-2.5"
          >
            <span
              className="absolute inset-0 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === index ? c.color : "rgba(255,255,255,0.25)",
                transform: i === index ? "scale(1.25)" : "scale(1)",
                boxShadow: i === index ? `0 0 12px ${c.color}88` : "none",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
