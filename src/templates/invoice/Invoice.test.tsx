import { render } from "@testing-library/react";
import React from "react";
import { InvoiceTemplate } from "./Invoice";
import { invoice } from "./sample";
import "@testing-library/jest-dom";

describe("covering Letter", () => {
  it("should render the cover letter correctly", () => {
    const { getByText, getAllByText } = render(<InvoiceTemplate document={invoice} handleObfuscation={() => {}} />);
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
    expect(getByText("AMOUNT")).toBeInTheDocument();

    //dynamic texts
    expect(getByText("2034")).toBeInTheDocument();
    expect(getByText("21 Feb 2018")).toBeInTheDocument();
    expect(getByText("564")).toBeInTheDocument();
    expect(getByText("Due Upon Receipt")).toBeInTheDocument();
    expect(getByText("ABC Company")).toBeInTheDocument();
    expect(getByText("Level 1, Industry Offices")).toBeInTheDocument();
    expect(getByText("Singapore, 123456")).toBeInTheDocument();
    expect(getByText("60305029")).toBeInTheDocument();
    expect(getByText("DEF Company")).toBeInTheDocument();
    expect(getByText("Level 2, Industry Offices")).toBeInTheDocument();
    expect(getByText("Singapore, 612345")).toBeInTheDocument();
    expect(getByText("61204028")).toBeInTheDocument();
    expect(getByText("James Lee")).toBeInTheDocument();
    expect(getByText("def@company.com")).toBeInTheDocument();
    expect(getByText("Service Fee")).toBeInTheDocument();
    expect(getAllByText("1")).toHaveLength(2);
    expect(getAllByText("200")).toHaveLength(2);
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("75")).toBeInTheDocument();
    expect(getByText("375")).toBeInTheDocument();
    expect(getAllByText("50")).toHaveLength(2);
  });
});
