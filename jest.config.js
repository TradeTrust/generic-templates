module.exports = {
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.*?inline$": "<rootDir>/__mocks__/fileMock.js",
    "@tradetrust-tt/tradetrust-utils/constants/network":
      "<rootDir>/node_modules/@tradetrust-tt/tradetrust-utils/dist/cjs/constants/network.js",
    "@tradetrust-tt/tradetrust-utils/constants/supportedChains":
      "<rootDir>/node_modules/@tradetrust-tt/tradetrust-utils/dist/cjs/constants/supportedChains.js",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.tsx?$",
};
