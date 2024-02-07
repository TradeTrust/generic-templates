import { utils, wrapDocument } from "@tradetrust-tt/tradetrust";
import { WarehouseReceiptSampleV2 } from "./sampleV2";

describe("warehouse receipt V2", () => {
  it("should be able to wrap v2", () => {
    const wrappedDocument = wrapDocument(WarehouseReceiptSampleV2);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });
});
