"use client";

import { ArrowUpRight, Map, LayoutDashboard, Workflow, Bot } from "lucide-react";
import { Reveal } from "./Reveal";

const PROJECTS = [
  {
    icon: Map,
    type: "Travel Website / Lead Funnel",
    title: "Nusatravel Website System",
    desc: "A travel website and inquiry flow designed to help customers explore packages and contact the sales team easily.",
    tags: ["Next.js", "Tailwind", "Lead Funnel", "WhatsApp"],
  },
  {
    icon: LayoutDashboard,
    type: "CRM / Internal Sales System",
    title: "Travel CRM Dashboard",
    desc: "A lead management dashboard concept for tracking inquiries, status, sales progress and follow-up actions.",
    tags: ["Supabase", "CRM", "Dashboard", "Sales"],
  },
  {
    icon: Workflow,
    type: "Marketing Automation",
    title: "Meta Lead Ads Automation",
    desc: "A workflow connecting Meta Lead Ads to Google Sheets or CRM, WhatsApp message flow and sales team assignment.",
    tags: ["n8n", "Meta Ads", "Google Sheets", "WhatsApp"],
  },
  {
    icon: Bot,
    type: "AI Chatbot / WhatsApp Assistant",
    title: "AI Travel Sales Chatbot",
    desc: "An AI assistant concept that answers customer questions, recommends packages and captures lead details before human handover.",
    tags: ["OpenAI", "WhatsApp", "AI", "Handover"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full theme-card border theme-border px-3.5 py-1.5 text-xs font-medium theme-muted">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-bright" />
            Featured Projects
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight theme-text sm:text-4xl lg:text-5xl">
            Selected Work
          </h2>
          <p className="mt-4 text-base theme-muted sm:text-lg">
            A look at the systems, websites and automation flows I have been
            building.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  icon: Icon,
  type,
  title,
  desc,
  tags,
}: {
  icon: typeof Bot;
  type: string;
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="card-glow group relative h-full overflow-hidden rounded-2xl theme-card border theme-border p-6 sm:p-7">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-bright/10 ring-1 ring-accent/30">
          <Icon size={22} className="text-lavender" />
        </span>
        <span className="rounded-full theme-card-2 border theme-border px-3 py-1 text-[11px] font-medium theme-muted">
          {type}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold theme-text">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed theme-muted">{desc}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-lg theme-card-2 border theme-border px-2.5 py-1 text-[11px] font-medium theme-text/85"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-lavender"
      >
        View Details
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </div>
  );
}
