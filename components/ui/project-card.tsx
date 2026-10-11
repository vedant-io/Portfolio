"use client";

import type { Project } from "@/types/content";
import { ArrowUpRight } from "lucide-react";

const toneAccent: Record<string, string> = {
  sage: "bg-accent/8 border-accent/20 group-hover:border-accent/40 group-focus-within:border-accent/40",
  coral: "bg-accent/5 border-accent/15 group-hover:border-accent/30 group-focus-within:border-accent/30",
  butter: "bg-paper-raised border-line group-hover:border-line-strong group-focus-within:border-line-strong",
};

const toneDot: Record<string, string> = {
  sage: "bg-accent dark:bg-accent-dark",
  coral: "bg-accent/70 dark:bg-accent-dark/70",
  butter: "bg-ink-soft/40",
};

export function ProjectCard({ project }: { project: Project }) {
  const tone = project.tone ?? "sage";
  const isLive = project.status?.toLowerCase() === "live";

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-sm border transition-colors duration-300 cursor-pointer ${toneAccent[tone]}`}
      tabIndex={0}
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-accent/0 group-hover:bg-accent/60 group-focus-within:bg-accent/60 dark:group-hover:bg-accent-dark/60 dark:group-focus-within:bg-accent-dark/60 transition-colors duration-300"
        aria-hidden="true"
      />

      <div className="p-6 md:p-7 flex flex-col">
        {/* Header: number + year + status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-accent-text dark:text-accent-dark tabular-nums font-semibold">
              {project.number}
            </span>
            <span className="text-line-strong" aria-hidden="true">
              /
            </span>
            <span className="font-mono text-xs text-ink-soft/70">{project.year}</span>
          </div>

          {project.status && (
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-paper/60 border border-line">
              <span
                className={`w-1.5 h-1.5 rounded-full ${toneDot[tone]} ${isLive ? "animate-pulse" : ""}`}
                aria-hidden="true"
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft font-medium">
                {project.status}
              </span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-ink tracking-tight leading-snug mb-3 group-hover:text-accent-text dark:group-hover:text-accent-dark group-focus-within:text-accent-text dark:group-focus-within:text-accent-dark transition-colors">
          {project.title}
        </h3>

        {/* Normal description */}
        <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Expanded story (hover/focus) */}
        <div
          className="border-t border-line/70 pt-4 mb-4
            overflow-hidden transition-[max-height,opacity] duration-300
            max-h-0 opacity-0 pointer-events-none
            group-hover:max-h-[420px] group-hover:opacity-100 group-hover:pointer-events-auto
            group-focus-within:max-h-[420px] group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
        >
          <p className="text-sm text-ink leading-relaxed">{project.story}</p>
        </div>

        {/* Footer: tags + links */}
        <div className="pt-4 border-t border-line/50 mt-2">
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-[3px] border border-line bg-paper/80 font-mono text-[10px] text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-ink-soft hover:text-accent-text dark:hover:text-accent-dark transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Repo <ArrowUpRight size={11} aria-hidden="true" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-ink-soft hover:text-accent-text dark:hover:text-accent-dark transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Live <ArrowUpRight size={11} aria-hidden="true" />
              </a>
            )}
            {project.metric && (
              <span className="ml-auto font-mono text-[10px] text-accent-text dark:text-accent-dark font-medium">
                {project.metric}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
