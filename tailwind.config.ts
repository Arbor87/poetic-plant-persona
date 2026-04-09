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
        paper: "#f8f3ea",
        ink: "#2f3b37",
        mist: "#d9ded8",
        bamboo: "#7c9379",
        pine: "#56685e",
        seal: "#8f4c3b"
      },
      fontFamily: {
        serif: ["STSong", "Songti SC", "Noto Serif SC", "serif"],
        sans: ["PingFang SC", "Noto Sans SC", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(51, 62, 56, 0.10)"
      },
      backgroundImage: {
        parchment:
          "radial-gradient(circle at top, rgba(255,255,255,0.75), rgba(248,243,234,0.92) 38%, rgba(233,236,229,0.82) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
