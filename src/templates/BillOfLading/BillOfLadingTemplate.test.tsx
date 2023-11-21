import { render, screen } from "@testing-library/react";
import React from "react";
import {
  utils,
  wrapDocument,
  __unsafe__use__it__at__your__own__risks__wrapDocument as wrapDocumentV3,
} from "@tradetrust-tt/tradetrust";
import { BillOfLadingTemplate } from "./BillOfLadingTemplate";
import { BillOfLadingSampleV2 } from "./sampleV2";
import { BillOfLadingSampleV3 } from "./sampleV3";

describe("bill of lading V2", () => {
  it("should render ebl id in B/L number and Booking number respectively", () => {
    render(<BillOfLadingTemplate document={BillOfLadingSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("SGCNM21566325")).toHaveLength(2);
  });

  it("should render tradetrust logo", () => {
    render(<BillOfLadingTemplate document={BillOfLadingSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("logo")).toHaveAttribute("src", "test-file-stub");
  });

  it("should be able to wrap v2", () => {
    const wrappedDocument = wrapDocument(BillOfLadingSampleV2);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });
});

describe("bill of lading V3", () => {
  it("should render ebl id in B/L number and Booking number respectively", () => {
    render(<BillOfLadingTemplate document={BillOfLadingSampleV3} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("SGCNM21566325")).toHaveLength(2);
  });

  it("should render tradetrust logo", () => {
    render(<BillOfLadingTemplate document={BillOfLadingSampleV3} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("logo")).toHaveAttribute("src", "test-file-stub");
  });

  it("should be able to wrap v3", async () => {
    const wrappedDocument = await wrapDocumentV3(BillOfLadingSampleV3);
    expect(utils.isWrappedV3Document(wrappedDocument)).toBe(true);
  });
});
