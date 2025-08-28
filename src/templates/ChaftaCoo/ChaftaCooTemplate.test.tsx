import { render, screen } from "@testing-library/react";
import React from "react";
import { utils, wrapDocument } from "@tradetrust-tt/tradetrust";
import { ChaftaCooTemplate } from "./ChaftaCooTemplate";
import { ChaftaCooSampleV2 } from "./sampleV2";
import { ChaftaCooSampleV3 } from "./sampleV3";
import { ChaftaCooSampleW3C, ChaftaCooSampleW3C_V2 } from "./sampleW3C";
import { vc } from "@trustvc/trustvc";

describe("chafta coo v2", () => {
  it("should render titles correctly", () => {
    render(<ChaftaCooTemplate document={ChaftaCooSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("CERTIFICATE OF ORIGIN")).toHaveLength(2);
  });

  it("should render a signature", () => {
    render(<ChaftaCooTemplate document={ChaftaCooSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("signature")).toBeInTheDocument();
  });

  it("should be able to wrap v2", () => {
    const wrappedDocument = wrapDocument(ChaftaCooSampleV2);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });
});

describe("chafta coo v3", () => {
  it("should render titles correctly", () => {
    render(<ChaftaCooTemplate document={ChaftaCooSampleV3} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("CERTIFICATE OF ORIGIN")).toHaveLength(2);
  });

  it("should render a signature", () => {
    render(<ChaftaCooTemplate document={ChaftaCooSampleV3} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("signature")).toBeInTheDocument();
  });

  // eslint-disable-next-line jest/no-commented-out-tests
  // it("should be able to wrap v3", async () => {
  //   const wrappedDocument = await wrapDocumentV3(ChaftaCooSampleV3);
  //   expect(utils.isWrappedV3Document(wrappedDocument)).toBe(true);
  // }); // TODO: v3 schema fields did not tally at schemata yet
});

// W3C test configurations
const w3cTestConfigurations = [
  {
    name: "w3c v1.1",
    document: ChaftaCooSampleW3C,
    verificationFn: (doc: any) => vc.isSignedDocumentV1_1(doc),
  },
  {
    name: "w3c v2",
    document: ChaftaCooSampleW3C_V2,
    verificationFn: (doc: any) => vc.isSignedDocumentV2_0(doc),
  },
];

const renderW3CTemplate = (document: any): ReturnType<typeof render> => {
  return render(<ChaftaCooTemplate document={document} handleObfuscation={() => {}} />);
};

describe("w3C ChaftaCoo tests", () => {
  describe(`chafta coo w3c v1.1`, () => {
    const config = w3cTestConfigurations[0];

    it("should render titles correctly", () => {
      renderW3CTemplate(config.document);
      expect(screen.getAllByText("CERTIFICATE OF ORIGIN")).toHaveLength(2);
    });

    it("should render a signature", () => {
      renderW3CTemplate(config.document);
      expect(screen.getByTestId("signature")).toBeInTheDocument();
    });

    it("should be able to verify w3c document", () => {
      expect(config.verificationFn(config.document)).toBe(true);
    });
  });

  describe(`chafta coo w3c v2`, () => {
    const config = w3cTestConfigurations[1];

    it("should render titles correctly", () => {
      renderW3CTemplate(config.document);
      expect(screen.getAllByText("CERTIFICATE OF ORIGIN")).toHaveLength(2);
    });

    it("should render a signature", () => {
      renderW3CTemplate(config.document);
      expect(screen.getByTestId("signature")).toBeInTheDocument();
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
