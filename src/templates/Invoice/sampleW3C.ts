export const InvoiceSampleW3C = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://trustvc.io/context/invoice.json",
    "https://trustvc.io/context/render-method-context.json",
    "https://trustvc.io/context/qrcode-context.json",
    "https://w3id.org/security/bbs/v1",
  ],
  renderMethod: [{ type: "EMBEDDED_RENDERER", templateName: "INVOICE", id: "https://generic-templates.tradetrust.io" }],
  credentialSubject: {
    type: ["Invoice"],
    billFromName: "the great shipping co",
    billFromStreetAddress: "123 b street",
    billFromCity: "mexico",
    invoiceId: "1234567",
    invoiceName: "test name",
    date: "2025-05-30",
    customerId: "abcd",
  },
  type: ["VerifiableCredential"],
  qrCode: {
    type: "TrustVCQRCode",
    uri: "https://actions.tradetrust.io?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Ftradetrust-functions.netlify.app%2F.netlify%2Ffunctions%2Fstorage%2Fa06d07b8-d932-4f41-8922-5317129ea622%22%2C%22key%22%3A%22048e1b919ae3c97d10d9a5eb77f742c3e5253a0a415d5c2b0b9c19dc35d03689%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fv5-beta--v5-dev-tradetrust-website.netlify.app%2F%22%2C%22chainId%22%3A%2220180427%22%7D%7D",
  },
  issuer: "did:web:blue-azure-vicuna.sandbox.nghaninn.com",
  issuanceDate: "2025-05-30T07:01:48.143Z",
  id: "urn:bnid:_:01971fff-33ef-799e-9cc9-347dd1a5974c",
  proof: {
    type: "BbsBlsSignature2020",
    created: "2025-05-30T07:01:48Z",
    proofPurpose: "assertionMethod",
    proofValue:
      "sOjIeRXQtLVw//dmBMZ9pYbsDd3d5CpKG3PkZXMuXqtq2EANJjy+jbMmWm/nU0mibZOJSaKrItjGZLugVUV06yu//Oe8VNBtCpX4E0W+TXcyaAnVof9CYteJ/UB6PdTm/Z1gimL1gMEPyJ4nDKz/+g==",
    verificationMethod: "did:web:blue-azure-vicuna.sandbox.nghaninn.com#keys-1",
  },
};
