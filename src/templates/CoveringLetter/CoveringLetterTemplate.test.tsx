import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { CoveringLetterTemplate } from "./CoveringLetterTemplate";
import { CoveringLetterSample } from "./sample";
jest.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation();

describe("covering Letter", () => {
  it("should render the cover letter correctly", () => {
    render(<CoveringLetterTemplate document={CoveringLetterSample} handleObfuscation={() => {}} />);

    expect(screen.getAllByText("Documents Bundle")).toHaveLength(1);
  });
});
