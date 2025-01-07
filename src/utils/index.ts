import { OpenAttestationDocument, isRawV3Document, vc } from "@trustvc/trustvc";

export const getDocumentData = (document: OpenAttestationDocument): any => {
  if (isRawV3Document(document) || vc.isSignedDocument(document)) {
    return document.credentialSubject;
  } else {
    return document;
  }
};
