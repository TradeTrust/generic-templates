import { render } from "@testing-library/react";
import React from "react";
import { InvoiceTemplate } from "./Invoice";
import { invoice } from "./sample";
import "@testing-library/jest-dom";

describe("covering Letter", () => {
  it("should render the cover letter correctly", () => {
    const { getByText } = render(<InvoiceTemplate document={invoice} handleObfuscation={() => {}} />);
    //static texts
    expect(getByText("INVOICE")).toBeInTheDocument();
    expect(getByText("INVOICE #")).toBeInTheDocument();
    expect(getByText("DATE")).toBeInTheDocument();
    expect(getByText("CUSTOMER ID")).toBeInTheDocument();
    expect(getByText("TERMS")).toBeInTheDocument();
    expect(getByText("BILL TO")).toBeInTheDocument();
    expect(getByText("DESCRIPTION")).toBeInTheDocument();
    expect(getByText("QTY")).toBeInTheDocument();
    expect(getByText("UNIT PRICE")).toBeInTheDocument();
    expect(getByText("SUBTOTAL")).toBeInTheDocument();
    expect(getByText("BALANCE DUE")).toBeInTheDocument();
  });
});
