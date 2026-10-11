import type { Variants } from "motion/react";

export const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Staggered fade-up reveal for hero elements */
export function heroReveal(i: number, reduce: boolean | null) {
  if (reduce) return {};
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.09, duration: 0.55, ease },
  };
}

/** Scroll-triggered fade-up for section content */
export const scrollRevealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: Math.min(i * 0.07, 0.28),
      duration: 0.55,
      ease,
    },
  }),
};

/** Reduced-motion safe: fade only, no translate */
export const scrollRevealVariantsReduced: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      delay: Math.min(i * 0.05, 0.2),
      duration: 0.35,
      ease: "easeOut" as const,
    },
  }),
};
