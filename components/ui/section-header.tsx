import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  index?: string;
  className?: string;
}

export function SectionHeader({ label, index, className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between pb-3 mb-10 border-b border-line text-ink-soft text-xs tracking-wider uppercase font-mono select-none",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {index && <span className="text-accent dark:text-accent-dark font-medium">{index}</span>}
        <span>{label}</span>
      </div>
      <div className="w-1.5 h-1.5 bg-line-strong" />
    </div>
  );
}
