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
    billFromName: "DEF Company",
    billFromStreetAddress: "Level 2, Industry Offices",
    billFromCity: "Singapore",
    billFromPostalCode: "612345",
    billFromPhoneNumber: "61204028",
    billToName: "ABC Company",
    billToEmail: "abcTestCompany@abc.com",
    billToCompanyName: "ABC Company",
    billToCompanyStreetAddress: "Level 1, Industry Office",
    billToCompanyCity: "Singapore",
    billToCompanyPostalCode: "123456",
    billToCompanyPhoneNumber: "2973462976",
    invoiceId: "1234567",
    invoiceName: "INVOICE",
    date: "2025-05-30",
    customerId: "564",
    terms: "Due Upon Receipt",
    subtotal: "625",
    tax: "0",
    taxTotal: "0",
    total: "625",
  },
  type: ["VerifiableCredential"],
  qrCode: {
    type: "TrustVCQRCode",
    uri: "https://actions.tradetrust.io?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Ftradetrust-functions.netlify.app%2F.netlify%2Ffunctions%2Fstorage%2F3c2b3992-e88e-4a4d-a8ce-d28d8a433693%22%2C%22key%22%3A%22db4a9cca8c22089c97292bba6edd0d24a9c65e37ea46430d656c6d7d5a35ed72%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fv5-beta--v5-dev-tradetrust-website.netlify.app%2F%22%2C%22chainId%22%3A%2220180427%22%7D%7D",
  },
  issuer: "did:web:blue-azure-vicuna.sandbox.nghaninn.com",
  issuanceDate: "2025-05-30T12:38:58.285Z",
  id: "urn:bnid:_:01972133-e3ee-7002-bf95-d9148eaf67e8",
  proof: {
    type: "BbsBlsSignature2020",
    created: "2025-05-30T12:38:58Z",
    proofPurpose: "assertionMethod",
    proofValue:
      "uZguhjd2BPPf7Vrcy31N8FcrklQkC9OqNWYYMbGiIcDXJ8Zdyr9s7S0vCP/G5XXfY9VAUIGIjdbwgj3VOERO7dX6GGMv2VSZklhqylLkMGMdFbp7uYsVnCqBwoAyTYAwidNeO4fSdWRZ58QbcwFBQQ==",
    verificationMethod: "did:web:blue-azure-vicuna.sandbox.nghaninn.com#keys-1",
  },
};
