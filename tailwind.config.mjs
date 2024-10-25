/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin.js";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "PublicSans, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        ],
      },
      colors: {
        primary: {
          DEFAULT: "#0C2461", // Color principal
        },
        secondary: {
          DEFAULT: "#F2AF37",
        },
      },
    },
  },
  plugins: [preline, require("tailwindcss-animated")],
};
