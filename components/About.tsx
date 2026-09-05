"use client";

import { User, MapPin, Focus, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="support-section about-section">
      <div className="page-container">
        <Reveal className="support-heading">
          <span className="support-ghost">About</span>
          <h2>About ZAQONE</h2>
          <p className="support-intro">
            I am a digital marketer who works at the intersection of
            marketing, websites, automation and AI. My focus is not only
            creating campaigns, but building systems that make marketing
            easier to manage, faster to respond and better at converting
            leads into sales.
          </p>
          <div className="about-info">
            <InfoCard
              icon={<User size={19} strokeWidth={1.5} />}
              label="Name"
              value="Muhammad Zarul Zaquan Bin Nasaruddin"
            />
            <InfoCard
              icon={<MapPin size={19} strokeWidth={1.5} />}
              label="Based in"
              value="Kuala Lumpur, Malaysia"
            />
            <InfoCard
              icon={<Focus size={19} strokeWidth={1.5} />}
              label="Focus"
              value="Websites • CRM • Automation • AI Chatbots"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15} className="about-builder">
          <div className="about-builder-heading">
            <Sparkles size={25} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <p className="about-brand">ZAQ<span>ONE</span></p>
              <p>Systems Builder</p>
            </div>
          </div>
          <ol className="about-principles">
            {[
              "Plan the funnel before building anything.",
              "Build websites that capture leads cleanly.",
              "Connect CRM, WhatsApp and automation.",
              "Deploy AI chatbots that qualify and hand over.",
            ].map((line, i) => (
              <li key={line}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{line}</p>
              </li>
            ))}
          </ol>
          <p className="about-code support-code">
            <span>const</span>{" "}<span>zaqone</span> ={" "}
            <span>build</span>(<span>&quot;marketing&quot;</span>,{" "}
            <span>&quot;systems&quot;</span>);
          </p>
        </Reveal>
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
    <div className="about-info-item">
      <div>{icon}<p>{label}</p></div>
      <p>{value}</p>
    </div>
  );
}
