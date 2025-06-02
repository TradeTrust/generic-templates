import { render, screen } from "@testing-library/react";
import React from "react";
import {
  utils,
  wrapDocument,
  __unsafe__use__it__at__your__own__risks__wrapDocument as wrapDocumentV3,
} from "@tradetrust-tt/tradetrust";
import { InvoiceTemplate } from "./InvoiceTemplate";
import { InvoiceSampleV2 } from "./sampleV2";
import { InvoiceSampleV3 } from "./sampleV3";
import { InvoiceSampleW3C } from "./sampleW3C";
import { vc } from "@trustvc/trustvc";

describe("invoice v2", () => {
  it("should render the V2 invoice correctly", () => {
    render(<InvoiceTemplate document={InvoiceSampleV2} handleObfuscation={() => {}} />);

    expect(screen.getByText("INVOICE")).toBeInTheDocument();
    expect(screen.getByText("INVOICE #")).toBeInTheDocument();
    expect(screen.getByText("DATE")).toBeInTheDocument();
    expect(screen.getByText("CUSTOMER ID")).toBeInTheDocument();
    expect(screen.getByText("TERMS")).toBeInTheDocument();
    expect(screen.getByText("BILL TO")).toBeInTheDocument();
    expect(screen.getByText("DESCRIPTION")).toBeInTheDocument();
    expect(screen.getByText("QTY")).toBeInTheDocument();
    expect(screen.getByText("UNIT PRICE")).toBeInTheDocument();
    expect(screen.getByText("SUBTOTAL")).toBeInTheDocument();
    expect(screen.getByText("BALANCE DUE")).toBeInTheDocument();
  });

  it("should be able to wrap v2", () => {
    const wrappedDocument = wrapDocument(InvoiceSampleV2);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });
});

describe("invoice v3", () => {
  it("should render the V3 invoice correctly", () => {
    render(<InvoiceTemplate document={InvoiceSampleV3} handleObfuscation={() => {}} />);

    expect(screen.getByText("INVOICE")).toBeInTheDocument();
    expect(screen.getByText("INVOICE #")).toBeInTheDocument();
    expect(screen.getByText("DATE")).toBeInTheDocument();
    expect(screen.getByText("CUSTOMER ID")).toBeInTheDocument();
    expect(screen.getByText("TERMS")).toBeInTheDocument();
    expect(screen.getByText("BILL TO")).toBeInTheDocument();
    expect(screen.getByText("DESCRIPTION")).toBeInTheDocument();
    expect(screen.getByText("QTY")).toBeInTheDocument();
    expect(screen.getByText("UNIT PRICE")).toBeInTheDocument();
    expect(screen.getByText("SUBTOTAL")).toBeInTheDocument();
    expect(screen.getByText("BALANCE DUE")).toBeInTheDocument();
  });

  it("should be able to wrap v3", async () => {
    const wrappedDocument = await wrapDocumentV3(InvoiceSampleV3);
    expect(utils.isWrappedV3Document(wrappedDocument)).toBe(true);
  });
});

describe("invoice w3c", () => {
  it("should render the W3C invoice correctly", () => {
    render(<InvoiceTemplate document={InvoiceSampleW3C} handleObfuscation={() => {}} />);

    expect(screen.getByText("INVOICE")).toBeInTheDocument();
    expect(screen.getByText("INVOICE #")).toBeInTheDocument();
    expect(screen.getByText("DATE")).toBeInTheDocument();
    expect(screen.getByText("CUSTOMER ID")).toBeInTheDocument();
    expect(screen.getByText("TERMS")).toBeInTheDocument();
    expect(screen.getByText("BILL TO")).toBeInTheDocument();
    expect(screen.getByText("DESCRIPTION")).toBeInTheDocument();
    expect(screen.getByText("QTY")).toBeInTheDocument();
    expect(screen.getByText("UNIT PRICE")).toBeInTheDocument();
    expect(screen.getByText("SUBTOTAL")).toBeInTheDocument();
    expect(screen.getByText("BALANCE DUE")).toBeInTheDocument();
    const qrCode = screen.getByTestId("document-qrcode");
    expect(qrCode).toBeInTheDocument();
  });

  it("has valid qrcode", async () => {
    render(<InvoiceTemplate document={InvoiceSampleW3C} handleObfuscation={() => {}} />);
    const qrCode = screen.getByTestId("document-qrcode");
    expect(qrCode).toBeInTheDocument();
    expect(qrCode.querySelector("path")).toBeInTheDocument();
  });
  it("should be able verify w3c", () => {
    expect(vc.isSignedDocument(InvoiceSampleW3C)).toBe(true);
  });
});
