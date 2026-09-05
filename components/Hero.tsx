"use client";

import { ArrowUpRight, User } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SocialLinks } from "./SocialLinks";

const TOOLS = ["Meta Ads", "WhatsApp", "Google Sheets", "OpenAI", "n8n", "Supabase", "Next.js"];
const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0 : 0.7;
  const staggerDelay = reducedMotion ? 0 : 0.08;

  return (
    <section id="home" className="hero-section">
      <div className="hero-stage page-container">
        <div className="hero-wordmark">
          <h1 aria-label="ZAQONE">
            <motion.span
              initial={reducedMotion ? false : { opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, ease: EASE, delay: staggerDelay }}
            >
              ZAQ
            </motion.span>
            <motion.span
              initial={reducedMotion ? false : { opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, ease: EASE, delay: staggerDelay * 2.6 }}
            >
              ONE
            </motion.span>
          </h1>
        </div>
        {/* Reserved for an actual portfolio portrait; no substitute person or invented image. */}
        <div className="hero-portrait" role="img" aria-label="Portrait placeholder for Muhammad Zarul Zaquan">
          <motion.div
            className="hero-portrait-content"
            initial={reducedMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration, ease: EASE, delay: staggerDelay * 3.8 }}
          >
            <User size={48} strokeWidth={1} aria-hidden="true" />
            <p>Muhammad Zarul Zaquan</p>
            <span className="portrait-note">Portrait placeholder</span>
          </motion.div>
        </div>
        <motion.div
          className="hero-copy"
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, ease: EASE, delay: staggerDelay * 5.5 }}
        >
          <h2>Turning Marketing Ideas Into <span>Working Systems</span></h2>
          <p>I build websites, CRM systems, automation workflows and AI chatbot systems that help businesses capture, manage and convert leads faster.</p>
          <div className="hero-actions">
            <a href="#contact" className="pill-button pill-button-dark">Work With Me <ArrowUpRight size={19} aria-hidden="true" /></a>
            <a href="#projects" className="hero-secondary-link">View My Work <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </motion.div>
        <motion.div
          className="hero-socials"
          initial={reducedMotion ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.55, ease: EASE, delay: staggerDelay * 6.4 }}
        >
          <SocialLinks />
        </motion.div>
      </div>
      <motion.div
        className="hero-details page-container"
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.55, ease: EASE, delay: staggerDelay * 7.4 }}
      >
        <p className="hero-specialties">Digital Marketer • Web Builder • CRM • Automation • AI Chatbot</p>
        <div className="hero-toolbox">
          <p>Trusted by tools</p>
          <div>
            {TOOLS.map((tool, index) => (
              <motion.span
                className="text-pill"
                key={tool}
                initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.35,
                  ease: EASE,
                  delay: reducedMotion ? 0 : 0.72 + index * 0.045,
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
