import { v2, OAv4 as v4 } from "@tradetrust-tt/tradetrust";

export type BrochureSchemaV2 = v2.OpenAttestationDocument & BrochureDocument;

export type BrochureSchemaV4 = v4.OpenAttestationDocument & {
  credentialSubject: BrochureDocument;
};

export type BrochureSchema = BrochureSchemaV2 | BrochureSchemaV4;

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
  links?: {
    title?: string;
    url: string;
  }[];
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
        prompt: string;
        urls: string[];
      }[];
    };
  };
}
