/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    container: (theme) => ({
      center: true,
      padding: theme("spacing.4"),
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.cloud.100", "currentColor"),
    }),
    extend: {
      fontFamily: {
        "gilroy-light": ["Gilroy-Light", "sans-serif"],
        "gilroy-medium": ["Gilroy-Medium", "sans-serif"],
        "gilroy-bold": ["Gilroy-Bold", "sans-serif"],
        "gilroy-extrabold": ["Gilroy-ExtraBold", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      height: {
        120: "30rem",
        132: "33rem",
        160: "40rem",
      },
      width: {
        104: "26rem",
      },
      maxWidth: {
        132: "33rem",
        172: "43rem",
      },
      minHeight: {
        18: "4.5rem",
      },
      opacity: {
        0: "0",
        10: ".1",
        20: ".2",
        30: ".3",
        40: ".4",
        50: ".5",
        60: ".6",
        70: ".7",
        80: ".8",
        90: ".9",
        100: "1",
      },
      transitionDuration: {
        0: "0ms",
        400: "400ms",
      },
      transitionTimingFunction: {
        "out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
      },
      transitionProperty: {
        height: "max-height",
      },
      colors: {
        cerulean: {
          50: "#F7F8FC",
          300: "#4DA6E8",
          500: "#2D5FAA",
          800: "#265190",
        },
        tangerine: {
          300: "#fbd38d",
          500: "#FF8200",
          800: "#DB611D",
        },
        lemon: {
          100: "#fff7e2",
          500: "#FDC53F",
          700: "#E3A002",
        },
        scarlet: {
          100: "#ffeeed",
          400: "#ff5268",
          500: "#E62617",
        },
        forest: {
          200: "#68d391",
          500: "#3AAF86",
          700: "#008a35",
        },
        cloud: {
          100: "#E7EAEC",
          200: "#D1D5D9",
          300: "#B4BCC2",
          400: "#89969F",
          500: "#6E787F",
          800: "#454B50",
        },
      },
      boxShadow: {
        dropdown: `0px 4px 20px rgba(0, 0, 0, 0.15)`,
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        h1: { fontWeight: config("theme.fontWeight.bold") },
        h2: { fontWeight: config("theme.fontWeight.bold") },
        h3: { fontWeight: config("theme.fontWeight.bold") },
        h4: { fontWeight: config("theme.fontWeight.bold") },
        h5: { fontWeight: config("theme.fontWeight.bold") },
        h6: { fontWeight: config("theme.fontWeight.bold") },
      });
    }),
  ],
};
