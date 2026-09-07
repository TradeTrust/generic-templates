import { firstSignatoryAuthentication as sampleSignature } from "../../core/Signatures";
import { BillOfExchangeDocumentaryCreditSchemaW3C } from "./types";

/**
 * Matches the actions.tradetrust.io QR scheme (see tradetrust-website's encodeQrCode /
 * useQueue.ts): scanning must land on the verifier with a `q` action payload, not a bare
 * URL — a bare domain just opens the verifier's homepage with nothing to verify.
 */
const sampleQrCodePayload = {
  type: "DOCUMENT",
  payload: {
    uri: "https://api.tradetrust.io/storage/9c2e5a41-3b7d-4c1a-9f6e-2d8b1a4c7e93",
    permittedActions: ["VIEW"],
    redirect: "https://ref.tradetrust.io",
  },
};

/** Small placeholder logo — a real issuer would supply their own inline base64 image. */
const sampleBankLogo =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iNDgiPjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iNDgiIHJ4PSI2IiBmaWxsPSIjMGYxNzJhIi8+PHRleHQgeD0iODAiIHk9IjMwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJBTks8L3RleHQ+PC9zdmc+";

const credentialSubject = {
  type: ["BillOfExchangeDocumentaryCredit"],
  electronicDocumentIdentifier: "urn:uuid:9c2e5a41-3b7d-4c1a-9f6e-2d8b1a4c7e93",
  bankLogo: sampleBankLogo,
  referenceNumber: "BOE-2026-001",
  amountInFigures: "100000.00",
  amountInWords: "United States Dollars One Hundred Thousand Only",
  currencyCode: "USD",
  placeOfIssue: "Singapore",
  dateOfIssue: "2026-08-27",
  maturityDate: "2026-10-15",
  payee: "DBS Bank Ltd",
  drawnUnder: "Bank of Asia Ltd., Hong Kong",
  documentaryCreditNumber: "LC2026/001234",
  documentaryCreditDate: "2026-08-15",
  indorsement: {
    payee: "DBS Bank Ltd",
  },
  drawee: {
    name: "Bank of Asia Ltd.",
    address: "123 Finance Street, Central, Hong Kong",
    authorisedSignatoryName: "James R. Carter",
    signature: sampleSignature,
  },
  drawer: {
    name: "ABC Singapore Pte Ltd",
    address: "8 Marina Boulevard, #24-01, Singapore 018981",
    authorisedSignatoryName: "Wei Ling Tan",
    signature: sampleSignature,
  },
};

/** W3C VC 2.0 + Data Integrity sample (aligned with TrustVC BoE-DC / ObligationRecords). */
export const BillOfExchangeDocumentaryCreditSampleW3C: BillOfExchangeDocumentaryCreditSchemaW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://w3id.org/security/data-integrity/v2",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://trustvc.io/context/bill-of-exchange-documentary-credit.json",
    "https://trustvc.io/context/obligation-records-context.json",
    "https://trustvc.io/context/qrcode-context.json",
  ],
  renderMethod: [
    {
      type: "EMBEDDED_RENDERER",
      templateName: "BILL_OF_EXCHANGE_DOCUMENTARY_CREDIT",
      id: "https://generic-templates.tradetrust.io",
    },
  ],
  credentialSubject,
  type: ["VerifiableCredential"],
  qrCode: {
    type: "TrustVCQRCode",
    uri: `https://actions.tradetrust.io?q=${encodeURIComponent(JSON.stringify(sampleQrCodePayload))}`,
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
  validFrom: "2026-08-27T09:00:00Z",
  id: "urn:uuid:0198ec2b-d1e2-7ff4-a151-bc3676eb2f87",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-08-27T09:00:00Z",
    verificationMethod: "did:web:trustvc.github.io:did:1#multikey-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "uEXAMPLE_PROOF_VALUE_FOR_STORYBOOK_AND_VISUAL_TESTS_ONLY",
  },
};

/** Same as above but without a qrCode — demonstrates the template hiding the QR gracefully. */
export const BillOfExchangeDocumentaryCreditSampleW3CNoQrCode: BillOfExchangeDocumentaryCreditSchemaW3C = {
  ...BillOfExchangeDocumentaryCreditSampleW3C,
  qrCode: undefined as any,
};
