// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// https://github.com/zpao/qrcode.react/issues/134
jest.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation();

import { TextEncoder, TextDecoder } from "util";

Object.assign(global, {
  TextDecoder,
  TextEncoder,
});

// Add fetch polyfill for Headers support
import fetch, { Headers, Request, Response } from "node-fetch";

if (!globalThis.fetch) {
  globalThis.fetch = fetch as any;
  globalThis.Headers = Headers as any;
  globalThis.Request = Request as any;
  globalThis.Response = Response as any;
}

// Add setImmediate polyfill for Node.js compatibility
if (!globalThis.setImmediate) {
  (globalThis as any).setImmediate = (callback: (...args: any[]) => void, ...args: any[]) => {
    return setTimeout(callback, 0, ...args);
  };
}

// Fix Uint8Array instanceof issues with Buffer in jsdom
// Override Uint8Array Symbol.hasInstance to recognize Buffers
Object.defineProperty(Uint8Array, Symbol.hasInstance, {
  value: function (obj: any) {
    return (
      ArrayBuffer.isView(obj) &&
      (obj.constructor === Uint8Array ||
        Buffer.isBuffer(obj) ||
        Object.prototype.toString.call(obj) === "[object Uint8Array]")
    );
  },
});
