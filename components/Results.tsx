"use client";

import { Globe, Database, Workflow, Bot, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const STATS = [
  {
    icon: Globe,
    stat: "10+",
    label: "Websites Built",
    desc: "Landing pages, campaign pages and business websites.",
  },
  {
    icon: Database,
    stat: "5+",
    label: "CRM Flow",
    desc: "Lead tracking, sales assignment and follow-up system.",
  },
  {
    icon: Workflow,
    stat: "4+",
    label: "Automation Concepts",
    desc: "Meta Lead Ads, Google Sheets, WhatsApp and CRM integration.",
  },
  {
    icon: Bot,
    stat: "AI",
    label: "Chatbot Builder",
    desc: "Customer reply, lead capture and sales support automation.",
  },
];

export function Results() {
  return (
    <section id="results" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full theme-card border theme-border px-3.5 py-1.5 text-xs font-medium theme-muted">
                <span className="flex h-1.5 w-1.5 rounded-full bg-accent-bright" />
                Recent Results
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight theme-text sm:text-4xl lg:text-5xl">
                Real Systems. Real Impact.
              </h2>
            </div>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl theme-card border theme-border px-5 py-3 text-sm font-semibold theme-text transition-colors hover:border-accent/50"
            >
              View All Results
              <ArrowUpRight
                size={15}
                className="text-lavender transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card-glow group relative h-full overflow-hidden rounded-2xl theme-card border theme-border p-6">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-bright/10 ring-1 ring-accent/30">
                    <s.icon size={18} className="text-lavender" />
                  </span>
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.2 }}
                    className="text-3xl font-bold gradient-text sm:text-4xl"
                  >
                    {s.stat}
                  </motion.span>
                </div>
                <h3 className="mt-5 text-base font-semibold theme-text">
                  {s.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed theme-muted">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
