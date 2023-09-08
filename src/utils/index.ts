import { OpenAttestationDocument, utils } from "@govtechsg/open-attestation";

export const getDocumentData = (document: OpenAttestationDocument): any => {
  return utils.isRawV3Document(document) || utils.isRawV4Document(document) ? document.credentialSubject : document;
};
