import { PromissoryNoteSchemaW3C } from "./types";
import logo from "/static/images/logo-tradetrust.svg";

export const PromissoryNoteSampleW3C: PromissoryNoteSchemaW3C = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://trustvc.io/context/promissory-note.json",
    "https://trustvc.io/context/render-method-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/qrcode-context.json",
    "https://w3id.org/security/bbs/v1",
  ],
  renderMethod: [
    { type: "EMBEDDED_RENDERER", templateName: "PROMISSORY_NOTE", id: "https://generic-templates.tradetrust.io" },
  ],
  credentialSubject: {
    logo: logo, // remove to make document verifiable
    type: ["PromissoryNote"],
    drawerCompanyName: "Quantum Export Holdings Ltd.",
    drawerCompanyNo: "RISH25397595912ABH",
    drawerJurisdiction: "Germany",
    drawerEmail: "claudia.hoffman@quantum-export.de",
    drawerWalletAddress: "0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638",
    drawerPlaceOfIssue: "Berlin",
    draweeCompanyName: "NovaTech Industries Pvt. Ltd.",
    draweeCompanyNo: "335800AXCFTR2910LJ01",
    draweeJurisdiction: "India",
    draweeEmail: "ravi.menon@novatech.co.in",
    draweeWalletAddress: "0x9eE4C5b6F5b92b4fE8E7F3Ac13Bb96fD52DBe442",
    dueDate: "2025-05-30",
    currency: "EUR",
    amount: "197651.12",
    clause:
      "The liability of the members is limited and, in the case of a company limited by shares, the liability is limited to the amount unpaid on their shares.",
    signerName: "Claudia Hoffman",
    signerPosition: "Chief Financial Officer",
    signerEmail: "claudia.hoffman@quantum-export.de",
    signerTimeStamp: "2025-05-30",
    pNoteId: "a3c2d64e-7b91-4c03-8b6d-9df3456fc2b9",
    commitmentDate: "2025-05-30",
  },
  type: ["VerifiableCredential"],
  qrCode: {
    type: "TrustVCQRCode",
    uri: "https://actions.tradetrust.io?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Ftradetrust-functions.netlify.app%2F.netlify%2Ffunctions%2Fstorage%2F3c378f76-daeb-4ff4-bc99-24eb7d160265%22%2C%22key%22%3A%22c172ea818e10f83f0d172dca5a94512230ac7a9b5abdbe8b50762a30da6928a5%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fv5-beta--v5-dev-tradetrust-website.netlify.app%2F%22%2C%22chainId%22%3A%2220180427%22%7D%7D",
  },
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: { chain: "FREE", chainId: 20180427 },
    tokenRegistry: "0x355Aa93f3278086C957E92b21aE0Aa5A339911F0",
    tokenId: "41210c549968a8ec37a31279be3470b38b68848b692f6e5dda972488df4a8c78",
  },
  issuer: "did:web:blue-azure-vicuna.sandbox.nghaninn.com",
  issuanceDate: "2025-05-30T12:47:14.694Z",
  id: "urn:bnid:_:0197213b-7706-7002-bf95-e8aa1491d751",
  proof: {
    type: "BbsBlsSignature2020",
    created: "2025-05-30T12:47:14Z",
    proofPurpose: "assertionMethod",
    proofValue:
      "gWQVocU7Wmv1iMR2vmEsNrDDAJz8M5NuV3axNWh4uygDvAsGSyJgqj6Rqhm56SpMLegnAoOpNnHMa9GLjxNBerCBln4hydKsxk3hZQTdKOAw43rcAg0DcXqo5wMzdDjxL28NBGJY92wAru2l1jL8Gw==",
    verificationMethod: "did:web:blue-azure-vicuna.sandbox.nghaninn.com#keys-1",
  },
};
