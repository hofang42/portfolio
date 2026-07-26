import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0D1117",
          soft: "#161B22",
          card: "#0F141B",
        },
        line: "#21262D",
        ink: {
          DEFAULT: "#E6EDF3",
          dim: "#8B949E",
          faint: "#7D8590",
        },
        neon: {
          DEFAULT: "#00FF94",
          dim: "#00B36B",
        },
        amber: {
          DEFAULT: "#F5A623",
          dim: "#B57714",
        },
        danger: "#F85149",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "neon-sm": "0 0 0 1px rgba(0,255,148,0.25), 0 0 12px -2px rgba(0,255,148,0.35)",
        "neon-md": "0 0 0 1px rgba(0,255,148,0.4), 0 0 22px -4px rgba(0,255,148,0.55)",
        "amber-sm": "0 0 0 1px rgba(245,166,35,0.3), 0 0 14px -2px rgba(245,166,35,0.45)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%, 80%": { opacity: "0.25" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.92" },
        },
      },
      animation: {
        blink: "blink 1s steps(2, end) infinite",
        "pulse-dot": "pulse-dot 1.4s ease-in-out infinite",
        scan: "scan 8s linear infinite",
        flicker: "flicker 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
