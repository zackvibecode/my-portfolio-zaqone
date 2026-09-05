"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const PROJECTS = [
  {
    image: "/projects/oneform.png",
    type: "SaaS Product / Lead Capture",
    title: "OneForm — WhatsApp Form Builder",
    desc: "A no-code form builder that turns customer responses into ready-to-reply WhatsApp conversations.",
    tags: ["SaaS", "AI Form Builder", "WhatsApp", "No-code", "Lead Capture"],
    href: "https://form.zaqone.com/",
  },
  {
    image: "/projects/salescrm.png",
    type: "SaaS Product / CRM",
    title: "Zaqone CRM — Travel Sales CRM",
    desc: "A sales workspace for travel teams to import leads, manage follow-ups and track WhatsApp performance.",
    tags: ["CRM", "Travel Tech", "WhatsApp", "Analytics", "Supabase"],
    href: "https://salescrm.zaqone.com/",
  },
  {
    image: "/projects/trip-seat.png",
    type: "Systems / SaaS",
    title: "Nusa Travel Trip Seat",
    desc: "A travel operations CRM for managing departures, live seat availability, payments and team updates from one dashboard.",
    tags: ["Travel CRM", "SaaS", "Dashboard", "Real-time Operations"],
    href: "https://nusatravel-seat.onrender.com/",
  },
  {
    image: "/projects/travel.png",
    type: "Web App / Travel Platform",
    title: "ZAQONE Travel",
    desc: "A premium travel-package platform for searching departures, viewing live package details and converting enquiries through WhatsApp.",
    tags: ["Travel Tech", "Booking Platform", "Lead Generation", "WhatsApp"],
    href: "https://travel.zaqone.com/",
  },
  {
    image: "/projects/makassar.png",
    type: "Campaign / Landing Page",
    title: "Nusatravel Makassar 2026",
    desc: "A high-conversion travel campaign page that turns a detailed 5D4N group itinerary into clear pricing, availability and WhatsApp enquiries.",
    tags: ["Travel", "Landing Page", "Conversion Design", "Booking Funnel"],
    href: "https://makassar.nusatravel.zaqone.com/",
  },
  {
    image: "/projects/matcha.png",
    type: "Brand Website / F&B",
    title: "MORI MATCHA — Café Brand Website",
    desc: "A Japanese-inspired café experience with a browsable menu, brand story and mobile-first visit and WhatsApp conversion paths.",
    tags: ["Web Design", "F&B", "Branding", "Menu UX", "Responsive"],
    href: "https://matcha.zaqone.com/",
  },
  {
    image: "/projects/automotive.png",
    type: "Brand Website / Automotive",
    title: "ZAQONE Automotive",
    desc: "A premium vehicle-wrap studio website that showcases selected work, service options and a WhatsApp quote flow.",
    tags: ["Automotive", "Branding", "Web Design", "Lead Generation"],
    href: "https://zaqone-automotive.vercel.app/",
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
  image,
  type,
  title,
  desc,
  tags,
  href,
}: (typeof PROJECTS)[number]) {
  return (
    <article className="project-card">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="project-preview"
        aria-label={"Visit " + title + " — " + type + " (opens in a new tab)"}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 600px) 100vw, 50vw"
          className="project-preview-image"
        />
        <span className="project-type">{type}</span>
        <ArrowUpRight className="project-preview-arrow" strokeWidth={1.5} aria-hidden="true" />
      </a>

      <div className="project-card-content">
        <h3>{title}</h3>
        <p className="project-description">{desc}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="project-link"
          aria-label={"Visit " + title + " (opens in a new tab)"}
        >
          Visit Live Site <ArrowUpRight size={19} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
