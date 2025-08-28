/* eslint-disable jest/prefer-lowercase-title */
/* eslint-disable jest/no-hooks */
import { render, screen } from "@testing-library/react";
import React from "react";
import { utils, wrapDocument } from "@tradetrust-tt/tradetrust";
import { WarehouseReceiptSampleV2 } from "./sampleV2";
import { WarehouseReceiptTemplate } from "./WarehouseReceiptTemplate";
import { WarehouseReceiptSampleW3C, WarehouseReceiptSampleW3C_V2 } from "./sampleW3C";
import { vc } from "@trustvc/trustvc";

describe("warehouse receipt V2", () => {
  it("should be able to wrap v2", () => {
    const wrappedDocument = wrapDocument(WarehouseReceiptSampleV2);
    expect(utils.isWrappedV2Document(wrappedDocument)).toBe(true);
  });
});

describe("WarehouseReceiptTemplate", () => {
  it("should render the template with SPL number in header", () => {
    render(<WarehouseReceiptTemplate document={WarehouseReceiptSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("warehouse-receipt-template")).toBeInTheDocument();
  });

  it("should display the company logo when present", () => {
    render(<WarehouseReceiptTemplate document={WarehouseReceiptSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  describe("Warehouse Receipt Details section", () => {
    beforeEach(() => {
      render(<WarehouseReceiptTemplate document={WarehouseReceiptSampleV2} handleObfuscation={() => {}} />);
    });

    it("should display warehouse receipt number", () => {
      expect(screen.getByText(/Warehouse Receipt/)).toBeInTheDocument();
      expect(screen.getByText("POKL 4")).toBeInTheDocument();
    });

    it("should display issuance date and reference numbers", () => {
      expect(screen.getByText("Issuance Date")).toBeInTheDocument();
      expect(screen.getByText("21-Jun-2017")).toBeInTheDocument();
      expect(screen.getByText("Our Ref")).toBeInTheDocument();
      expect(screen.getByText("JI81449")).toBeInTheDocument();
    });

    it("should display commodity and document type", () => {
      expect(screen.getByText("Commodity")).toBeInTheDocument();
      expect(screen.getByText("Copper")).toBeInTheDocument();
      expect(screen.getByText("Document Type")).toBeInTheDocument();
      expect(screen.getByText("Transferable")).toBeInTheDocument();
    });

    it("should display order and account information", () => {
      expect(screen.getByText(/TO THE ORDER OF:/)).toBeInTheDocument();
      expect(screen.getByText("AAA, Singapore Branch")).toBeInTheDocument();
      expect(screen.getByText(/FOR THE ACCOUNT OF:/)).toBeInTheDocument();
      expect(screen.getByText("ABC Pte Ltd")).toBeInTheDocument();
    });
  });

  describe("Goods section", () => {
    beforeEach(() => {
      render(<WarehouseReceiptTemplate document={WarehouseReceiptSampleV2} handleObfuscation={() => {}} />);
    });

    it("should display all goods with their details", () => {
      // First item
      expect(screen.getByText("AAA / Full Plate Cathode")).toBeInTheDocument();
      expect(screen.getByText("10")).toBeInTheDocument(); // piles
      expect(screen.getByText("100")).toBeInTheDocument(); // bundles
      expect(screen.getByText("249.663")).toBeInTheDocument(); // net weight

      // Second item
      expect(screen.getByText("BBB / Full Plate Cathode")).toBeInTheDocument();
      expect(screen.getByText("20")).toBeInTheDocument(); // piles
      expect(screen.getByText("200")).toBeInTheDocument(); // bundles
      expect(screen.getByText("349.663")).toBeInTheDocument(); // net weight
    });

    it("should display total net weight", () => {
      expect(screen.getByText(/Total Net Weight \(MTs\)/)).toBeInTheDocument();
      expect(screen.getByText("599.326")).toBeInTheDocument();
    });
  });

  describe("Location and markings", () => {
    beforeEach(() => {
      render(<WarehouseReceiptTemplate document={WarehouseReceiptSampleV2} handleObfuscation={() => {}} />);
    });

    it("should display warehouse address", () => {
      expect(screen.getByText("Warehouse Address")).toBeInTheDocument();
      expect(screen.getByText("10 Anson Road, Singapore")).toBeInTheDocument();
    });

    it("should display markings/remarks", () => {
      expect(screen.getByText(/Markings \/ Remarks/)).toBeInTheDocument();
      expect(screen.getByText("Commodity: Copper Cathodes")).toBeInTheDocument();
    });
  });

  describe("Terms sections", () => {
    // eslint-disable-next-line jest/no-hooks
    beforeEach(() => {
      render(<WarehouseReceiptTemplate document={WarehouseReceiptSampleV2} handleObfuscation={() => {}} />);
    });

    it("should display storage and services terms", () => {
      expect(screen.getByText(/Storage And Services Terms/)).toBeInTheDocument();
    });

    it("should display terms and conditions", () => {
      expect(screen.getByText(/Terms And Conditions/)).toBeInTheDocument();
    });
  });

  it("should display the issuer's signature when present", () => {
    render(<WarehouseReceiptTemplate document={WarehouseReceiptSampleV2} handleObfuscation={() => {}} />);
    expect(screen.getByTestId("signature")).toBeInTheDocument();
    expect(screen.getByText(/Signature of Issuer/)).toBeInTheDocument();
  });
});

// W3C test configurations
const w3cTestConfigurations = [
  {
    name: "W3C v1.1",
    document: WarehouseReceiptSampleW3C,
    verificationFn: (doc: any) => vc.isSignedDocumentV1_1(doc),
  },
  {
    name: "W3C v2",
    document: WarehouseReceiptSampleW3C_V2,
    verificationFn: (doc: any) => vc.isSignedDocumentV2_0(doc),
  },
];

const renderW3CTemplate = (document: any): ReturnType<typeof render> => {
  return render(<WarehouseReceiptTemplate document={document} handleObfuscation={() => {}} />);
};

describe("W3C WarehouseReceipt tests", () => {
  describe(`WarehouseReceiptTemplate (W3C v1.1)`, () => {
    const config = w3cTestConfigurations[0];

    it("should render the template with SPL number from credentialSubject", () => {
      renderW3CTemplate(config.document);
      expect(screen.getByTestId("warehouse-receipt-template")).toBeInTheDocument();
    });

    describe("Warehouse Receipt Details section (W3C)", () => {
      beforeEach(() => {
        renderW3CTemplate(config.document);
      });

      it("should display warehouse receipt number from credentialSubject", () => {
        expect(screen.getByText(/Warehouse Receipt/)).toBeInTheDocument();
        expect(screen.getByText("12345")).toBeInTheDocument();
      });

      it("should display issuance date from W3C credential", () => {
        expect(screen.getByText("Issuance Date")).toBeInTheDocument();
      });
    });

    describe("Goods section (W3C)", () => {
      beforeEach(() => {
        renderW3CTemplate(config.document);
      });

      it("should display total net weight from credentialSubject", () => {
        expect(screen.getByText(/Total Net Weight \(MTs\)/)).toBeInTheDocument();
        expect(screen.getByText("50")).toBeInTheDocument();
      });
    });

    describe("Location and markings (W3C)", () => {
      beforeEach(() => {
        renderW3CTemplate(config.document);
      });

      it("should display warehouse address from credentialSubject", () => {
        expect(screen.getByText("Warehouse Address")).toBeInTheDocument();
        expect(screen.getByText("Abc street")).toBeInTheDocument();
      });

      it("should display markings from credentialSubject", () => {
        expect(screen.getByText(/Markings \/ Remarks/)).toBeInTheDocument();
        expect(screen.getByText("fragile")).toBeInTheDocument();
      });
    });

    describe("Terms sections (W3C)", () => {
      beforeEach(() => {
        renderW3CTemplate(config.document);
      });

      it("should display storage and services terms from credentialSubject", () => {
        expect(screen.getByText("test terms")).toBeInTheDocument();
      });
    });

    it("should render QR code from W3C document", () => {
      renderW3CTemplate(config.document);
      const qrCode = screen.getByTestId("document-qrcode");
      expect(qrCode).toBeInTheDocument();
      expect(qrCode.querySelector("path")).toBeInTheDocument();
    });

    it("should handle missing optional fields gracefully", () => {
      const minimalDoc = {
        ...config.document,
        credentialSubject: {
          type: ["WarehouseReceipt"],
          warehouseReceipt: "12345",
        },
      };
      render(<WarehouseReceiptTemplate document={minimalDoc} handleObfuscation={() => {}} />);

      expect(screen.getByText(/Warehouse Receipt/)).toBeInTheDocument();
    });

    it("should be able to verify w3c document", () => {
      expect(config.verificationFn(config.document)).toBe(true);
    });
  });

  describe(`WarehouseReceiptTemplate (W3C v2)`, () => {
    const config = w3cTestConfigurations[1];

    it("should render the template with SPL number from credentialSubject", () => {
      renderW3CTemplate(config.document);
      expect(screen.getByTestId("warehouse-receipt-template")).toBeInTheDocument();
    });

    describe("Warehouse Receipt Details section (W3C)", () => {
      beforeEach(() => {
        renderW3CTemplate(config.document);
      });

      it("should display warehouse receipt number from credentialSubject", () => {
        expect(screen.getByText(/Warehouse Receipt/)).toBeInTheDocument();
        expect(screen.getByText("12345")).toBeInTheDocument();
      });

      it("should display issuance date from W3C credential", () => {
        expect(screen.getByText("Issuance Date")).toBeInTheDocument();
      });
    });

    describe("Goods section (W3C)", () => {
      beforeEach(() => {
        renderW3CTemplate(config.document);
      });

      it("should display total net weight from credentialSubject", () => {
        expect(screen.getByText(/Total Net Weight \(MTs\)/)).toBeInTheDocument();
        expect(screen.getByText("50")).toBeInTheDocument();
      });
    });

    describe("Location and markings (W3C)", () => {
      beforeEach(() => {
        renderW3CTemplate(config.document);
      });

      it("should display warehouse address from credentialSubject", () => {
        expect(screen.getByText("Warehouse Address")).toBeInTheDocument();
        expect(screen.getByText("Abc street")).toBeInTheDocument();
      });

      it("should display markings from credentialSubject", () => {
        expect(screen.getByText(/Markings \/ Remarks/)).toBeInTheDocument();
        expect(screen.getByText("fragile")).toBeInTheDocument();
      });
    });

    describe("Terms sections (W3C)", () => {
      beforeEach(() => {
        renderW3CTemplate(config.document);
      });

      it("should display storage and services terms from credentialSubject", () => {
        expect(screen.getByText("test terms")).toBeInTheDocument();
      });
    });

    it("should render QR code from W3C document", () => {
      renderW3CTemplate(config.document);
      const qrCode = screen.getByTestId("document-qrcode");
      expect(qrCode).toBeInTheDocument();
      expect(qrCode.querySelector("path")).toBeInTheDocument();
    });

    it("should handle missing optional fields gracefully", () => {
      const minimalDoc = {
        ...config.document,
        credentialSubject: {
          type: ["WarehouseReceipt"],
          warehouseReceipt: "12345",
        },
      };
      render(<WarehouseReceiptTemplate document={minimalDoc} handleObfuscation={() => {}} />);

      expect(screen.getByText(/Warehouse Receipt/)).toBeInTheDocument();
    });

    it("should be able to verify w3c document", () => {
      expect(config.verificationFn(config.document)).toBe(true);
    });
  });
});
