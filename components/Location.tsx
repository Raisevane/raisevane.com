"use client";

import { motion } from "framer-motion";
import { SectionTag } from "./SectionTag";
import { MapPin, Globe2 } from "lucide-react";

export const MAPS_URL = "https://maps.google.com/?q=26.747036,85.920319";

export function Location() {
  return (
    <section id="location" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionTag>Where We Are</SectionTag>
        </div>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.03] p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Location
            </p>
            <h3 className="mt-4 flex items-start gap-3 text-4xl font-bold md:text-5xl">
              <MapPin className="mt-2 h-9 w-9 shrink-0 text-neon" />
              Janakpurdham, Nepal
            </h3>
            <p className="mt-8 flex items-start gap-3 leading-relaxed text-white/60">
              <Globe2 className="mt-1 h-5 w-5 shrink-0 text-teal-300" />
              Our studio is here — but our work isn&apos;t. We build for clients
              across the world, fully remote, always in your timezone.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:border-neon/60 hover:text-neon"
            >
              <MapPin size={16} />
              Open in Google Maps
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl border border-white/10"
          >
            <iframe
              title="Raisevane studio location — Janakpurdham, Nepal"
              src="https://maps.google.com/maps?q=26.747036,85.920319&z=14&output=embed"
              className="h-full min-h-[420px] w-full grayscale-[35%] invert-[92%] hue-rotate-180 contrast-[0.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
