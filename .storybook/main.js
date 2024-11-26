const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);
import custom from "../webpack.config.js";

module.exports = {
  stories: ["../src/**/*.stories.@(tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-webpack5-compiler-babel"],
  webpackFinal: (config) => {
    return {
      ...config,
      // https://github.com/storybookjs/storybook/issues/13277#issuecomment-751747964
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
        fallback: {
          ...config.resolve.fallback,
          ...custom.resolve.fallback,
        }
      },
    };
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  },
};
