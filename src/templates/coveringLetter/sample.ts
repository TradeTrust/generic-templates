import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CoveringLetter extends Document {
  name: string;
  logo?: string;
  title?: string;
  description?: string;
  titleColor?: string;
  backgroundColor?: string;
  descriptionColor?: string;
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
  description: `Some very important documents in here for some submission.
  
And it supports multiline!`
};
