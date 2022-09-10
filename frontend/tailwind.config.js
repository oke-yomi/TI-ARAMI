/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        secondary: "#D4AA00",
        primary: "#12123D",
        "brand-grey-1": "#707070",
        error: "#FD2727",
        success: "#137333",
      },
      boxShadow: {
        "3xl": "0 4px 6px -1px rgba(0 0 0 0.5), 0 2px 4px -1px rgba(0 0 0 0.3)",
      },
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
