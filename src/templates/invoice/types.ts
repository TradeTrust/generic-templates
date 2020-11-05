import { Document } from "@govtechsg/decentralized-renderer-react-components";

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

export interface Invoice extends Document {
  id?: string;
  date?: string;
  customerId?: string;
  terms?: string;
  billFrom?: CompanyInfo;
  billTo?: BillingAddress;
  billableItems?: InvoiceItem[];
  subtotal?: string | number;
  tax?: string | number;
  taxTotal?: string | number;
  total?: string | number;
  links?: { self: { href: string } };
}

export interface InvoiceItem {
  description: string;
  quantity: number | string;
  unitPrice: number | string;
  amount: number | string;
}
