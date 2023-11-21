import { render, screen } from "@testing-library/react";
import React from "react";
import {
  utils,
  wrapDocument,
  __unsafe__use__it__at__your__own__risks__wrapDocument as wrapDocumentV3,
} from "@tradetrust-tt/tradetrust";
import { CoveringLetterTemplate } from "./CoveringLetterTemplate";
import { CoveringLetterSampleV2a } from "./sampleV2a";
import { CoveringLetterSampleV2b } from "./sampleV2b";
import { CoveringLetterSampleV3 } from "./sampleV3";

describe("covering Letter v2", () => {
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

  it("should be able to wrap v2, sample a", () => {
    const wrappedDocument = wrapDocument(CoveringLetterSampleV2a);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });

  it("should be able to wrap v2, sample b", () => {
    const wrappedDocument = wrapDocument(CoveringLetterSampleV2b);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });
});

describe("covering Letter v3", () => {
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

  it("should be able to wrap v3", async () => {
    const wrappedDocument = await wrapDocumentV3(CoveringLetterSampleV3);
    expect(utils.isWrappedV3Document(wrappedDocument)).toBe(true);
  });
});
