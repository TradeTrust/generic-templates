import React, { FunctionComponent } from "react";
import { InvoiceTemplate } from "./InvoiceTemplate";
import { InvoiceSample } from "./sample";

export default {
  title: "Invoice",
  component: InvoiceTemplate,
  parameters: {
    componentSubtitle: "Invoice template.",
  },
};

export const Default: FunctionComponent = () => {
  return <InvoiceTemplate document={InvoiceSample} handleObfuscation={() => {}} />;
};
