import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { socialLinks, siteConfig } from "@/content/site";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-20 md:py-28 bg-paper-raised border-t border-line">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <Reveal className="md:col-span-7 flex flex-col gap-5">
            <h2 className="font-sans text-4xl md:text-5xl text-ink leading-tight">
              Let&apos;s connect.
            </h2>
            <p className="text-sm text-ink-soft max-w-[44ch] leading-relaxed">
              Email works best. If you&apos;re building something interesting, I&apos;ll read the details.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-ink transition-colors"
                >
                  {link.label}
                  {!link.href.startsWith("mailto:") && (
                    <ArrowUpRight size={13} aria-hidden="true" />
                  )}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-line flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-accent-wash border border-accent/20">
                <span
                  className="w-2 h-2 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-text font-semibold">
                  {siteConfig.status}
                </span>
              </span>
            </div>
          </Reveal>

          <Reveal delayIndex={1} className="md:col-span-5 flex flex-col justify-end md:items-end gap-2">
            <div className="font-script text-3xl text-accent-text dark:text-accent-dark -rotate-2">
              {siteConfig.shortName}
            </div>
            <div className="font-mono text-[10px] text-ink-soft/70">
              {new Date().getFullYear()}
            </div>
            <div className="font-mono text-[10px] text-ink-soft/60">
              Next.js · TypeScript · Tailwind · shadcn · motion
            </div>
          </Reveal>
        </div>
      </Container>
    </footer>
  );
}
