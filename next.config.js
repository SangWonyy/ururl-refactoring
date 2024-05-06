const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `URURL_${hash}`,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withVanillaExtract((phase, { defaultConfig }) => {
  // dev
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,
    };
  }

  // prod
  return {
    ...nextConfig,
  };
});
