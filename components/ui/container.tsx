import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full max-w-[1160px] mx-auto px-5 sm:px-7 md:px-10",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
