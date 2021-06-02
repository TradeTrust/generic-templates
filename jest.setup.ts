// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// https://github.com/zpao/qrcode.react/issues/134
jest.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation();
