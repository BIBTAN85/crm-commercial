import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { deep: "#050505", ink: "#181818", burgundy: "#7A0019", wine: "#8B1024", gold: "#D6A84F", pitch: "#1F7A3A" },
      boxShadow: { card: "0 24px 80px -40px rgba(0,0,0,.85)", glow: "0 0 42px rgba(214,168,79,.35)" },
      animation: { marquee: "marquee 28s linear infinite" },
      keyframes: { marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } } },
    },
  },
  plugins: [],
};
export default config;
