import { ArrowUpRight } from "lucide-react";
import { cn } from "cn";

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function ExternalLink({ href, children, className, ...props }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 text-ink-soft hover:text-accent-text dark:hover:text-accent-dark transition-colors",
        className
      )}
      {...props}
    >
      {children}
      <ArrowUpRight size={11} aria-hidden="true" />
    </a>
  );
}
