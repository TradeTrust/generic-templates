import { render, screen } from "@testing-library/react";
import React from "react";
import { BillOfExchangeDocumentaryCreditTemplate } from "./BillOfExchangeDocumentaryCreditTemplate";
import {
  BillOfExchangeDocumentaryCreditSampleW3C,
  BillOfExchangeDocumentaryCreditSampleW3CNoQrCode,
} from "./sampleW3C";

describe("billOfExchangeDocumentaryCreditTemplate", () => {
  it("should render the bill of exchange documentary credit template", () => {
    render(
      <BillOfExchangeDocumentaryCreditTemplate
        document={BillOfExchangeDocumentaryCreditSampleW3C}
        handleObfuscation={() => {}}
      />
    );
    expect(screen.getByTestId("bill-of-exchange-documentary-credit-template")).toBeInTheDocument();
    expect(screen.getByText("No.")).toBeInTheDocument();
  });

  it("should display reference number and formatted amount", () => {
    render(
      <BillOfExchangeDocumentaryCreditTemplate
        document={BillOfExchangeDocumentaryCreditSampleW3C}
        handleObfuscation={() => {}}
      />
    );
    expect(screen.getByText("BOE-2026-001")).toBeInTheDocument();
    expect(screen.getByText("USD 100,000.00")).toBeInTheDocument();
  });

  it("should display place & date, maturity date, payee, drawn under, and amount in words", () => {
    render(
      <BillOfExchangeDocumentaryCreditTemplate
        document={BillOfExchangeDocumentaryCreditSampleW3C}
        handleObfuscation={() => {}}
      />
    );
    expect(screen.getByText("Singapore, 27 Aug 2026")).toBeInTheDocument();
    expect(screen.getByText("15 Oct 2026")).toBeInTheDocument();
    expect(screen.getAllByText("DBS Bank Ltd").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Bank of Asia Ltd., Hong Kong")).toBeInTheDocument();
    expect(screen.getByText("United States Dollars One Hundred Thousand Only")).toBeInTheDocument();
  });

  it("should display documentary credit number and date", () => {
    render(
      <BillOfExchangeDocumentaryCreditTemplate
        document={BillOfExchangeDocumentaryCreditSampleW3C}
        handleObfuscation={() => {}}
      />
    );
    expect(screen.getByText("LC2026/001234")).toBeInTheDocument();
    expect(screen.getByText("15 Aug 2026")).toBeInTheDocument();
  });

  it("should display drawee and drawer party details", () => {
    render(
      <BillOfExchangeDocumentaryCreditTemplate
        document={BillOfExchangeDocumentaryCreditSampleW3C}
        handleObfuscation={() => {}}
      />
    );
    expect(screen.getByText("Bank of Asia Ltd.")).toBeInTheDocument();
    expect(screen.getByText("123 Finance Street, Central, Hong Kong")).toBeInTheDocument();
    expect(screen.getByText("ABC Singapore Pte Ltd")).toBeInTheDocument();
    expect(screen.getAllByText("Authorised signature")).toHaveLength(2);
  });

  it("should render the indorsement section", () => {
    render(
      <BillOfExchangeDocumentaryCreditTemplate
        document={BillOfExchangeDocumentaryCreditSampleW3C}
        handleObfuscation={() => {}}
      />
    );
    expect(screen.getByText("Indorsement")).toBeInTheDocument();
  });

  it("should render inline signature images when valid data URIs are present", () => {
    render(
      <BillOfExchangeDocumentaryCreditTemplate
        document={BillOfExchangeDocumentaryCreditSampleW3C}
        handleObfuscation={() => {}}
      />
    );
    expect(screen.getByAltText("Drawee signature image")).toBeInTheDocument();
    expect(screen.getByAltText("Drawer signature image")).toBeInTheDocument();
  });

  it("should not render remote signature URLs", () => {
    const document = {
      ...BillOfExchangeDocumentaryCreditSampleW3C,
      credentialSubject: {
        ...BillOfExchangeDocumentaryCreditSampleW3C.credentialSubject,
        drawee: {
          ...BillOfExchangeDocumentaryCreditSampleW3C.credentialSubject.drawee,
          signature: "https://evil.example/track.png",
        },
        drawer: {
          ...BillOfExchangeDocumentaryCreditSampleW3C.credentialSubject.drawer,
          signature: "https://evil.example/track.png",
        },
      },
    };
    render(<BillOfExchangeDocumentaryCreditTemplate document={document as any} handleObfuscation={() => {}} />);
    expect(screen.queryByAltText("Drawee signature image")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Drawer signature image")).not.toBeInTheDocument();
  });

  it("should render the bank logo when a valid inline data URI is present", () => {
    render(
      <BillOfExchangeDocumentaryCreditTemplate
        document={BillOfExchangeDocumentaryCreditSampleW3C}
        handleObfuscation={() => {}}
      />
    );
    expect(screen.getByTestId("bank-logo")).toBeInTheDocument();
  });

  it("should not render a remote bank logo URL", () => {
    const document = {
      ...BillOfExchangeDocumentaryCreditSampleW3C,
      credentialSubject: {
        ...BillOfExchangeDocumentaryCreditSampleW3C.credentialSubject,
        bankLogo: "https://evil.example/track.png",
      },
    };
    render(<BillOfExchangeDocumentaryCreditTemplate document={document as any} handleObfuscation={() => {}} />);
    expect(screen.queryByTestId("bank-logo")).not.toBeInTheDocument();
  });

  it("should not render a bank logo, and not crash, when bankLogo is absent", () => {
    const document = {
      ...BillOfExchangeDocumentaryCreditSampleW3C,
      credentialSubject: {
        ...BillOfExchangeDocumentaryCreditSampleW3C.credentialSubject,
        bankLogo: undefined,
      },
    };
    render(<BillOfExchangeDocumentaryCreditTemplate document={document as any} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("bill-of-exchange-documentary-credit-template")).toBeInTheDocument();
    expect(screen.queryByTestId("bank-logo")).not.toBeInTheDocument();
  });

  it("should not render dangling values or a QR code when document is empty", () => {
    render(<BillOfExchangeDocumentaryCreditTemplate document={{} as any} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("bill-of-exchange-documentary-credit-template")).toBeInTheDocument();
    expect(screen.queryByText("BOE-2026-001")).not.toBeInTheDocument();
    expect(screen.queryByTestId("document-qrcode")).not.toBeInTheDocument();
  });

  it("should render safely when credentialSubject is missing on a W3C-shaped document", () => {
    render(
      <BillOfExchangeDocumentaryCreditTemplate
        document={{ type: ["VerifiableCredential"], credentialSubject: undefined } as any}
        handleObfuscation={() => {}}
      />
    );
    expect(screen.getByTestId("bill-of-exchange-documentary-credit-template")).toBeInTheDocument();
  });

  it("has a QR code (read from the document's qrCode, not credentialSubject) when qrCode.uri is present", () => {
    render(
      <BillOfExchangeDocumentaryCreditTemplate
        document={BillOfExchangeDocumentaryCreditSampleW3C}
        handleObfuscation={() => {}}
      />
    );
    const qrCode = screen.getByTestId("document-qrcode");
    expect(qrCode).toBeInTheDocument();
    expect(qrCode.querySelector("path")).toBeInTheDocument();
  });

  it("does not render a QR code, and does not crash, when qrCode is absent", () => {
    render(
      <BillOfExchangeDocumentaryCreditTemplate
        document={BillOfExchangeDocumentaryCreditSampleW3CNoQrCode}
        handleObfuscation={() => {}}
      />
    );
    expect(screen.getByTestId("bill-of-exchange-documentary-credit-template")).toBeInTheDocument();
    expect(screen.queryByTestId("document-qrcode")).not.toBeInTheDocument();
  });
});
