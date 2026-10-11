"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/content/site";

const NAV_LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SPRING_CONFIG = { mass: 0.1, stiffness: 180, damping: 14 };
const MAGNIFY_DISTANCE = 110;

function DockNavLink({
  href,
  label,
  mouseX,
  reduceMotion,
}: {
  href: string;
  label: string;
  mouseX: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const itemRef = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = itemRef.current?.getBoundingClientRect();
    if (!bounds || val === Infinity) return Infinity;
    const center = bounds.x + bounds.width / 2;
    return val - center;
  });

  const scaleTransform = useTransform(
    distance,
    [-MAGNIFY_DISTANCE, 0, MAGNIFY_DISTANCE],
    [1, 1.14, 1]
  );
  const scale = useSpring(scaleTransform, SPRING_CONFIG);

  const yTransform = useTransform(
    distance,
    [-MAGNIFY_DISTANCE, 0, MAGNIFY_DISTANCE],
    [0, -2.5, 0]
  );
  const y = useSpring(yTransform, SPRING_CONFIG);

  if (reduceMotion) {
    return (
      <Link
        href={href}
        className="px-3 py-1.5 rounded-pill text-ink-soft hover:text-ink hover:bg-line/60 transition-colors text-sm font-medium focus-visible:outline-2 focus-visible:outline-accent"
      >
        {label}
      </Link>
    );
  }

  return (
    <motion.div style={{ scale, y }} className="origin-center">
      <Link
        ref={itemRef}
        href={href}
        className="relative inline-flex items-center px-3.5 py-1.5 rounded-pill text-sm font-medium text-ink-soft hover:text-ink hover:bg-line/60 transition-colors focus-visible:outline-2 focus-visible:outline-accent"
      >
        {label}
      </Link>
    </motion.div>
  );
}

export function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(Infinity);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle("scrolled", window.scrollY > 16);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 [&.scrolled]:bg-paper/95 [&.scrolled]:backdrop-blur-md [&.scrolled]:border-b [&.scrolled]:border-line [&.scrolled]:shadow-soft border-b border-transparent"
    >
      <Container className="flex items-center justify-between h-16">
        {/* Brand */}
        <Link
          href="/"
          className="font-script text-xl font-bold text-ink hover:text-accent transition-colors tracking-tight focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
          aria-label="Home"
        >
          {siteConfig.shortName}
          <span className="text-accent">.</span>
        </Link>

        {/* Magnetic Dock Navigation */}
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-2"
          onMouseMove={(e) => mouseX.set(e.clientX)}
          onMouseLeave={() => mouseX.set(Infinity)}
        >
          <div className="flex items-center gap-0.5 rounded-pill border border-line/80 bg-paper-raised/60 backdrop-blur-sm p-1 shadow-xs">
            {NAV_LINKS.map(({ href, label }) => (
              <DockNavLink
                key={href}
                href={href}
                label={label}
                mouseX={mouseX}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          <div className="pl-1 border-l border-line">
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
