import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-[3px] px-2 py-0.5 text-[10px] font-mono font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-paper border border-line text-ink-soft",
        accent:
          "bg-accent/10 border border-accent/20 text-accent-text dark:text-accent-dark dark:bg-accent/20 dark:border-accent/30",
        outline: "border border-line text-ink-soft",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
