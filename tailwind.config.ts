import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          light: "#112240",
          dark: "#060E1A",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C96B",
          dark: "#A8872E",
        },
        cream: "#F5F0E8",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Marcellus", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Montserrat", "system-ui", "sans-serif"],
        luxury: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
