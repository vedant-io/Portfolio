import { Container } from "@/components/ui/container";

export function Notes() {
  return (
    <section id="notes" className="py-20 md:py-28 border-b border-line">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-text dark:text-accent-dark font-semibold">
              Notes
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-none tracking-tight mt-2">
              Technical notebook
            </h2>
          </div>
          <p className="text-sm text-ink-soft max-w-[38ch] md:text-right leading-relaxed">
            Experiments, debugging logs, and small write-ups. Placeholder state until real notes land.
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-paper-raised/60 p-6 md:p-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">00</div>
                <div className="font-display text-2xl font-semibold text-ink mt-2">Add your first note</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[10px] text-ink-soft/70">TBD</div>
                <div className="font-mono text-[10px] text-ink-soft/60 mt-1">Read time</div>
              </div>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed max-w-[70ch]">
              Keep it engineering-first: what broke, what changed, what you learned. No hype. No templates.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
