const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      chivo: "'Chivo Mono', monospace",
      rubik: "'Rubik', sans-serif",
    },
    extend: {
      xs: "414px",
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      fontFamily: {
        mono: ["'Chivo Mono'", ...defaultTheme.fontFamily.mono],
      },
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
