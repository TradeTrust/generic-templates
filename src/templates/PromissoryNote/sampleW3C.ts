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
    logo: logo,
    type: ["PromissoryNote"],
    drawerCompanyName: "The Great Shipping Co.",
    drawerCompanyNo: "100",
    pNoteId: "12345",
  },
  type: ["VerifiableCredential"],
  qrCode: {
    type: "TrustVCQRCode",
    uri: "https://actions.tradetrust.io?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Ftradetrust-functions.netlify.app%2F.netlify%2Ffunctions%2Fstorage%2Ff09e5146-e943-46d1-b475-809b87dd9f7c%22%2C%22key%22%3A%22cf66fef35200654d59eb1fb26813771f7d469e25174b789ab1e7d67a5d92872b%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fv5-beta--v5-dev-tradetrust-website.netlify.app%2F%22%2C%22chainId%22%3A%2220180427%22%7D%7D",
  },
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: { chain: "FREE", chainId: 20180427 },
    tokenRegistry: "0x355Aa93f3278086C957E92b21aE0Aa5A339911F0",
    tokenId: "a57f73d6d0fb2ce41df55de436446f12e0c55aa3e8ae70c484a6946444cd37ff",
  },
  issuer: "did:web:blue-azure-vicuna.sandbox.nghaninn.com",
  issuanceDate: "2025-05-30T06:53:23.548Z",
  id: "urn:bnid:_:01971ff7-80de-799e-9cc9-04632ad8064a",
  proof: {
    type: "BbsBlsSignature2020",
    created: "2025-05-30T06:53:23Z",
    proofPurpose: "assertionMethod",
    proofValue:
      "jRRAwxQEb08+mRzDt1+VZPtiN5FyjYNnzNVEPk75o7KsOspyCc4v92cymIuhn7fFH/kbAV96FDS7fb4R7IHCdoXMCytB5wdz9Ow5d1bPP/UX8JUq/8QDcT/hvgKoAfNbnsPzTSyPDC0QgZdzU7N1ig==",
    verificationMethod: "did:web:blue-azure-vicuna.sandbox.nghaninn.com#keys-1",
  },
};
// export const PromissoryNoteSampleW3C: PromissoryNoteSchemaW3C = {
//   "@context": [
//     "https://www.w3.org/2018/credentials/v1",
//     "https://w3id.org/security/bbs/v1",
//     "https://trustvc.io/context/transferable-records-context.json",
//     "https://trustvc.io/context/render-method-context.json",
//     "https://trustvc.io/context/promissory-note.json",
//   ],
//   credentialStatus: {
//     type: "TransferableRecords",
//     tokenNetwork: {
//       chain: "MATIC",
//       chainId: 80002,
//     },
//     tokenRegistry: "<YOUR_TOKEN_REGISTRY>",
//     tokenId: "0a1e90f6a410efba6e431fbdf48cf7a6e2df495ef150348fa723d4b35668aada",
//   },
//   credentialSubject: {
//     logo: logo,
//     pNoteId: "a3c2d64e-7b91-4c03-8b6d-9df3456fc2a9",
//     commitmentDate: "2025-04-10T00:00:00.000Z",
//     dueDate: "2025-05-10T00:00:00.000Z",
//     currency: "EUR",
//     amount: "78945.23",
//     drawerCompanyName: "Quantum Export Holdings Ltd.",
//     drawerCompanyNo: "549300XDPHYG67J0FZ17",
//     drawerJurisdiction: "Germany",
//     drawerEmail: "claudia.hoffman@quantum-export.de",
//     drawerWalletAddress: "0x12A4BeF891c8b7d213D7Cd9E4174fC2F391Bd89A",
//     drawerPlaceOfIssue: "Berlin",
//     draweeCompanyName: "NovaTech Industries Pvt. Ltd.",
//     draweeCompanyNo: "335800AXCFTR2910LJ01",
//     draweeJurisdiction: "India",
//     draweeEmail: "ravi.menon@novatech.co.in",
//     draweeWalletAddress: "0x9eE4C5b6F5b92b4fE8E7F3Ac13Bb96fD52DBe442",
//     signerName: "Claudia Hoffman",
//     signerPosition: "Chief Financial Officer",
//     signerEmail: "claudia.hoffman@quantum-export.de",
//     signerTimeStamp: "2025-04-10T09:42:17.500Z",
//     type: ["PromissoryNote"],
//   },
//   renderMethod: [
//     {
//       id: "<YOUR_HOSTED_RENDERER_URL>",
//       type: "EMBEDDED_RENDERER",
//       templateName: "PROMISSORY_NOTE",
//     },
//   ],
//   expirationDate: "2029-12-03T12:19:52Z",
//   issuer: "did:web:trustvc.github.io:did:1",
//   type: ["VerifiableCredential"],
//   issuanceDate: "2024-04-01T12:19:52Z",
//   id: "urn:bnid:_:019665c7-c6f6-7ddf-b1ec-91535528a28e",
//   proof: {
//     type: "BbsBlsSignature2020",
//     created: "2025-04-24T03:11:53Z",
//     proofPurpose: "assertionMethod",
//     proofValue:
//       "o7vdIEdaF32iO5nlTfFs0+G6DnQ61MF2fVa2cL0x0Ia9hcqhkNIUUgIZVsmUCfLxUz81HsqZ8RsguauCiuRvA0NSHafYsIPvqmdxgTNPfPAY9qLUDFmoeR792NH8yLQEoTfJxqbnxZVlYYc9ScbR8A==",
//     verificationMethod: "did:web:trustvc.github.io:did:1#keys-1",
//   },
// };
