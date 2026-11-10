/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        forest: { 500: "#3f8a5f", 600: "#2f6b4a", 700: "#25523a", 800: "#1c3b2a", 900: "#12261b" },
        sand: { 50: "#faf7f0", 100: "#f3ecdc", 200: "#e7dbc0" },
        gold: { 500: "#c39a3d", 600: "#9a7022" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};