const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  const config = {
    reactStrictMode: true,
    swcMinify: true,
  };
  // dev
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...config,
    };
  }

  // prod
  return {
    ...config,
  };
};
