const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: false,
  async headers() {
    return [
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
        ],
      },
    ];
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
