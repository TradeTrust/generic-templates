import { v2 } from "@govtechsg/open-attestation";
import { CoveringLetter } from "./types";

export const CoveringLetterSample2: CoveringLetter = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "COVERING_LETTER",
    url: "http://localhost:3000",
  },
  issuers: [
    {
      name: "abc",
      documentStore: "0x1245e5B64D785b25057f7438F715f4aA5D965733",
    },
  ],
  links: {
    self: {
      href: "https://action.openattestation.com/?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fapi-ropsten.tradetrust.io%2Fstorage%2F1df7a8b2-9998-44d0-acbb-d0598f883aba%22%2C%22key%22%3A%228ff52a5980543346784e16fd9834aeadc38c4bfe28394d3bb7449ada2f40efaf%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fdev.tradetrust.io%2F%22%7D%7D",
    },
  },
  name: "Covering Letter (DBS)",
  logo: "/static/images/logo-dbs.png",
  backgroundColor: "black",
  titleColor: "white",
  remarksColor: "white",
  title: "Documents Bundle",
  remarks: `Some very important documents in here for some submission.\n\nAnd it supports multiline!`,
};
