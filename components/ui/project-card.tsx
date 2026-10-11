"use client";

import type { Project } from "@/types/content";
import { ArrowUpRight } from "lucide-react";

const toneAccent: Record<string, string> = {
  sage: "bg-accent/8 border-accent/25 hover:border-accent/45 focus-within:border-accent/45",
  coral: "bg-accent/5 border-accent/20 hover:border-accent/35 focus-within:border-accent/35",
  butter: "bg-paper-raised border-line hover:border-line-strong focus-within:border-line-strong",
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
      className={`group relative flex flex-col overflow-hidden rounded-sm border cursor-pointer
        transition-[transform,box-shadow,border-color] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:-translate-y-1.5 hover:shadow-[0_20px_35px_-20px_rgba(84,122,99,0.35)]
        dark:hover:shadow-[0_20px_35px_-20px_rgba(143,181,154,0.22)]
        active:translate-y-0 active:scale-[0.985]
        focus-visible:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-accent
        ${toneAccent[tone]}`}
      tabIndex={0}
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      {/* Top indicator rule: scales out smoothly on hover/focus */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0
          bg-accent dark:bg-accent-dark
          group-hover:scale-x-100 group-focus-within:scale-x-100
          transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        aria-hidden="true"
      />

      <div className="p-6 md:p-7 flex flex-col">
        {/* Header: number + year + status badge */}
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
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-paper/70 dark:bg-paper-raised/70 border border-line">
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
        <h3 className="text-xl md:text-2xl font-semibold text-ink tracking-tight leading-snug mb-3
          transition-colors duration-300 ease-out
          group-hover:text-accent-text dark:group-hover:text-accent-dark
          group-focus-within:text-accent-text dark:group-focus-within:text-accent-dark">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-4 md:min-h-[4.5rem]">
          {project.description}
        </p>

        {/* Story reveal */}
        <div
          className="border-t border-line/70 pt-4 mb-4
            overflow-hidden transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
            grid grid-rows-[0fr] opacity-0 pointer-events-none
            group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:pointer-events-auto
            group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
        >
          <div className="min-h-0">
            <p className="text-sm text-ink leading-relaxed">{project.story}</p>
          </div>
        </div>

        {/* Footer: tags + links */}
        <div className="pt-4 border-t border-line/50 mt-2">
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-[3px] border border-line bg-paper/85 dark:bg-paper-raised/85
                  font-mono text-[10px] text-ink-soft
                  transition-colors duration-200
                  group-hover:border-accent/30 group-hover:text-ink"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 min-h-[22px]">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1 text-xs font-mono text-ink-soft
                  hover:text-accent-text dark:hover:text-accent-dark transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                Repo{" "}
                <ArrowUpRight
                  size={11}
                  className="transition-transform duration-200 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1 text-xs font-mono text-ink-soft
                  hover:text-accent-text dark:hover:text-accent-dark transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                Live{" "}
                <ArrowUpRight
                  size={11}
                  className="transition-transform duration-200 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  aria-hidden="true"
                />
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
