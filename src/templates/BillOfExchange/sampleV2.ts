import { v2 } from "@tradetrust-tt/tradetrust";
import { firstSignatoryAuthentication as sampleSignature } from "../../core/Signatures";
import { BillOfExchangeSchemaV2 } from "./types";

export const BillOfExchangeSampleV2: BillOfExchangeSchemaV2 = {
  $template: {
    name: "BILL_OF_EXCHANGE",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://generic-templates.tradetrust.io",
  },
  issuers: [
    {
      name: "DEMO OBLIGATION REGISTRY",
      tokenRegistry: "<YOUR_OBLIGATION_REGISTRY>",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "example.tradetrust.io",
      },
    },
  ],
  electronicDocumentIdentifier: "urn:uuid:e6f4b2a1-9c3d-4e8f-a7b0-1d2e3f4a5b6c",
  referenceNumber: "BOE-2026-00147",
  amountInFigures: "128500.00",
  amountInWords: "One hundred twenty-eight thousand five hundred United States Dollars only",
  currencyCode: "USD",
  blDate: "2026-06-28",
  placeOfIssue: "Singapore",
  dateOfIssue: "2026-07-06",
  tenor: "At 90 days sight",
  payee: "Meridian Commodities Pte Ltd",
  drawnUnder: "Documentary Credit No. LC-DBS-2026-88341 / Invoice No. INV-2026-0456",
  drawnUnderDate: "2026-06-15",
  issuedBy: "DBS Bank Ltd",
  drawee: {
    name: "Fairview Industries Inc.",
    address: "1201 Market Street, Suite 900, Wilmington, DE 19801, USA",
    authorisedSignatoryName: "James R. Carter",
    signature: sampleSignature,
  },
  drawer: {
    name: "Meridian Commodities Pte Ltd",
    address: "8 Marina Boulevard, #24-01, Singapore 018981",
    authorisedSignatoryName: "Wei Ling Tan",
    signature: sampleSignature,
  },
};
