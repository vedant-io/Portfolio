import React from "react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({
  href,
  children,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-0.5 text-accent-text dark:text-accent-dark hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="text-xs leading-none">↗</span>
    </a>
  );
}
