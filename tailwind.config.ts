import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,vue}",
    "./components/**/*.{js,ts,jsx,tsx,vue}",
    "./layouts/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1da1f2",
        secondary: "#14171a",
        accent: "#657786",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
} as Config;
