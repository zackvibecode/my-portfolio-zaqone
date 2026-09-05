"use client";

import { useState } from "react";
import {
  Globe,
  Database,
  Workflow,
  Bot,
  MessageSquare,
  Target,
  ArrowUpRight,
  X,
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
  const [activeService, setActiveService] = useState<number | null>(0);

  return (
    <section id="services" className="service-section">
      <div className="service-container">
        <Reveal className="service-heading">
          <span className="service-ghost">Services</span>
          <h2>Services That Build Growth</h2>
          <p>
            A blend of marketing strategy, websites, automation and AI systems
            to help businesses grow smarter.
          </p>
        </Reveal>

        <div className="service-list">
          {SERVICES.map((service, index) => {
            const expanded = activeService === index;
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={0.04}>
                <article className={"service-row" + (expanded ? " service-row-open" : "")}>
                  <h3>
                    <button
                      type="button"
                      className="service-toggle"
                      id={"service-toggle-" + index}
                      aria-expanded={expanded}
                      aria-controls={"service-detail-" + index}
                      onClick={() => setActiveService(expanded ? null : index)}
                    >
                      <span>{service.title}</span>
                      {expanded ? (
                        <X aria-hidden="true" strokeWidth={1.4} />
                      ) : (
                        <ArrowUpRight aria-hidden="true" strokeWidth={1.4} />
                      )}
                    </button>
                  </h3>
                  <div
                    id={"service-detail-" + index}
                    aria-labelledby={"service-toggle-" + index}
                    role="region"
                    hidden={!expanded}
                    className="service-detail"
                  >
                    <p>{service.desc}</p>
                    <span className="service-learn-more">
                      Learn More <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div className="service-preview" aria-hidden="true">
                      <Icon strokeWidth={1} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
