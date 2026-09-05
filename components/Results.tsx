"use client";

import { Globe, Database, Workflow, Bot, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const STATS = [
  { icon: Globe, stat: "10+", label: "Websites Built", desc: "Landing pages, campaign pages and business websites." },
  { icon: Database, stat: "5+", label: "CRM Flow", desc: "Lead tracking, sales assignment and follow-up system." },
  { icon: Workflow, stat: "4+", label: "Automation Concepts", desc: "Meta Lead Ads, Google Sheets, WhatsApp and CRM integration." },
  { icon: Bot, stat: "AI", label: "Chatbot Builder", desc: "Customer reply, lead capture and sales support automation." },
];

export function Results() {
  return (
    <section id="results" className="support-section results-section">
      <div className="page-container">
        <Reveal className="support-results-header">
          <div className="support-heading">
            <span className="support-ghost">Recent Results</span>
            <h2>Real Systems. Real Impact.</h2>
          </div>
          <a href="#projects" className="support-outline-button">
            View All Results <ArrowUpRight size={18} strokeWidth={1.5} />
          </a>
        </Reveal>
        <div className="results-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="result-item">
              <div className="result-stat-row">
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.15 }}
                  className="result-stat"
                >
                  {s.stat}
                </motion.span>
                <s.icon size={26} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3>{s.label}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
