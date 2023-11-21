import { render, screen } from "@testing-library/react";
import React from "react";
import { utils, wrapDocument } from "@tradetrust-tt/tradetrust";
import { BillOfLadingMaerskTpacTemplate } from "./BillOfLadingMaerskTpacTemplate";
import { BillOfLadingMaerskTpacSampleV2 } from "./sampleV2";

describe("bill of lading V2 (Maersk Pilot)", () => {
  it("should render ebl id in B/L number and Booking number respectively", () => {
    render(<BillOfLadingMaerskTpacTemplate document={BillOfLadingMaerskTpacSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("SGCNM21566325")).toHaveLength(2);
  });

  it("should render Maersk logo, carrier signature", () => {
    render(<BillOfLadingMaerskTpacTemplate document={BillOfLadingMaerskTpacSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("logo")).toHaveAttribute("src", "test-file-stub");
    expect(screen.getByTestId("carrier-signature")).toHaveAttribute(
      "src",
      BillOfLadingMaerskTpacSampleV2.carrierSignature
    );
  });

  it("should not render Maersk logo, carrier signature if both not provided", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { logo, carrierSignature, ...rest } = BillOfLadingMaerskTpacSampleV2;
    render(<BillOfLadingMaerskTpacTemplate document={rest} handleObfuscation={() => {}} />);
    expect(screen.queryByTestId("logo")).not.toBeInTheDocument();
    expect(screen.queryByTestId("carrier-signature")).not.toBeInTheDocument();
  });

  it("should render free text fields", () => {
    render(<BillOfLadingMaerskTpacTemplate document={BillOfLadingMaerskTpacSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("carrier-receipt")).toHaveTextContent("1 container");
    expect(screen.getByTestId("place-of-issue-bl")).toHaveTextContent("Malaysia");
    expect(screen.getByTestId("number-of-original-bl")).toHaveTextContent("THREE/3");
    expect(screen.getByTestId("date-of-issue-bl")).toHaveTextContent("01/08/23");
  });

  it("should not render free text fields, with Number of original B/L defaulting to ONE/1", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { carrierReceipt, placeOfIssueBL, numberOfOriginalBL, dateOfIssueBL, ...rest } =
      BillOfLadingMaerskTpacSampleV2;

    render(<BillOfLadingMaerskTpacTemplate document={rest} handleObfuscation={() => {}} />);
    expect(screen.queryByTestId("carrier-receipt")).toHaveTextContent("");
    expect(screen.queryByTestId("place-of-issue-bl")).toHaveTextContent("");
    expect(screen.getByTestId("number-of-original-bl")).toHaveTextContent("ONE/1");
    expect(screen.queryByTestId("date-of-issue-bl")).toHaveTextContent("");
  });

  it("should be able to wrap v2", () => {
    const wrappedDocument = wrapDocument(BillOfLadingMaerskTpacSampleV2);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });
});
