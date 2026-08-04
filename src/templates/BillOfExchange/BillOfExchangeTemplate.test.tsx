import { render, screen } from "@testing-library/react";
import React from "react";
import { BillOfExchangeTemplate } from "./BillOfExchangeTemplate";
import { BillOfExchangeSampleV2 } from "./sampleV2";
import { BillOfExchangeSampleW3C } from "./sampleW3C";

describe("billOfExchangeTemplate", () => {
  it("should render bill of exchange template with correct header", () => {
    render(<BillOfExchangeTemplate document={BillOfExchangeSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("bill-of-exchange-template")).toBeInTheDocument();
    expect(screen.getByText("Bill of Exchange")).toBeInTheDocument();
  });

  it("should display reference number and formatted amount", () => {
    render(<BillOfExchangeTemplate document={BillOfExchangeSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText("BOE-2026-00147")).toBeInTheDocument();
    expect(screen.getByText("USD 128,500.00")).toBeInTheDocument();
  });

  it("should display tenor, payee, and amount in words", () => {
    render(<BillOfExchangeTemplate document={BillOfExchangeSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText("At 90 days sight")).toBeInTheDocument();
    expect(screen.getAllByText("Meridian Commodities Pte Ltd").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByText("One hundred twenty-eight thousand five hundred United States Dollars only")
    ).toBeInTheDocument();
  });

  it("should display drawer and drawee party details", () => {
    render(<BillOfExchangeTemplate document={BillOfExchangeSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText("Signed for and on behalf of Drawee")).toBeInTheDocument();
    expect(screen.getByText("Signed for and on behalf of Drawer")).toBeInTheDocument();
    expect(screen.getByText("Fairview Industries Inc.")).toBeInTheDocument();
    expect(screen.getByText("James R. Carter")).toBeInTheDocument();
    expect(screen.getByText("Wei Ling Tan")).toBeInTheDocument();
  });

  it("should render inline signature images when valid data URIs are present", () => {
    render(<BillOfExchangeTemplate document={BillOfExchangeSampleV2} handleObfuscation={() => {}} />);
    const signatures = screen.getAllByAltText("Signature image");
    expect(signatures.length).toBeGreaterThanOrEqual(2);
  });

  it("should not render dangling values when document is empty", () => {
    render(<BillOfExchangeTemplate document={{} as any} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("bill-of-exchange-template")).toBeInTheDocument();
    expect(screen.queryByText("BOE-2026-00147")).not.toBeInTheDocument();
  });
});

describe("billOfExchangeTemplate w3c", () => {
  it("should render W3C credentialSubject fields", () => {
    render(<BillOfExchangeTemplate document={BillOfExchangeSampleW3C} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("bill-of-exchange-template")).toBeInTheDocument();
    expect(screen.getByText("Bill of Exchange")).toBeInTheDocument();
    expect(screen.getByText("BOE-2026-00147")).toBeInTheDocument();
    expect(screen.getByText("USD 128,500.00")).toBeInTheDocument();
    expect(screen.getByText("Singapore")).toBeInTheDocument();
    expect(screen.getByText("DBS Bank Ltd")).toBeInTheDocument();
  });

  it("has valid qrcode when qrCode.uri is present", () => {
    render(<BillOfExchangeTemplate document={BillOfExchangeSampleW3C} handleObfuscation={() => {}} />);
    const qrCode = screen.getByTestId("document-qrcode");
    expect(qrCode).toBeInTheDocument();
    expect(qrCode.querySelector("path")).toBeInTheDocument();
  });
});
