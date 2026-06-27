"use client";

import {
  Globe,
  Database,
  Workflow,
  Bot,
  MessageSquare,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Globe,
    title: "Website & Landing Page",
    desc: "Clean, responsive pages built to capture leads and explain offers clearly.",
  },
  {
    icon: Database,
    title: "CRM & Lead Management",
    desc: "Organize leads, track status and make follow-up easier for the sales team.",
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    desc: "Connect forms, sheets, CRM, WhatsApp and sales workflows.",
  },
  {
    icon: Bot,
    title: "AI Chatbot Development",
    desc: "Build chatbot systems that answer questions, capture leads and support customers.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Chatbot Flow",
    desc: "Create WhatsApp-based flows for inquiry, qualification and human handover.",
  },
  {
    icon: Target,
    title: "Meta Ads & Funnel Strategy",
    desc: "Plan campaigns, improve lead quality and connect ads to proper sales flow.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full theme-card border theme-border px-3.5 py-1.5 text-xs font-medium theme-muted">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-bright" />
            Services
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight theme-text sm:text-4xl lg:text-5xl">
            Services That Build Growth
          </h2>
          <p className="mt-4 text-base theme-muted sm:text-lg">
            A blend of marketing strategy, websites, automation and AI systems
            to help businesses grow smarter.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Globe;
  title: string;
  desc: string;
}) {
  return (
    <div className="card-glow group relative h-full overflow-hidden rounded-2xl theme-card border theme-border p-6">
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-bright/10 ring-1 ring-accent/30">
        <Icon size={22} className="text-lavender" />
      </div>
      <h3 className="mt-5 text-lg font-semibold theme-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed theme-muted">{desc}</p>
      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-lavender">
        Learn More
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </div>
  );
}
