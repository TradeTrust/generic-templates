import {
  utils,
  wrapDocument,
  __unsafe__use__it__at__your__own__risks__wrapDocument as wrapDocumentV3,
} from "@tradetrust-tt/tradetrust";
import { WarehouseReceiptSampleV2 } from "./sampleV2";

describe("warehouse receipt V2", () => {
  it("should be able to wrap v2", () => {
    const wrappedDocument = wrapDocument(WarehouseReceiptSampleV2);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });
});
