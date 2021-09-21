import { render, screen } from "@testing-library/react";
import React from "react";
import { BillOfLadingTemplate } from "./BillOfLadingTemplate";
import { BillOfLadingSampleV2 } from "./sampleV2";
import { BillOfLadingSampleV3 } from "./sampleV3";

describe("bill of lading V2", () => {
  it("should render ebl id in B/L number and Booking number respectively", () => {
    render(<BillOfLadingTemplate document={BillOfLadingSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("SGCNM21566325")).toHaveLength(2);
  });

  it("should render tradetrust logo", () => {
    render(<BillOfLadingTemplate document={BillOfLadingSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("logo")).toHaveAttribute("src", "/static/images/logo-tradetrust.svg");
  });
});

describe("bill of lading V3", () => {
  it("should render ebl id in B/L number and Booking number respectively", () => {
    render(<BillOfLadingTemplate document={BillOfLadingSampleV3} handleObfuscation={() => {}} />);
    expect(screen.getAllByText("SGCNM21566325")).toHaveLength(2);
  });

  it("should render tradetrust logo", () => {
    render(<BillOfLadingTemplate document={BillOfLadingSampleV3} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("logo")).toHaveAttribute("src", "/static/images/logo-tradetrust.svg");
  });
});
