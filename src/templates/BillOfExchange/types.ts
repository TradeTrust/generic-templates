import { v2, v3 } from "@tradetrust-tt/tradetrust";
import { SignedVerifiableCredential } from "@trustvc/trustvc";

export type BillOfExchangeSchemaV2 = v2.OpenAttestationDocument & BillOfExchangeDocument;
export type BillOfExchangeSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: BillOfExchangeDocument;
};
export type BillOfExchangeSchemaW3C = SignedVerifiableCredential & {
  credentialSubject: BillOfExchangeDocument;
};

export type BillOfExchangeSchema = BillOfExchangeSchemaV2 | BillOfExchangeSchemaV3 | BillOfExchangeSchemaW3C;

export interface BillOfExchangeParty {
  name?: string;
  address?: string;
  authorisedSignatoryName?: string;
  /** Inline base64 data URI only (`data:image/...;base64,...`). */
  signature?: string;
}

/**
 * Fields aligned with https://trustvc.io/context/bill-of-exchange.json
 * @deprecated Superseded by BillOfExchangeDocumentaryCreditDocument (BILL_OF_EXCHANGE_DOCUMENTARY_CREDIT).
 * Kept as-is for already-issued documents — do not remove.
 */
export interface BillOfExchangeDocument {
  type?: string[];
  electronicDocumentIdentifier?: string;
  referenceNumber?: string;
  amountInFigures?: string;
  amountInWords?: string;
  currencyCode?: string;
  blDate?: string;
  placeOfIssue?: string;
  dateOfIssue?: string;
  tenor?: string;
  payee?: string;
  drawnUnder?: string;
  drawnUnderDate?: string;
  issuedBy?: string;
  drawee?: BillOfExchangeParty;
  drawer?: BillOfExchangeParty;
}
