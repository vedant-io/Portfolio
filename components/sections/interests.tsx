import { Container } from "@/components/ui/container";
import { expertiseData } from "@/content/site";

const dotTone = {
  sage: "bg-accent",
  coral: "bg-accent-dark",
  butter: "bg-ink-soft",
} as const;

const dotTextTone = {
  sage: "text-accent-text dark:text-accent-dark",
  coral: "text-accent-dark",
  butter: "text-ink-soft",
} as const;

export function Interests() {
  return (
    <section id="expertise" className="py-20 md:py-32 bg-paper-warm/50 border-y border-line">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-text dark:text-accent-dark font-semibold mb-3">
            Expertise
          </p>
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-none tracking-tight">
              What I work with
            </h2>
            <span className="font-script text-2xl text-accent-text dark:text-accent-dark -rotate-2">
              always learning more ↗
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {expertiseData.map((area, index) => {
            const dot = dotTone[area.tone];
            const toneText = dotTextTone[area.tone];

            return (
              <article key={area.domain} className="group">
                <div className="flex items-center justify-between gap-4 pb-3 border-b border-line">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${dot}`} aria-hidden="true" />
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft font-semibold">
                      {area.domain}
                    </h3>
                  </div>
                  <span className={`font-mono text-[10px] ${toneText}`}>0{index + 1}</span>
                </div>
                <p className="text-sm text-ink-soft leading-relaxed mt-4 max-w-[42ch]">
                  {area.summary}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {area.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1.5 rounded-pill bg-paper-raised border border-line text-xs text-ink-soft hover:border-line-strong hover:text-ink transition-colors"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
