import React, { FunctionComponent } from "react";
import { BillOfLadingTemplate } from "./BillOfLadingTemplate";
import { BillOfLadingSample } from "./sample";

export default {
  title: "BillOfLading",
  component: BillOfLadingTemplate,
  parameters: {
    componentSubtitle: "Bill of Lading template.",
  },
};

export const Default: FunctionComponent = () => {
  return <BillOfLadingTemplate document={BillOfLadingSample} handleObfuscation={() => {}} />;
};
