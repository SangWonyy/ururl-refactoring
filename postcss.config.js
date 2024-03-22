module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": true,
        },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./src/**/**/**/*.{js,jsx,ts,tsx}",
          "./node_modules/react-responsive-modal/*.css",
          "./node_modules/slick-carousel/slick/*.css",
          "./node_modules/semantic-ui-react/**/*.{js,ts}",
        ],
        defaultExtractor: (content) => {
          const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
          const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
          return broadMatches.concat(innerMatches);
        },
        safelist: ["html", "body", "/^modal-/]"],
      },
    ],
  ],
};
