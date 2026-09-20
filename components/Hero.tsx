"use client";

import { motion } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, Paperclip } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <ParticleBackground />
      {/* soft radial glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-16 text-center lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
        >
          We craft{" "}
          <span className="relative inline-block -rotate-2 rounded-2xl bg-neon px-5 py-1 text-black">
            super
            <Paperclip
              className="absolute -top-5 right-4 h-8 w-8 rotate-[140deg] text-white/80"
              strokeWidth={1.5}
            />
          </span>{" "}
          digital products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-2xl text-lg text-white/60 md:text-xl"
        >
          Raisevane is a full-service digital agency helping startups and
          enterprises design, build, and scale modern software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-neon px-9 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(204,255,0,0.5)]"
          >
            Get in Touch
          </a>
          <a
            href="/work"
            className="group flex items-center gap-2 rounded-full bg-white/5 px-9 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
          >
            View Our Work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-neon"
          />
        </div>
      </motion.div>
    </section>
  );
}
