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
    <section id="projects" className="project-section">
      <div className="project-container">
        <Reveal className="project-heading">
          <span className="project-ghost">Featured Projects</span>
          <h2>Selected Work</h2>
          <p>
            A look at the systems, websites and automation flows I have been
            building.
          </p>
        </Reveal>

        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 0.08}>
              <ProjectCard {...project} />
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
}: (typeof PROJECTS)[number]) {
  return (
    <article className="project-card">
      <div className="project-preview" role="img" aria-label={title + " — " + type + ": project image placeholder"}>
        <span className="project-type">{type}</span>
        <Icon className="project-placeholder-icon" strokeWidth={1} aria-hidden="true" />
        <ArrowUpRight className="project-preview-arrow" strokeWidth={1.5} aria-hidden="true" />
      </div>

      <div className="project-card-content">
        <h3>{title}</h3>
        <p className="project-description">{desc}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a href="#contact" className="project-link">
          View Details <ArrowUpRight size={19} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
