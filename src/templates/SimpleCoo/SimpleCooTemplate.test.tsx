import { render, screen } from "@testing-library/react";
import React from "react";
import { utils, wrapDocument } from "@tradetrust-tt/tradetrust";
import { SimpleCooTemplate } from "./SimpleCooTemplate";
import { SimpleCooSampleV2 } from "./sampleV2";
import { SimpleCooSampleV3 } from "./sampleV3";

describe("simple coo v2", () => {
  it("should render titles correctly", () => {
    render(<SimpleCooTemplate document={SimpleCooSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("Certificate of Origin")).toHaveLength(2);
  });

  it("should render firstSignatoryAuthentication correctly", () => {
    render(<SimpleCooTemplate document={SimpleCooSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("signature-first")).toBeInTheDocument();
  });

  it("should render secondSignatoryAuthentication correctly", () => {
    render(<SimpleCooTemplate document={SimpleCooSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("signature-second")).toBeInTheDocument();
  });

  it("should be able to wrap v2", () => {
    const wrappedDocument = wrapDocument(SimpleCooSampleV2);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });
});

describe("simple coo v3", () => {
  it("should render titles correctly", () => {
    render(<SimpleCooTemplate document={SimpleCooSampleV3} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("Certificate of Origin")).toHaveLength(2);
  });

  it("should render firstSignatoryAuthentication correctly", () => {
    render(<SimpleCooTemplate document={SimpleCooSampleV3} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("signature-first")).toBeInTheDocument();
  });

  it("should render secondSignatoryAuthentication correctly", () => {
    render(<SimpleCooTemplate document={SimpleCooSampleV3} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("signature-second")).toBeInTheDocument();
  });

  // eslint-disable-next-line jest/no-commented-out-tests
  // it("should be able to wrap v3", async () => {
  //   const wrappedDocument = await wrapDocumentV3(SimpleCooSampleV3);
  //   expect(utils.isWrappedV3Document(wrappedDocument)).toBe(true);
  // }); // TODO: simple coo has no v3 schema defined at schemata yet -> https://schemata.openattestation.com
});

describe("simple coo empty", () => {
  it("should render titles correctly", () => {
    render(<SimpleCooTemplate document={{} as any} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("Certificate of Origin")).toHaveLength(2);
  });
});
