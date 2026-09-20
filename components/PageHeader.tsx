"use client";

import { motion } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";
import { SectionTag } from "./SectionTag";

export function PageHeader({
  tag,
  title,
  titleAccent,
  subtitle,
}: {
  tag: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
}) {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden pt-24">
      <ParticleBackground />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-[130px]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 text-center lg:px-8">
        <SectionTag>{tag}</SectionTag>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-4xl font-bold leading-tight tracking-tight md:text-6xl"
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="text-white/50">{titleAccent}</span>
            </>
          )}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/60"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
