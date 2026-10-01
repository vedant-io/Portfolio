import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { currentlyData } from "@/content/site";

export function Currently() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader label="Currently" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {currentlyData.map((item) => (
            <div key={item.category} className="flex flex-col gap-2">
              <span className="font-mono text-xs text-accent-text dark:text-accent-dark uppercase tracking-wide">
                {item.category}
              </span>
              <h3 className="text-base font-semibold text-ink leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
