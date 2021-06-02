import { v2 } from "@govtechsg/open-attestation";
import { BillOfLadingGeneric } from "./types";

export const BillOfLadingGenericSample: BillOfLadingGeneric = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "BILL_OF_LADING_GENERIC",
    url: "http://localhost:3000",
  },
  issuers: [
    {
      name: "abc",
      documentStore: "0x1245e5B64D785b25057f7438F715f4aA5D965733",
    },
  ],
  blNumber: "SGCNM21566325",
  logo: "/static/images/logo-tradetrust.svg",
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
