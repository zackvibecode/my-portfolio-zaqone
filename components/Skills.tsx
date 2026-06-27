"use client";

import {
  Megaphone,
  Target,
  TrendingUp,
  Layout,
  Code2,
  Database,
  MessageSquare,
  Bot,
  Brain,
  Sheet,
  Workflow,
  Cpu,
  Flame,
  Wind,
  Layers,
  Zap,
} from "lucide-react";
import { Reveal } from "./Reveal";

const SKILLS = [
  { icon: Megaphone, label: "Digital Marketing", size: "lg" },
  { icon: Target, label: "Meta Ads", size: "md" },
  { icon: TrendingUp, label: "Funnel Strategy", size: "md" },
  { icon: Layout, label: "Website Design", size: "md" },
  { icon: Code2, label: "Front-End Development", size: "lg" },
  { icon: Database, label: "CRM Planning", size: "md" },
  { icon: MessageSquare, label: "WhatsApp Automation", size: "md" },
  { icon: Bot, label: "AI Chatbot Development", size: "lg" },
  { icon: Brain, label: "Prompt Engineering", size: "md" },
  { icon: Sheet, label: "Google Sheets Automation", size: "md" },
  { icon: Workflow, label: "n8n Workflow", size: "md" },
  { icon: Cpu, label: "OpenAI API", size: "md" },
  { icon: Flame, label: "Supabase", size: "sm" },
  { icon: Zap, label: "Firebase", size: "sm" },
  { icon: Layers, label: "Next.js", size: "sm" },
  { icon: Wind, label: "Tailwind CSS", size: "sm" },
];

const SPAN: Record<string, string> = {
  lg: "sm:col-span-2 sm:row-span-2",
  md: "sm:col-span-1",
  sm: "sm:col-span-1",
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full theme-card border theme-border px-3.5 py-1.5 text-xs font-medium theme-muted">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-bright" />
            Skills
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight theme-text sm:text-4xl lg:text-5xl">
            Tools & Capabilities
          </h2>
          <p className="mt-4 text-base theme-muted sm:text-lg">
            A focused toolkit across marketing, web, automation and AI.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[120px]">
            {SKILLS.map((skill) => (
              <div
                key={skill.label}
                className={`card-glow group flex ${SPAN[skill.size]} flex-col justify-between rounded-2xl theme-card border theme-border p-4 ${
                  skill.size === "lg" ? "min-h-[120px]" : ""
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-bright/10 ring-1 ring-accent/30 ${
                    skill.size === "lg" ? "sm:h-12 sm:w-12" : ""
                  }`}
                >
                  <skill.icon
                    size={skill.size === "lg" ? 22 : 18}
                    className="text-lavender"
                  />
                </span>
                <p
                  className={`mt-3 font-semibold theme-text ${
                    skill.size === "lg" ? "text-base sm:text-lg" : "text-sm"
                  }`}
                >
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
