import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { socialLinks, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 md:py-20 border-t border-line bg-paper-raised"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Contact & Links */}
          <div className="md:col-span-6 flex flex-col gap-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">
              Let&rsquo;s connect.
            </h2>
            <p className="text-sm text-ink-soft max-w-[44ch] leading-relaxed">
              Open to interesting conversations, collaboration, and building together. Best reached by email.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((link) => (
                <ExternalLink
                  key={link.label}
                  href={link.href}
                  className="text-sm"
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>

          {/* Colophon */}
          <div className="md:col-span-6 flex flex-col justify-end md:items-end gap-2">
            <span className="font-mono text-[11px] text-ink-soft">
              {siteConfig.name} / {new Date().getFullYear()}
            </span>
            <span className="font-mono text-[11px] text-ink-soft">
              Next.js, TypeScript, Tailwind CSS
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
