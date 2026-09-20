"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTag } from "./SectionTag";
import { Mail, Send, PhoneCall, Linkedin, Github, MessageCircle, Chrome } from "lucide-react";

const EMAIL = "raisevane@gmail.com";

// FormSubmit delivers form submissions to EMAIL as real emails.
// First-ever submission sends an activation link to EMAIL — click it once and
// every message after that lands straight in the inbox. No account needed.

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/",
    icon: MessageCircle,
    hover: "hover:bg-[#25D366] hover:text-black hover:border-[#25D366]",
    tip: "Chat on WhatsApp",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/raisevane",
    icon: Linkedin,
    hover: "hover:bg-[#0A66C2] hover:text-black hover:border-[#0A66C2]",
    tip: "Connect on LinkedIn",
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: Mail,
    hover: "hover:bg-[#EA4335] hover:text-black hover:border-[#EA4335]",
    tip: "Send an email",
  },
  {
    label: "Google",
    href: "https://www.google.com/search?q=Raisevane",
    icon: Chrome,
    hover: "hover:bg-neon hover:text-black hover:border-neon",
    tip: "Find us on Google",
  },
];

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {};
    data.forEach((value, key) => {
      payload[key] = value.toString();
    });
    payload["_subject"] = `New project inquiry — ${payload.name || "someone"} via raisevane.vercel.app`;
    payload["_template"] = "table";
    payload["_captcha"] = "false";

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.success === "true") {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionTag>Let&apos;s Talk</SectionTag>
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-lg text-white/55">
          Tell us about your project — we reply within 2 hours on working days.
        </p>

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          {status === "sent" ? (
            <div className="py-16 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neon text-black"
              >
                <Send size={26} />
              </motion.div>
              <h3 className="mt-6 text-2xl font-bold">Message sent! 🎉</h3>
              <p className="mt-2 text-white/55">
                We&apos;ll get back to you within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition-colors placeholder:text-white/30 focus:border-neon/60"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition-colors placeholder:text-white/30 focus:border-neon/60"
                />
              </div>
              <input
                name="building"
                placeholder="What are you building? (optional)"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition-colors placeholder:text-white/30 focus:border-neon/60"
              />
              <textarea
                required
                rows={5}
                name="message"
                placeholder="Tell us about your project..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition-colors placeholder:text-white/30 focus:border-neon/60"
              />
              {/* Honeypot — spam bots fill this, humans never see it */}
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="flex flex-col items-center gap-6 pt-2 md:flex-row md:justify-between">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center gap-2.5 rounded-full bg-neon px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(204,255,0,0.5)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong — please email us directly at{" "}
                    <a href={`mailto:${EMAIL}`} className="underline hover:text-neon">
                      {EMAIL}
                    </a>
                  </p>
                )}

                <div className="flex items-center gap-4 text-sm text-white/55">
                  <Mail size={16} className="text-neon" />
                  <a
                    href={`mailto:${EMAIL}`}
                    className="transition-colors hover:text-neon"
                  >
                    {EMAIL}
                  </a>
                  <span className="hidden text-white/20 md:inline">|</span>
                  <a
                    href="tel:+977000000000"
                    className="hidden items-center gap-1.5 transition-colors hover:text-neon md:flex"
                  >
                    <PhoneCall size={14} /> Book a call
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Social connect animation */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-5">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.tip}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, rotate: [-3, 3, -2][i % 3] }}
                className={`group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 backdrop-blur transition-colors duration-300 ${s.hover}`}
              >
                <s.icon size={22} />
                <span className="pointer-events-none absolute -bottom-9 whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-xs text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:-bottom-10 group-hover:opacity-100">
                  {s.tip}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
