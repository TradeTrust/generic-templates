import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { ChaftaCooTemplate } from "./ChaftaCooTemplate";
import { ChaftaCooSample } from "./sample";
jest.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation();

describe("bill of lading", () => {
  it("should render chafta coo template correctly", () => {
    render(<ChaftaCooTemplate document={ChaftaCooSample} handleObfuscation={() => {}} />);

    expect(screen.getAllByText("CERTIFICATE OF ORIGIN")).toHaveLength(2);
  });
});
