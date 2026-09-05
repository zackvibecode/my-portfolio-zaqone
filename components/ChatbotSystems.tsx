"use client";

import { Bot, MessageSquare, ShieldCheck, UserCheck, Activity } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const BOTS = [
  { icon: MessageSquare, title: "FAQ Reply Bot", desc: "Answers common customer questions quickly and consistently.", status: "Active" },
  { icon: Bot, title: "Lead Capture Bot", desc: "Collects name, phone number, interest, budget, date and customer intent.", status: "Active" },
  { icon: ShieldCheck, title: "Sales Qualification Bot", desc: "Asks the right questions before sending the lead to the sales team.", status: "Active" },
  { icon: UserCheck, title: "Human Handover Flow", desc: "Transfers the customer to a real person when needed.", status: "Standby" },
];

export function ChatbotSystems() {
  return (
    <section id="chatbot" className="support-section chatbot-section">
      <div className="page-container">
        <Reveal className="support-heading">
          <span className="support-ghost">AI Chatbot Systems</span>
          <h2>AI Chatbot Systems</h2>
          <p className="support-intro">
            I build chatbot systems that help businesses reply faster, reduce
            repeated manual work and guide customers through the buying
            journey. The chatbot can answer common questions, recommend the
            right offer, collect customer details and pass qualified leads to
            the sales team.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="chatbot-console">
          <div className="support-panel-heading">
            <p className="support-code">zaqone-ai-console.app</p>
            <span className="support-status"><Activity size={14} /> Live</span>
          </div>
          <div className="chatbot-grid">
            {BOTS.map((bot, i) => (
              <motion.div
                key={bot.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="chatbot-item"
              >
                <div className="chatbot-item-top">
                  <bot.icon size={26} strokeWidth={1.5} aria-hidden="true" />
                  <span className="support-status">
                    <span className={bot.status === "Active" ? "status-dot" : "status-dot standby"} />
                    {bot.status}
                  </span>
                </div>
                <h3>{bot.title}</h3>
                <p>{bot.desc}</p>
                <div className="chatbot-preview">
                  <span>Hi! How can I help you today?</span>
                  <span>I want to know more.</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
