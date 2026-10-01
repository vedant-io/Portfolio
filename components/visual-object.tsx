"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/**
 * Visual object: "Things are built from smaller things."
 * Minimal modular diagram with pointer response and reduced-motion support.
 */
export function VisualObject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 22, stiffness: 90 });
  const smoothY = useSpring(mouseY, { damping: 22, stiffness: 90 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 14);
    mouseY.set(y * 14);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setActiveNode(null);
  };

  const nodes = [
    { id: "ai", cx: 120, cy: 54, label: "AI" },
    { id: "web", cx: 196, cy: 96, label: "Web" },
    { id: "infra", cx: 196, cy: 168, label: "Infra" },
    { id: "hw", cx: 120, cy: 210, label: "HW" },
    { id: "sys", cx: 44, cy: 168, label: "Sys" },
    { id: "core", cx: 44, cy: 96, label: "Core" },
  ];

  const edges: Array<[string, string]> = [
    ["ai", "web"],
    ["web", "infra"],
    ["infra", "hw"],
    ["hw", "sys"],
    ["sys", "core"],
    ["core", "ai"],
    ["ai", "infra"],
    ["web", "hw"],
    ["core", "web"],
  ];

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n] as const));

  const strokeAccent = "var(--color-accent)";
  const fillAccent = "var(--color-accent)";
  const textOnAccent = "var(--color-on-accent)";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-full border border-accent/15 dark:border-accent-dark/10 pointer-events-none" />
      <div className="absolute inset-[3.5rem] rounded-full border border-dashed border-line-strong/60 pointer-events-none opacity-40" />

      <motion.svg
        style={{
          x: shouldReduceMotion ? 0 : smoothX,
          y: shouldReduceMotion ? 0 : smoothY,
        }}
        viewBox="0 0 240 264"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 overflow-visible cursor-crosshair text-line-strong"
      >
        {edges.map(([a, b]) => {
          const na = nodeMap[a];
          const nb = nodeMap[b];
          const isActive = activeNode === a || activeNode === b;
          return (
            <line
              key={`${a}-${b}`}
              x1={na.cx}
              y1={na.cy}
              x2={nb.cx}
              y2={nb.cy}
              stroke={isActive ? strokeAccent : "currentColor"}
              strokeWidth={isActive ? 1.5 : 0.75}
              strokeOpacity={isActive ? 0.85 : 0.55}
            />
          );
        })}

        <circle cx="120" cy="132" r="18" fill="currentColor" fillOpacity="0.08" />
        <circle cx="120" cy="132" r="7" fill={fillAccent} />
        <circle
          cx="120"
          cy="132"
          r="12"
          stroke={strokeAccent}
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 3"
          opacity="0.9"
        />

        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <g
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              className="cursor-pointer"
            >
              <circle
                cx={node.cx}
                cy={node.cy}
                r={isActive ? 19 : 16}
                fill={fillAccent}
                fillOpacity={isActive ? 1 : 0.85}
                className="transition-all duration-200"
              />
              <text
                x={node.cx}
                y={node.cy}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="8"
                fontWeight="600"
                fontFamily="var(--font-geist-mono)"
                fill={textOnAccent}
              >
                {node.label}
              </text>
              {isActive && (
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={24}
                  stroke={fillAccent}
                  strokeWidth="1"
                  fill="none"
                  strokeOpacity={0.3}
                />
              )}
            </g>
          );
        })}

        <circle
          cx="120"
          cy="132"
          r="20"
          stroke={strokeAccent}
          strokeWidth="0.75"
          fill="none"
          strokeOpacity="0.25"
          className="animate-ping"
        />
      </motion.svg>

      <div className="absolute -bottom-3 right-0 font-script text-sm text-accent-text dark:text-accent-dark rotate-[-2deg] pointer-events-none">
        fig 01. composed systems
      </div>
    </div>
  );
}
