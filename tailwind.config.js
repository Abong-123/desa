/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: { 50: "#f0fdf4", 100: "#dcfce7",500: "#22a35a", 600: "#16834a", 700: "#126a3d", 900: "#0b3b24" },
        earth: { 100: "#fef3c7", 500: "#d97706" },
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};