import { v2 } from "@govtechsg/open-attestation";
import { BillOfLadingGeneric } from "./types";
import logo from "/static/images/logo-tradetrust.svg";

export const BillOfLadingGenericSample: BillOfLadingGeneric = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "BILL_OF_LADING_GENERIC",
    url: "http://localhost:3000",
  },
  issuers: [
    {
      name: "abc",
      tokenRegistry: "0x142Ca30e3b78A840a82192529cA047ED759a6F7e",
    },
  ],
  blNumber: "SGCNM21566325",
  logo,
  companyName: "GovTech SG",
  field1: "Hello",
  field2: "Hello",
  field3: "Hello",
  field4: "Hello",
  field5: "Hello",
  field6: "Hello",
  field7: "Hello",
  field8: "Hello",
  field9: "Hello",
};
