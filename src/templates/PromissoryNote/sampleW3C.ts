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
    pNoteId: "16e2adf7-78da-44c4-a194-81b9f3f23d34",
    commitmentDate: "2025-03-14T00:00:00.000Z",
    drawerCompanyName: "India Dry Fruits Members Association",
    drawerCompanyNo: "549300BACZP326UOBH06",
    drawerJurisdiction: "India",
    drawerEmail: "raj@abc.xyz",
    drawerWalletAddress: "0x2EE7E435668c04D882e73f7C75AB44A8A4cbb9Bd",
    drawerPlaceOfIssue: "India",
    draweeCompanyName: "ABC LIMITED",
    draweeCompanyNo: "3358004YL9JGBNP4KF72",
    draweeJurisdiction: "India",
    draweeEmail: "asif@abc.xyz",
    draweeWalletAddress: "0xcvzbxcdsafgrthejnsbdfgdhsjwkityfhgbvncnm",
    dueDate: "2025-03-15T00:00:00.000Z",
    currency: "USD",
    amount: "22131",
    signerName: "Raj Kishor P",
    signerPosition: "CEO",
    signerEmail: "raj@abc.xyz",
    signerTimeStamp: "2025-03-14T08:20:36.079Z",
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
