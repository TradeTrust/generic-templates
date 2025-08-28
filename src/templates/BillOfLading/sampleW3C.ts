import { BillOfLadingSchemaW3C } from "./types";

export const BillOfLadingSampleW3C: BillOfLadingSchemaW3C = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/bbs/v1",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/bill-of-lading.json",
  ],
  type: ["VerifiableCredential"],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "MATIC",
      chainId: "80002",
    },
    tokenRegistry: "0x3652efbc80ace560844afc932d2bf8b452a96c6d",
  },
  renderMethod: [
    {
      id: "http://localhost:3000",
      type: "EMBEDDED_RENDERER",
      templateName: "BILL_OF_LADING",
    },
  ],
  credentialSubject: {
    type: ["BillOfLading"],
    shipperAddressStreet: "",
    consigneeName: "",
    notifyPartyName: "",
    blNumber: "20250107",
    scac: "20250107",
  },
  issuanceDate: "2025-06-30T13:49:59.352Z",
  expirationDate: "2025-09-30T13:49:59.352Z",
  issuer: "did:web:did.trustvc.io",
  id: "urn:bnid:_:0197c11a-0cbb-7bb0-ac68-24b564c4eca0",
};

export const BillOfLadingSampleW3C_V2: BillOfLadingSchemaW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://w3id.org/security/data-integrity/v2",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://trustvc.io/context/bill-of-lading.json",
  ],
  type: ["VerifiableCredential"],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "FREE",
      chainId: "101010",
    },
    tokenRegistry: "0x7202363bBDb126036F7C3243Ebac310d9d145040",
    tokenId: "0b705c2d207c3d685c93f64a3279b9fef96f38cf862c0def66fe36eed9c827ad",
  },
  renderMethod: [
    {
      id: "http://localhost:3000",
      type: "EMBEDDED_RENDERER",
      templateName: "BILL_OF_LADING",
    },
  ],
  credentialSubject: {
    type: ["BillOfLading"],
    shipperAddressStreet: "",
    consigneeName: "",
    notifyPartyName: "",
    blNumber: "20250107",
    scac: "20250107",
  },
  validFrom: "2025-06-30T13:49:59.352Z",
  issuer: "did:web:trustvc.github.io:did:1",
  id: "urn:uuid:0198eaeb-0ecb-7557-ad1a-f344be283430",
  proof: {
    type: "DataIntegrityProof",
    created: "2025-08-27T09:45:30Z",
    verificationMethod: "did:web:trustvc.github.io:did:1#multikey-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue:
      "u2V0BhVhAaT8HHJ0wwcchyDS9Xyt4QA2xCeDSDeWnhigpnRQG9FTBarLoCXZBHrIcraHm4DmwHJPJTCvMbG9NrizgvejnZVgjgCQCZR-AuQa-yRJXadX4rbKGYs-wr0tk18pZ6po7-gven7aRWEBVfLSxz-QLXK21ubP5-l0RJtc8kHoPQaL6yec2_XQvGM0yV8--Vi2tpgMgDMxEbQZTp-GctUwwqQ9UEcBMa0s4WECuKBJuTZqLxJG3t39IfMn6ATQDmu-vZpJrtcMB5sR6ppD_4bRHhRF_cI56fN0pNzQ6L_-TFdxszO7usEwooohNWEDqTr9DKuuNsmj24YAuOhnWL7u05jsqXM6kO89F9UTi_tqZyDWyld1YUw2ROm35mslreJKSLznJo_t9mz_8ZUeQWEA4I7UCjs71Bzye2o7NjyNy8fXN4FWbDtwK7EV0QzZbA6LkymIyah8jkSs4aFqP-SXYnTfj2kUIJK0Nmwga1uhSWECClVy6vign5Oy_42-GM70qc84kF5RNFiCdx3OzeCrfj6xpXDlumNqRJ4Tg7poDebE8k24WKd8KrKbhvKqhAZl7WED_9MScO7wkxKlFw1DCL5Z3xYU_tObv-o-fJ4IEmRiYJyfB6pfRWisU5KI0a7guO1rXqMgtRJcWM78SJg1cuLy3WED-MHXO9OXmOdU0QLdc87CDZASDpJ74p_LYvOA4UiNCbJv1MAsX1Iwk4QdnHA3sv5ghFPc5s0TJanOgqb4GdGeCWEDBHnekDFpoQoKuEf0t5rlQ1S0NY0b3_lXp3MwHnJf-F__SLkLK_E2E3jx4B11NTD8pv7mejtDIQwriC0VGhYC0WECYh4rZG1OCVkmwZxedLOtPTeQw0F0Nc_Wpsb8SRde8VI3tDUvpYn47UERidECBM8KeZfAHT0vWa0HH4QmCXnvVWEDRILJft2yRZl4ysn6fr7s9elSEhrcV2wUISYKr5xNVGJhEJMzzlS97_M0rn22z5ZXjj1O_GnYKrsfeNPswhvRuWEDu7Y0SSZcZo3rM-7HwPlYpY-F1RUVeEPElOrx2OUbePymrw1eMzV00efYK4VaoerKlKtzcJZlmZojnDzCxS9-5WEBfmxYIRYC2yB_N4f7SaxeNwgPtUDTy8VJhs2YpExGIz918RiD203ArUHgLYOI_y0ypQQ5c6ZuyAjYa8pOpmjFVWEB8r6Zq2DD6yO2n4n3DP9S_2398qPJTRYbmmQuYQeWXZYYrZkURSFNmCr6HavUVx1tbMVxZt_gHnQH7isQPvTYHWECCS1hZ28GM35x0o0oYz3TbY1xlgZCIxQm_2ltY54QQ55yu6mrXfsDrc8VjYMvmeyWb_VGgzJo5YS2PeaRJfk-tWEDKi0vZampeVGln1s_aoViWb8cKtYiirtFuq_wgBxyCxwG9sgxEyT_pu6xFD_y07mgs1HkrObWCOFpX-64SJ04OWEBaPWFx6D2--nZoQuII8iQo4ugiVKrdPru12jhJbGeJA88f7eKatHfyOazxHNk16sQ7O9EHq88pLTuXLeN0dt8bWEBvENwfpZaH00nLCE_d6I4gRkJ8EoooM9gLFG4Je1dPnYh1-Tw0_wD9ezMamoAB5kk9U66v8TPgY3tKQJOlkZ7mowBYIA9NuuzSPzd6_JPvwmEDalFDrWX1_QQNEEfAlk4qbek2AVggpPUQcAM1o3vBmJ0uJYQXM39M610aI1vcYWJ06fNbrPsCWCAgZK89nFF4eeqQLz-vFko8GX3xYfELWDpECH9tjCQWKoMCBQc",
  },
};
