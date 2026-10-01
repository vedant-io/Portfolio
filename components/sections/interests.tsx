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
    <section
      id="expertise"
      className="py-20 md:py-32 bg-paper-warm/50 border-y border-line"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
          <div>
            <p className="font-script text-3xl text-accent-text dark:text-accent-dark rotate-1 mb-2">
              what i work with
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-none tracking-tight">
              Expertise
            </h2>
          </div>
          <p className="text-sm text-ink-soft max-w-[34ch] md:text-right leading-relaxed">
            A practical toolkit built across products, models, servers, and circuits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {expertiseData.map((area, index) => {
            const dot = dotTone[area.tone];
            const toneText = dotTextTone[area.tone];

            return (
              <article
                key={area.domain}
                className={`group rounded-2xl border border-line bg-paper-raised/70 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft ${index === 0 ? "md:col-span-2 md:flex md:items-center md:justify-between md:gap-10" : ""}`}
              >
                <div className={index === 0 ? "md:max-w-[34ch]" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${dot}`}
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-2xl font-semibold text-ink leading-tight">
                      {area.domain}
                    </h3>
                    <span className={`font-mono text-[10px] ml-auto ${toneText}`}>0{index + 1}</span>
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {area.summary}
                  </p>
                </div>
                <div
                  className={`flex flex-wrap gap-1.5 mt-5 ${index === 0 ? "md:mt-0 md:max-w-[52%] md:justify-end" : ""}`}
                >
                  {area.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 rounded-pill bg-paper border border-line text-[10px] font-mono text-ink-soft group-hover:border-line-strong transition-colors"
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
