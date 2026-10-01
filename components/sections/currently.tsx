import { Container } from "@/components/ui/container";
import { currentlyData, siteConfig } from "@/content/site";
import { ArrowUpRight } from "lucide-react";

const categoryStyles = {
  "Building": {
    card: "bg-accent/8 border-accent/15",
    dot: "bg-accent",
  },
  "Working with": {
    card: "bg-accent/5 border-accent/10",
    dot: "bg-accent-text",
  },
  "Going deeper into": {
    card: "bg-paper-raised border-line",
    dot: "bg-ink-soft",
  },
} as const;

export function Currently() {
  return (
    <section id="currently" className="py-20 md:py-28 bg-paper-raised/60 border-y border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left narrative */}
          <div className="lg:col-span-5">
            <p className="font-script text-3xl text-accent-text dark:text-accent-dark -rotate-2 mb-3">
              a little context
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-[1.05] tracking-tight">
              Recently graduated.<br />
              <span className="text-accent dark:text-accent-dark">Still building.</span>
            </h2>
            <p className="text-base text-ink-soft leading-relaxed mt-5 max-w-[42ch]">
              I finished my Electronics &amp; Telecommunication Engineering degree in 2026, with an Honours in AI/ML. Now I&apos;m using the time after graduation to keep making things, go deeper on systems, and figure out what deserves full attention.
            </p>
            <p className="text-base text-ink-soft leading-relaxed mt-4 max-w-[42ch]">
              I move between product engineering, AI, infrastructure, and electronics. The common thread is curiosity about how things work when the abstraction gets thin.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 mt-7 text-sm font-semibold text-accent-text dark:text-accent-dark hover:text-ink dark:hover:text-ink transition-colors"
            >
              Say hello <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentlyData.map((item) => {
              const styles = categoryStyles[item.category];
              return (
                <article
                  key={item.category}
                  className={`group rounded-3xl border p-5 flex flex-col min-h-[200px] transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${styles.card}`}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${styles.dot}`} aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] font-semibold text-ink-soft">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed mt-auto">
                    {item.detail}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
