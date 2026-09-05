"use client";

import { ArrowUpRight, User } from "lucide-react";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

const TOOLS = ["Meta Ads", "WhatsApp", "Google Sheets", "OpenAI", "n8n", "Supabase", "Next.js"];

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-stage page-container">
        <Reveal className="hero-wordmark" y={10}>
          <h1 aria-label="ZAQONE"><span>ZAQ</span><span>ONE</span></h1>
        </Reveal>
        {/* Reserved for an actual portfolio portrait; no substitute person or invented image. */}
        <div className="hero-portrait" role="img" aria-label="Portrait placeholder for Muhammad Zarul Zaquan">
          <User size={48} strokeWidth={1} aria-hidden="true" />
          <p>Muhammad Zarul Zaquan</p>
          <span className="portrait-note">Portrait placeholder</span>
        </div>
        <Reveal className="hero-copy" delay={0.08} y={12}>
          <h2>Turning Marketing Ideas Into <span>Working Systems</span></h2>
          <p>I build websites, CRM systems, automation workflows and AI chatbot systems that help businesses capture, manage and convert leads faster.</p>
          <div className="hero-actions">
            <a href="#contact" className="pill-button pill-button-dark">Work With Me <ArrowUpRight size={19} aria-hidden="true" /></a>
            <a href="#projects" className="hero-secondary-link">View My Work <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </Reveal>
        <div className="hero-socials"><SocialLinks /></div>
      </div>
      <div className="hero-details page-container">
        <p className="hero-specialties">Digital Marketer • Web Builder • CRM • Automation • AI Chatbot</p>
        <div className="hero-toolbox">
          <p>Trusted by tools</p>
          <div>{TOOLS.map((tool) => <span className="text-pill" key={tool}>{tool}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
