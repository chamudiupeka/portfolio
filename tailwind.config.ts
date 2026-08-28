import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A1220",
        panel: "#111D33",
        panelAlt: "#16243D",
        hairline: "#22334A",
        hairlineSoft: "#1A2839",
        offwhite: "#F5F8FC",
        textMuted: "#8FA3C4",
        textFaint: "#63779A",
        blueBright: "#5B9DFF",
        blueDeep: "#2F5FCC",
        bluePale: "#9FC5FF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        pulseBright: {
          "0%": { boxShadow: "0 0 0 0 rgba(91,157,255,0.55)" },
          "70%": { boxShadow: "0 0 0 7px rgba(91,157,255,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(91,157,255,0)" },
        },
      },
      animation: {
        pulseBright: "pulseBright 2.2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
