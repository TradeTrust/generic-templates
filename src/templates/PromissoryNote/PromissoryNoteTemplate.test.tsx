import { render, screen } from "@testing-library/react";
import React from "react";
import { PromissoryNoteTemplate } from "./PromissoryNoteTemplate";
import { PromissoryNoteSampleV2 } from "./sampleV2";
import { PromissoryNoteSampleW3C, PromissoryNoteSampleW3C_V2 } from "./sampleW3C";
import { vc } from "@trustvc/trustvc";

describe("promissoryNoteTemplate", () => {
  it("should render promissory note template with correct header", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("promissory-note-template")).toBeInTheDocument();
    expect(screen.getByText("Electronic Promissory Note")).toBeInTheDocument();
    expect(screen.getByText(/timestamped at/i)).toBeInTheDocument();
  });

  it("should display party details for drawer and drawee", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText("(Drawer)")).toBeInTheDocument();
    expect(screen.getByText("(Drawee)")).toBeInTheDocument();
    expect(screen.getAllByText(/Company Name:/)).toHaveLength(2);
    expect(screen.getAllByText(/Jurisdiction of Incorporation:/)).toHaveLength(2);
  });

  it("should display the payment promise section", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText(/We promise to pay/i)).toBeInTheDocument();
  });

  it("should render default law and arbitration section if clause is not provided", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText("Law and Arbitration")).toBeInTheDocument();
    expect(screen.getByText(/Singapore law/)).toBeInTheDocument();
    expect(screen.getByText(/No presentation \/ Notice \/ Protest Required/i)).toBeInTheDocument();
  });

  it("should display the digital signature section", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText("Digitally Signed By:")).toBeInTheDocument();
  });

  it("should show the logo if present", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    const logoImage = screen.queryByTestId("logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("should render disclaimer section", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText(/This is a sample demonstration document/i)).toBeInTheDocument();
  });
});

// W3C test configurations
const w3cTestConfigurations = [
  {
    name: "w3c vc v1.1",
    document: PromissoryNoteSampleW3C,
    verificationFn: (doc: any) => vc.isSignedDocumentV1_1(doc),
  },
  {
    name: "w3c vc v2",
    document: PromissoryNoteSampleW3C_V2,
    verificationFn: (doc: any) => vc.isSignedDocumentV2_0(doc),
  },
];

const renderW3CTemplate = (document: any): ReturnType<typeof render> => {
  return render(<PromissoryNoteTemplate document={document} handleObfuscation={() => {}} />);
};

const expectPromissoryNoteElements = (): void => {
  expect(screen.getByTestId("promissory-note-template")).toBeInTheDocument();
  expect(screen.getByText("Electronic Promissory Note")).toBeInTheDocument();
  expect(screen.getByText(/timestamped at/i)).toBeInTheDocument();
};

const expectPartyDetails = (): void => {
  expect(screen.getByText("(Drawer)")).toBeInTheDocument();
  expect(screen.getByText("(Drawee)")).toBeInTheDocument();
  expect(screen.getAllByText(/Company Name:/)).toHaveLength(2);
  expect(screen.getAllByText(/Jurisdiction of Incorporation:/)).toHaveLength(2);
};

describe("w3C PromissoryNote tests", () => {
  describe(`promissoryNoteTemplate w3c vc v1.1`, () => {
    const config = w3cTestConfigurations[0];

    // eslint-disable-next-line jest/expect-expect
    it("should render promissory note template with correct header", () => {
      renderW3CTemplate(config.document);
      expectPromissoryNoteElements();
    });

    // eslint-disable-next-line jest/expect-expect
    it("should display party details for drawer and drawee", () => {
      renderW3CTemplate(config.document);
      expectPartyDetails();
    });

    it("should display the payment promise section", () => {
      renderW3CTemplate(config.document);
      expect(screen.getByText(/We promise to pay/i)).toBeInTheDocument();
    });

    it("should display the sample document disclaimer", () => {
      renderW3CTemplate(config.document);
      expect(screen.getByText(/This is a sample demonstration document/i)).toBeInTheDocument();
    });

    it("should be able to verify w3c document", () => {
      expect(config.verificationFn(config.document)).toBe(true);
    });

    it("has valid qrcode", async () => {
      renderW3CTemplate(config.document);
      const qrCode = screen.getByTestId("document-qrcode");
      expect(qrCode).toBeInTheDocument();
      expect(qrCode.querySelector("path")).toBeInTheDocument();
    });
  });

  describe(`promissoryNoteTemplate w3c vc v2`, () => {
    const config = w3cTestConfigurations[1];

    // eslint-disable-next-line jest/expect-expect
    it("should render promissory note template with correct header", () => {
      renderW3CTemplate(config.document);
      expectPromissoryNoteElements();
    });

    // eslint-disable-next-line jest/expect-expect
    it("should display party details for drawer and drawee", () => {
      renderW3CTemplate(config.document);
      expectPartyDetails();
    });

    it("should display the payment promise section", () => {
      renderW3CTemplate(config.document);
      expect(screen.getByText(/We promise to pay/i)).toBeInTheDocument();
    });

    it("should display the sample document disclaimer", () => {
      renderW3CTemplate(config.document);
      expect(screen.getByText(/This is a sample demonstration document/i)).toBeInTheDocument();
    });

    it("should be able to verify w3c document", () => {
      expect(config.verificationFn(config.document)).toBe(true);
    });

    it("has valid qrcode", async () => {
      renderW3CTemplate(config.document);
      const qrCode = screen.getByTestId("document-qrcode");
      expect(qrCode).toBeInTheDocument();
      expect(qrCode.querySelector("path")).toBeInTheDocument();
    });
  });
});
