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
        sm: "6px",
        DEFAULT: "10px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
        "3xl": "28px",
        pill: "999px",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        display: "var(--font-fraunces)",
        script: "var(--font-caveat)",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 2px 6px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.08)",
        soft: "0 1px 2px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
} satisfies Config;
