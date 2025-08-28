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

export const BillOfLadingCarrierW3C_V2 = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://w3id.org/security/data-integrity/v2",
    "https://trustvc.io/context/bill-of-lading-carrier.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/qrcode-context.json",
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
    uri: "https://ref.tradetrust.io",
  },
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "FREE",
      chainId: "101010",
    },
    tokenRegistry: "0x7202363bBDb126036F7C3243Ebac310d9d145040",
    tokenId: "237736fd96082f5ef0e97185a978b91c1595ae04edd126e3a331652b9916928f",
  },
  issuer: "did:web:trustvc.github.io:did:1",
  validFrom: "2025-05-30T03:43:10.044Z",
  id: "urn:uuid:0198eaef-f0a2-7cc4-8c07-437b5ef4577f",
  proof: {
    type: "DataIntegrityProof",
    created: "2025-08-27T09:50:50Z",
    verificationMethod: "did:web:trustvc.github.io:did:1#multikey-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue:
      "u2V0BhVhAHBymkp25YnvAJGU7_8iYnSqqt6TT3xxwdmFWUKAsjeZ69baFaHQ74TARCrGmGuJndXRYkRvxMzzb8C0NoDDP7VgjgCQCTg6_hnu5cBOtp1k_n-jnlpov6pCNr7A1-R3joI3btX-SWECfSK-Fv8YAmif2Ot3X8E1a_EsoBUJD8F9RoABuQKLl3gBE5wgxMwEd4Z-QV-Ab3Dwh1GOrVEDtf1F8CZpgxquYWEDdsdeDA4W2TlXWXaMwtWMZV8adOjyQhdhCwEfFMnkLuL5m-3VTBFRujhMtwsWBLNqyT9RRM-39uXLRXyhkExa_WECghTpFLWvrp_XTsFf54B_4I9fgCU2lMLKIFfXtF0hfSahizC-oqejFCFuDF9H4_8BBvSMcmxIabhbtCHkmxnt7WECHK165R-9QrYk99h24gdvWzrT3a0n9MV8EBWvswog6G6LYh-gv_dHlqgbbPznxbJdrx4N7rm8zd6ioQ49IT2PjWECjSP-VL3PUISBs79qLsCxNseZWPbS8GwapqKzgPNaYLGOBChVayfPmYqWi5k96nsxdxVwydwAQCHefjUqLQ4yBWEBYWhnoyxCuhWYF07Vu0Au44GA_3XPGzgVzWCBPmzqf7oDs7ZQV5KlxYBVwVNtWjjbtasmqUVe2OFNitSBG3zecWEAbGFnTXO6JGaB71gWuVYzGshkxrGWWX8mR3OPCn8bqNDpMJ_bsuEcpKThYs0sfEu8pO27j16IikIwkffXip8KfWEDnhYkorHECbKzOSLZzYc6RvRLQvyOJs8aUvTLud-YWOEHzQdhWFzTM6LlWsTU5i_2e5Qhyt3ivryqlQ0r8tSCfWEAaQjQilx4iTNBIU7M0295VorsCpGYjAw2W_SSVAT7Px4zaNwVDlXljz7vxOOHTuE246sBMxrV4kFOg_ZV-EKpoWEA5F5MeIkk_nwoznL0XB6CudrM1mIawftP7SXQNcCM_H_SEoZ_1VsNX4xcvjOPNmAj3qfTFaV8qEQ9J7oNE-ucQWEBMS0nqj7sInciJenJjouJzKdg8T6tWThny-moyTtbJtokfZHMm6k9JzMiuCbLU5u09fKKlLPlPTe8evfllKHYwWEAjx69w8k3OwjMDZA3Il9E35XFxAWQEWubteBCEYLo7EGwmI3hMreX8qXPmyzPHqpnKgaRH-7rWXIIwfMnVeZtgWEDb84JTWe8rwZW9OvG0m-xx2MKAivyT3fdyhClyP7cYra9g8AwW827umULCkRV3VjYop5TUbQSNF3j5O2-EHfp5WEBcvRhPRBS3ycc_30ymd-x7hepz2RE5ykapV3az0-Q3Fo1NsRmbk66q3RFuluJevrVoOn3fJyEGAFfB78geXXxrWECIHwfmoo2-9mdmH24t1qzyvU8X3Dlbh-ESBpQsw2lZ0gv0eMDkl2NGmZgLnyITeDppcWC29JAI0hWsMwt_RnjcWED2ldv_ifoT-dcNeAfB1xQcgapa75byb2NcVYlon1qXqhGXuP2cFUNRzHw9pakWLurKjzSZqB4Wu8pdiosyuXL9WEBTNqCY6ywaX1-Hu176qaFex9ggmyDQFLyo09iai9qdYC_qGiEGdNFgGJ31xixXoA41JjIatjWJKGICE_Y1-IMuWEArCgR_OwOqrG2oYXM9zBXh4Vnyk8wMbijKHTeFXplW7wF-mJJYWAR9cd4Gp0oN6YEHkFeSdn5buIONRqYVxwDxpABYIIw4WwrrV0tWZi69SgWdBcUa4mYcHHjt1v0qKqaGhg2gAVgg7KB7jevZ7LYQ2kURRpZV0W83RMlx2N4DlB-gdLK5mRICWCAsdfPPGMtaYyBPDeErsCdmlltwHtn7nljYLRkbfy9iwANYINYRtAQ4m48-t_B2baxH5tB24xWeWowmIlD9XMyxf6HBgwIGCA",
  },
};
