/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["helpers"],
};

const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl({
  ...nextConfig,
});
