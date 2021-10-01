import { render, screen } from "@testing-library/react";
import React from "react";
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
});

describe("simple coo empty", () => {
  it("should render titles correctly", () => {
    render(<SimpleCooTemplate document={{} as any} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("Certificate of Origin")).toHaveLength(2);
  });
});
