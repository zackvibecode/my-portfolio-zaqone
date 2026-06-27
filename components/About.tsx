"use client";

import { User, MapPin, Focus, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full theme-card border theme-border px-3.5 py-1.5 text-xs font-medium theme-muted">
              <span className="flex h-1.5 w-1.5 rounded-full bg-accent-bright" />
              About
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight theme-text sm:text-4xl lg:text-5xl">
              About ZAQONE
            </h2>
            <p className="mt-5 text-base leading-relaxed theme-muted sm:text-lg">
              I am a digital marketer who works at the intersection of
              marketing, websites, automation and AI. My focus is not only
              creating campaigns, but building systems that make marketing
              easier to manage, faster to respond and better at converting
              leads into sales.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <InfoCard
                icon={<User size={16} className="text-lavender" />}
                label="Name"
                value="Muhammad Zarul Zaquan Bin Nasaruddin"
              />
              <InfoCard
                icon={<MapPin size={16} className="text-lavender" />}
                label="Based in"
                value="Kuala Lumpur, Malaysia"
              />
              <InfoCard
                icon={<Focus size={16} className="text-lavender" />}
                label="Focus"
                value="Websites • CRM • Automation • AI Chatbots"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-3xl theme-card border theme-border p-7">
              <div className="glow-orb pointer-events-none absolute -right-20 -top-20 h-60 w-60 opacity-60" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-bright">
                    <Sparkles size={22} className="text-white" />
                  </span>
                  <div>
                    <p className="text-lg font-bold theme-text">
                      ZAQ<span className="gradient-text">ONE</span>
                    </p>
                    <p className="text-xs theme-muted">Systems Builder</p>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {[
                    "Plan the funnel before building anything.",
                    "Build websites that capture leads cleanly.",
                    "Connect CRM, WhatsApp and automation.",
                    "Deploy AI chatbots that qualify and hand over.",
                  ].map((line, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-5 w-5 flex-none items-center justify-center rounded-md bg-accent/15 text-[10px] font-mono text-lavender">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-relaxed theme-text/90">
                        {line}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl theme-card-2 border theme-border p-4">
                  <p className="font-mono text-[11px] theme-muted">
                    <span className="text-lavender">const</span>{" "}
                    <span className="theme-text">zaqone</span> ={" "}
                    <span className="text-lavender">build</span>(
                    <span className="theme-text/80">&quot;marketing&quot;</span>,{" "}
                    <span className="theme-text/80">&quot;systems&quot;</span>);
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl theme-card-2 border theme-border p-4">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15">
          {icon}
        </span>
        <p className="text-xs uppercase tracking-wider theme-muted">{label}</p>
      </div>
      <p className="mt-3 text-sm font-medium theme-text">{value}</p>
    </div>
  );
}
