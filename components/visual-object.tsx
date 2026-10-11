"use client";
import Image from "next/image";
import { useReducedMotion } from "motion/react";

export function VisualObject() {
  const reduce = useReducedMotion();

  return (
    <div
      className="relative flex items-center justify-center select-none"
      aria-hidden="false"
    >
      <div className="absolute inset-0 rounded-full bg-accent/10 scale-110 blur-xl pointer-events-none" />

      <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-accent/25 shadow-card">
        <Image
          src="/images/profile-pic.png"
          alt="Vedant Deshpande"
          fill
          className="object-cover object-[center_80%]"
          priority
          sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, 288px"
        />
      </div>

      <span
        className={
          reduce
            ? "absolute bottom-4 right-4 w-4 h-4 rounded-full bg-accent border-2 border-paper"
            : "absolute bottom-4 right-4 w-4 h-4 rounded-full bg-accent border-2 border-paper shadow-sm animate-pulse"
        }
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-5 right-0 font-script text-sm text-accent-text dark:text-accent-dark rotate-[-2deg] pointer-events-none"
        aria-hidden="true"
      >
        that&apos;s me 👋
      </div>
    </div>
  );
}
