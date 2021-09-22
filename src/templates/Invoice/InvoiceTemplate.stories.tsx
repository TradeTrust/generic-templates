import React, { FunctionComponent } from "react";
import { InvoiceTemplate } from "./InvoiceTemplate";
import { InvoiceSampleV2 } from "./sampleV2";
import { InvoiceSampleV3 } from "./sampleV3";

export default {
  title: "Invoice",
  component: InvoiceTemplate,
  parameters: {
    componentSubtitle: "Invoice template.",
  },
};

export const InvoiceV2: FunctionComponent = () => {
  return <InvoiceTemplate document={InvoiceSampleV2} handleObfuscation={() => {}} />;
};

export const InvoiceV3: FunctionComponent = () => {
  return <InvoiceTemplate document={InvoiceSampleV3} handleObfuscation={() => {}} />;
};
