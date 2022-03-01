// eslint-disable-next-line @typescript-eslint/no-var-requires
const commonUiConfig = require("@govtechsg/tradetrust-ui-components/build/tailwind");

const config = {
  ...commonUiConfig,
  content: ["./src/**/*.{ts,tsx}", "./node_modules/@govtechsg/tradetrust-ui-components/src/**/*.tsx"],
  theme: {
    ...commonUiConfig.theme,
  },
};

module.exports = config;
