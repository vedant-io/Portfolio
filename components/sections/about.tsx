import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/content/site";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-line">
      <Container>
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-text dark:text-accent-dark font-semibold">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-none tracking-tight mt-2">
              Learning by building
            </h2>
          </div>
          <p className="text-sm text-ink-soft max-w-[38ch] lg:text-right leading-relaxed">
            I like tracing systems back to their roots. When something is slow or broken, I go past the workaround.
          </p>
        </Reveal>

        <Reveal delayIndex={1} className="max-w-[720px]">
          <div className="rounded-2xl border border-line bg-paper-raised/70 p-6 md:p-8">
            <div className="flex flex-col gap-5">
              <p className="text-base md:text-lg text-ink leading-relaxed">
                {siteConfig.bioIntro}
              </p>
              <p className="text-base text-ink-soft leading-relaxed">
                {siteConfig.bioPhilosophy}
              </p>
              <div className="rounded-xl bg-accent-wash p-4 border border-accent/20">
                <p className="text-sm text-ink-soft leading-relaxed">
                  I ship full-stack systems, iterate on AI workflows, and keep one foot on the hardware side. Debugging and small experiments are part of the process.
                </p>
              </div>
              <div className="pt-6 border-t border-line">
                <div className="font-script text-3xl text-accent-text dark:text-accent-dark -rotate-2">
                  — {siteConfig.name}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
