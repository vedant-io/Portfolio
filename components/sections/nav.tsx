import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/content/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-line transition-colors duration-200">
      <Container className="flex items-center justify-between h-14">
        {/* Brand mark */}
        <Link
          href="/"
          className="font-mono text-sm tracking-widest uppercase font-semibold text-ink hover:text-accent-text dark:hover:text-accent-dark transition-colors"
        >
          {siteConfig.name}
        </Link>

        {/* Anchors & Actions */}
        <nav aria-label="Main navigation" className="flex items-center gap-5 sm:gap-7 text-sm font-sans">
          <Link
            href="#projects"
            className="text-ink-soft hover:text-ink transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#interests"
            className="text-ink-soft hover:text-ink transition-colors hidden sm:inline"
          >
            Interests
          </Link>
          <Link
            href="#about"
            className="text-ink-soft hover:text-ink transition-colors"
          >
            About
          </Link>
          <Link
            href="#notes"
            className="text-ink-soft hover:text-ink transition-colors hidden md:inline"
          >
            Notes
          </Link>
          <Link
            href="#contact"
            className="text-ink-soft hover:text-ink transition-colors"
          >
            Contact
          </Link>
          <div className="pl-2 border-l border-line">
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
