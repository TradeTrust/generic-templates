import { v2 } from "@tradetrust/open-attestation";

export interface XmlRendererFileInterface extends v2.OpenAttestationDocument {
  xmlData: string;
}
