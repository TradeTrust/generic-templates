import { TTv4 } from "@tradetrust/open-attestation";
import { InvoiceDocumentSchemaTTV4 } from "./types";

export const InvoiceSampleV4: InvoiceDocumentSchemaTTV4 = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/io/tradetrust/4.0/alpha-context.json",
  ],
  type: ["VerifiableCredential", "TradeTrustCredential"],
  validFrom: "2021-03-08T12:00:00+08:00",
  issuer: {
    id: "did:ethr:0xE94E4f16ad40ADc90C29Dc85b42F1213E034947C",
    type: "TradeTrustIssuer",
    name: "My Own Company Pte Ltd",
    identityProof: {
      identityProofType: TTv4.IdentityProofType.DNSDid,
      identifier: "example.tradetrust.io",
    },
  },
  credentialStatus: {
    type: "TradeTrustCredentialStatus",
    credentialStatusType: TTv4.CredentialStatusType.None,
  },
  renderMethod: {
    type: "TradeTrustRenderMethod",
    renderMethodType: TTv4.RenderMethodType.EmbeddedRenderer,
    name: "INVOICE",
    url: "https://generic-templates.tradetrust.io",
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
  proof: {
    type: "TradeTrustMerkleProofSignature2018",
    proofPurpose: TTv4.ProofPurpose.AssertionMethod,
    targetHash: "7f042395cc9a589a3957d54393675ff592af5aa9ed0fb768eec18c78f285cbdb",
    proofs: [],
    merkleRoot: "7f042395cc9a589a3957d54393675ff592af5aa9ed0fb768eec18c78f285cbdb",
    salts: "", // removed for brevity
    privacy: {
      obfuscated: [],
    },
    key: "did:ethr:0xE94E4f16ad40ADc90C29Dc85b42F1213E034947C#controller",
    signature:
      "0xcc742d34d671685108c00af431eba635c5631ddc6fc9a23c1d0c58e5375dbaac2e4ee90951eeb4a9d8757a647bcc5549717e0bd2a310f82fca23ab8a9a11c8851b",
  },
};
