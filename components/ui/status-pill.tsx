import { cn } from "cn";

export function StatusPill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent-text dark:text-accent-dark bg-accent/10 dark:bg-accent/15 border border-accent/20 dark:border-accent/25 px-2.5 py-1 rounded-sm",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark" aria-hidden="true" />
      {children}
    </span>
  );
}
