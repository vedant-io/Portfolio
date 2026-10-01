import { Container } from "@/components/ui/container";
import { StatusPill } from "@/components/ui/status-pill";
import { VisualObject } from "@/components/visual-object";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-line">
      <Container className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
        {/* Left column: Text identity */}
        <div className="md:col-span-7 flex flex-col items-start">
          <div className="mb-5">
            <StatusPill>{siteConfig.status}</StatusPill>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink mb-4 leading-[1.15]">
            {siteConfig.bioHeadline}
          </h1>

          <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[58ch] mb-6">
            {siteConfig.bioIntro}
          </p>

          <p className="font-display text-2xl md:text-3xl text-ink leading-tight">
            &ldquo;Things are built from smaller things.&rdquo;
          </p>
        </div>

        {/* Right column: Engineered visual object */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <VisualObject />
        </div>
      </Container>
    </section>
  );
}
