import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CoveringLetterI extends Document {
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
