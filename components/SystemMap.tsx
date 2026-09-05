"use client";

import { motion } from "framer-motion";
import {
  TrafficCone, LayoutTemplate, ClipboardList, Bot, Database,
  Workflow, Users, Repeat, Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  { icon: TrafficCone, label: "Traffic", desc: "Meta Ads, content and campaign traffic." },
  { icon: LayoutTemplate, label: "Landing Page", desc: "Offer page built to explain and capture intent." },
  { icon: ClipboardList, label: "Lead Form / WhatsApp", desc: "Customer enters details or starts a WhatsApp chat." },
  { icon: Bot, label: "AI Chatbot", desc: "Instant FAQ reply and first-level qualification." },
  { icon: Database, label: "CRM", desc: "Lead data is organized by status and owner." },
  { icon: Workflow, label: "Automation", desc: "Tasks, sheets, notifications and handover run automatically." },
  { icon: Users, label: "Sales Team", desc: "Qualified leads are assigned to the right person." },
  { icon: Repeat, label: "Follow-up", desc: "Reminders and WhatsApp follow-ups keep leads warm." },
  { icon: Trophy, label: "Conversion", desc: "Clear process turns interest into sales action." },
];

export function SystemMap() {
  return (
    <section id="systems" className="support-section system-section">
      <div className="page-container">
        <Reveal className="support-heading">
          <span className="support-ghost">System Map</span>
          <h2>How I Connect Marketing Into A Sales System</h2>
        </Reveal>
        <Reveal delay={0.15} className="system-timeline">
          <div className="support-panel-heading">
            <p>Marketing System Timeline</p>
            <p className="support-code">flow://marketing-to-sales</p>
          </div>
          <ol className="system-steps">
            {STEPS.map(({ icon: Icon, label, desc }, index) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="system-step"
              >
                <span className="system-step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="system-step-copy">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  <h3>{label}</h3>
                  <p>{desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
