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
  subtotal?: string; //to cater for: SGD $2 or $2
  tax?: string; //to cater for: GST - 7% or 7
  taxTotal?: string; //to cater for: SGD $2 or $2
  total?: string; //to cater for: SGD $2 or $2
  links?: { self: { href: string } };
}

export interface InvoiceItem {
  description: string;
  quantity: string; //to cater for: 1 pair or 2
  unitPrice: string; //to cater for: SGD $2 or $2
  amount: string; //to cater for: SGD $2 or $2
}
