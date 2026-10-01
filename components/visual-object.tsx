"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/**
 * VisualObject
 * Symbolizes "Things are built from smaller things".
 * A simple abstract engineered object composed of a few interlocking geometric components.
 * Restrained sage (#547A63) accents, inline SVG, subtle mouse parallax with reduced-motion support.
 */
export function VisualObject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 12);
    mouseY.set(y * 12);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Background assembly base ring */}
      <div className="absolute inset-0 border border-line rounded-full opacity-60 pointer-events-none" />
      <div className="absolute inset-4 border border-line-strong rounded-full opacity-30 pointer-events-none border-dashed" />

      {/* Interactive geometric SVG assembly */}
      <motion.svg
        style={{
          x: shouldReduceMotion ? 0 : smoothX,
          y: shouldReduceMotion ? 0 : smoothY,
        }}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        {/* Module 1: Structural grid background */}
        <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="1" className="text-line" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1" className="text-line" />

        {/* Module 2: System frame (Square) */}
        <rect
          x="55"
          y="55"
          width="90"
          height="90"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-ink-soft opacity-80"
        />

        {/* Module 3: Rotated inner node (Rhombus/Diamond) */}
        <rect
          x="65"
          y="65"
          width="70"
          height="70"
          transform="rotate(45 100 100)"
          stroke="#547A63"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          className="dark:stroke-[#8FB59A]"
        />

        {/* Module 4: Center core dot */}
        <circle cx="100" cy="100" r="4.5" fill="#547A63" className="dark:fill-[#8FB59A]" />

        {/* Module 5: Geometric satellite nodes representing discrete subsystems */}
        <circle cx="100" cy="55" r="2.5" fill="currentColor" className="text-ink" />
        <circle cx="145" cy="100" r="2.5" fill="currentColor" className="text-ink" />
        <circle cx="100" cy="145" r="2.5" fill="currentColor" className="text-ink" />
        <circle cx="55" cy="100" r="2.5" fill="currentColor" className="text-ink" />

        {/* Module 6: Coordinate anchor markers */}
        <path d="M 94 20 L 106 20" stroke="currentColor" strokeWidth="1" className="text-line-strong" />
        <path d="M 94 180 L 106 180" stroke="currentColor" strokeWidth="1" className="text-line-strong" />
        <path d="M 20 94 L 20 106" stroke="currentColor" strokeWidth="1" className="text-line-strong" />
        <path d="M 180 94 L 180 106" stroke="currentColor" strokeWidth="1" className="text-line-strong" />
      </motion.svg>
    </div>
  );
}
