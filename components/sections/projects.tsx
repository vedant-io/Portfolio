import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ExternalLink } from "@/components/ui/external-link";
import { projectsData } from "@/content/site";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-line">
      <Container>
        <SectionHeader label="Projects" index="01" />

        <div className="flex flex-col divide-y divide-line">
          {projectsData.map((project) => (
            <article
              key={project.number}
              className="group py-8 first:pt-0 last:pb-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Index + Title */}
                <div className="md:col-span-7 flex flex-col gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-ink-soft tabular-nums">
                      {project.number}
                    </span>
                    <h3 className="text-lg font-semibold text-ink group-hover:text-accent-text dark:group-hover:text-accent-dark transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed max-w-[52ch] ml-7">
                    {project.description}
                  </p>
                </div>

                {/* Meta: tags, year, status, links */}
                <div className="md:col-span-5 flex flex-col gap-3 md:items-end ml-7 md:ml-0">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-ink-soft border border-line px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Year & status */}
                  <div className="flex items-center gap-4 text-xs font-mono text-ink-soft">
                    <span>{project.year}</span>
                    {project.status && (
                      <span className="text-accent-text dark:text-accent-dark">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.github && project.github !== "#" && (
                      <ExternalLink href={project.github} className="text-xs">
                        Source
                      </ExternalLink>
                    )}
                    {project.live && project.live !== "#" && (
                      <ExternalLink href={project.live} className="text-xs">
                        Live
                      </ExternalLink>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
