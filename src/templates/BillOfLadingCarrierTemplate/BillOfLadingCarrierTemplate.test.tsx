import { render, screen } from "@testing-library/react";
import React from "react";
import { utils, wrapDocument } from "@tradetrust-tt/tradetrust";
import { BillOfLadingCarrierTemplate } from "./BillOfLadingCarrierTemplate";
import { BillOfLadingCarrierSampleV2 } from "./sampleV2";
import { BillOfLadingCarrierW3C, BillOfLadingCarrierW3C_V2 } from "./sampleW3C";
import { vc } from "@trustvc/trustvc";

describe("bill of lading V2 (Carrier)", () => {
  it("should render ebl id in B/L number and Booking number respectively", () => {
    render(<BillOfLadingCarrierTemplate document={BillOfLadingCarrierSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("SGCNM21566325")).toHaveLength(2);
  });

  it("should render logo, carrier signature", () => {
    render(<BillOfLadingCarrierTemplate document={BillOfLadingCarrierSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("logo")).toHaveAttribute("src", "test-file-stub");
    expect(screen.getByTestId("carrier-signature")).toHaveAttribute(
      "src",
      BillOfLadingCarrierSampleV2.carrierSignature
    );
  });

  it("should not render logo, carrier signature if both not provided", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { logo, carrierSignature, ...rest } = BillOfLadingCarrierSampleV2;
    render(<BillOfLadingCarrierTemplate document={rest} handleObfuscation={() => {}} />);
    expect(screen.queryByTestId("logo")).not.toBeInTheDocument();
    expect(screen.queryByTestId("carrier-signature")).not.toBeInTheDocument();
  });

  it("should render free text fields", () => {
    render(<BillOfLadingCarrierTemplate document={BillOfLadingCarrierSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("carrier-receipt")).toHaveTextContent("1 container");
    expect(screen.getByTestId("place-of-issue-bl")).toHaveTextContent("Malaysia");
    expect(screen.getByTestId("number-of-original-bl")).toHaveTextContent("THREE/3");
    expect(screen.getByTestId("date-of-issue-bl")).toHaveTextContent("01/08/23");
  });

  it("should not render free text fields, with Number of original B/L defaulting to ONE/1", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { carrierReceipt, placeOfIssueBL, numberOfOriginalBL, dateOfIssueBL, ...rest } = BillOfLadingCarrierSampleV2;

    render(<BillOfLadingCarrierTemplate document={rest} handleObfuscation={() => {}} />);
    expect(screen.queryByTestId("carrier-receipt")).not.toBeInTheDocument();
    expect(screen.queryByTestId("place-of-issue-bl")).not.toBeInTheDocument();
    expect(screen.getByTestId("number-of-original-bl")).toHaveTextContent("ONE/1");
    expect(screen.queryByTestId("date-of-issue-bl")).not.toBeInTheDocument();
  });

  it("should be able to wrap v2", () => {
    const wrappedDocument = wrapDocument(BillOfLadingCarrierSampleV2);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });
});

// W3C test configurations
const w3cTestConfigurations = [
  {
    name: "W3C v1.1",
    document: BillOfLadingCarrierW3C,
    verificationFn: (doc: any) => vc.isSignedDocumentV1_1(doc),
  },
  {
    name: "W3C v2",
    document: BillOfLadingCarrierW3C_V2,
    verificationFn: (doc: any) => vc.isSignedDocumentV2_0(doc),
  },
];

const renderW3CTemplate = (document: any): ReturnType<typeof render> => {
  return render(<BillOfLadingCarrierTemplate document={document} handleObfuscation={() => {}} />);
};

const expectElementsNotInDocument = (testIds: string[]): void => {
  testIds.forEach((testId) => {
    expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
  });
};

describe("w3C Bill of Lading tests", () => {
  describe(`bill of lading (Carrier) W3C v1.1`, () => {
    const config = w3cTestConfigurations[0];

    it("should render ebl id in B/L number and Booking number respectively", () => {
      renderW3CTemplate(config.document);
      expect(screen.getAllByText("12345")).toHaveLength(2);
      expect(screen.getAllByText("abcde")).toHaveLength(1);
    });

    // eslint-disable-next-line jest/expect-expect
    it("should not render logo and carrier signature", () => {
      renderW3CTemplate(config.document);
      expectElementsNotInDocument(["logo", "carrier-signature"]);
    });

    // eslint-disable-next-line jest/expect-expect
    it("should not render free text fields, with Number of original B/L defaulting to ONE/1", () => {
      renderW3CTemplate(config.document);
      expectElementsNotInDocument(["carrier-receipt", "place-of-issue-bl", "date-of-issue-bl"]);
      expect(screen.getByTestId("number-of-original-bl")).toHaveTextContent("ONE/1");
    });

    it("should have qr code", () => {
      renderW3CTemplate(config.document);
      const qrCode = screen.getByTestId("document-qrcode");
      expect(qrCode).toBeInTheDocument();
      expect(qrCode.querySelector("path")).toBeInTheDocument();
    });

    it("should be able to verify w3c document", () => {
      expect(config.verificationFn(config.document)).toBe(true);
    });
  });

  describe(`bill of lading (Carrier) W3C v2`, () => {
    const config = w3cTestConfigurations[1];

    it("should render ebl id in B/L number and Booking number respectively", () => {
      renderW3CTemplate(config.document);
      expect(screen.getAllByText("12345")).toHaveLength(2);
      expect(screen.getAllByText("abcde")).toHaveLength(1);
    });

    // eslint-disable-next-line jest/expect-expect
    it("should not render logo and carrier signature", () => {
      renderW3CTemplate(config.document);
      expectElementsNotInDocument(["logo", "carrier-signature"]);
    });

    // eslint-disable-next-line jest/expect-expect
    it("should not render free text fields, with Number of original B/L defaulting to ONE/1", () => {
      renderW3CTemplate(config.document);
      expectElementsNotInDocument(["carrier-receipt", "place-of-issue-bl", "date-of-issue-bl"]);
      expect(screen.getByTestId("number-of-original-bl")).toHaveTextContent("ONE/1");
    });

    it("should have qr code", () => {
      renderW3CTemplate(config.document);
      const qrCode = screen.getByTestId("document-qrcode");
      expect(qrCode).toBeInTheDocument();
      expect(qrCode.querySelector("path")).toBeInTheDocument();
    });

    it("should be able to verify w3c document", () => {
      expect(config.verificationFn(config.document)).toBe(true);
    });
  });
});
