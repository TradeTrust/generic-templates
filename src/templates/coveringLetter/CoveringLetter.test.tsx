import { render, screen } from "@testing-library/react";
import React from "react";
import { CoveringLetterTemplate } from "./CoveringLetter";
import { coveringLetter } from "./sample";

describe("covering Letter", () => {
  it("should render the cover letter correctly", () => {
    render(<CoveringLetterTemplate document={coveringLetter} handleObfuscation={() => {}} />);

    expect(screen.getAllByText("Documents Bundle")).toHaveLength(1);
  });
});
