import { firstSignatoryAuthentication as sampleSignature } from "../../core/Signatures";
import { BillOfExchangeSchemaW3C } from "./types";

const credentialSubject = {
  type: ["BillOfExchange"],
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
  drawnUnder: "Documentary Credit No. LC-DBS-2026-88341 / Invoice No. INV-2026-0456 / B/L No. BL-SIN-2026-0781",
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

/** W3C VC 2.0 + Data Integrity sample (aligned with TrustVC BoE / ObligationRecords). */
export const BillOfExchangeSampleW3C: BillOfExchangeSchemaW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://w3id.org/security/data-integrity/v2",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://trustvc.io/context/bill-of-exchange.json",
    "https://trustvc.io/context/obligation-records-context.json",
    "https://trustvc.io/context/qrcode-context.json",
  ],
  renderMethod: [
    {
      type: "EMBEDDED_RENDERER",
      templateName: "BILL_OF_EXCHANGE",
      id: "https://generic-templates.tradetrust.io",
    },
  ],
  credentialSubject,
  type: ["VerifiableCredential"],
  qrCode: {
    type: "TrustVCQRCode",
    uri: "https://ref.tradetrust.io",
  },
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "Sepolia",
      chainId: 11155111,
    },
    obligationRegistry: "0x9aAEfa502D0d975b9eECdBc280704F2D52029d10",
    tokenId: "d518e8958af67b90441775e4836feb050240ace87ac086d30496169ea296b32e",
  },
  issuer: "did:web:trustvc.github.io:did:1",
  validFrom: "2026-07-06T09:00:00Z",
  id: "urn:uuid:0198ec2b-d1e2-7ff4-a151-bc3676eb2f86",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-07-06T09:00:00Z",
    verificationMethod: "did:web:trustvc.github.io:did:1#multikey-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "uEXAMPLE_PROOF_VALUE_FOR_STORYBOOK_AND_VISUAL_TESTS_ONLY",
  },
};
