const withNextIntlRaw = require("next-intl/plugin");

const withNextIntl = withNextIntlRaw("./i18n.ts");

module.exports = withNextIntl;
