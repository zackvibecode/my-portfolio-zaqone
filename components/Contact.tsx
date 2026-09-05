"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

const CONTACT_CODE = '<section id="contact">\n  <h2>Let\'s Build</h2>\n  <button class="cta">\n    Let\'s Talk\n  </button>\n  <ul>\n    <li>hello@zaqone.com</li>\n    <li>Kuala Lumpur</li>\n  </ul>\n</section>';

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="page-container">
        <Reveal className="contact-intro">
          <span className="availability-pill"><span />Contact</span>
          <h2>Let&apos;s Build Something <span>Useful Together</span></h2>
          <p>If you need a website, CRM, automation flow or AI chatbot system, let&apos;s connect.</p>
          <a href="mailto:hello@zaqone.com" className="pill-button pill-button-dark contact-cta">Let&apos;s Talk <ArrowUpRight size={20} aria-hidden="true" /></a>
        </Reveal>
        <div className="contact-information">
          <div className="contact-code"><span>contact.html</span><pre>{CONTACT_CODE}</pre></div>
          <dl className="contact-facts">
            <div><dt>Email</dt><dd><a href="mailto:hello@zaqone.com">hello@zaqone.com <ArrowUpRight size={18} aria-hidden="true" /></a></dd></div>
            <div><dt>Location</dt><dd>Kuala Lumpur, Malaysia</dd></div>
            <div><dt>Response Time</dt><dd>Within 24 hours</dd></div>
          </dl>
        </div>
        <div className="contact-socials">
          <a href="#home" className="name-pill">ZAQONE</a>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
