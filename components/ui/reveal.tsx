"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { scrollRevealVariants, scrollRevealVariantsReduced } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delayIndex = 0,
}: {
  children: ReactNode;
  className?: string;
  delayIndex?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={reduce ? scrollRevealVariantsReduced : scrollRevealVariants}
      custom={delayIndex}
    >
      {children}
    </motion.div>
  );
}
