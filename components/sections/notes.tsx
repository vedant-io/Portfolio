import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Notes() {
  return (
    <section id="notes" className="py-20 md:py-28 border-b border-line">
      <Container>
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div>
            <h2 className="font-sans text-4xl md:text-5xl font-semibold text-ink leading-none tracking-tight">
              Technical notebook
            </h2>
          </div>
          <p className="text-sm text-ink-soft max-w-[38ch] md:text-right leading-relaxed">
            Experiments, debugging logs, and small write-ups. Coming soon.
          </p>
        </Reveal>

        <Reveal delayIndex={1}>
          <div className="rounded-2xl border border-dashed border-line bg-paper-raised/40 p-8 md:p-10 flex flex-col items-center justify-center text-center gap-3 min-h-[160px]">
            <p className="font-mono text-xs text-ink-soft/60 uppercase tracking-[0.14em]">Nothing here yet</p>
            <p className="text-sm text-ink-soft/50 max-w-[40ch] leading-relaxed">
              First entries will cover homelab setup, RAG system debugging, and embedded systems notes.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
