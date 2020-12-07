import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CompanyInfoI {
  name: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
}

export interface BillingAddressI {
  name: string;
  company: CompanyInfoI;
  email: string;
}

export interface InvoiceI extends Document {
  id?: string;
  date?: string;
  customerId?: string;
  terms?: string;
  billFrom?: CompanyInfoI;
  billTo?: BillingAddressI;
  billableItems?: InvoiceItem[];
  subtotal?: string;
  tax?: string;
  taxTotal?: string;
  total?: string;
  links?: { self: { href: string } };
}

export interface InvoiceItem {
  description: string;
  quantity: string;
  unitPrice: string;
  amount: string;
}
