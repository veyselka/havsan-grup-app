import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        google: {
          blue: "#4285F4",
          red: "#EA4335",
          yellow: "#FBBC05",
          green: "#34A853",
        },
        robotik: {
          primary: "#4285F4",
          accent: "#1A237E",
          bg: "#E3E5E8",
          yellow: "#FBBC05",
        },
        ai: {
          primary: "#4E85EB",
          secondary: "#D9666F",
          accent: "#8875D6",
        },
        enerji: {
          primary: "#F3C242",
          orange: "#F99F1B",
          gofret: "#E87D25",
          hucre: "#EE5F26",
          modul: "#F15B24",
          emerald: "#00A786",
          cerulean: "#009CC9",
        },
      },
      fontFamily: {
        sans: ["Inter", "SF Pro", "Roboto", "sans-serif"],
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
