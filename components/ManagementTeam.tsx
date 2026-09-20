"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionTag } from "./SectionTag";
import { ArrowRight, Linkedin, ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";

function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <section className="relative pb-28">
      <div className="mx-auto max-w-7xl space-y-28 px-6 lg:px-8">
        {members.map((m, i) => {
          const imageLeft = i % 2 === 0; // alternate: photo left, then photo right, ...
          return (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* Picture */}
              <div
                className={
                  imageLeft
                    ? "order-1 lg:order-1"
                    : "order-1 lg:order-2"
                }
              >
                <div className="group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-full w-full object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h3 className="text-3xl font-bold">{m.name}</h3>
                    <p className="mt-1 text-neon">{m.role}</p>
                  </div>
                </div>
              </div>

              {/* Their works */}
              <div
                className={
                  imageLeft
                    ? "order-2 lg:order-2"
                    : "order-2 lg:order-1"
                }
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
                  {String(i + 1).padStart(2, "0")} — {m.role}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <h3 className="text-4xl font-bold md:text-5xl">
                    {m.name}
                  </h3>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-neon hover:text-neon"
                    aria-label={`${m.name} on LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
                <p className="mt-5 max-w-xl leading-relaxed text-white/60">
                  {m.bio}
                </p>
                <ul className="mt-7 space-y-4 border-l-2 border-neon/40 pl-7">
                  {m.works.map((w) => (
                    <li
                      key={w}
                      className="relative leading-relaxed text-white/65"
                    >
                      <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_12px_rgba(204,255,0,0.8)]" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* The wider team — 10+ specialists */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center">
            <SectionTag>The Wider Team</SectionTag>
          </div>
          <div className="mt-10 text-center">
            <h3 className="text-4xl font-bold md:text-5xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                10+ specialists
              </span>{" "}
              behind every build
            </h3>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/60">
              Raisevane is more than its leadership — a hand-picked team of
              10+ senior engineers, designers, data and security specialists.
              Small enough that a founder reviews every project. Senior enough
              that every project is worth reviewing.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Senior Engineers",
                text: "Full-stack, mobile & cloud developers who have shipped production systems for years — not fresh graduates learning on your budget.",
              },
              {
                icon: ShieldCheck,
                title: "Security Analysts",
                text: "Every product goes through security review — pen-testing mindset, secure defaults, and no vulnerabilities left behind.",
              },
              {
                icon: ArrowRight,
                title: "Data & AI Specialists",
                text: "Pipelines, analytics and AI integrations built by people who've done it inside healthcare, banking and telecom.",
              },
              {
                icon: Users,
                title: "Product Designers",
                text: "Research-driven UX and pixel-perfect UI, so what we ship doesn't just work — it feels effortless.",
              },
            ].map((c, i) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-neon/40 hover:bg-white/[0.05]"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <c.icon
                  size={22}
                  className="text-neon"
                  strokeWidth={1.8}
                />
                <h4 className="mt-4 text-lg font-bold">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {c.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-neon/25 bg-neon/[0.04] p-7 text-center md:p-8">
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              Every engagement is <span className="text-neon font-semibold">led by a founder</span>, staffed by{" "}
              <span className="text-neon font-semibold">senior specialists</span>, and reviewed{" "}
              <span className="text-neon font-semibold">line-by-line before it ships</span>. That&apos;s why our
              clients stay — 98% of them come back.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { TeamGrid };

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  works: string[]; // what they do / their work
  photo: string;
  linkedin: string;
}

// REAL TEAM — leadership of Raisevane.
export const TEAM: TeamMember[] = [
  {
    name: "Santosh Kumar Shah",
    role: "Founder & CEO",
    bio: "Santosh spent 6+ years engineering mission-critical data platforms for global enterprises — Baxter Healthcare, Cigna, Citibank, Hilton and Bell Canada — before founding Raisevane. He has led end-to-end ETL and data-warehouse delivery across healthcare, banking, hospitality and telecom, tuning systems where downtime is measured in millions. That enterprise discipline is Raisevane's foundation: every product we ship is held to the standard Fortune-500 clients demand.",
    works: [
      "6+ years building data platforms for Baxter, Citi, Hilton & Bell Canada",
      "Enterprise ETL & warehouse architecture across healthcare, banking & telecom",
      "Sets Raisevane's delivery bar — fixed quotes, weekly demos, zero surprises",
      "Product strategy & client partnership from first call to final launch",
    ],
    photo: "/team/santosh.jpg",
    linkedin: "https://www.linkedin.com/in/santosh-kumar-shah-44849a185/",
  },
  {
    name: "Ankit Kumar",
    role: "Tech Lead",
    bio: "Ankit is a full-stack and AI engineer who has already shipped what most engineers attempt in a decade — an AI-driven financial trading platform, an AI job-application platform, a chess engine, and a real-time computer-vision system. A Smart India Hackathon Top-10 national finalist and 2nd-prize winner at IIT Kanpur's AeroVision, he architects every Raisevane build — React, Next.js, Node.js, Python and PostgreSQL — with AI woven through and performance engineered in from day one.",
    works: [
      "Built AI trading-platform pipelines ingesting & scoring live market data",
      "Full-stack architecture: React, Next.js, Node.js, Python, PostgreSQL",
      "Smart India Hackathon Top-10 finalist · 2nd Prize, IIT Kanpur AeroVision",
      "Owns code quality — reviews, CI/CD, performance & security audits",
    ],
    photo: "/team/ankit.jpg",
    linkedin: "https://www.linkedin.com/in/ankit-kumar-4a03ab3b5/",
  },
  {
    name: "Saksham Karn",
    role: "Cyber Security Analytics Head",
    bio: "Saksham Karn is a cybersecurity professional with a strong focus on ethical hacking, penetration testing, vulnerability assessment, web application security, network security, and security operations. He has developed practical expertise across Linux and security environments, with hands-on experience using tools such as Kali Linux, Nmap, Burp Suite, Wireshark, and other industry-standard security assessment tools. His technical foundation also includes Python, SQL, Linux administration, reconnaissance, vulnerability analysis, and cybersecurity fundamentals. Alongside technical security, Saksham has experience in cybersecurity awareness, technical training, and mentoring, allowing him to approach security from both an attacker's and defender's perspective. He is committed to a practical, analytical, security-first approach — identifying vulnerabilities, understanding attack methodologies, and strengthening digital environments against evolving cyber threats.",
    works: [
      "Ethical hacking, penetration testing & vulnerability assessment",
      "Web application, network security & security operations",
      "Hands-on with Kali Linux, Nmap, Burp Suite & Wireshark",
      "Certified & trained in Ethical Hacking, Linux, AI Technologies & Data Analytics",
    ],
    photo: "/team/saksham.jpg",
    linkedin: "https://www.linkedin.com/in/saksham-karn-13502135b",
  },
];

export function ManagementTeam({ showTag = true }: { showTag?: boolean }) {
  const [active, setActive] = useState(0);
  const member = TEAM[active];

  return (
    <section id="team" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {showTag && (
          <div className="flex justify-center">
            <SectionTag>Management Team</SectionTag>
          </div>
        )}

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">
          {/* Left — animated bio */}
          <div className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-4xl font-bold md:text-5xl">
                  {member.name}
                </h3>
                <p className="mt-3 text-xl text-neon">{member.role}</p>
                <p className="mt-8 max-w-xl leading-relaxed text-white/60">
                  {member.bio}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-neon hover:text-neon"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={18} />
                  </a>
                  <span className="text-sm text-white/40">
                    Connect on LinkedIn
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — portrait */}
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={member.photo}
                  src={member.photo}
                  alt={member.name}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Selector row */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {TEAM.map((m, i) => (
            <button
              key={m.name}
              onClick={() => setActive(i)}
              className={cn(
                "group relative h-16 w-16 overflow-hidden rounded-full border-2 transition-all duration-300",
                i === active
                  ? "scale-110 border-neon shadow-[0_0_25px_rgba(204,255,0,0.35)]"
                  : "border-white/15 opacity-60 hover:opacity-100"
              )}
              aria-label={`View ${m.name}`}
            >
              <img
                src={m.photo}
                alt=""
                className="h-full w-full object-cover"
              />
            </button>
          ))}
          <button
            onClick={() => setActive((a) => (a + 1) % TEAM.length)}
            className="ml-2 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-neon hover:text-neon"
            aria-label="Next member"
          >
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
