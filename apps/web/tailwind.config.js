const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  presets: [sharedConfig],
  plugins: [require("@tailwindcss/typography")],
};
