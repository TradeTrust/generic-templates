export const BillOfLadingCarrierW3C = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://trustvc.io/context/bill-of-lading-carrier.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/qrcode-context.json",
    "https://w3id.org/security/bbs/v1",
  ],
  renderMethod: [
    {
      type: "EMBEDDED_RENDERER",
      templateName: "BILL_OF_LADING_CARRIER",
      id: "https://generic-templates.tradetrust.io",
    },
  ],
  credentialSubject: {
    type: ["BillOfLadingCarrier"],
    shipperName: "The Great Shipping Co.",
    blNumber: "12345",
    scac: "abcde",
  },
  type: ["VerifiableCredential"],
  qrCode: {
    type: "TrustVCQRCode",
    uri: "https://actions.tradetrust.io?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Ftradetrust-functions.netlify.app%2F.netlify%2Ffunctions%2Fstorage%2Fc83ca3f4-e75e-4eed-bff5-d4c732668387%22%2C%22key%22%3A%223fd79df456336fff42c86873a600846dc598a23f66870ee5f70c6271ca5c1f06%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fv5-beta--v5-dev-tradetrust-website.netlify.app%2F%22%2C%22chainId%22%3A%2220180427%22%7D%7D",
  },
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: { chain: "FREE", chainId: 20180427 },
    tokenRegistry: "0x355Aa93f3278086C957E92b21aE0Aa5A339911F0",
    tokenId: "28ce1ee12e091138f9d817437f706756a10f3e3af54bc94ac82ecaab77ec5c9b",
  },
  issuer: "did:web:blue-azure-vicuna.sandbox.nghaninn.com",
  issuanceDate: "2025-05-30T03:43:10.044Z",
  id: "urn:bnid:_:01971f49-58dd-7773-938d-73087614f2c0",
  proof: {
    type: "BbsBlsSignature2020",
    created: "2025-05-30T03:43:10Z",
    proofPurpose: "assertionMethod",
    proofValue:
      "h5ZmTEPnylDodxLy/BZU/SlnpM4Qd8BwMxqcGYnQoI/JKByvwHoq+vUMHVdfXJtqEfQ/dkgqmoy0pTfeTPV/OvQfnncLRUcnmeWs1t28k4VWxREDUSxVtZD7yaVd/px5QgNF6C3U0IQd+Uk0Eo6lNg==",
    verificationMethod: "did:web:blue-azure-vicuna.sandbox.nghaninn.com#keys-1",
  },
};
