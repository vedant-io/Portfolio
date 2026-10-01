import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { interestsData } from "@/content/site";

export function Interests() {
  return (
    <section id="interests" className="py-16 md:py-24 border-t border-line">
      <Container>
        <SectionHeader label="Interests" index="02" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
          {interestsData.map((area) => (
            <div key={area.domain} className="flex flex-col gap-2">
              <h3 className="text-base font-semibold text-ink leading-snug">
                {area.domain}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed max-w-[48ch]">
                {area.summary}
              </p>
              {area.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {area.topics.map((topic) => (
                    <span
                      key={topic}
                      className="font-mono text-[11px] text-ink-soft border border-line px-2 py-0.5 rounded-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
