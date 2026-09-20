"use client";

import { motion } from "framer-motion";
import { Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20, rotate: -4 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative inline-block rounded-xl bg-neon px-6 py-2 text-2xl font-bold text-black md:text-3xl",
        className
      )}
    >
      {children}
      <Paperclip
        className="absolute -top-4 right-3 h-6 w-6 rotate-[140deg] text-white/70"
        strokeWidth={1.5}
      />
    </motion.span>
  );
}
