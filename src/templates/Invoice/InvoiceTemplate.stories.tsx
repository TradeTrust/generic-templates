import React, { FunctionComponent } from "react";
import { InvoiceTemplate } from "./InvoiceTemplate";
import { InvoiceSampleV2 } from "./sampleV2";
import { InvoiceSampleV3 } from "./sampleV3";
import { InvoiceSampleW3C, InvoiceSampleW3C_V2 } from "./sampleW3C";

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

export const InvoiceW3C: FunctionComponent = () => {
  return <InvoiceTemplate document={InvoiceSampleW3C} handleObfuscation={() => {}} />;
};

export const InvoiceW3C_V2: FunctionComponent = () => {
  return <InvoiceTemplate document={InvoiceSampleW3C_V2} handleObfuscation={() => {}} />;
};
