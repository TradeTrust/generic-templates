# generic-template

<!-- TODO: update this link to tradetrust cirleci once ci integrated -->

[![CircleCI](https://circleci.com/gh/Open-Attestation/decentralized-renderer-react-template.svg?style=svg)](https://circleci.com/gh/Open-Attestation/decentralized-renderer-react-template)
![GithubActions](https://github.com/TradeTrust/generic-templates/workflows/GenericTemplateCI/badge.svg)
Generic templates for TradeTrust

## Install

You can download or `git clone` this repo

```sh
$ git clone https://github.com/TradeTrust/generic-templates.git
$ npm install
```

## Commands

```sh
$ npm run storybook # open storybook and start editing your components
$ npm run storybook:build # generate docs
$ npm run test:watch # run tests with Jest
$ npm run test:coverage # run tests with coverage
$ npm run integration # run integration test with testcafe
$ npm run lint # lint code
$ npm run build # build component
$ npm run example:application # start embedded application
```

## Testing the templates in an integrated environment

This template provides a simple application that is able to render documents built for the current renderer. To use it:

1. Open `application/index.tsx` file and edit the `documents` property of the `App` component to suit your needs (provide any document that is available locally, whether it's a javascript, JSON or typescript document).
1. Start your renderer: `npm run dev`
1. Start the local application: `npm run example:application`
1. Head to `http://localhost:3010/`, you should see the configured documents during step 1.

## End-to-end and visualisation test

This repository has been configured to run end-to-end tests using `Testcafe`. Visualisation testing is also configured through `Percy` and tests are ran through `Testcafe`.

To setup `Percy`, you will need a token that you can find on Percy's dashboard(percy.io):

- For local development, type `export PERCY_TOKEN=<PERCY_TOKEN>` into command line before running `npm run integration`.
- For [**CircleCI**](https://docs.percy.io/docs/circleci), add an environment variable `PERCY_TOKEN` with the token value.

## Features

- [**React**](http://reactjs.org/) - A JavaScript library for building user interfaces.
- [**Webpack**](https://webpack.js.org/) - Component bundler.
- [**React testing library**](https://testing-library.com/) - Simple and complete testing utilities that encourage good testing practices.
- [**Emotion**](https://emotion.sh/) - Library designed for writing css styles with JavaScript.
- [**Babel**](https://babeljs.io/) - Write next generation JavaScript today.
- [**Jest**](https://facebook.github.io/jest) - JavaScript testing framework used by Facebook.
- [**Testcafe**](https://devexpress.github.io/testcafe/) - A node.js tool to automate end-to-end web testing.
- [**Percy**](http://percy.io/) - Visualisation testing tool.
- [**ESLint**](http://eslint.org/) - Make sure you are writing a quality code.
- [**Prettier**](https://prettier.io/) - Enforces a consistent style by parsing your code and re-printing it.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript superset, providing optional static typing
- [**Circle CI**](https://circleci.com/) - Automate tests and linting for every push or pull request.
- [**Storybook**](https://storybook.js.org/) - Tool for developing UI components in isolation with documentation.
- [**Debug**](https://github.com/visionmedia/debug) - JS debugging utility that works both in node.js and browsers.

## License

GPL-3.0

---

## Generic Templates

|    Templates    | url |
| :-------------: | :-: |
| Covering Letter |     |
