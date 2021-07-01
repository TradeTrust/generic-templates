import { render, screen } from "@testing-library/react";
import React from "react";
import { BillOfLadingTemplate } from "./BillOfLadingTemplate";
import { BillOfLadingSample } from "./sample";

describe("bill of lading", () => {
  it("should render ebl id in B/L number and Booking number respectively", () => {
    render(<BillOfLadingTemplate document={BillOfLadingSample} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("SGCNM21566325")).toHaveLength(2);
  });

  it("should render tradetrust logo", () => {
    render(<BillOfLadingTemplate document={BillOfLadingSample} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("logo")).toHaveAttribute("src", "/static/images/logo-tradetrust.svg");
  });
});
