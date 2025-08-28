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
    logo: logo, // remove to make document verifiable
    type: ["PromissoryNote"],
    drawerCompanyName: "Quantum Export Holdings Ltd.",
    drawerCompanyNo: "RISH25397595912ABH",
    drawerJurisdiction: "Germany",
    drawerEmail: "claudia.hoffman@quantum-export.de",
    drawerWalletAddress: "0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638",
    drawerPlaceOfIssue: "Berlin",
    draweeCompanyName: "NovaTech Industries Pvt. Ltd.",
    draweeCompanyNo: "335800AXCFTR2910LJ01",
    draweeJurisdiction: "India",
    draweeEmail: "ravi.menon@novatech.co.in",
    draweeWalletAddress: "0x9eE4C5b6F5b92b4fE8E7F3Ac13Bb96fD52DBe442",
    dueDate: "2025-05-30",
    currency: "EUR",
    amount: "197651.12",
    clause:
      "The liability of the members is limited and, in the case of a company limited by shares, the liability is limited to the amount unpaid on their shares.",
    signerName: "Claudia Hoffman",
    signerPosition: "Chief Financial Officer",
    signerEmail: "claudia.hoffman@quantum-export.de",
    signerTimeStamp: "2025-05-30",
    pNoteId: "a3c2d64e-7b91-4c03-8b6d-9df3456fc2b9",
    commitmentDate: "2025-05-30",
  },
  type: ["VerifiableCredential"],
  qrCode: {
    type: "TrustVCQRCode",
    uri: "https://actions.tradetrust.io?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Ftradetrust-functions.netlify.app%2F.netlify%2Ffunctions%2Fstorage%2F3c378f76-daeb-4ff4-bc99-24eb7d160265%22%2C%22key%22%3A%22c172ea818e10f83f0d172dca5a94512230ac7a9b5abdbe8b50762a30da6928a5%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fv5-beta--v5-dev-tradetrust-website.netlify.app%2F%22%2C%22chainId%22%3A%2220180427%22%7D%7D",
  },
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: { chain: "FREE", chainId: 20180427 },
    tokenRegistry: "0x355Aa93f3278086C957E92b21aE0Aa5A339911F0",
    tokenId: "41210c549968a8ec37a31279be3470b38b68848b692f6e5dda972488df4a8c78",
  },
  issuer: "did:web:blue-azure-vicuna.sandbox.nghaninn.com",
  issuanceDate: "2025-05-30T12:47:14.694Z",
  id: "urn:bnid:_:0197213b-7706-7002-bf95-e8aa1491d751",
  proof: {
    type: "BbsBlsSignature2020",
    created: "2025-05-30T12:47:14Z",
    proofPurpose: "assertionMethod",
    proofValue:
      "gWQVocU7Wmv1iMR2vmEsNrDDAJz8M5NuV3axNWh4uygDvAsGSyJgqj6Rqhm56SpMLegnAoOpNnHMa9GLjxNBerCBln4hydKsxk3hZQTdKOAw43rcAg0DcXqo5wMzdDjxL28NBGJY92wAru2l1jL8Gw==",
    verificationMethod: "did:web:blue-azure-vicuna.sandbox.nghaninn.com#keys-1",
  },
};

export const PromissoryNoteSampleW3C_V2: PromissoryNoteSchemaW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://w3id.org/security/data-integrity/v2",
    "https://trustvc.io/context/promissory-note.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/qrcode-context.json",
  ],
  renderMethod: [
    { type: "EMBEDDED_RENDERER", templateName: "PROMISSORY_NOTE", id: "https://generic-templates.tradetrust.io" },
  ],
  credentialSubject: {
    logo: logo, // remove to make document verifiable
    type: ["PromissoryNote"],
    drawerCompanyName: "Quantum Export Holdings Ltd.",
    drawerCompanyNo: "RISH25397595912ABH",
    drawerJurisdiction: "Germany",
    drawerEmail: "claudia.hoffman@quantum-export.de",
    drawerWalletAddress: "0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638",
    drawerPlaceOfIssue: "Berlin",
    draweeCompanyName: "NovaTech Industries Pvt. Ltd.",
    draweeCompanyNo: "335800AXCFTR2910LJ01",
    draweeJurisdiction: "India",
    draweeEmail: "ravi.menon@novatech.co.in",
    draweeWalletAddress: "0x9eE4C5b6F5b92b4fE8E7F3Ac13Bb96fD52DBe442",
    dueDate: "2025-05-30",
    currency: "EUR",
    amount: "197651.12",
    clause:
      "The liability of the members is limited and, in the case of a company limited by shares, the liability is limited to the amount unpaid on their shares.",
    signerName: "Claudia Hoffman",
    signerPosition: "Chief Financial Officer",
    signerEmail: "claudia.hoffman@quantum-export.de",
    signerTimeStamp: "2025-05-30",
    pNoteId: "a3c2d64e-7b91-4c03-8b6d-9df3456fc2b9",
    commitmentDate: "2025-05-30",
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
    tokenId: "a74d670323cf728368ea929ea0a303e50f86733357f9c64af9a58df8c6a2fb88",
  },
  issuer: "did:web:trustvc.github.io:did:1",
  validFrom: "2025-05-30T03:43:10.044Z",
  id: "urn:uuid:0198ec2b-d1e2-7ff4-a151-bc3676eb2f86",
  proof: {
    type: "DataIntegrityProof",
    created: "2025-08-27T15:35:51Z",
    verificationMethod: "did:web:trustvc.github.io:did:1#multikey-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue:
      "u2V0BhVhAlflv5fIkozZnOQc5vp4f-zDUk4hQDW_reWAyR5_cpZWBXKli82o2nFlX9UpeRtinju-yBXYhd0P-Jv6Jj-uuZFgjgCQCHS9TKm0jTB_-QA4zbUCwHt2eEyDgXhTk32qY4ss-KxmYJVhA0Qz3nQOjA5FqrhaV2DTSFAEJYSGr_YZlG2MfDS7o7PqaEM3ZvcVctSXeGyBrgzu9G0eS0AZVaw1bwysHo_1nx1hAZyuCE0oli83fBltGIkRFWX_9fzKAZ2_5idRn2IqTTqgrjcxMv9zVI5Wz8gS9DdkmCffIrACSfAT7p-bV_wFe3lhAlXuLch0nr7sSBpwu_XuHXeP1gnc17RUqSqpjZPvilwx2Pg2gg5GcmeasZM80NxIa-TpglDVBg58duyTIEGNNj1hAztUColLEtC4t-POntaV819OjXq7D8F_PfjPcc_nATls2eNHfNCrzqGgbNC0kkZAYX4DJdEwhyb-2Okllkj0NLVhAETLYMbvfkaw44jXFP5-rCp8klP0tY4Uf52VuKri13_5XjbUqHJXsLJ08IIHcRlv18ofesRsAwnTm-tIWeqAK7lhAXSfJkz0pUZe7VtTMZE87R-R6XAxf8V9BS44cFaWFGuKnjhCZ_RN7PtTBkLfcz45BvEB1mWEcNaDgsUrMEDi5jlhAXiWx6v8fLQO-YbHByA5-OoWLVphnyHWAURFbEfK3thdFKiqyBl1BO-jX6yWLmii8XyKERp4VM2-pJFFx6WfvY1hA7s5hpHlz5OyH0Nt7D2u9X4si9MLwAeVnkl7w7PcoGDGJeBX7AmU1xXwjchAb5_i-a5WsftD8GzFbJMNSjqu2clhARH4OZHZtQoUeAxsZoHJAk2bfwg-qAJhyjzJQkgWGPYqbkYLqLg72zdNIaob71w2tnKi071HP9lXRwQi6As1AyFhAFq0l7AIhKz6yu-ThfSJyrPtiNz6BbclJihdwY96kYXBm_eh9n-rr3dFGbawsRQ--S0mUPH-hWBnxMO7OqzGG1FhAfsv_ImIRw1q6KGusJcikzlim0RFImRLK7lhIYC8etTON9xnRlnw3n2U4BWp75Sx8FIbXivW8uviDv_kdZZD7kVhATaBanfPf_KdCzEOrAsdZcvoGgwVAGGBBVm8xBt3B2KLm_D7M_DJEPRwArYB61omfqgLLWDKfHfFRNUqBkJNKLlhAOB47UGqNPNgoFVt4W7m0dNncm5z7COj5XYQ21CXOyZGJoy-nFyT2GBZzHoxEEAqtBI8ZfDxSoXv5RBqLxBJQhFhAeG46Nj2Upd4pYVAp4TfwUMxUQwnzuqedqm1q-yMu19doC4IvsPaqlRlebQjIWAl8ZYXmsOUQuIF0peiojZNygVhAOqRegf6uelrIYnWsi5HAYmp4ryoEzyTCkKmoTL8TZBcwUCQIJrVoiQV31q6_raRvGrwGWaJ25qnWrs6qqPiJM1hABzzH2XgBYLExJTiKpu3BIv6bETsVrMyv0EASXcQHQh8BdgtCA9lLabfCL5lTmaWtRZJoPJB_V7zqXpfr9p73xVhA0HkXgAT76pACSBg3NVmrPVBBpSKGkbBOGXCjN295woViufKQ9_WZfKyTGohyymay_4L398Xk1rtnXs_g3w1uulhA1ii7JoYueBmDp6c1c7EKp0ila-e8Mw99infTpeqbSKHn23srRU5IREJ_65HTgGBfJ7CO1PO705NYS5J4HHQryVhAcbr6w--pDkfIYcWWGECS4l7MM0pqfQA-tq9DLfjoWfP5JnoG7VkvbLX0Mn6zCVRIiGoEN6PzOghQmoPPBHQcKFhAMAZEHJzOz_8HWqT4O43lkdAPUUq6k1zasn38SPNT28tkJy9MT1Ha6Jw34ik3xiUBIi5B5J_pp-ai8qoV6v40u1hAESrXoE7ikNaC6YkeyZcPFXvOWs-w6uoZ6sf-RJnZ1qoB2zROP4rWe7jE2i2QkZyNskkHmrObGZdCwT2wRkHj9VhAM9-gKWCneVZ2baONmoRBdpV8bbpYAXB4IHczPSz6dSvoOYlkEtnK1jV8muk_kxKL5hc1z6vHAUPq6h5mc8ZFQ1hASm6coZEKu0T_XEfBrIEzZnbWSAdqXo8PFSdUcXLJiVi3DNFe41Vr_AuRPzfbxtaPmV3Z4xHMIBJPnKIQWWw9fVhAdXWcUjqv1ZXa57jIwcySfKrpS4g3TWbcne2j-6-SQv4qc2lxx84dpzMgNHc1dqOI_9-QLLToeft70H6Zj4jPCFhAbrPYriyBoVG4_CNBiZeT9v_W9oBmu46F7Sgd0qsggK9lvxYoTJUWnyrlF2l8jNKbTQutCZSm-EFcAHn_eBcCTFhAooks7KV9qKo0yVhFnXcU_ETGIol-1MsZDT3wcAMi3enoRRu6Xqpx-ceNSJmLmz_MhJ3E9N8VuJThTiNrXI1k8lhAWTF4nPhCzm8MW58DPs907hGBKwDoalBDEirAE1MwGt1mJP0_QhWzO-AIytJv8ehQ97LczgtqMy7644J1V7l1UFhAFlrAB5QqhbNsHsfWE_dfwbK-MAsEnpOZGnccLojMGrhrBZQ6S1sPtJ155Z8o3pT20I4qYYzSQWKgoF-VbFubKFhAbEX_K5Q1I1jfjxfoM6mmkU0EAV0X_qGDIs9YER4W8xKB7bk-PAvax6DUyor8oefSNjFgsRyerWb0-FHG7VJgj1hAuxAcDdE5j82V24S6PTtMUggY7BOfau7FAYbCP5Usx8m1Q1SLdQ_qvjbO0Rq_0nUDk8_2O1lS2rkGs7982UC2hFhA9wBOpk7rwITDlybmaGyKJufy3ACNYj3gzkZmsgqMITadbEAIKhAFewpb1DJ4FK4tXJzKi_uCukLiexrf02RP-1hAmCvlTpc8hX75LCF-cq373LRVrfAfB0GYca9ezor9UFstZ-7qD3FlKqNrWDeTDRvnyJ65wbzccISLSDrGAOExVlhA8hwcLmaEqOHcXW16cPa1DX5VaGlTjJpOiLpndLJswzBCZvMV3hV5q7Fa9QZ4tmRCpIp7vHnoqkdl6b_aJ_j_BlhA_PDGcL8PlZnBFCdacSxC4vAUR7jMiORP5oDvgfqp0Wl305eTvMS0AF3vTqP3vODC8Yfgj4oGHVxz9zOhuJA9DVhATnR3epf6cl_YME3WnSAlaTVh8yONY4aIkAiz0srRagpg9-MwwvsTkGrO95Bx-xOeSY77s8Sl_rtQvPtvu7M021hAuBsfR30Yal_Pev7tXelkg8NPC3OpvzldhRY_Ak8BGC4cyfvNZobw22h6jlHtJkrfejY6AzxI6XbXfYQf3olEVFhA9Ccu3Rs98NtHX0NpEBvQbNR0b5KxfauwY0hSdfccS7sMDpZ1fKkDAVIzkHCRlwZbZ7qWZXtdyEsyIDKcIogBqqQAWCBfWUyCM_UNUHI4NkHPaso3GNgDekAQ_P_y6I-S03UIpwFYINkF0nxkZ85k9rY_G6Hp-RSw-4ZBzYArQRb-TMlHgvcMAlggylwCkZvj7yKUjCWDKkP0UyYkIZoYtKYPQZwu48z1Bn8DWCBjNP-jrd6Vv1GQH-e_LXAPUkS-9NXEu7LgxniZ3hd8D4MCBgg",
  },
};
