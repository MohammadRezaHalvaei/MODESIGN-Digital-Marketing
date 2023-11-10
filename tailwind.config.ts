import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary_a: "#FFDC60",
      primary_b: "#5956E8",
      secondary_a: "#292930",
      secondary_b: "#555555",
      secondary_c: "#F6F6F6",
      white: "#ffffff",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        notoSans: ["var(--font-notoSans)"],
      },
    },
  },
  plugins: [],
};
export default config;
