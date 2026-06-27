"use client";

import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  Linkedin,
  Github,
} from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl theme-card border theme-border p-8 sm:p-12 lg:p-16">
            {/* Glows */}
            <div className="glow-orb pointer-events-none absolute -left-20 -top-20 h-72 w-72 opacity-70" />
            <div className="glow-orb pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 opacity-60" />
            <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* LEFT — decorative code block */}
              <div className="lg:col-span-4">
                <div className="overflow-hidden rounded-2xl theme-card-2 border theme-border">
                  <div className="flex items-center gap-1.5 border-b theme-border px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    <span className="ml-2 font-mono text-[10px] theme-muted">
                      contact.html
                    </span>
                  </div>
                  <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed theme-muted">
<span className="text-lavender">&lt;section</span> <span className="text-accent-bright">id</span>=<span className="text-green-400">&quot;contact&quot;</span><span className="text-lavender">&gt;</span>{"\n"}
{"  "}<span className="text-lavender">&lt;h2&gt;</span>Let&apos;s Build<span className="text-lavender">&lt;/h2&gt;</span>{"\n"}
{"  "}<span className="text-lavender">&lt;button</span> <span className="text-accent-bright">class</span>=<span className="text-green-400">&quot;cta&quot;</span><span className="text-lavender">&gt;</span>{"\n"}
{"    "}Let&apos;s Talk{"\n"}
{"  "}<span className="text-lavender">&lt;/button&gt;</span>{"\n"}
{"  "}<span className="text-lavender">&lt;ul&gt;</span>{"\n"}
{"    "}<span className="text-lavender">&lt;li&gt;</span>hello@zaqone.com<span className="text-lavender">&lt;/li&gt;</span>{"\n"}
{"    "}<span className="text-lavender">&lt;li&gt;</span>Kuala Lumpur<span className="text-lavender">&lt;/li&gt;</span>{"\n"}
{"  "}<span className="text-lavender">&lt;/ul&gt;</span>{"\n"}
<span className="text-lavender">&lt;/section&gt;</span>
                  </pre>
                </div>
              </div>

              {/* CENTER — CTA */}
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 rounded-full theme-card-2 border theme-border px-3.5 py-1.5 text-xs font-medium theme-muted">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-accent-bright animate-pulse-glow" />
                  Contact
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight theme-text sm:text-4xl lg:text-5xl">
                  Let&apos;s Build Something{" "}
                  <span className="gradient-text">Useful Together</span>
                </h2>
                <p className="mt-5 text-base theme-muted sm:text-lg">
                  If you need a website, CRM, automation flow or AI chatbot
                  system, let&apos;s connect.
                </p>

                <div className="mt-8">
                  <a
                    href="mailto:hello@zaqone.com"
                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-bright px-6 py-3.5 text-sm font-semibold text-white btn-glow"
                  >
                    Let&apos;s Talk
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <SocialLink href="#" label="WhatsApp">
                    <MessageCircle size={16} />
                  </SocialLink>
                  <SocialLink href="mailto:hello@zaqone.com" label="Email">
                    <Mail size={16} />
                  </SocialLink>
                  <SocialLink href="#" label="LinkedIn">
                    <Linkedin size={16} />
                  </SocialLink>
                  <SocialLink href="#" label="GitHub">
                    <Github size={16} />
                  </SocialLink>
                </div>
              </div>

              {/* RIGHT — contact details */}
              <div className="lg:col-span-3">
                <div className="space-y-3">
                  <ContactRow
                    icon={<Mail size={16} className="text-lavender" />}
                    label="Email"
                    value="hello@zaqone.com"
                    href="mailto:hello@zaqone.com"
                  />
                  <ContactRow
                    icon={<MapPin size={16} className="text-lavender" />}
                    label="Location"
                    value="Kuala Lumpur, Malaysia"
                  />
                  <ContactRow
                    icon={<Clock size={16} className="text-lavender" />}
                    label="Response Time"
                    value="Within 24 hours"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group inline-flex items-center gap-2 rounded-xl theme-card-2 border theme-border px-4 py-2.5 text-xs font-medium theme-text transition-colors hover:border-accent/50"
    >
      <span className="text-lavender">{children}</span>
      {label}
    </a>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="card-glow flex items-center gap-3 rounded-2xl theme-card-2 border theme-border p-4">
      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/15">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wider theme-muted">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-semibold theme-text">
          {value}
        </p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
