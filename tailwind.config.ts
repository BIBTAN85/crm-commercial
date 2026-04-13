import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#f8fafc",
      },
      boxShadow: {
        card: "0 8px 24px -16px rgba(15, 23, 42, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
