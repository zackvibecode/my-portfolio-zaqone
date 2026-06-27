"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  TrendingUp,
  Terminal,
  Code2,
  User,
} from "lucide-react";

const TOOLS = [
  "Meta Ads",
  "WhatsApp",
  "Google Sheets",
  "OpenAI",
  "n8n",
  "Supabase",
  "Next.js",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      {/* Background grid + glows */}
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="glow-orb pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[420px]" />
      <div className="glow-orb pointer-events-none absolute top-40 right-0 h-[380px] w-[380px] opacity-70" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* LEFT */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full theme-card border theme-border px-3.5 py-1.5 text-xs font-medium theme-muted"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent-bright animate-pulse-glow" />
            Digital Marketer • Web Builder • CRM • Automation • AI Chatbot
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight theme-text sm:text-5xl lg:text-6xl"
          >
            Turning Marketing
            <br className="hidden sm:block" /> Ideas Into{" "}
            <span className="gradient-text">Working Systems</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed theme-muted sm:text-lg"
          >
            I build websites, CRM systems, automation workflows and AI chatbot
            systems that help businesses capture, manage and convert leads
            faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-bright px-6 py-3.5 text-sm font-semibold text-white btn-glow"
            >
              Work With Me
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl theme-card border theme-border px-6 py-3.5 text-sm font-semibold theme-text transition-colors hover:border-accent/50"
            >
              View My Work
            </a>
          </motion.div>

          {/* Trusted by tools bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-10"
          >
            <p className="mb-3 text-[11px] uppercase tracking-[0.18em] theme-muted">
              Trusted by tools
            </p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg theme-card-2 border theme-border px-3 py-1.5 text-xs font-medium theme-text/90 transition-colors hover:border-accent/40"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — portrait + floating cards */}
        <div className="relative lg:col-span-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto aspect-[4/5] w-full max-w-md sm:max-w-lg"
    >
      {/* Glowing concentric ring behind portrait */}
      <div className="absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15" />
      <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10" />
      <div className="glow-orb absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />

      {/* Portrait placeholder card */}
      <div className="relative h-full w-full overflow-hidden rounded-3xl theme-card border theme-border">
        {/* Replace this block with <Image src="/your-photo.jpg" /> later */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-bright/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-accent-bright shadow-2xl">
            <User size={44} className="text-white" />
          </div>
          <p className="mt-5 text-lg font-bold tracking-tight theme-text">
            ZAQ<span className="gradient-text">ONE</span>
          </p>
          <p className="mt-1 text-xs theme-muted">
            Muhammad Zarul Zaquan
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full theme-card-2 border theme-border px-3 py-1.5 text-[10px] theme-muted">
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse-glow" />
            Available for projects
          </div>
        </div>
        {/* Subtle grid overlay */}
        <div className="hero-grid absolute inset-0 opacity-30" />
      </div>

      {/* Floating card 1 — Code snippet (top-left) */}
      <FloatingCard
        className="left-[-10%] top-[8%] sm:left-[-12%]"
        delay={0}
        floatDuration={6}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <Code2 size={13} className="text-lavender" />
          <span className="text-[10px] font-semibold theme-text">code</span>
        </div>
        <pre className="font-mono text-[10px] leading-relaxed theme-muted whitespace-pre">
{`<span class="dev">
  build()
  automate()
  convert()
</span>`}
        </pre>
      </FloatingCard>

      {/* Floating card 2 — Terminal (bottom-left) */}
      <FloatingCard
        className="left-[-6%] bottom-[14%] sm:left-[-8%]"
        delay={0.6}
        floatDuration={7}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <Terminal size={13} className="text-lavender" />
          <span className="text-[10px] font-semibold theme-text">terminal</span>
        </div>
        <ul className="space-y-1">
          {["Results driven.", "Code crafted.", "Leads captured."].map((t) => (
            <li
              key={t}
              className="flex items-center gap-1.5 text-[10px] theme-muted"
            >
              <span className="h-1 w-1 rounded-full bg-accent-bright" />
              {t}
            </li>
          ))}
        </ul>
      </FloatingCard>

      {/* Floating card 3 — Performance (top-right) */}
      <FloatingCard
        className="right-[-8%] top-[16%] sm:right-[-10%]"
        delay={1.2}
        floatDuration={5.5}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-wider theme-muted">
              Performance
            </p>
            <p className="mt-1 text-xl font-bold gradient-text">+245%</p>
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
            <TrendingUp size={15} className="text-lavender" />
          </span>
        </div>
        {/* Mini line graph */}
        <svg
          viewBox="0 0 120 36"
          className="mt-2 h-9 w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.8, ease: "easeInOut" }}
            d="M0,30 L20,26 L40,22 L60,16 L80,12 L100,7 L120,3"
            fill="none"
            stroke="#A855F7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0,30 L20,26 L40,22 L60,16 L80,12 L100,7 L120,3 L120,36 L0,36 Z"
            fill="url(#lineFill)"
          />
        </svg>
      </FloatingCard>

      {/* Floating card 4 — AI Chatbot (bottom-right) */}
      <FloatingCard
        className="right-[-6%] bottom-[6%] sm:right-[-8%]"
        delay={1.8}
        floatDuration={6.5}
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <Bot size={13} className="text-lavender" />
          <span className="text-[10px] font-semibold theme-text">AI Chatbot</span>
        </div>
        <p className="text-[10px] leading-snug theme-muted">
          FAQ reply, lead capture, human handover.
        </p>
      </FloatingCard>

      {/* Node glow dots on the ring */}
      {[
        { top: "0%", left: "50%" },
        { top: "50%", left: "100%" },
        { top: "100%", left: "50%" },
        { top: "50%", left: "0%" },
      ].map((pos, i) => (
        <span
          key={i}
          className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-bright animate-pulse-glow"
          style={{ top: pos.top, left: pos.left, animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </motion.div>
  );
}

function FloatingCard({
  className,
  delay,
  floatDuration,
  children,
}: {
  className: string;
  delay: number;
  floatDuration: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 + delay * 0.1 }}
      className={`absolute z-10 w-40 sm:w-44 ${className}`}
    >
      <div
        className="rounded-xl theme-card border theme-border p-3 shadow-2xl backdrop-blur-md"
        style={{ animation: `float ${floatDuration}s ease-in-out infinite` }}
      >
        {children}
      </div>
    </motion.div>
  );
}
