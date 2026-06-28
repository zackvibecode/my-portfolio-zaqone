"use client";

import { motion } from "framer-motion";
import {
  TrafficCone,
  LayoutTemplate,
  ClipboardList,
  Bot,
  Database,
  Workflow,
  Users,
  Repeat,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: TrafficCone,
    label: "Traffic",
    desc: "Meta Ads, content and campaign traffic.",
  },
  {
    icon: LayoutTemplate,
    label: "Landing Page",
    desc: "Offer page built to explain and capture intent.",
  },
  {
    icon: ClipboardList,
    label: "Lead Form / WhatsApp",
    desc: "Customer enters details or starts a WhatsApp chat.",
  },
  {
    icon: Bot,
    label: "AI Chatbot",
    desc: "Instant FAQ reply and first-level qualification.",
  },
  {
    icon: Database,
    label: "CRM",
    desc: "Lead data is organized by status and owner.",
  },
  {
    icon: Workflow,
    label: "Automation",
    desc: "Tasks, sheets, notifications and handover run automatically.",
  },
  {
    icon: Users,
    label: "Sales Team",
    desc: "Qualified leads are assigned to the right person.",
  },
  {
    icon: Repeat,
    label: "Follow-up",
    desc: "Reminders and WhatsApp follow-ups keep leads warm.",
  },
  {
    icon: Trophy,
    label: "Conversion",
    desc: "Clear process turns interest into sales action.",
  },
];

export function SystemMap() {
  return (
    <section id="systems" className="relative py-24 sm:py-28">
      <div className="glow-orb pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full theme-card border theme-border px-3.5 py-1.5 text-xs font-medium theme-muted">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-bright animate-pulse-glow" />
            System Map
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight theme-text sm:text-4xl lg:text-5xl">
            How I Connect Marketing Into A Sales System
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl theme-card-2 border theme-border p-5 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-accent-bright animate-pulse-glow" />
                <p className="text-xs uppercase tracking-widest theme-muted">
                  Marketing System Timeline
                </p>
              </div>
              <p className="hidden font-mono text-xs theme-muted sm:block">
                flow://marketing-to-sales
              </p>
            </div>

            {/* Desktop: premium horizontal rail */}
            <div className="hidden xl:block">
              <div className="relative px-2 py-12">
                <div className="absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-accent/10 via-accent/70 to-accent/10" />
                <motion.span
                  className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent-bright shadow-[0_0_20px_rgba(168,85,247,0.9)]"
                  animate={{ left: ["4%", "96%"] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="grid grid-cols-9 gap-3">
                  {STEPS.map((step, index) => (
                    <TimelineNode
                      key={step.label}
                      {...step}
                      index={index}
                      desktop
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Tablet: compact three-column timeline */}
            <div className="hidden md:block xl:hidden">
              <div className="grid gap-4 md:grid-cols-3">
                {STEPS.map((step, index) => (
                  <TimelineCard key={step.label} {...step} index={index} />
                ))}
              </div>
            </div>

            {/* Mobile: compact vertical timeline */}
            <div className="md:hidden">
              <div className="relative space-y-3 pl-7">
                <div className="absolute bottom-8 left-[11px] top-4 w-px bg-gradient-to-b from-accent/70 via-accent/30 to-transparent" />
                {STEPS.map((step, index) => (
                  <TimelineRow key={step.label} {...step} index={index} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TimelineNode({
  icon: Icon,
  label,
  desc,
  index,
  desktop,
}: {
  icon: typeof Bot;
  label: string;
  desc: string;
  index: number;
  desktop?: boolean;
}) {
  const isTop = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: isTop ? 16 : -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`relative flex min-h-[190px] flex-col items-center ${
        isTop ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`card-glow w-full rounded-2xl theme-card border theme-border p-3 text-center ${
          desktop ? "min-h-[104px]" : ""
        }`}
      >
        <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-bright/10 ring-1 ring-accent/30">
          <Icon size={17} className="text-lavender" />
        </span>
        <p className="mt-2 text-[11px] font-semibold theme-text">{label}</p>
        <p className="mt-1 line-clamp-2 text-[10px] leading-snug theme-muted">
          {desc}
        </p>
      </div>
      <span className="absolute left-1/2 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-[#0E1018] text-[10px] font-bold text-lavender shadow-[0_0_22px_rgba(139,92,246,0.35)]">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

function TimelineCard({
  icon: Icon,
  label,
  desc,
  index,
}: {
  icon: typeof Bot;
  label: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="card-glow relative overflow-hidden rounded-2xl theme-card border theme-border p-4"
    >
      <span className="absolute right-3 top-3 rounded-lg bg-accent/15 px-2 py-1 font-mono text-[10px] theme-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-bright/10 ring-1 ring-accent/30">
        <Icon size={18} className="text-lavender" />
      </span>
      <h3 className="mt-4 text-sm font-semibold theme-text">{label}</h3>
      <p className="mt-1.5 text-xs leading-relaxed theme-muted">{desc}</p>
    </motion.div>
  );
}

function TimelineRow({
  icon: Icon,
  label,
  desc,
  index,
}: {
  icon: typeof Bot;
  label: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="relative"
    >
      <span className="absolute -left-7 top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-[#0E1018] text-[9px] font-bold text-lavender shadow-[0_0_18px_rgba(139,92,246,0.35)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="card-glow flex gap-3 rounded-2xl theme-card border theme-border p-3.5">
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-bright/10 ring-1 ring-accent/30">
          <Icon size={17} className="text-lavender" />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold theme-text">{label}</h3>
          <p className="mt-1 text-xs leading-relaxed theme-muted">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
