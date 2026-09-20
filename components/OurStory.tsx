"use client";

import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { SectionTag } from "./SectionTag";
import { EcosystemOrbit } from "./EcosystemOrbit";
import { CountUp } from "./CountUp";

export function OurStory({
  showTag = true,
  visual = "robot",
}: {
  showTag?: boolean;
  visual?: "robot" | "ecosystem";
}) {
  return (
    <section id="story" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {showTag && (
          <div className="flex justify-center">
            <SectionTag>Our Story</SectionTag>
          </div>
        )}

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          {/* Left: copy — robot head follows the cursor as it moves */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
              Who we are
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Built by builders,
              <br />
              <span className="text-white/50">for builders.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-white/60">
              Raisevane started with a simple belief: great software shouldn&apos;t
              take a year and a fortune to ship. From Janakpurdham, Nepal to
              clients across the world, we design, engineer, and scale products
              that feel effortless — because we obsess over the details most
              teams skip.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-white/60">
              Today we&apos;re a fully remote studio — strategy, design, web,
              mobile and AI under one roof. Every service orbits around one
              thing: your product&apos;s success.
            </p>

            <div className="mt-8 grid max-w-lg grid-cols-3 gap-4">
              {[
                { k: "40+", v: "Projects shipped" },
                { k: "12", v: "Countries served" },
                { k: "98%", v: "Client retention" },
              ].map((s, i) => {
                const num = parseInt(s.k, 10);
                const suffix = s.k.replace(/[0-9]/g, "");
                return (
                <div
                  key={s.v}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center transition-colors duration-300 hover:border-neon/40"
                >
                  <div className="text-2xl font-bold text-neon">
                    <CountUp end={num} suffix={suffix} duration={1.4 + i * 0.2} />
                  </div>
                  <div className="mt-1 text-xs text-white/50">{s.v}</div>
                </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: interactive 3D robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[480px] overflow-hidden rounded-3xl border border-white/10 bg-black/[0.96] md:h-[560px]"
          >
            {visual === "ecosystem" ? (
              <EcosystemOrbit />
            ) : (
              <>
                <div className="pointer-events-none absolute left-0 top-0 z-10 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Move your mouse — he&apos;s watching
                  </p>
                </div>
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
