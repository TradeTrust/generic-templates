import { XMLRenderer } from "./template";
import { XMLRendererSampleData } from "./sample";
import { render } from "@testing-library/react";
import React from "react";

const emptySample = {
  XMLRendererSampleData,
  xmlData: "",
  issuers: [],
};

describe("xml renderer", () => {
  it("should render with data", () => {
    const { getByText } = render(<XMLRenderer document={XMLRendererSampleData} handleObfuscation={() => void 0} />);
    expect(getByText("2.1")).toBeInTheDocument();
    expect(
      getByText("urn:cen.eu:en16931:2017#conformant#urn:fdc:peppol.eu:2017:poacc:billing:international:sg:3.0")
    ).toBeInTheDocument();
    expect(getByText("urn:fdc:peppol.eu:2017:poacc:billing:01:1.0")).toBeInTheDocument();
    expect(getByText("F012345")).toBeInTheDocument();
    expect(getByText("2018-12-01")).toBeInTheDocument();
    expect(getByText("2019-01-01")).toBeInTheDocument();
    expect(getByText("380")).toBeInTheDocument();
    expect(getByText("USD")).toBeInTheDocument();
    expect(getByText("123")).toBeInTheDocument();
    expect(getByText("5790000436064")).toBeInTheDocument();
    expect(getByText("Mainstreet 112")).toBeInTheDocument();
    expect(getByText("Building 3")).toBeInTheDocument();
    expect(getByText("1000")).toBeInTheDocument();
    expect(getByText("M2-1234567-K")).toBeInTheDocument();
    expect(getByText("5790000436071")).toBeInTheDocument();
    expect(getByText("345KS5324")).toBeInTheDocument();
    expect(getByText("Central road 56")).toBeInTheDocument();
    expect(getByText("Second floor")).toBeInTheDocument();
    expect(getByText("101")).toBeInTheDocument();
    expect(getByText("gr12345")).toBeInTheDocument();
    expect(getByText("000166000001")).toBeInTheDocument();
    expect(getByText("Payee current account")).toBeInTheDocument();
    expect(getByText("ICDLOG")).toBeInTheDocument();
    expect(getByText("28215.00")).toBeInTheDocument();
    expect(getByText("855.00")).toBeInTheDocument();
    expect(getByText("19000.00")).toBeInTheDocument();
    expect(getByText("8360.00")).toBeInTheDocument();
  });

  it("fields should be empty if no xmlData", () => {
    const { queryByText } = render(<XMLRenderer document={emptySample} handleObfuscation={() => void 0} />);
    expect(
      queryByText("urn:cen.eu:en16931:2017#conformant#urn:fdc:peppol.eu:2017:poacc:billing:international:sg:3.0")
    ).not.toBeInTheDocument();
    expect(queryByText("000166000001")).not.toBeInTheDocument();
    expect(queryByText("8360.00")).not.toBeInTheDocument();
  });
});
