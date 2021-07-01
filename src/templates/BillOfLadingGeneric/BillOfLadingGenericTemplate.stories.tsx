import React, { FunctionComponent } from "react";
import { BillOfLadingGenericTemplate } from "./BillOfLadingGenericTemplate";
import { BillOfLadingGenericSample } from "./sample";

export default {
  title: "BillOfLadingGeneric",
  component: BillOfLadingGenericTemplate,
  parameters: {
    componentSubtitle: "Bill of Lading Generic Template.",
  },
};

export const Default: FunctionComponent = () => {
  return <BillOfLadingGenericTemplate document={BillOfLadingGenericSample} handleObfuscation={() => {}} />;
};
