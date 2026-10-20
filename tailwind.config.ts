import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: { 950: "#071F30", 900: "#0B3047", 800: "#0F4560", 700: "#165A75", 600: "#1F7490" },
        snow: { DEFAULT: "#F6FAFD", 100: "#EAF3F9", 200: "#D5E6F0" },
        mint: { DEFAULT: "#6EF0D2", 400: "#4FE0BE", 600: "#22B596" },
        hut: { DEFAULT: "#D1423B", 600: "#B5322C", 700: "#96261F" },
        balloon: { blue: "#B8CCE6", sand: "#E8D5B5", rose: "#F4D6D0" },
        gold: { DEFAULT: "#F6AE4E", 600: "#E39221" },
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "system-ui", "sans-serif"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-10vh) translateX(0)", opacity: "0" },
          "10%": { opacity: "0.9" },
          "100%": { transform: "translateY(110vh) translateX(30px)", opacity: "0.2" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        floatSoft: {
          "0%,100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-6px) rotate(1deg)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 8px 24px rgba(214,64,47,.45)" },
          "50%": { boxShadow: "0 8px 36px rgba(214,64,47,.75)" },
        },
      },
      animation: {
        fall: "fall linear infinite",
        float: "float 5s ease-in-out infinite",
        "float-soft": "floatSoft 5s ease-in-out infinite",
        glow: "pulseGlow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
