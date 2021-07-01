import { render, screen } from "@testing-library/react";
import React from "react";
import { InvoiceTemplate } from "./InvoiceTemplate";
import { InvoiceSample } from "./sample";

describe("invoice", () => {
  it("should render the invoice correctly", () => {
    render(<InvoiceTemplate document={InvoiceSample} handleObfuscation={() => {}} />);

    expect(screen.getByText("INVOICE")).toBeInTheDocument();
    expect(screen.getByText("INVOICE #")).toBeInTheDocument();
    expect(screen.getByText("DATE")).toBeInTheDocument();
    expect(screen.getByText("CUSTOMER ID")).toBeInTheDocument();
    expect(screen.getByText("TERMS")).toBeInTheDocument();
    expect(screen.getByText("BILL TO")).toBeInTheDocument();
    expect(screen.getByText("DESCRIPTION")).toBeInTheDocument();
    expect(screen.getByText("QTY")).toBeInTheDocument();
    expect(screen.getByText("UNIT PRICE")).toBeInTheDocument();
    expect(screen.getByText("SUBTOTAL")).toBeInTheDocument();
    expect(screen.getByText("BALANCE DUE")).toBeInTheDocument();
  });
});
