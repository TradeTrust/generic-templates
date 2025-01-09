// eslint-disable-next-line @typescript-eslint/no-var-requires
const commonUiConfig = require("@tradetrust-tt/tradetrust-ui-components/build/tailwind");

const config = {
  ...commonUiConfig,
  content: ["./src/**/*.{ts,tsx}", "./node_modules/@tradetrust-tt/tradetrust-ui-components/src/**/*.tsx"],
  theme: {
    ...commonUiConfig.theme,
  },
};

module.exports = config;
