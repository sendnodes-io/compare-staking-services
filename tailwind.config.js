const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        capri: "#33b8ff",
        aqua: "#33ffff",
        "rich-black": "#040404",
        "eerie-black": "#1e1e1e",
        "spanish-gray": "#949494",
        "neon-green": "#5cff33",
      },
    },
  },
  plugins: [],
};
