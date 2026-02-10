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
  },
},

  },
  plugins: [],
};

export default config;
