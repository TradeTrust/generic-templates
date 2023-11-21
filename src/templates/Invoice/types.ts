import { v2, v3, TTv4 } from "@tradetrust-tt/tradetrust";

export type InvoiceDocumentSchemaV2 = v2.OpenAttestationDocument & InvoiceDocument;

export type InvoiceDocumentSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: InvoiceDocument;
};

export type InvoiceDocumentSchemaTTV4 = TTv4.TradeTrustDocument & {
  credentialSubject: InvoiceDocument;
};

export type InvoiceDocumentSchema = InvoiceDocumentSchemaV2 | InvoiceDocumentSchemaV3 | InvoiceDocumentSchemaTTV4;

export interface InvoiceDocument {
  id?: string;
  date?: string;
  customerId?: string;
  terms?: string;
  billFrom?: CompanyInfo;
  billTo: BillingAddress;
  billableItems?: InvoiceItem[];
  subtotal?: string;
  tax?: string;
  taxTotal?: string;
  total?: string;
  links?: { self: { href: string } };
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
