import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CoveringLetter extends Document {
  name: string;
  logo?: string;
  title?: string;
  remarks?: string;
  titleColor?: string;
  backgroundColor?: string;
  remarksColor?: string;
  links?: {
    self: {
      href: string;
    };
  };
}

export const coveringLetter: CoveringLetter = {
  name: "Covering Letter",
  logo: "https://www.aretese.com/images/govtech-animated-logo.gif",
  title: "Documents Bundle",
  remarks: `Some very important documents in here for some submission.\n\nAnd it supports multiline!`,
  $template: {
    name: "COVERING_LETTER",
    type: "EMBEDDED_RENDERER",
    url: "http://localhost:3000"
  }
};
