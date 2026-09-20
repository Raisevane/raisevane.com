"use client";

import { useEffect, useRef, useState } from "react";
import { SectionTag } from "./SectionTag";
import { cn } from "@/lib/utils";

const TECHS = [
  { name: "React", tag: "Modern web frontends", color: "#61DAFB", icon: "⚛" },
  { name: "Next.js", tag: "Full-stack React framework", color: "#ffffff", icon: "▲" },
  { name: "Node.js", tag: "Scalable APIs & backends", color: "#8CC84B", icon: "⬢" },
  { name: "TypeScript", tag: "Type-safe everywhere", color: "#3178C6", icon: "TS" },
  { name: "Flutter", tag: "Cross-platform mobile", color: "#54C5F8", icon: "◈" },
  { name: "PostgreSQL", tag: "Reliable data layer", color: "#4169E1", icon: "🗄" },
  { name: "AWS", tag: "Cloud & infrastructure", color: "#FF9900", icon: "☁" },
  { name: "OpenAI", tag: "Practical AI features", color: "#10A37F", icon: "✦" },
];

export function TechStack() {
  const [angle, setAngle] = useState(0);
  const [focused, setFocused] = useState<number | null>(null);
  const [radius, setRadius] = useState(420);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const raf = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // responsive radius: shrink on small screens
  useEffect(() => {
    const compute = () => {
      const w = containerRef.current?.offsetWidth ?? window.innerWidth;
      // ring must fit: radius ~ 45% of width, clamped
      setRadius(Math.max(150, Math.min(420, w * 0.42)));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // auto-rotate
  useEffect(() => {
    let last = performance.now();
    const loop = (t: number) => {
      if (!dragging.current && focused === null) {
        const dt = t - last;
        setAngle((a) => a + dt * 0.012);
      }
      last = t;
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, [focused]);

  const step = 360 / TECHS.length;

  const startDrag = (clientX: number) => {
    dragging.current = true;
    lastX.current = clientX;
  };
  const moveDrag = (clientX: number) => {
    if (!dragging.current) return;
    const dx = clientX - lastX.current;
    lastX.current = clientX;
    setAngle((a) => a + dx * 0.25);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <SectionTag className="rotate-1">Our Tech Stack</SectionTag>
        <p className="mt-8 text-sm text-white/55 md:text-base">
          Drag to spin · tap a card to focus
        </p>

        <div
          ref={containerRef}
          className="relative mt-6 h-[340px] w-full touch-pan-y select-none md:mt-10 md:h-[420px]"
          style={{ perspective: "1200px" }}
          onMouseDown={(e) => startDrag(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onMouseMove={(e) => moveDrag(e.clientX)}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
          onTouchEnd={() => (dragging.current = false)}
        >
          {TECHS.map((t, i) => {
            const cardAngle = ((angle + i * step) % 360 + 360) % 360;
            const rad = (cardAngle * Math.PI) / 180;
            const x = Math.sin(rad) * radius;
            const z = Math.cos(rad) * radius;
            const visible = z > -radius * 0.55;
            const scale = 0.6 + 0.4 * ((z + radius) / (2 * radius));
            const opacity = visible ? 0.25 + 0.75 * ((z + radius) / (2 * radius)) : 0;

            return (
              <button
                key={t.name}
                onClick={() => setFocused(focused === i ? null : i)}
                className={cn(
                  "absolute left-1/2 top-1/2 flex h-44 w-32 flex-col items-center justify-center gap-2 rounded-3xl border bg-black/60 backdrop-blur-md md:h-64 md:w-52 md:gap-4",
                  focused === i
                    ? "border-neon shadow-[0_0_50px_rgba(204,255,0,0.25)]"
                    : "border-white/15"
                )}
                style={{
                  transform: `translate(-50%,-50%) translateX(${x}px) translateZ(${z}px) rotateY(${-cardAngle}deg) scale(${scale})`,
                  opacity,
                  zIndex: Math.round(z) + 1000,
                  pointerEvents: visible ? "auto" : "none",
                }}
              >
                <span
                  className="text-3xl md:text-5xl"
                  style={{ color: t.color, textShadow: `0 0 30px ${t.color}55` }}
                >
                  {t.icon}
                </span>
                <span className="text-sm font-bold md:text-lg">{t.name}</span>
                <span className="hidden px-4 text-xs text-white/50 md:block">
                  {t.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
