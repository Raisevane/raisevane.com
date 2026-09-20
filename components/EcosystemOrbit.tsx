"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ShoppingCart,
  Handshake,
  ChartPie,
  TrendingUp,
  CalendarDays,
  Smartphone,
  Table2,
  Cloud,
} from "lucide-react";

const NODES = [
  { label: "E-com", icon: ShoppingCart, angle: -125 },
  { label: "CRM", icon: Handshake, angle: -90 },
  { label: "Analytics", icon: ChartPie, angle: -55 },
  { label: "Marketing", icon: TrendingUp, angle: -18 },
  { label: "App", icon: Smartphone, angle: 18 },
  { label: "Data", icon: Table2, angle: 55 },
  { label: "CRM", icon: Handshake, angle: 90 },
  { label: "Cloud", icon: Cloud, angle: 125 },
];

export function EcosystemOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);

  // mouse-tilt (like the robot followed the cursor)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 60,
    damping: 18,
  });
  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 60,
    damping: 18,
  });
  const shiftX = useSpring(useTransform(mx, [-0.5, 0.5], [14, -14]), {
    stiffness: 60,
    damping: 18,
  });
  const shiftY = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 60,
    damping: 18,
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden rounded-3xl"
      style={{ perspective: "1200px" }}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, #1c2027 0%, #14161b 45%, #0a0b0e 100%)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-[110px]" />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="relative h-[300px] w-[300px] scale-[0.82] sm:scale-90 md:h-[380px] md:w-[380px] md:scale-100"
          style={{ x: shiftX, y: shiftY, transformStyle: "preserve-3d" }}
        >
          {/* orbit ring */}
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-[-36px] rounded-full border border-white/5" />

          {/* slow-rotating ring of nodes */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            {NODES.map((n, i) => {
              const rad = (n.angle * Math.PI) / 180;
              const R = 150; // md ring radius handled by container size
              const x = Math.cos(rad) * R;
              const y = Math.sin(rad) * R;
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%,-50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#1b1e24]/90 text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur md:h-14 md:w-14">
                      <n.icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-medium text-white/60">
                      {n.label}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* connection lines (SVG) */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="-160 -160 320 320"
            aria-hidden
          >
            {NODES.map((n, i) => {
              const rad = (n.angle * Math.PI) / 180;
              const R = 128;
              const x = Math.cos(rad) * R;
              const y = Math.sin(rad) * R;
              return (
                <motion.line
                  key={i}
                  x1={0}
                  y1={0}
                  x2={x}
                  y2={y}
                  stroke="rgba(94,234,212,0.35)"
                  strokeWidth={1}
                  strokeDasharray="3 5"
                  animate={{ strokeDashoffset: [0, -16] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
                />
              );
            })}
          </svg>

          {/* glowing dots on ring */}
          {NODES.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const R = 150;
            const x = Math.cos(rad) * R;
            const y = Math.sin(rad) * R;
            return (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-neon/80 shadow-[0_0_10px_rgba(204,255,0,0.8)]"
                style={{
                  transform: `translate(-50%,-50%) translate(${x}px, ${y}px)`,
                }}
              />
            );
          })}

          {/* center R logo */}
          <motion.div
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-neon/15 blur-2xl" />
              <img
                src="/logo.png"
                alt="Raisevane"
                className="h-28 w-28 object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)] md:h-36 md:w-36"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* caption */}
      <div className="absolute left-0 top-0 z-10 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Move your mouse — it&apos;s alive
        </p>
      </div>
    </div>
  );
}
