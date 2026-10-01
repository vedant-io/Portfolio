import { cn } from "cn";

interface SectionHeaderProps {
  label: string;
  heading?: string;
  className?: string;
}

export function SectionHeader({ label, heading, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 pb-6 border-b border-line", className)}>
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-text dark:text-accent-dark font-semibold block mb-2">
        {label}
      </span>
      {heading && (
        <h2 className="text-2xl md:text-3xl font-semibold text-ink tracking-tight leading-none">
          {heading}
        </h2>
      )}
    </div>
  );
}
