"use client";

import { MessageCircle, Mail, Linkedin, Github, Sparkles, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t theme-border py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 bg-gradient-to-br from-accent/30 to-accent-bright/10">
              <Sparkles size={16} className="text-lavender" />
            </span>
            <span className="text-lg font-bold tracking-tight theme-text">
              ZAQ<span className="gradient-text">ONE</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <SocialIcon href="#" label="WhatsApp">
              <MessageCircle size={16} />
            </SocialIcon>
            <SocialIcon href="mailto:hello@zaqone.com" label="Email">
              <Mail size={16} />
            </SocialIcon>
            <SocialIcon href="#" label="LinkedIn">
              <Linkedin size={16} />
            </SocialIcon>
            <SocialIcon href="#" label="GitHub">
              <Github size={16} />
            </SocialIcon>
          </div>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-xl theme-card-2 border theme-border px-4 py-2.5 text-xs font-medium theme-muted transition-colors hover:theme-text"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t theme-border pt-6 sm:flex-row">
          <p className="text-xs theme-muted">
            © 2026 ZAQONE. All rights reserved.
          </p>
          <p className="text-xs theme-muted">
            Built with Next.js, Tailwind & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
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
      className="flex h-9 w-9 items-center justify-center rounded-lg theme-card-2 border theme-border theme-muted transition-colors hover:border-accent/50 hover:text-lavender"
    >
      {children}
    </a>
  );
}
