"use client";

import Link from "next/link";
import { ArrowUp, Linkedin, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Raisevane logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold">Raisevane</span>
            </div>
            <p className="mt-3 text-sm text-white/40">
              © {new Date().getFullYear()} Raisevane. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-sm sm:gap-16 md:justify-start">
            <div className="flex flex-col gap-3">
              <Link href="/#story" className="text-white/60 transition-colors hover:text-neon">Our Story</Link>
              <Link href="/work" className="text-white/60 transition-colors hover:text-neon">Work</Link>
              <Link href="/team" className="text-white/60 transition-colors hover:text-neon">Team</Link>
              <Link href="/services" className="text-white/60 transition-colors hover:text-neon">Services</Link>
              <Link href="/#pricing" className="text-white/60 transition-colors hover:text-neon">Pricing</Link>
              <Link href="/about" className="text-white/60 transition-colors hover:text-neon">About</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/#contact" className="text-white/60 transition-colors hover:text-neon">Contact</Link>
              <Link href="/#location" className="text-white/60 transition-colors hover:text-neon">Location</Link>
              <a
                href="https://www.linkedin.com/company/raisevane"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 transition-colors hover:text-neon"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 transition-colors hover:text-neon"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp bubble */}
      <motion.a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", bounce: 0.4 }}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle size={26} />
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-neon text-black shadow-[0_8px_30px_rgba(204,255,0,0.35)] transition-transform duration-300 hover:scale-110"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
