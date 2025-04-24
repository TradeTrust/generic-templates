import { v2 } from "@tradetrust-tt/tradetrust";
import { PromissoryNoteSchemaV2 } from "./types";
import logo from "/static/images/logo-tradetrust.svg";

export const PromissoryNoteSampleV2: PromissoryNoteSchemaV2 = {
  $template: {
    name: "PROMISSORY_NOTE",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "<YOUR_HOSTED_RENDERER_URL>",
  },
  issuers: [
    {
      name: "DEMO TOKEN REGISTRY",
      tokenRegistry: "<YOUR_TOKEN_REGISTRY>",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "example.tradetrust.io",
      },
    },
  ],
  logo: logo,
  pNoteId: "16e2adf7-78da-44c4-a194-81b9f3f23d34",
  commitmentDate: "2025-03-14T00:00:00.000Z",
  drawerCompanyName: "India Dry Fruits Members Association",
  drawerCompanyNo: "549300BACZP326UOBH06",
  drawerJurisdiction: "India",
  drawerEmail: "raj@credore.xyz",
  drawerWalletAddress: "0x2EE7E435668c04D882e73f7C75AB44A8A4cbb9Bd",
  drawerPlaceOfIssue: "India",
  draweeCompanyName: "COFORGE LIMITED",
  draweeCompanyNo: "3358004YL9JGBNP4KF72",
  draweeJurisdiction: "India",
  draweeEmail: "asif@credore.xyz",
  draweeWalletAddress: "0xcvzbxcdsafgrthejnsbdfgdhsjwkityfhgbvncnm",
  dueDate: "2025-03-15T00:00:00.000Z",
  currency: "USD",
  amount: "22131",
  signerName: "Raj Kishor P",
  signerPosition: "CEO",
  signerEmail: "raj@credore.xyz",
  signerTimeStamp: "2025-03-14T08:20:36.079Z",
};
