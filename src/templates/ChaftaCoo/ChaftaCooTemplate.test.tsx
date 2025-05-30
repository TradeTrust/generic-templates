import { render, screen } from "@testing-library/react";
import React from "react";
import { utils, wrapDocument } from "@tradetrust-tt/tradetrust";
import { ChaftaCooTemplate } from "./ChaftaCooTemplate";
import { ChaftaCooSampleV2 } from "./sampleV2";
import { ChaftaCooSampleV3 } from "./sampleV3";
import { ChaftaCooSampleW3C } from "./sampleW3C";
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

describe("chafta coo w3c", () => {
  it("should render titles correctly", () => {
    render(<ChaftaCooTemplate document={ChaftaCooSampleW3C} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("CERTIFICATE OF ORIGIN")).toHaveLength(2);
  });

  it("should render a signature", () => {
    render(<ChaftaCooTemplate document={ChaftaCooSampleW3C} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("signature")).toBeInTheDocument();
  });

  it("should be able verify w3c", () => {
    expect(vc.isSignedDocument(ChaftaCooSampleW3C)).toBe(true);
  });

  it("has valid qrcode", async () => {
    render(<ChaftaCooTemplate document={ChaftaCooSampleW3C} handleObfuscation={() => {}} />);
    const qrCode = screen.getByTestId("document-qrcode");
    expect(qrCode).toBeInTheDocument();
    expect(qrCode.querySelector("path")).toBeInTheDocument();
  });
});
