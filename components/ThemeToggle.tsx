"use client";

import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const reducedMotion = useReducedMotion();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title={"Switch to " + (theme === "light" ? "dark" : "light") + " mode"}
      className="icon-button theme-toggle"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={theme}
          className="theme-toggle-icon"
          initial={reducedMotion ? false : { opacity: 0, rotate: -42, scale: 0.82 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0, rotate: 42, scale: 0.82 }}
          transition={{ duration: reducedMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {theme === "dark" ? <Moon size={18} strokeWidth={1.6} /> : <Sun size={18} strokeWidth={1.6} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
