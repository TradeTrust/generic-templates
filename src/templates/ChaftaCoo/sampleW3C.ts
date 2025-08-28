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

export const ChaftaCooSampleW3C_V2 = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://w3id.org/security/data-integrity/v2",
    "https://trustvc.io/context/coo.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://trustvc.io/context/qrcode-context.json",
  ],
  renderMethod: [
    { type: "EMBEDDED_RENDERER", templateName: "CHAFTA_COO", id: "https://generic-templates.tradetrust.io" },
  ],
  credentialSubject: { type: ["Coo"], supplyChainConsignmentId: "12345" },
  type: ["VerifiableCredential"],
  qrCode: {
    type: "TrustVCQRCode",
    uri: "https://ref.tradetrust.io",
  },
  issuer: "did:web:trustvc.github.io:did:1",
  validFrom: "2025-05-30T03:43:10.044Z",
  id: "urn:uuid:0198ec26-4e89-777c-a8cb-2174caf29490",
  proof: {
    type: "DataIntegrityProof",
    created: "2025-08-27T15:29:50Z",
    verificationMethod: "did:web:trustvc.github.io:did:1#multikey-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue:
      "u2V0BhVhAHgpxNftumvLgXwc2KwbNhYpFDNWjGyymmMtKtxaNh8XQx71xs0sPje1znNZqlPOf1O5sJ3GvXfxkPPbqL03u7VgjgCQCfJT2ylGfstQqQahu7awo9lYpWBZGPFAhvipbgQ_JS0WJWEABvjwfpBPN35_L2Z5-SumpjsdcSyc_lcEDHs0LX3To35Pru395-5uSkekukKtD99fFRY1IBtdNwQZmcMH97Jw4WECcLYMrM6W8ohHuh94ZaVvTEjhrZ_f0FPBBkq8QEYu_mXU_SXWhzwFvxD7H6BaDsgFConvcLPCSyMetPZTOIbZ4WEA8VJbCt_qag8KShaLxmtMrmNT1UYxgsRNF6qMzpRkuI3aszxvzC0L38SwYLXnizXdKnQuSy1SdBB_oW2tkn_qgWEBgRz7QEHtziGOJfOPoCMYMQwlAj3RlROeeUB1rSVqrN4OXpAcBgwaH3SWsQ8ZI6oPU7YVrDQObNrucEdqmEKbBWEDuWAcykgfGh4XsAmU4l50fQ7uAHP6A4yQa4udomfR53k9_GxWrRWaKMK87ePNeW3nU8nYdkYlbBRw3pJ27OP0UWECN2SZQa-AaxH0pLDMb0ctC1eztdZJi64-m7IUswjzFeP2E3T0L_0ndI0zo4PQKphWY-GtYm4MsXLETSxbrWT8WWECBeKyhGzLnTT3fvwN95cKEFjT75A6-QLne7PQytwB8BcZjAlUangAc07yaqj3P1SMTbV5hxxz29KDGdFSm4YrVWEDzk99izDhi5ow8azLp1SDb88Whb1AsueNwnRHiuZ6hIGS6hkTdimX_6k-rxvmwrhpX7I5RF31GnZw0MyWlmaryWEDP_nBMW7CLPe440vN_sz43B6AhfL20ZM_YkvnCSM0NoETMVutXvBTRwkC0NY_42fWTs5U5ALL0c1Pg2evDGAotogBYIFMbckQh8QRyPXO_e_FiHUxdlcqj_pJs96y6MvC0duu9AVggpRqWxMIXafkAew77DU3xOjRn84_0jY1iR5OjUGQYKqeDAgUH",
  },
};
