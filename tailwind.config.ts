import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        "paper-raised": "var(--color-paper-raised)",
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        line: "var(--color-line)",
        "line-strong": "var(--color-line-strong)",
        accent: "var(--color-accent)",
        "accent-text": "var(--color-accent-text)",
        "accent-dark": "var(--color-accent-dark)",
        "on-accent": "var(--color-on-accent)",
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        md: "8px",
        pill: "999px",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        display: "var(--font-caveat)",
      },
      letterSpacing: {
        tight: "-0.03em",
      },
    },
  },
  plugins: [],
} satisfies Config;
