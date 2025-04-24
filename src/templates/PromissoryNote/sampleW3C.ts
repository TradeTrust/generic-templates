import { PromissoryNoteSchemaW3C } from "./types";
import logo from "/static/images/logo-tradetrust.svg";

export const PromissoryNoteSampleW3C: PromissoryNoteSchemaW3C = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/bbs/v1",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context.json",
    "https://trustvc.io/context/promissory-note.json",
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "MATIC",
      chainId: 80002,
    },
    tokenRegistry: "<YOUR_TOKEN_REGISTRY>",
    tokenId: "0a1e90f6a410efba6e431fbdf48cf7a6e2df495ef150348fa723d4b35668aada",
  },
  credentialSubject: {
    logo: logo,
    pNoteId: "a3c2d64e-7b91-4c03-8b6d-9df3456fc2a9",
    commitmentDate: "2025-04-10T00:00:00.000Z",
    dueDate: "2025-05-10T00:00:00.000Z",
    currency: "EUR",
    amount: "78945.23",
    drawerCompanyName: "Quantum Export Holdings Ltd.",
    drawerCompanyNo: "549300XDPHYG67J0FZ17",
    drawerJurisdiction: "Germany",
    drawerEmail: "claudia.hoffman@quantum-export.de",
    drawerWalletAddress: "0x12A4BeF891c8b7d213D7Cd9E4174fC2F391Bd89A",
    drawerPlaceOfIssue: "Berlin",
    draweeCompanyName: "NovaTech Industries Pvt. Ltd.",
    draweeCompanyNo: "335800AXCFTR2910LJ01",
    draweeJurisdiction: "India",
    draweeEmail: "ravi.menon@novatech.co.in",
    draweeWalletAddress: "0x9eE4C5b6F5b92b4fE8E7F3Ac13Bb96fD52DBe442",
    signerName: "Claudia Hoffman",
    signerPosition: "Chief Financial Officer",
    signerEmail: "claudia.hoffman@quantum-export.de",
    signerTimeStamp: "2025-04-10T09:42:17.500Z",
    type: ["PromissoryNote"],
  },
  renderMethod: [
    {
      id: "<YOUR_HOSTED_RENDERER_URL>",
      type: "EMBEDDED_RENDERER",
      templateName: "PROMISSORY_NOTE",
    },
  ],
  expirationDate: "2029-12-03T12:19:52Z",
  issuer: "did:web:trustvc.github.io:did:1",
  type: ["VerifiableCredential"],
  issuanceDate: "2024-04-01T12:19:52Z",
  id: "urn:bnid:_:019665c7-c6f6-7ddf-b1ec-91535528a28e",
  proof: {
    type: "BbsBlsSignature2020",
    created: "2025-04-24T03:11:53Z",
    proofPurpose: "assertionMethod",
    proofValue:
      "o7vdIEdaF32iO5nlTfFs0+G6DnQ61MF2fVa2cL0x0Ia9hcqhkNIUUgIZVsmUCfLxUz81HsqZ8RsguauCiuRvA0NSHafYsIPvqmdxgTNPfPAY9qLUDFmoeR792NH8yLQEoTfJxqbnxZVlYYc9ScbR8A==",
    verificationMethod: "did:web:trustvc.github.io:did:1#keys-1",
  },
};
