export const WarehouseReceiptSampleW3C = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://trustvc.io/context/warehouse-receipt.json",
    "https://trustvc.io/context/render-method-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/qrcode-context.json",
    "https://w3id.org/security/bbs/v1",
  ],
  renderMethod: [
    { type: "EMBEDDED_RENDERER", templateName: "WAREHOUSE_RECEIPT", id: "https://generic-templates.tradetrust.io" },
  ],
  credentialSubject: {
    type: ["WarehouseReceipt"],
    warehouseReceipt: "12345",
    totalNetWeight: "50",
    warehouseAddress: "Abc street",
    markings: "fragile",
    storageAndServicesTerms: "test terms",
    spl: "abcde",
  },
  type: ["VerifiableCredential"],
  qrCode: {
    type: "TrustVCQRCode",
    uri: "https://actions.tradetrust.io?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Ftradetrust-functions.netlify.app%2F.netlify%2Ffunctions%2Fstorage%2F98db48ba-ef8f-4f1b-83ab-02a2426eb7a5%22%2C%22key%22%3A%225856b751328b56c0e5b7be6e0f12ee6285fbcf0aa436af77dfa763ec68df904c%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fv5-beta--v5-dev-tradetrust-website.netlify.app%2F%22%2C%22chainId%22%3A%2220180427%22%7D%7D",
  },
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: { chain: "FREE", chainId: 20180427 },
    tokenRegistry: "0x355Aa93f3278086C957E92b21aE0Aa5A339911F0",
    tokenId: "a94ed7bcedf061861bf0cbbc7e1320a134f2f1bef969fbdb1c2c0f61abedfe0e",
  },
  issuer: "did:web:blue-azure-vicuna.sandbox.nghaninn.com",
  issuanceDate: "2025-05-30T06:58:53.925Z",
  id: "urn:bnid:_:01971ffc-8b65-799e-9cc9-174525756be8",
  proof: {
    type: "BbsBlsSignature2020",
    created: "2025-05-30T06:58:53Z",
    proofPurpose: "assertionMethod",
    proofValue:
      "i1/nEde5nzf+EI3qEOPIrs/Mt4g4q+wT7x7+5t4sPmk/bwuPEzybbffK2WzH5uTnZsQS+5/w0ZGD2j1ZzRRVsaMY+UOcD5GhwODYZv1cLJFPAmzncfEQUKVcbg2GKdlJFXcL3bUB0PxQm8XnJKX4+g==",
    verificationMethod: "did:web:blue-azure-vicuna.sandbox.nghaninn.com#keys-1",
  },
};
