import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        syne: ["var(--font-syne)"],
        arabic: ["var(--font-tanseek)"],
        interTight: ["var(--font-interTight)"],
      },
      colors: {
        // Primary color (#486776)
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          light: "var(--color-primary-light)",
        },
        // Secondary/Hover color (#E5A97C)
        secondary: {
          DEFAULT: "var(--color-secondary)",
          dark: "var(--color-secondary-dark)",
          light: "var(--color-secondary-light)",
        },
        // Text colors
        text: {
          black: "var(--color-text-black)",
          white: "var(--color-text-white)",
          gray: "var(--color-text-gray)",
          "gray-light": "var(--color-text-gray-light)",
        },
        // Background colors
        bg: {
          white: "var(--color-bg-white)",
          gray: "var(--color-bg-gray)",
          "gray-light": "var(--color-bg-gray-light)",
        },
        // Border colors
        border: {
          primary: "var(--color-border-primary)",
          secondary: "var(--color-border-secondary)",
          light: "var(--color-border-light)",
          medium: "var(--color-border-medium)",
        },
        // Status colors
        success: "var(--color-success)",
        error: "var(--color-error)",
        warning: "var(--color-warning)",
        info: "var(--color-info)",
      },
    },
  },
  plugins: [],
};

export default config;