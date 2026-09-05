"use client";

import {
  Megaphone, Target, TrendingUp, Layout, Code2, Database,
  MessageSquare, Bot, Brain, Sheet, Workflow, Cpu,
  Flame, Wind, Layers, Zap,
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

export function Skills() {
  return (
    <section id="skills" className="support-section skills-section">
      <div className="page-container">
        <Reveal className="support-heading">
          <span className="support-ghost">Skills</span>
          <h2>Tools &amp; Capabilities</h2>
          <p className="support-intro">
            A focused toolkit across marketing, web, automation and AI.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="skills-list">
            {SKILLS.map((skill) => (
              <div key={skill.label} className="skill-item">
                <skill.icon size={23} strokeWidth={1.5} aria-hidden="true" />
                <p>{skill.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
