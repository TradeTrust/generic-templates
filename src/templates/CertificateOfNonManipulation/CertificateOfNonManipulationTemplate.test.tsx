import { render, screen } from "@testing-library/react";
import React from "react";
import { utils, wrapDocument } from "@tradetrust-tt/tradetrust";
import { CertificateOfNonManipulationTemplate } from "./CertificateOfNonManipulationTemplate";
import { CertificateOfNonManipulationSampleV2 } from "./sampleV2";

describe("certificate of non manipulation", () => {
  // this is the demo certificate that is used for "promoting" how easy it is to verify documents.
  // let's make sure as much empty values gets their expected output.
  it("should render certificate of non manipulation v2 correctly", () => {
    render(
      <CertificateOfNonManipulationTemplate
        document={CertificateOfNonManipulationSampleV2}
        handleObfuscation={() => {}}
      />
    );
    expect(screen.getByText("SG FREIGHT")).toBeInTheDocument();
    expect(screen.getByText("No. SGCNM21566325")).toBeInTheDocument();
    expect(screen.getByText("16667 CARTONS OF RED WINE")).toBeInTheDocument();
    expect(screen.getByText("5000 LITRES")).toBeInTheDocument();
    expect(screen.getByText("AUSTRALIA")).toBeInTheDocument();
    expect(screen.getByText("AQSIQ170923130")).toBeInTheDocument();
    expect(screen.getByText("2018-01-26")).toBeInTheDocument();
    expect(screen.getByText("2018-01-30")).toBeInTheDocument();
    expect(screen.getByText("CHINA")).toBeInTheDocument();
    expect(screen.getByText("COSCO JAPAN 074E/30-JAN")).toBeInTheDocument();
    expect(screen.getByText("PETER LEE")).toBeInTheDocument();
    expect(screen.getByText("SHIPPING MANAGER")).toBeInTheDocument();
    expect(screen.getByTestId("certificate-signature")).toHaveAttribute(
      "src",
      CertificateOfNonManipulationSampleV2.certification?.signature
    );
    expect(screen.getByText("DEMO JOHN TAN")).toBeInTheDocument();
    expect(screen.getByText("DEMO")).toBeInTheDocument();
    expect(screen.getByTestId("certificate-stamp")).toHaveAttribute(
      "src",
      CertificateOfNonManipulationSampleV2.certification?.stamp
    );
  });

  it("should be able to wrap v2", () => {
    const wrappedDocument = wrapDocument(CertificateOfNonManipulationSampleV2);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });
});
