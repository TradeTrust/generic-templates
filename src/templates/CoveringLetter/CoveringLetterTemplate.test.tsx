import { render, screen } from "@testing-library/react";
import React from "react";
import { CoveringLetterTemplate } from "./CoveringLetterTemplate";
import { CoveringLetterSample } from "./sampleV2a";
import { CoveringLetterSample2 } from "./sampleV2b";

describe("covering Letter", () => {
  it("should render the cover letter (govtech) correctly", () => {
    render(<CoveringLetterTemplate document={CoveringLetterSample} handleObfuscation={() => {}} />);
    expect(screen.getByText("Documents Bundle")).toBeInTheDocument();
    expect(screen.getByTestId("logo")).toHaveAttribute(
      "src",
      "https://www.aretese.com/images/govtech-animated-logo.gif"
    );
  });

  it("should render the cover letter (dbs) correctly", () => {
    render(<CoveringLetterTemplate document={CoveringLetterSample2} handleObfuscation={() => {}} />);
    expect(screen.getByText("Documents Bundle")).toBeInTheDocument();
    expect(screen.getByTestId("logo")).toHaveAttribute("src", "test-file-stub");
  });
});
