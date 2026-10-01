"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/content/site";

const NAV_LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-line shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display text-xl font-bold text-ink hover:text-accent transition-colors tracking-tight"
          aria-label="Home"
        >
          {siteConfig.shortName}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-1 text-sm">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-pill text-ink-soft hover:text-ink hover:bg-line/60 transition-all text-sm font-medium"
            >
              {label}
            </Link>
          ))}
          <div className="pl-2 ml-1 border-l border-line">
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
