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
    "@tradetrust-tt/token-registry-v5/contracts":
      "<rootDir>/node_modules/@tradetrust-tt/token-registry-v5/dist/contracts",
    "@tradetrust-tt/token-registry/contracts": "<rootDir>/node_modules/@tradetrust-tt/token-registry-v5/dist/contracts",
    "^cborg$": "<rootDir>/node_modules/cborg/cborg.js",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.tsx?$",
  transformIgnorePatterns: [
    "node_modules/(?!(@trustvc|@tradetrust-tt|@digitalbazaar|@mattrglobal|base64url-universal|base58-universal|cborg|multiformats|uint8arrays).*/).*",
  ],
};
