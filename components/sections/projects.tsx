import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { projectsData } from "@/content/site";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-b border-line">
      <Container>
        {/* Section header */}
        <div className="mb-12 pb-6 border-b border-line">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent-text dark:text-accent-dark font-medium block mb-2">
            Software & Systems
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight leading-tight">
            Things I&apos;ve built
          </h2>
        </div>

        {/* Card grid — items-start prevents sibling cards from stretching into empty boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {projectsData.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
