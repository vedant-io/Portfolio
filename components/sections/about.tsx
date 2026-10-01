import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/content/site";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-line">
      <Container>
        <SectionHeader label="About" index="03" />

        <div className="max-w-[680px]">
          <p className="text-base md:text-lg text-ink leading-relaxed mb-5">
            {siteConfig.bioIntro}
          </p>
          <p className="text-base text-ink-soft leading-relaxed mb-5">
            {siteConfig.bioPhilosophy}
          </p>
          <p className="text-sm text-ink-soft leading-relaxed">
            This site is built as a personal engineering studio. No templates, no generated filler. The intent is a quiet workspace that represents what I build and how I think.
          </p>
        </div>
      </Container>
    </section>
  );
}
