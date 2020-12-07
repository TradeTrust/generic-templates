import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { InvoiceTemplate } from "./InvoiceTemplate";
import { InvoiceSample } from "./sample";

describe("invoice", () => {
  it("should render the invoice correctly", () => {
    const { getByText } = render(<InvoiceTemplate document={InvoiceSample} handleObfuscation={() => {}} />);
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
