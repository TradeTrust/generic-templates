import { render, screen } from "@testing-library/react";
import React from "react";
import { CoveringLetterTemplate } from "./CoveringLetterTemplate";
import { CoveringLetterSampleV2a } from "./sampleV2a";
import { CoveringLetterSampleV2b } from "./sampleV2b";
import { CoveringLetterSampleV3 } from "./sampleV3";

describe("covering Letter", () => {
  it("should render the cover letter v2 (govtech) correctly", () => {
    render(<CoveringLetterTemplate document={CoveringLetterSampleV2a} handleObfuscation={() => {}} />);
    expect(screen.getByText("Documents Bundle")).toBeInTheDocument();
    expect(screen.getByTestId("logo")).toHaveAttribute(
      "src",
      "https://www.aretese.com/images/govtech-animated-logo.gif"
    );
  });

  it("should render the cover letter v2 (dbs) correctly", () => {
    render(<CoveringLetterTemplate document={CoveringLetterSampleV2b} handleObfuscation={() => {}} />);
    expect(screen.getByText("Documents Bundle")).toBeInTheDocument();
    expect(screen.getByTestId("logo")).toHaveAttribute("src", "test-file-stub");
  });

  it("should render the cover letter v3 with customised values correctly", () => {
    const {
      credentialSubject: { titleColor, remarksColor },
    } = CoveringLetterSampleV3;

    render(<CoveringLetterTemplate document={CoveringLetterSampleV3} handleObfuscation={() => {}} />);
    expect(screen.getByText("Documents Bundle")).toBeInTheDocument();
    expect(screen.getByTestId("logo").getAttribute("src")).toContain("data:image/png;base64");

    const computedTitleColor = getComputedStyle(screen.getByText("Documents Bundle")).color;
    const computedRemarksColor = getComputedStyle(screen.getByText("Remarks:")).color;
    expect(computedTitleColor).toBe(titleColor);
    expect(computedRemarksColor).toBe(remarksColor);
  });
});
