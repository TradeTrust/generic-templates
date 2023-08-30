import { v2 } from "@govtechsg/open-attestation";

export type BrochureSchema = v2.OpenAttestationDocument & BrochureDocument;

interface content {
  subheader?: string;
  body?: string;
  listItems?: {
    name?: string;
    description?: string;
    descriptionAsList?: string[];
  }[];
  bodyAsList?: string[];
  bolded?: string[];
  link?: string;
}

export interface BrochureDocument {
  shared: {
    tradeTrust: {
      description: string;
    };
    openAttestation: {
      description: string;
    };
  };
  page1: {
    header: string;
    contents: content[];
    footnote: string;
  };
  page2: {
    contents: content[];
  };
  page3: {
    contents: content[];
  };
  page4: {
    contents: content[];
    footer: {
      qrUrl: string;
      qrPrompt: string;
      links: {
        title: string;
        domains: string[];
      }[];
    };
  };
}
