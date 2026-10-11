"use client";

import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme placeholder"
        className="w-8 h-8 rounded-pill flex items-center justify-center text-ink-soft opacity-50"
      >
        <span className="w-3.5 h-3.5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="w-8 h-8 rounded-pill flex items-center justify-center text-ink-soft hover:text-ink active:scale-[0.92] transition-[color,transform,border-color] duration-150 cursor-pointer border border-transparent hover:border-line focus-visible:outline-2 focus-visible:outline-accent"
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 256 256"
          fill="currentColor"
          className="text-accent-dark"
          aria-hidden="true"
        >
          <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,208a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,208Zm16-138.34a8,8,0,0,0,11.32-11.32l-16-16a8,8,0,0,0-11.32,11.32ZM40,120H16a8,8,0,0,0,0,16H40a8,8,0,0,0,0-16Zm200,0H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm-112,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V208A8,8,0,0,0,128,200Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 256 256"
          fill="currentColor"
          className="text-accent"
          aria-hidden="true"
        >
          <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM136,208A88,88,0,0,1,64.29,67.62,88.69,88.69,0,0,1,88.37,45.5,104.16,104.16,0,0,0,210.5,167.63,88.69,88.69,0,0,1,136,208Z" />
        </svg>
      )}
    </button>
  );
}
