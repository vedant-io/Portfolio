import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { notesData } from "@/content/site";

export function Notes() {
  return (
    <section id="notes" className="py-16 md:py-24 border-t border-line">
      <Container>
        <SectionHeader label="Notes" index="04" />

        <div className="flex flex-col divide-y divide-line">
          {notesData.map((note) => (
            <article
              key={note.title}
              className="group py-6 first:pt-0 last:pb-0 cursor-default"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6 mb-1.5">
                <h3 className="text-base font-semibold text-ink leading-snug group-hover:text-accent-text dark:group-hover:text-accent-dark transition-colors">
                  {note.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-[11px] text-ink-soft border border-line px-2 py-0.5 rounded-sm">
                    {note.tag}
                  </span>
                  <span className="font-mono text-[11px] text-ink-soft">
                    {note.readTime}
                  </span>
                </div>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed max-w-[62ch]">
                {note.summary}
              </p>
              <span className="font-mono text-[11px] text-ink-soft mt-2 block">
                {note.date}
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
