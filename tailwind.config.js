module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
    container: {
      center: true
    },
    fontFamily: {
      FONT_VIGA: ["Viga", "sans-serif"],
      FONT_ROBOTO: ["Roboto", "sans-serif"],
      FONT_SALSA: ["Salsa", "cursive"],
      ANTON: ["Anton", "sans-serif"],
    },
    colors: {
      PRIMARY_BLACK: "#202020",
      SECONDARY_BLACK: "#191919",
      BLACK: "#000000",
      PRIMARY_WHITE: "#f0f3f5",
      SECONDARY_WHITE: "#ffffff",
      PRIMARY_BLUE: "#0284c7",
      PRIMARY_BLUE_ONE: "#2159e6",
      SECONDARY_BLUE: "#22d3ee",
      Light_BLUE: "#e5f2ff",
      DARK_BLUE: "#172554",
      LIGHT_BLUE: "#eff6ff",
      PRIMARY_ORANGE: "#ee8425",
      SECONDARY_ORANGE: "#fdba74",
      PRIMARY_RED: "#dc2626",
      SECONDARY_RED: "#ef4444",
      PRIMARY_GRAY: "#737373",
      SECONDARY_GRAY: "#a3a3a3",
      SECONDARY_GREEN: "#22c55e",
      PRIMARY_GREEN: "#80dce8",
      PRIMARY_PINK: "#a96bf8"
    },
  },
  plugins: [],
};
