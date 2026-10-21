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
        cornsilk: { DEFAULT: "#FCF4D7" },
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
        riseAndFloat: {
          // 0s–2s (0%–5%): Stillstand am Boden
          "0%, 5%": {
            transform: "translateY(0px) translateX(0px) rotate(-3deg)"
          },

          // 2s–12s (5%–30%): Aufstieg mit minimalem seitlichen Schwanken (x: ±2px bis ±3px)
          "10%": {
            transform: "translateY(-60px) translateX(2px) rotate(5deg)"
          },
          "15%": {
            transform: "translateY(-120px) translateX(-2px) rotate(-4deg)"
          },
          "20%": {
            transform: "translateY(-180px) translateX(5px) rotate(6deg)"
          },
          "25%": {
            transform: "translateY(-240px) translateX(-3px) rotate(-3deg)"
          },
          "30%": {
            transform: "translateY(-300px) translateX(0px) rotate(4deg)"
          },

          // 12s–40s (30%–100%): Schwebephase oben mit minimaler X-Abweichung
          "40%": {
            transform: "translateY(-308px) translateX(-4px) rotate(-3deg)"
          },
          "50%": {
            transform: "translateY(-295px) translateX(4px) rotate(5deg)"
          },
          "60%": {
            transform: "translateY(-306px) translateX(-3px) rotate(-2deg)"
          },
          "70%": {
            transform: "translateY(-294px) translateX(3px) rotate(4deg)"
          },
          "80%": {
            transform: "translateY(-305px) translateX(-2px) rotate(-3deg)"
          },
          "90%": {
            transform: "translateY(-296px) translateX(2px) rotate(3deg)"
          },
          "100%": {
            transform: "translateY(-300px) translateX(0px) rotate(-3deg)"
          },
        },
        riseAndFloatDesktop: {
          // 0s–2s (0%–5%): Stillstand am Boden
          "0%, 5%": {
            transform: "translateY(0px) translateX(0px) rotate(-3deg)"
          },

          // 2s–12s (5%–30%): Aufstieg mit minimalem seitlichen Schwanken
          "20%": {
            transform: "translateY(-140px) translateX(2px) rotate(5deg)"
          },
          "25%": {
            transform: "translateY(-200px) translateX(-2px) rotate(-4deg)"
          },
          "30%": {
            transform: "translateY(-300px) translateX(5px) rotate(6deg)"
          },
          "35%": {
            transform: "translateY(-350px) translateX(-3px) rotate(-3deg)"
          },
          "40%": {
            transform: "translateY(-450px) translateX(0px) rotate(4deg)"
          },

          // 12s–40s (30%–100%): Schwebephase oben mit minimaler X-Abweichung
          "50%": {
            transform: "translateY(-480px) translateX(-4px) rotate(-3deg)"
          },
          "60%": {
            transform: "translateY(-460px) translateX(4px) rotate(5deg)"
          },
          "6700%": {
            transform: "translateY(-480px) translateX(-3px) rotate(-2deg)"
          },
          "75%": {
            transform: "translateY(-460px) translateX(3px) rotate(4deg)"
          },
          "80%": {
            transform: "translateY(-480px) translateX(-2px) rotate(-3deg)"
          },
          "90%": {
            transform: "translateY(-460px) translateX(2px) rotate(3deg)"
          },
          "100%": {
            transform: "translateY(-480px) translateX(0px) rotate(-3deg)"
          },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 8px 24px rgba(214,64,47,.45)" },
          "50%": { boxShadow: "0 8px 36px rgba(214,64,47,.75)" },
        },
        bookGlow: {
          "0%,100%": {
            filter:
              "drop-shadow(0 0 4px rgba(246,174,78,0.25)) drop-shadow(0 0 12px rgba(246,174,78,0.15)) drop-shadow(0 25px 35px rgba(0,0,0,0.5))",
          },
          "50%": {
            filter:
              "drop-shadow(0 0 8px rgba(246,174,78,0.5)) drop-shadow(0 0 22px rgba(246,174,78,0.3)) drop-shadow(0 25px 35px rgba(0,0,0,0.5))",
          },
        },
      },
      animation: {
        fall: "fall linear infinite",
        float: "float 5s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "float-soft": "floatSoft 5s ease-in-out infinite",
        "rise-and-float": "riseAndFloat 30s linear infinite",
        "rise-and-float-desktop": "riseAndFloatDesktop 30s linear infinite",
        glow: "pulseGlow 2.5s ease-in-out infinite",
        "book-glow": "bookGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
