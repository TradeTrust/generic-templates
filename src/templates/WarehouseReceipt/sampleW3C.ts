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

export const WarehouseReceiptSampleW3C_V2 = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://w3id.org/security/data-integrity/v2",
    "https://trustvc.io/context/warehouse-receipt.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/qrcode-context.json",
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
    uri: "https://ref.tradetrust.io",
  },
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "FREE",
      chainId: "101010",
    },
    tokenRegistry: "0x7202363bBDb126036F7C3243Ebac310d9d145040",
    tokenId: "326eb8879aa1e3966f332514adfafbfc3a379ecee1304d098fd4321d3432cdc6",
  },
  issuer: "did:web:trustvc.github.io:did:1",
  validFrom: "2025-05-30T03:43:10.044Z",
  id: "urn:uuid:0198ec2e-ecfd-7778-8936-8c460957acdb",
  proof: {
    type: "DataIntegrityProof",
    created: "2025-08-27T15:39:15Z",
    verificationMethod: "did:web:trustvc.github.io:did:1#multikey-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue:
      "u2V0BhVhAI2-Hj7T6URihg0vOAhoD57Jmu7D3ngrPFet4-2NogqOBJabmsxLwSF2d7mhvZhPifdQi1Vfif0QL_IPh_G85X1gjgCQDYvf1GYJnAaP51NYJrpl1fufT50sF8XJGwXDqL7wkU5uVWECvPhjlq33eoCIoCpXMsPJLO0OKl1GGYFFsjyPyEuRaqTuAutA1Il87MRDBo2yzhvUGmMV8qg_s1EAIGgqYCmj9WEASQtvGzCRIrz7e2Htrr-TSfIm95Bt1FNrNn2jsI3j5Q365wL1Ps5hIpsmJevnCu3O3WMcmRnn-dGylWCNKJIfyWECPpk3cdayHU5TFt7ZaiJleY893d8iz5iK-_CZe1pgfEokz5EHbgRZyI5kIfgRAoEsYThgHXJjiovmeTJFOWefBWEA_mdxmB3JJ0Hv49_B45EjlddU5WmxrsCV4JBfsVrptu5HlG_wmrAFALjlF7sXllzo98cuj33DSMp_d1SZcxyD7WEBigowhhFfpe8OVAx2PMPKh7e4eZH686t06yec6nTxhm72uk_Mj2VN6IqD3_eU-GwUqWsmAjsALTJkw-eXRKubjWEBbY5OblwEOWX8PIt0Vjxe0-JHpk5nKhPcWHBBGnkd58BsGOuB0wl_LVZM9R2csrYo2WIHIZpq_kMKKWULLJk0IWEAJAjtpM3GVHNwk6fznr3TxCdZL8dBvo3UgOYzeDQ9AZLrQm8bDch8bOQRW85uGRTufXWCWXOcOPPyp0mhfSrJ2WEB4T6C0F0fLR4okx0MQNf0kc82QFfTYS7flh8nvbVUT5levSOhDh_ZsrYAOJn7jzgpINgz_KZO3ndkxdJ1wMQpWWECfEfMdPLsVgi7acodxMMAmQoRX18gjjcpe3FxO5nEk9Lx5RxyiJdDwPzcfreiLqzcYLfqQXDJrUCRWR5RfpvVKWEAZ1wlJUrg3Z1qvuxgxPhy7flliPUf7CpzDAXMNrS-bhyrROAo96HdJyQFcVpdkRGZ0JmF-VzUDFj3Vnpc21f0uWEBtul18j1lcLzmD-ZFzRTsKMXdaMwArNPGUEStCmT3NZNPGdNBmYL0sDRf0dceaz-5vv44JQisBRBnxPUVh7SgsWEAGB-GPTu9wL8RlBsCbX6FYHQQZlUz3bMOpiqifZ_tDg1avU1_UMzfASTRi-zf_F7R82mwgI6MOCcKyEDC_P9g4WECbJIGOSUiR3liP_QVcy87t3dCo6qI1SUuuV9yJK5mCHoJJThygW6IAp99Cv-v28Ov3DAwBPvdDA-vA-JYeS4tAWEC9m6CzSSK8NgVGSGvBLv9HCNYXqk5H076qK7HMxl9EgHlOZ1_hcboCtd7UjWJrXG-U30-8GVHda99wE0Z4h8NoWEC42Dccut3q_3t4QQxRHh_lETHoCUPzk8lfgyMH-PreBUH1qnPNWnvTXTYSVhn8d6aTUYM2nUb5AokTeVi9xOygWEA07jzT9s29VgcfsfKRiLSzB75kjRA9fCd-eLN7vpxp_at7D3fH2rAOX_2uob-yUkuv5VNbGqJsiZFQSCP-Dh1kWEDGSr6Xvfr7VexJNV4_GY9kqbEh-EX0NfaTYRbmpo-t31b6-X1lqChkYNzdkLbAW3o9fLvQA67HqMANCW67cNp0WEDF1YL0-H3wus8m-voYGRqiFdxX8lz-7QeLvjfc5GqM1yPN_1HmmYyVePATgVWKoxSG2re5sklC4mLA6mt0If2bWEAD5C5-IKdCoxstMAROmhDkRKA7G7VjW63n8BbRz3OTbRoQG729MRf5P4UCiLwaALIRgDQQPPHPObuT00wGGkwbWEAjjhUVIAQJoHpI7bArv0DkYA077s3JQAoo7-X5LueYMw_wWDEcpJrrs2JLbJStoV7IERTjM5qCdBRL6hlsj7pIWEBkk9DY1GNd3BAZwGUe-mDYjkYkf3BQeNJJzNGqFPKu5zrwS_qxTDLDzWX_P74dyYKGHjuXA5CLc1fvRuq3bK0npABYIEk3_FB8jlfi5mR147TtBLaZPt0LcOnx4p-cF1ahenYEAVgg0OYQMQ2UAsz_OjPSInb990wOnp4c9sOS5b1dqJR_LecCWCC9jmOVW4b9bFkbu9mkDfRiuiUbZtQRW67ao95zzahJowNYIOe7wxYj0JhfWQhnbhwL2la8H9jp-hGZlxB_r9fh2_frgwIGCA",
  },
};
