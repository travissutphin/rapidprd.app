import type { Config } from "tailwindcss";

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
        crimson: {
          DEFAULT: "#89023e",
          light: "#a00344",
          dark: "#6d0131",
        },
        dark: {
          100: "#1a1a1a",
          200: "#2a2a2a",
          300: "#3a3a3a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        crimson: "0 4px 12px rgba(137, 2, 62, 0.3)",
        "crimson-lg": "0 8px 24px rgba(137, 2, 62, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
