import { BillOfLadingSchemaW3C } from "./types";

export const BillOfLadingSampleW3C: BillOfLadingSchemaW3C = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/bbs/v1",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/bill-of-lading.json",
  ],
  type: ["VerifiableCredential"],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "MATIC",
      chainId: "80002",
    },
    tokenRegistry: "0x3652efbc80ace560844afc932d2bf8b452a96c6d"
  },
  renderMethod: [
    {
      id: "http://localhost:3000",
      type: "EMBEDDED_RENDERER",
      templateName: "BILL_OF_LADING",
    },
  ],
  credentialSubject: {
    type: ["BillOfLading"],
    shipperAddressStreet: "",
    consigneeName: "",
    notifyPartyName: "",
    blNumber: "20250107",
    scac: "20250107",
  },
  issuanceDate: "2025-06-30T13:49:59.352Z",
  expirationDate: "2025-09-30T13:49:59.352Z",
  issuer: "did:web:did.trustvc.io",
  id: "urn:bnid:_:0197c11a-0cbb-7bb0-ac68-24b564c4eca0"
};
