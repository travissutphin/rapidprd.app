import type { Config } from "tailwindcss";

/**
 * TailwindCSS Dark Theme Configuration
 *
 * Design System from PRD (docs/rapidPRD-PRD.md):
 * - Primary: Black (#000000) background, Crimson (#ac0234) accents
 * - Typography: Inter font, weights 400/500/600/700
 * - Colors: Full dark theme palette with success/error/warning states
 * - Spacing: Default Tailwind scale (mobile-first)
 * - Shadows: Custom crimson glow effects
 */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        crimson: {
          DEFAULT: "#ac0234",
          light: "#d4045c",
          dark: "#8a0229",
        },
        dark: {
          100: "#1a1a1a",
          200: "#2a2a2a",
          300: "#3a3a3a",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#e0e0e0",
          tertiary: "#8a8a8a",
        },
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        crimson: "0 4px 12px rgba(172, 2, 52, 0.3)",
        "crimson-lg": "0 8px 24px rgba(172, 2, 52, 0.4)",
      },
      spacing: {
        safe: "env(safe-area-inset-bottom, 0px)",
      },
      padding: {
        safe: "env(safe-area-inset-bottom, 0px)",
      },
    },
  },
  plugins: [],
};

export default config;
