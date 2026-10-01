import { Container } from "@/components/ui/container";
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
    rule: "bg-ink-soft",
  },
  butter: {
    panel: "bg-paper-raised border-line",
    index: "bg-accent/60 text-on-accent",
    tag: "bg-paper border-line",
    rule: "bg-accent/60",
  },
} as const;

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-script text-3xl text-accent-text dark:text-accent-dark -rotate-2 mb-2">
              things i&apos;ve made
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-none tracking-tight">
              Selected work
            </h2>
          </div>
          <p className="text-sm text-ink-soft max-w-[30ch] sm:text-right leading-relaxed">
            Products and infrastructure built from scratch.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {projectsData.map((project) => {
            const styles = projectStyles[project.tone ?? "sage"];
            return (
              <article
                key={project.number}
                className={`group relative overflow-hidden rounded-3xl border p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${styles.panel}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                  {/* Index + year */}
                  <div className="md:col-span-2 flex md:flex-col items-center md:items-start justify-between gap-4">
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full font-mono text-xs font-bold ${styles.index}`}>
                      {project.number}
                    </span>
                    <span className="font-mono text-xs text-ink-soft">{project.year}</span>
                  </div>

                  {/* Main content */}
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${styles.rule}`} aria-hidden="true" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft font-semibold">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight tracking-tight group-hover:text-accent-text dark:group-hover:text-accent-dark transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-base text-ink-soft leading-relaxed max-w-[56ch] mt-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`px-2.5 py-0.5 rounded-pill border font-mono text-[10px] text-ink-soft ${styles.tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metric + link */}
                  <div className="md:col-span-3 flex md:flex-col md:items-end justify-between gap-4 md:text-right">
                    {project.metric && (
                      <span className="font-mono text-xs text-ink-soft leading-relaxed">
                        {project.metric}
                      </span>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent-text dark:hover:text-accent-dark transition-colors"
                      >
                        Visit <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover accent underline */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-0.5 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ${styles.rule}`}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
