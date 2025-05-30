import {
  OpenAttestationDocument,
  RawVerifiableCredential,
  SignedVerifiableCredential,
  isRawV2Document,
  isRawV3Document,
  vc,
} from "@trustvc/trustvc";
import { toWords } from "number-to-words";

export const getDocumentData = (
  document: OpenAttestationDocument | SignedVerifiableCredential | RawVerifiableCredential
): any => {
  if (isRawV3Document(document) || vc.isSignedDocument(document) || vc.isRawDocument(document)) {
    return document.credentialSubject;
  } else {
    return document;
  }
};

export const formatDateTime = (input?: string): string => {
  const date = new Date(input || "");
  if (isNaN(date.getTime())) return input || "";
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-GB", { month: "long", timeZone: "UTC" });
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${day} ${month} ${year}, ${hours}:${minutes} UTC`;
};

export const formatDate = (input?: string): string => {
  const date = new Date(input || "");
  if (isNaN(date.getTime())) return input || "";
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-GB", { month: "long", timeZone: "UTC" });
  const year = date.getUTCFullYear();
  return `${day} ${month} ${year}`;
};

export const formatCurrency = (amount?: string | number): string =>
  new Intl.NumberFormat("en-US").format(isNaN(Number(amount)) ? 0 : Number(amount));

export const toTitleCaseWords = (amount?: string | number): string =>
  toWords(isNaN(Number(amount)) ? 0 : Number(amount))
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const getQRCodeURL = (document: OpenAttestationDocument | SignedVerifiableCredential): any => {
  const documentData = getDocumentData(document);
  if (isRawV2Document(document)) {
    const { links } = documentData;
    return links?.self?.href;
  } else if (isRawV3Document(document)) {
    const { links } = documentData;
    return links?.self?.href;
  } else if (vc.isSignedDocument(document) || vc.isRawDocument(document)) {
    const { qrCode } = document;
    return qrCode.uri;
  }
};
