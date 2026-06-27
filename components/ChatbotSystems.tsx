"use client";

import { Bot, MessageSquare, ShieldCheck, UserCheck, Activity } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const BOTS = [
  {
    icon: MessageSquare,
    title: "FAQ Reply Bot",
    desc: "Answers common customer questions quickly and consistently.",
    status: "Active",
  },
  {
    icon: Bot,
    title: "Lead Capture Bot",
    desc: "Collects name, phone number, interest, budget, date and customer intent.",
    status: "Active",
  },
  {
    icon: ShieldCheck,
    title: "Sales Qualification Bot",
    desc: "Asks the right questions before sending the lead to the sales team.",
    status: "Active",
  },
  {
    icon: UserCheck,
    title: "Human Handover Flow",
    desc: "Transfers the customer to a real person when needed.",
    status: "Standby",
  },
];

export function ChatbotSystems() {
  return (
    <section id="chatbot" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full theme-card border theme-border px-3.5 py-1.5 text-xs font-medium theme-muted">
            <Bot size={12} className="text-lavender" />
            AI Chatbot Systems
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight theme-text sm:text-4xl lg:text-5xl">
            AI Chatbot Systems
          </h2>
          <p className="mt-4 text-base theme-muted sm:text-lg">
            I build chatbot systems that help businesses reply faster, reduce
            repeated manual work and guide customers through the buying
            journey. The chatbot can answer common questions, recommend the
            right offer, collect customer details and pass qualified leads to
            the sales team.
          </p>
        </Reveal>

        {/* Dashboard panel */}
        <Reveal delay={0.15} className="mt-12">
          <div className="overflow-hidden rounded-3xl theme-card-2 border theme-border">
            {/* Panel header */}
            <div className="flex items-center justify-between border-b theme-border px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <p className="font-mono text-xs theme-muted">
                  zaqone-ai-console.app
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full theme-card border theme-border px-3 py-1.5">
                <Activity size={12} className="text-green-400" />
                <span className="text-[11px] theme-muted">Live</span>
              </div>
            </div>

            <div className="grid gap-4 p-5 sm:p-7 lg:grid-cols-4 md:grid-cols-2">
              {BOTS.map((bot, i) => (
                <motion.div
                  key={bot.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-glow group relative overflow-hidden rounded-2xl theme-card border theme-border p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-bright/10 ring-1 ring-accent/30">
                      <bot.icon size={20} className="text-lavender" />
                    </span>
                    <span
                      className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium ${
                        bot.status === "Active"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          bot.status === "Active"
                            ? "bg-green-400 animate-pulse-glow"
                            : "bg-amber-400"
                        }`}
                      />
                      {bot.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold theme-text">
                    {bot.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed theme-muted">
                    {bot.desc}
                  </p>

                  {/* Mini chat preview */}
                  <div className="mt-4 space-y-1.5 rounded-xl theme-card-2 border theme-border p-3">
                    <div className="flex justify-start">
                      <span className="max-w-[80%] rounded-lg rounded-tl-sm bg-accent/15 px-2.5 py-1.5 text-[10px] theme-text">
                        Hi! How can I help you today?
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <span className="max-w-[80%] rounded-lg rounded-tr-sm bg-accent-bright/80 px-2.5 py-1.5 text-[10px] text-white">
                        I want to know more.
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
