import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { currentlyData } from "@/content/site";

export function Currently() {
  return (
    <section id="currently" className="py-20 md:py-24">
      <Container>
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
              Currently
            </h2>

            <span className="font-mono text-xs text-ink-soft">2026</span>
          </div>
        </Reveal>

        <div className="divide-y divide-line">
          {currentlyData.map((item, index) => (
            <Reveal key={item.category} delayIndex={index}>
              <article className="grid grid-cols-[32px_140px_1fr] gap-4 py-6 md:grid-cols-[40px_180px_1fr] md:gap-6">
                <span className="font-mono text-xs text-ink-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                  {item.category}
                </span>

                <div>
                  <h3 className="font-sans text-xl font-semibold text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-1 max-w-[55ch] text-sm leading-relaxed text-ink-soft">
                    {item.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
