import { v2, v3 } from "@tradetrust-tt/tradetrust";
import { SignedVerifiableCredential } from "@trustvc/trustvc";

export type InvoiceDocumentSchemaV2 = v2.OpenAttestationDocument & InvoiceDocument;
export type InvoiceDocumentSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: InvoiceDocument;
};
export type InvoiceDocumentSchemaW3C = SignedVerifiableCredential & {
  credentialSubject: InvoiceDocument;
};

export type InvoiceDocumentSchema = InvoiceDocumentSchemaV2 | InvoiceDocumentSchemaV3 | InvoiceDocumentSchemaW3C;

export interface InvoiceDocument {
  id?: string;
  date?: string;
  customerId?: string;
  terms?: string;
  billFrom?: CompanyInfo;
  billTo?: BillingAddress;
  billableItems?: InvoiceItem[] | W3CInvoiceItem[];
  subtotal?: string;
  tax?: string;
  taxTotal?: string;
  total?: string;
  links?: { self: { href: string } } | string;

  // W3C only
  invoiceId?: string;
  invoiceName?: string;
  billFromName?: string;
  billFromStreetAddress?: string;
  billFromCity?: string;
  billFromPostalCode?: string;
  billFromPhoneNumber?: string;
  billToName?: string;
  billToEmail?: string;
  billToCompanyName?: string;
  billToCompanyStreetAddress?: string;
  billToCompanyCity?: string;
  billToCompanyPostalCode?: string;
  billToCompanyPhoneNumber?: string;
}

export interface CompanyInfo {
  name: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
}

export interface BillingAddress {
  name: string;
  company: CompanyInfo;
  email: string;
}

export interface InvoiceItem {
  description: string;
  quantity: string;
  unitPrice: string;
  amount: string;
}

export interface W3CInvoiceItem {
  billableItemsDescription: string;
  billableItemsQuantity: string;
  billableItemsUnitPrice: string;
  billableItemsAmount: string;
}
