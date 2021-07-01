import { render, screen } from "@testing-library/react";
import React from "react";
import { BillOfLadingGenericTemplate } from "./BillOfLadingGenericTemplate";
import { BillOfLadingGenericSample } from "./sample";

describe("bill of lading", () => {
  it("should render B/L number correctly", () => {
    render(<BillOfLadingGenericTemplate document={BillOfLadingGenericSample} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("SGCNM21566325")).toHaveLength(1);
  });

  it("should render company logo", () => {
    render(<BillOfLadingGenericTemplate document={BillOfLadingGenericSample} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("logo")).toHaveAttribute("src", "/static/images/logo-tradetrust.svg");
  });

  it("should render fields 1-9 content correctly", () => {
    render(<BillOfLadingGenericTemplate document={BillOfLadingGenericSample} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("Hello")).toHaveLength(9);
  });
});
