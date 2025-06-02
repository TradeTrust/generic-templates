export const ChaftaCooSampleW3C = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://trustvc.io/context/coo.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context.json",
    "https://trustvc.io/context/qrcode-context.json",
    "https://w3id.org/security/bbs/v1",
  ],
  renderMethod: [
    { type: "EMBEDDED_RENDERER", templateName: "CHAFTA_COO", id: "https://generic-templates.tradetrust.io" },
  ],
  credentialSubject: { type: ["Coo"], supplyChainConsignmentId: "12345" },
  type: ["VerifiableCredential"],
  qrCode: {
    type: "TrustVCQRCode",
    uri: "https://actions.tradetrust.io?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Ftradetrust-functions.netlify.app%2F.netlify%2Ffunctions%2Fstorage%2F7a0c1298-0510-40f5-820f-f6b7456182b2%22%2C%22key%22%3A%2299aadb034ad7bda8ba64cd8b8dd3b14beda34a0ed49ecee408a6a3999e7d9bec%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fv5-beta--v5-dev-tradetrust-website.netlify.app%2F%22%2C%22chainId%22%3A%2220180427%22%7D%7D",
  },
  issuer: "did:web:blue-azure-vicuna.sandbox.nghaninn.com",
  issuanceDate: "2025-05-30T07:00:25.348Z",
  id: "urn:bnid:_:01971ffd-f085-799e-9cc9-27329f3f1394",
  proof: {
    type: "BbsBlsSignature2020",
    created: "2025-05-30T07:00:25Z",
    proofPurpose: "assertionMethod",
    proofValue:
      "sbRxN1M6BBWZwoHS0sS9T1bXx3dUKABVEQckp9Ian3aoRrTNOtF642lyxFoqj38savfU/y627WcJV0ONqb8U0RukPkC7VOayZEniciLJC7EfsuJMXBhZDZWcqgdKFHx9SmnwYWtjVYqTlZK/odILsQ==",
    verificationMethod: "did:web:blue-azure-vicuna.sandbox.nghaninn.com#keys-1",
  },
};
