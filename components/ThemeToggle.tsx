"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return <button onClick={toggle} aria-label="Toggle theme" title={"Switch to " + (theme === "light" ? "dark" : "light") + " mode"} className="icon-button theme-toggle">{theme === "dark" ? <Moon size={18} strokeWidth={1.6} /> : <Sun size={18} strokeWidth={1.6} />}</button>;
}
