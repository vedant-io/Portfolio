import { Container } from "@/components/ui/container";
import { achievementsData } from "@/content/site";

const toneStyles = {
  sage: { border: "border-accent/30", bg: "bg-accent/10", dot: "bg-accent", year: "text-accent-text dark:text-accent-dark" },
  coral: { border: "border-coral/30", bg: "bg-coral/10", dot: "bg-coral", year: "text-coral" },
};

export function Achievements() {
  return (
    <section className="py-16 md:py-20 border-b border-line">
      <Container>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-8">
          Recognition
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          {achievementsData.map((a) => {
            const styles = toneStyles[a.tone];
            return (
              <article
                key={a.title}
                className={`flex-1 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft ${styles.border} ${styles.bg}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${styles.dot}`} aria-hidden="true" />
                  <span className={`font-mono text-[10px] uppercase tracking-[0.12em] font-semibold ${styles.year}`}>
                    {a.year}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink leading-snug mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">{a.detail}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
