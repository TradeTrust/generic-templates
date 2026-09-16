import { SignedVerifiableCredential } from "@trustvc/trustvc";

/** This template is W3C VC only — unlike BillOfExchange, it does not support OA v2/v3. */
export type BillOfExchangeDocumentaryCreditSchemaW3C = SignedVerifiableCredential & {
  credentialSubject: BillOfExchangeDocumentaryCreditDocument;
};

export type BillOfExchangeDocumentaryCreditSchema = BillOfExchangeDocumentaryCreditSchemaW3C;

export interface BillOfExchangeDocumentaryCreditParty {
  name?: string;
  address?: string;
  authorisedSignatoryName?: string;
  /** Inline base64 data URI only (`data:image/...;base64,...`). */
  signature?: string;
}

export interface BillOfExchangeDocumentaryCreditIndorsement {
  payee?: string;
}

/** Fields aligned with https://trustvc.io/context/bill-of-exchange-documentary-credit.json */
export interface BillOfExchangeDocumentaryCreditDocument {
  type?: string[];
  electronicDocumentIdentifier?: string;
  /** Inline base64 data URI only (`data:image/...;base64,...`). */
  bankLogo?: string;
  referenceNumber?: string;
  amountInFigures?: string;
  amountInWords?: string;
  currencyCode?: string;
  placeOfIssue?: string;
  dateOfIssue?: string;
  maturityDate?: string;
  payee?: string;
  drawnUnder?: string;
  documentaryCreditNumber?: string;
  documentaryCreditDate?: string;
  indorsement?: BillOfExchangeDocumentaryCreditIndorsement;
  drawee?: BillOfExchangeDocumentaryCreditParty;
  drawer?: BillOfExchangeDocumentaryCreditParty;
}
