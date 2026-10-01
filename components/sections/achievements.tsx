import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { achievementsData } from "@/content/site";

export function Achievements() {
  return (
    <section className="py-16 md:py-20 border-b border-line">
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-8">
            Recognition
          </h2>
        </Reveal>
        <div className="flex flex-col sm:flex-row gap-4">
          {achievementsData.map((a, index) => (
            <Reveal key={a.title} delayIndex={index} className="flex-1">
              <article
                className="rounded-2xl border p-5 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover border-accent/30 bg-accent/8"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] font-semibold text-accent-text dark:text-accent-dark">
                    {a.year}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink leading-snug mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">{a.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
