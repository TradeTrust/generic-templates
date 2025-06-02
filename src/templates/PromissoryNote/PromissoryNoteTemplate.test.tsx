import { render, screen } from "@testing-library/react";
import React from "react";
import { PromissoryNoteTemplate } from "./PromissoryNoteTemplate";
import { PromissoryNoteSampleV2 } from "./sampleV2";
import { PromissoryNoteSampleW3C } from "./sampleW3C";
import { vc } from "@trustvc/trustvc";

describe("promissoryNoteTemplate", () => {
  it("should render promissory note template with correct header", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("promissory-note-template")).toBeInTheDocument();
    expect(screen.getByText("Electronic Promissory Note")).toBeInTheDocument();
    expect(screen.getByText(/timestamped at/i)).toBeInTheDocument();
  });

  it("should display party details for drawer and drawee", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText("(Drawer)")).toBeInTheDocument();
    expect(screen.getByText("(Drawee)")).toBeInTheDocument();
    expect(screen.getAllByText(/Company Name:/)).toHaveLength(2);
    expect(screen.getAllByText(/Jurisdiction of Incorporation:/)).toHaveLength(2);
  });

  it("should display the payment promise section", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText(/We promise to pay/i)).toBeInTheDocument();
  });

  it("should render default law and arbitration section if clause is not provided", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText("Law and Arbitration")).toBeInTheDocument();
    expect(screen.getByText(/Singapore law/)).toBeInTheDocument();
    expect(screen.getByText(/No presentation \/ Notice \/ Protest Required/i)).toBeInTheDocument();
  });

  it("should display the digital signature section", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText("Digitally Signed By:")).toBeInTheDocument();
  });

  it("should show the logo if present", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    const logoImage = screen.queryByTestId("logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("should render disclaimer section", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByText(/This is a sample demonstration document/i)).toBeInTheDocument();
  });
});

describe("promissoryNoteTemplate w3c vc", () => {
  it("should render promissory note template with correct header", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleW3C} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("promissory-note-template")).toBeInTheDocument();
    expect(screen.getByText("Electronic Promissory Note")).toBeInTheDocument();
    expect(screen.getByText(/timestamped at/i)).toBeInTheDocument();
  });

  it("should display party details for drawer and drawee", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleW3C} handleObfuscation={() => {}} />);
    expect(screen.getByText("(Drawer)")).toBeInTheDocument();
    expect(screen.getByText("(Drawee)")).toBeInTheDocument();
    expect(screen.getAllByText(/Company Name:/)).toHaveLength(2);
    expect(screen.getAllByText(/Jurisdiction of Incorporation:/)).toHaveLength(2);
  });

  it("should display the payment promise section", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleW3C} handleObfuscation={() => {}} />);
    expect(screen.getByText(/We promise to pay/i)).toBeInTheDocument();
  });

  it("should render clause if present", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleW3C} handleObfuscation={() => {}} />);
    expect(screen.getByText(/The liability of the members/)).toBeInTheDocument();
  });

  it("should display the digital signature section", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleW3C} handleObfuscation={() => {}} />);
    expect(screen.getByText("Digitally Signed By:")).toBeInTheDocument();
  });

  it("should show the logo if present", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleW3C} handleObfuscation={() => {}} />);
    const logoImage = screen.queryByTestId("logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("should render disclaimer section", () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleW3C} handleObfuscation={() => {}} />);
    expect(screen.getByText(/This is a sample demonstration document/i)).toBeInTheDocument();
  });

  it("should be able verify w3c", () => {
    expect(vc.isSignedDocument(PromissoryNoteSampleW3C)).toBe(true);
  });

  it("has valid qrcode", async () => {
    render(<PromissoryNoteTemplate document={PromissoryNoteSampleW3C} handleObfuscation={() => {}} />);
    const qrCode = screen.getByTestId("document-qrcode");
    expect(qrCode).toBeInTheDocument();
    expect(qrCode.querySelector("path")).toBeInTheDocument();
  });
});
