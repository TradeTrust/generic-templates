import { v3 } from "@tradetrust-tt/tradetrust";
import { InvoiceDocumentSchemaV3 } from "./types";

export const InvoiceSampleV3: InvoiceDocumentSchemaV3 = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
    "https://schemata.openattestation.com/io/tradetrust/Invoice/1.0/invoice-context.json",
  ],
  type: ["VerifiableCredential", "OpenAttestationCredential"],
  issuanceDate: "2010-01-01T19:23:24Z",
  issuer: {
    id: "https://example.com",
    name: "DEMO STORE",
  },
  openAttestationMetadata: {
    template: {
      type: v3.TemplateType.EmbeddedRenderer,
      name: "INVOICE",
      url: "http://localhost:3000",
    },
    proof: {
      type: v3.ProofType.OpenAttestationProofMethod,
      method: v3.Method.DocumentStore,
      value: "0x8bA63EAB43342AAc3AdBB4B827b68Cf4aAE5Caca",
    },
    identityProof: {
      type: v3.IdentityProofType.DNSDid,
      identifier: "demo-tradetrust.openattestation.com",
    },
  },
  credentialSubject: {
    id: "2034",
    date: "2018-02-21",
    customerId: "564",
    terms: "Due Upon Receipt",
    billFrom: {
      name: "ABC Company",
      streetAddress: "Level 1, Industry Offices",
      city: "Singapore",
      postalCode: "123456",
      phoneNumber: "60305029",
    },
    billTo: {
      company: {
        name: "DEF Company",
        streetAddress: "Level 2, Industry Offices",
        city: "Singapore",
        postalCode: "612345",
        phoneNumber: "61204028",
      },
      name: "James Lee",
      email: "def@company.com",
    },
    billableItems: [
      {
        description: "Service Fee",
        quantity: "1",
        unitPrice: "200",
        amount: "200",
      },
      {
        description: "Labor: 5 hours at $75/hr",
        quantity: "5",
        unitPrice: "75",
        amount: "375",
      },
      {
        description: "New client discount",
        quantity: "1",
        unitPrice: "50",
        amount: "50",
      },
    ],
    subtotal: "625",
    tax: "0",
    taxTotal: "0",
    total: "625",
  },
};
