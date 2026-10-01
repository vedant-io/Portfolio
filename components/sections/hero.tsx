"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { VisualObject } from "@/components/visual-object";
import { siteConfig } from "@/content/site";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function reveal(i: number, reduce: boolean | null) {
  if (reduce) return {};
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.09, duration: 0.5, ease },
  };
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[480px] h-[320px] rounded-full bg-accent/4 blur-3xl" />
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-center">
          <div className="md:col-span-7 flex flex-col gap-6">
            <motion.div {...reveal(0, reduce)}>
              <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-accent-text dark:text-accent-dark bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-pill">
                <span
                  className={
                    reduce
                      ? "w-1.5 h-1.5 rounded-full bg-accent"
                      : "w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                  }
                  aria-hidden="true"
                />
                {siteConfig.status}
              </span>
            </motion.div>

            <motion.div {...reveal(1, reduce)} className="flex flex-col gap-1">
              <p className="text-base text-ink-soft font-medium">hey, i&apos;m</p>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-ink leading-[0.9] tracking-tight">
                Vedant
              </h1>
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-light italic text-ink-soft leading-snug -mt-1">
                {siteConfig.role}
              </p>
            </motion.div>

            <motion.p
              {...reveal(2, reduce)}
              className="text-base md:text-lg text-ink-soft leading-relaxed max-w-[52ch]"
            >
              {siteConfig.bioIntro}
            </motion.p>

            <motion.div
              {...reveal(3, reduce)}
              className="flex items-center gap-4 flex-wrap"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 bg-ink text-on-accent px-5 py-2.5 rounded-pill text-sm font-semibold hover:bg-accent transition-colors group"
              >
                See my work
                <ArrowDown
                  size={14}
                  className="group-hover:translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                GitHub
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                LinkedIn
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="md:col-span-5 flex items-center justify-center md:justify-end"
            initial={reduce ? {} : { opacity: 0, scale: 0.9 }}
            animate={reduce ? {} : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease }}
          >
            <VisualObject />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
