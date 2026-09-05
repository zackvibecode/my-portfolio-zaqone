"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 12,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-24px" });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={inView || reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: reducedMotion ? 0 : 0.5,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
