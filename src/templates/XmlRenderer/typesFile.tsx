import { v2 } from "@govtechsg/open-attestation";

export interface XmlRendererFileInterface extends v2.OpenAttestationDocument {
  xmlData: string;
}
