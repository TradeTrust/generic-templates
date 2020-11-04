import { CoveringLetter } from "./types";

export const coveringLetter: CoveringLetter = {
  name: "Covering Letter",
  logo: "https://www.aretese.com/images/govtech-animated-logo.gif",
  title: "Documents Bundle",
  remarks: `Some very important documents in here for some submission.\n\nAnd it supports multiline!`,
  $template: {
    name: "COVERING_LETTER",
    type: "EMBEDDED_RENDERER",
    url: "http://localhost:3000"
  },
  links: {
    self: {
      href:
        "https://action.openattestation.com/?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fapi-ropsten.tradetrust.io%2Fstorage%2F1df7a8b2-9998-44d0-acbb-d0598f883aba%22%2C%22key%22%3A%228ff52a5980543346784e16fd9834aeadc38c4bfe28394d3bb7449ada2f40efaf%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fdev.tradetrust.io%2F%22%7D%7D"
    }
  }
};
