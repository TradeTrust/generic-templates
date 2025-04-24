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
  pNoteId: "a3c2d64e-7b91-4c03-8b6d-9df3456fc2a9",
  commitmentDate: "2025-04-10T00:00:00.000Z",
  dueDate: "2025-05-10T00:00:00.000Z",
  currency: "EUR",
  amount: "78945.23",
  drawerCompanyName: "Quantum Export Holdings Ltd.",
  drawerCompanyNo: "549300XDPHYG67J0FZ17",
  drawerJurisdiction: "Germany",
  drawerEmail: "claudia.hoffman@quantum-export.de",
  drawerWalletAddress: "0x12A4BeF891c8b7d213D7Cd9E4174fC2F391Bd89A",
  drawerPlaceOfIssue: "Berlin",
  draweeCompanyName: "NovaTech Industries Pvt. Ltd.",
  draweeCompanyNo: "335800AXCFTR2910LJ01",
  draweeJurisdiction: "India",
  draweeEmail: "ravi.menon@novatech.co.in",
  draweeWalletAddress: "0x9eE4C5b6F5b92b4fE8E7F3Ac13Bb96fD52DBe442",
  signerName: "Claudia Hoffman",
  signerPosition: "Chief Financial Officer",
  signerEmail: "claudia.hoffman@quantum-export.de",
  signerTimeStamp: "2025-04-10T09:42:17.500Z",
};
