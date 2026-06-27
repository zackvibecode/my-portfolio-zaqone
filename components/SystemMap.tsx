"use client";

import { motion } from "framer-motion";
import {
  TrafficCone,
  LayoutTemplate,
  ClipboardList,
  Bot,
  Database,
  Workflow,
  Users,
  Repeat,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  { icon: TrafficCone, label: "Traffic", index: 0 },
  { icon: LayoutTemplate, label: "Landing Page", index: 1 },
  { icon: ClipboardList, label: "Lead Form / WhatsApp", index: 2 },
  { icon: Bot, label: "AI Chatbot", index: 3 },
  { icon: Database, label: "CRM", index: 4 },
  { icon: Workflow, label: "Automation", index: 5 },
  { icon: Users, label: "Sales Team", index: 6 },
  { icon: Repeat, label: "Follow-up", index: 7 },
  { icon: Trophy, label: "Conversion", index: 8 },
];

const ROWS = [
  STEPS.slice(0, 3),
  STEPS.slice(3, 6),
  STEPS.slice(6, 9),
];

export function SystemMap() {
  return (
    <section id="systems" className="relative py-24 sm:py-28">
      <div className="glow-orb pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full theme-card border theme-border px-3.5 py-1.5 text-xs font-medium theme-muted">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-bright animate-pulse-glow" />
            System Map
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight theme-text sm:text-4xl lg:text-5xl">
            How I Connect Marketing Into A Sales System
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <div className="rounded-3xl theme-card-2 border theme-border p-6 sm:p-10">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-accent-bright animate-pulse-glow" />
                <p className="text-xs uppercase tracking-widest theme-muted">
                  Command Center
                </p>
              </div>
              <p className="hidden font-mono text-xs theme-muted sm:block">
                flow://marketing-to-sales
              </p>
            </div>

            {/* Desktop: zigzag (boustrophedon) flow */}
            <div className="hidden md:block">
              <div className="flex flex-col gap-y-12">
                {ROWS.map((row, rowIdx) => {
                  const reverse = rowIdx % 2 === 1;
                  return (
                    <div
                      key={rowIdx}
                      className={`flex items-stretch justify-between gap-6 ${
                        reverse ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      {row.map((step, colIdx) => {
                        const isLastInFlow =
                          colIdx === row.length - 1;
                        const showDown =
                          isLastInFlow && rowIdx < ROWS.length - 1;
                        return (
                          <div
                            key={step.label}
                            className="relative flex flex-1 items-center justify-center"
                          >
                            <Node
                              icon={step.icon}
                              label={step.label}
                              index={step.index}
                            />
                            {!isLastInFlow && (
                              <Connector
                                direction={reverse ? "left" : "right"}
                              />
                            )}
                            {showDown && <Connector direction="down" />}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile: vertical stack */}
            <div className="md:hidden">
              <div className="flex flex-col items-stretch gap-0">
                {STEPS.map((step) => (
                  <div key={step.label} className="relative flex flex-col items-center">
                    <Node icon={step.icon} label={step.label} index={step.index} compact />
                    {step.index < STEPS.length - 1 && <Connector direction="down" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Node({
  icon: Icon,
  label,
  index,
  compact,
}: {
  icon: typeof Bot;
  label: string;
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`card-glow relative z-10 flex flex-col items-center gap-2 rounded-2xl theme-card border theme-border ${
        compact ? "px-5 py-4" : "px-4 py-4 w-full max-w-[200px]"
      }`}
    >
      <span className="absolute -right-1 -top-1 rounded-md bg-accent/15 px-1.5 py-0.5 text-[9px] font-mono theme-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-bright/10 ring-1 ring-accent/30">
        <Icon size={18} className="text-lavender" />
      </span>
      <span className="text-xs font-semibold theme-text sm:text-sm">
        {label}
      </span>
      <span className="h-1.5 w-1.5 rounded-full bg-accent-bright animate-pulse-glow" />
    </motion.div>
  );
}

function Connector({ direction }: { direction: "right" | "left" | "down" }) {
  if (direction === "down") {
    return (
      <div className="absolute left-1/2 top-full z-0 h-10 w-px -translate-x-1/2 md:h-12">
        <div className="h-full w-full bg-gradient-to-b from-accent/60 to-accent/10" />
        <motion.span
          className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent-bright"
          animate={{ top: ["0%", "100%"] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    );
  }
  return (
    <div
      className={`absolute top-1/2 z-0 h-px w-12 -translate-y-1/2 ${
        direction === "right" ? "left-full" : "right-full rotate-180"
      }`}
    >
      <div className="h-full w-full bg-gradient-to-r from-accent/60 to-accent/10" />
      <motion.span
        className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent-bright"
        animate={{ left: ["0%", "100%"] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
