import React from "react";
import { cn } from "@/lib/utils";

interface StatusPillProps {
  children: React.ReactNode;
  className?: string;
}

export function StatusPill({ children, className }: StatusPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono rounded-pill border border-line bg-paper-raised text-ink-soft",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark" />
      <span>{children}</span>
    </div>
  );
}
