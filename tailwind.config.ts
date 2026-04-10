import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f4eee3",
        ink: "#2b332f",
        mist: "#d8d4cb",
        bamboo: "#72836f",
        pine: "#46554f",
        seal: "#7b453d",
        earth: "#a38b6d",
        dusk: "#69726b"
      },
      fontFamily: {
        serif: ["STSong", "Songti SC", "Noto Serif SC", "serif"],
        sans: ["PingFang SC", "Noto Sans SC", "sans-serif"]
      },
      boxShadow: {
        soft: "0 28px 80px rgba(42, 50, 46, 0.10)",
        veil: "0 12px 32px rgba(77, 67, 55, 0.08)"
      },
      backgroundImage: {
        parchment:
          "radial-gradient(circle at top, rgba(255,255,255,0.82), rgba(244,238,227,0.94) 34%, rgba(227,223,212,0.86) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
