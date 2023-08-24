const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    `app/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: ["Inter", "sans-serif"],
    fontMetrics: {
      sans: {
        capHeight: 2048,
        ascent: 2728,
        descent: -680,
        lineGap: 0,
        unitsPerEm: 2816,
      },
    },
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [require("tailwindcss-capsize")],
};
