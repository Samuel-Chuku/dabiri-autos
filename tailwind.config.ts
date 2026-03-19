import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          light: "var(--color-primary-light)",
          muted: "var(--color-primary-muted)",
        },
        surface: {
          dark: "var(--color-surface-dark)",
          light: "var(--color-surface-light)",
        },
        whatsapp: {
          DEFAULT: "var(--color-whatsapp)",
          dark: "var(--color-whatsapp-dark)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(2.5rem, 5vw, 4rem)",
          { lineHeight: "1.1", fontWeight: "800" },
        ],
        h1: [
          "clamp(2rem, 4.5vw, 3.75rem)",
          { lineHeight: "1.15", fontWeight: "700" },
        ],
        h2: [
          "clamp(1.5rem, 3.5vw, 2.25rem)",
          { lineHeight: "1.2", fontWeight: "700" },
        ],
        h3: [
          "clamp(1.25rem, 2vw, 1.5rem)",
          { lineHeight: "1.3", fontWeight: "600" },
        ],
        "body-lg": [
          "clamp(1rem, 1.5vw, 1.125rem)",
          { lineHeight: "1.6" },
        ],
        body: [
          "clamp(0.875rem, 1.25vw, 1rem)",
          { lineHeight: "1.6" },
        ],
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
        page: "var(--duration-page)",
      },
      boxShadow: {
        "glow-red": "var(--shadow-glow-red)",
        "glow-green": "var(--shadow-glow-green)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
