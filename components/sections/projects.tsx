import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { projectsData } from "@/content/site";
import { ExternalLink } from "lucide-react";

const projectStyles = {
  sage: {
    panel: "bg-accent/8 border-accent/15",
    index: "bg-accent text-on-accent",
    tag: "bg-paper border-line",
    rule: "bg-accent",
  },
  coral: {
    panel: "bg-accent/5 border-line",
    index: "bg-ink-soft text-on-accent",
    tag: "bg-paper border-line",
    rule: "bg-accent",
  },
  butter: {
    panel: "bg-paper-raised border-line",
    index: "bg-accent/60 text-on-accent",
    tag: "bg-paper border-line",
    rule: "bg-accent",
  },
} as const;

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <Container>
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-script text-3xl text-accent-text dark:text-accent-dark -rotate-2 mb-2">
            things i&apos;ve made
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-none tracking-tight">
            Selected work
          </h2>
          <p className="text-sm text-ink-soft max-w-[48ch] leading-relaxed mt-4">
            Products and infrastructure built from scratch, with more experiments on the way.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project, index) => {
            const styles = projectStyles[project.tone ?? "sage"];
            const isLive = project.status?.toLowerCase() === "live";

            return (
              <Reveal
                key={project.number}
                delayIndex={index}
                className="h-full"
              >
                <article
                  className={`group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${styles.panel}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`inline-flex items-center justify-center w-9 h-9 rounded-full font-mono text-xs font-bold ${styles.index}`}
                    >
                      {project.number}
                    </span>
                    <span className="font-mono text-xs text-ink-soft">{project.year}</span>
                  </div>

                  <div className="mt-8">
                    <div
                      className={`inline-flex items-center gap-2 rounded-pill border px-2.5 py-1 bg-accent-wash ${
                        isLive
                          ? "border-accent/35"
                          : "border-accent/20"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full bg-accent ${
                          isLive ? "animate-pulse" : ""
                        }`}
                        aria-hidden="true"
                      />
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] font-semibold text-accent-text dark:text-accent-dark">
                        {project.status}
                      </span>
                    </div>

                    <h3
                      className="font-display text-3xl font-semibold text-ink leading-tight tracking-tight mt-4 group-hover:text-accent-text dark:group-hover:text-accent-dark transition-colors"
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-ink-soft leading-relaxed mt-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 rounded-pill border font-mono text-[10px] text-ink-soft ${styles.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-end justify-between gap-4 border-t border-line/80 mt-5 pt-4">
                      {project.metric ? (
                        <span className="font-mono text-[10px] text-ink-soft leading-relaxed">
                          {project.metric}
                        </span>
                      ) : (
                        <span />
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent-text dark:hover:text-accent-dark transition-colors"
                        >
                          Visit <ExternalLink size={13} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ${styles.rule}`}
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
