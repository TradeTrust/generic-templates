import { BillOfLadingSchemaW3C } from "./types";

export const BillOfLadingSampleV3: BillOfLadingSchemaW3C = {
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
    tokenNetwork: { chain: "MATIC", chainId: "80002" },
    tokenRegistry: "0x3652efbc80ace560844afc932d2bf8b452a96c6d",
    tokenId: "b91d5b4dfcc23d33f7be4f2620dd569c89987e8299bc4b67f6edb95b0bbbb46b",
  },
  renderMethod: [
    { id: "https://generic-templates.tradetrust.io", type: "EMBEDDED_RENDERER", templateName: "BILL_OF_LADING" },
  ],
  credentialSubject: {
    type: ["BillOfLading"],
    shipperAddressStreet: "",
    consigneeName: "",
    notifyPartyName: "",
    blNumber: "20250107",
    scac: "20250107",
  },
  issuanceDate: "2025-06-30T08:58:15.679Z",
  expirationDate: "2025-09-30T08:58:15.679Z",
  issuer: "did:web:did.trustvc.io",
  id: "urn:bnid:_:0197c00e-f6ff-755b-88a2-a9e2f3974140",
  proof: {
    type: "BbsBlsSignature2020",
    created: "2025-06-30T08:58:16Z",
    proofPurpose: "assertionMethod",
    proofValue:
      "hZXGbdsA9oFArnVg2yjpoR6M+FOL8JDsRyngG/56y7V6GVWfWJPjHOLvizcolJDIBZv2+0Ch0WCIYewp/jE2bGDy4XALHFGj8hM5lW5hB4kio0Kglkol4OlKw+eZ8ujstHAB9XhFu7/XwAcKOB02TQ==",
    verificationMethod: "did:web:did.trustvc.io#keys-1",
  },
};
