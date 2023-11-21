import { render, screen } from "@testing-library/react";
import React from "react";
import { utils, wrapDocument } from "@tradetrust-tt/tradetrust";
import { BillOfLadingMaerskPilotTemplate } from "./BillOfLadingMaerskPilotTemplate";
import { BillOfLadingMaerskPilotSampleV2 } from "./sampleV2";

describe("bill of lading V2 (Maersk Pilot)", () => {
  it("should render ebl id in B/L number and Booking number respectively", () => {
    render(<BillOfLadingMaerskPilotTemplate document={BillOfLadingMaerskPilotSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("SGCNM21566325")).toHaveLength(2);
  });

  it("should render Maersk logo, carrier signature", () => {
    render(<BillOfLadingMaerskPilotTemplate document={BillOfLadingMaerskPilotSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("logo")).toHaveAttribute("src", "test-file-stub");
    expect(screen.getByTestId("carrier-signature")).toHaveAttribute(
      "src",
      BillOfLadingMaerskPilotSampleV2.carrierSignature
    );
  });

  it("should not render Maersk logo, carrier signature if both not provided", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { logo, carrierSignature, ...rest } = BillOfLadingMaerskPilotSampleV2;
    render(<BillOfLadingMaerskPilotTemplate document={rest} handleObfuscation={() => {}} />);
    expect(screen.queryByTestId("logo")).not.toBeInTheDocument();
    expect(screen.queryByTestId("carrier-signature")).not.toBeInTheDocument();
  });

  it("should render free text fields", () => {
    render(<BillOfLadingMaerskPilotTemplate document={BillOfLadingMaerskPilotSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("carrier-receipt")).toHaveTextContent("1 container");
    expect(screen.getByTestId("place-of-issue-bl")).toHaveTextContent("Malaysia");
    expect(screen.getByTestId("number-of-original-bl")).toHaveTextContent("THREE/3");
    expect(screen.getByTestId("date-of-issue-bl")).toHaveTextContent("01/08/23");
  });

  it("should not render free text fields, with Number of original B/L defaulting to ONE/1", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { carrierReceipt, placeOfIssueBL, numberOfOriginalBL, dateOfIssueBL, ...rest } =
      BillOfLadingMaerskPilotSampleV2;

    render(<BillOfLadingMaerskPilotTemplate document={rest} handleObfuscation={() => {}} />);
    expect(screen.queryByTestId("carrier-receipt")).not.toBeInTheDocument();
    expect(screen.queryByTestId("place-of-issue-bl")).not.toBeInTheDocument();
    expect(screen.getByTestId("number-of-original-bl")).toHaveTextContent("ONE/1");
    expect(screen.queryByTestId("date-of-issue-bl")).not.toBeInTheDocument();
  });

  it("should be able to wrap v2", () => {
    const wrappedDocument = wrapDocument(BillOfLadingMaerskPilotSampleV2);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });
});
