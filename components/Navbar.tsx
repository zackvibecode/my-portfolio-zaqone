"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Systems", href: "#systems" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        const items = menuRef.current?.querySelectorAll<HTMLElement>("a[href],button");
        if (!items?.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <nav className="page-container navigation" aria-label="Main navigation">
        <a href="#home" className="availability-pill" aria-label="ZAQONE — Home"><span />Available for projects</a>
        <ul className="desktop-navigation">
          <li><a href="#projects">Projects <span>[7]</span></a></li>
          <li><a href="#services">Services <span>[6]</span></a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navigation-actions">
          <ThemeToggle />
          <button ref={triggerRef} className="icon-button menu-trigger" aria-label="Open menu" aria-expanded={open} aria-controls="navigation-menu" onClick={() => setOpen(true)}><Menu size={20} /></button>
          <a href="#contact" className="pill-button pill-button-dark header-cta">Let&apos;s Talk <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="menu-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
            <div className="menu-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
            <motion.div ref={menuRef} id="navigation-menu" className="menu-panel" role="dialog" aria-modal="true" aria-label="Navigation menu" initial={{ x: 24 }} animate={{ x: 0 }} exit={{ x: 24 }} transition={{ duration: 0.2 }}>
              <div className="menu-heading"><span>ZAQONE</span><button className="icon-button" aria-label="Close menu" onClick={() => setOpen(false)}><X size={22} /></button></div>
              <ul>{NAV_ITEMS.map((item) => <li key={item.href}><a href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={22} aria-hidden="true" /></a></li>)}</ul>
              <a href="#contact" className="pill-button pill-button-dark" onClick={() => setOpen(false)}>Let&apos;s Talk <ArrowUpRight size={18} aria-hidden="true" /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
