// eslint-disable-next-line @typescript-eslint/no-var-requires
const commonUiConfig = require("./src/tailwind.js");

const config = {
  ...commonUiConfig,
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    ...commonUiConfig.theme,
  },
};

module.exports = config;
