import { v2, v3 } from "@tradetrust-tt/tradetrust";

export interface CoveringLetter {
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

export type CoveringLetterSchemaV2 = v2.OpenAttestationDocument & CoveringLetter;
export type CoveringLetterSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: CoveringLetter;
};
export type CoveringLetterSchema = CoveringLetterSchemaV2 | CoveringLetterSchemaV3;
