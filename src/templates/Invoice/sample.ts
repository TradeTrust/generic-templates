import { v2 } from "@govtechsg/open-attestation";
import { Invoice } from "./types";

export const InvoiceSample: Invoice = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "INVOICE",
    url: "http://localhost:3000",
  },
  issuers: [
    {
      name: "abc",
      documentStore: "0x1245e5B64D785b25057f7438F715f4aA5D965733",
    },
  ],
  links: {
    self: {
      href: "https://action.openattestation.com/?q=%7B%22type%22:%22DOCUMENT%22,%22payload%22:%7B%22uri%22:%22https://gallery.openattestation.com/static/documents/invoice-ropsten.json%22,%22permittedActions%22:%5B%22VIEW%22%5D,%22redirect%22:%22https://dev.tradetrust.io%22%7D%7D",
    },
  },
  id: "2034",
  date: "2018-02-21",
  customerId: "564",
  terms: "Due Upon Receipt",
  billFrom: {
    name: "ABC Company",
    streetAddress: "Level 1, Industry Offices",
    city: "Singapore",
    postalCode: "123456",
    phoneNumber: "60305029",
  },
  billTo: {
    company: {
      name: "DEF Company",
      streetAddress: "Level 2, Industry Offices",
      city: "Singapore",
      postalCode: "612345",
      phoneNumber: "61204028",
    },
    name: "James Lee",
    email: "def@company.com",
  },
  billableItems: [
    {
      description: "Service Fee",
      quantity: "1",
      unitPrice: "200",
      amount: "200",
    },
    {
      description: "Labor: 5 hours at $75/hr",
      quantity: "5",
      unitPrice: "75",
      amount: "375",
    },
    {
      description: "New client discount",
      quantity: "1",
      unitPrice: "50",
      amount: "50",
    },
  ],
  subtotal: "625",
  tax: "0",
  taxTotal: "0",
  total: "625",
};
