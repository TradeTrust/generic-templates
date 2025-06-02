import { render, screen } from "@testing-library/react";
import React from "react";
import { utils, wrapDocument } from "@tradetrust-tt/tradetrust";
import { BillOfLadingCarrierTemplate } from "./BillOfLadingCarrierTemplate";
import { BillOfLadingCarrierSampleV2 } from "./sampleV2";
import { BillOfLadingCarrierW3C } from "./sampleW3C";
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

describe("bill of lading (Carrier) W3C", () => {
  it("should render ebl id in B/L number and Booking number respectively", () => {
    render(<BillOfLadingCarrierTemplate document={BillOfLadingCarrierW3C} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("12345")).toHaveLength(2);
    expect(screen.getAllByText("abcde")).toHaveLength(1);
  });
  it("should not render logo, carrier signature if both not provided", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(<BillOfLadingCarrierTemplate document={BillOfLadingCarrierW3C} handleObfuscation={() => {}} />);
    expect(screen.queryByTestId("logo")).not.toBeInTheDocument();
    expect(screen.queryByTestId("carrier-signature")).not.toBeInTheDocument();
  });
  it("should not render free text fields, with Number of original B/L defaulting to ONE/1", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    render(<BillOfLadingCarrierTemplate document={BillOfLadingCarrierW3C} handleObfuscation={() => {}} />);
    expect(screen.queryByTestId("carrier-receipt")).not.toBeInTheDocument();
    expect(screen.queryByTestId("place-of-issue-bl")).not.toBeInTheDocument();
    expect(screen.getByTestId("number-of-original-bl")).toHaveTextContent("ONE/1");
    expect(screen.queryByTestId("date-of-issue-bl")).not.toBeInTheDocument();
  });
  it("should have qr code", () => {
    render(<BillOfLadingCarrierTemplate document={BillOfLadingCarrierW3C} handleObfuscation={() => {}} />);
    const qrCode = screen.getByTestId("document-qrcode");
    expect(qrCode).toBeInTheDocument();
    expect(qrCode.querySelector("path")).toBeInTheDocument();
  });
  it("should be able verify w3c", () => {
    expect(vc.isSignedDocument(BillOfLadingCarrierW3C)).toBe(true);
  });
});
