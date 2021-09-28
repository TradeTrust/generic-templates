import React, { FunctionComponent } from "react";
import { BillOfLadingTemplate } from "./BillOfLadingTemplate";
import { BillOfLadingSampleV2 } from "./sampleV2";
import { BillOfLadingSampleV3 } from "./sampleV3";

export default {
  title: "BillOfLading",
  component: BillOfLadingTemplate,
  parameters: {
    componentSubtitle: "Bill of Lading template.",
  },
};

export const BillOfLadingEmpty: FunctionComponent = () => {
  return <BillOfLadingTemplate document={{} as any} handleObfuscation={() => {}} />; // when empty, visually should not show any dangling values
};

export const BillOfLadingV2: FunctionComponent = () => {
  return <BillOfLadingTemplate document={BillOfLadingSampleV2} handleObfuscation={() => {}} />;
};

export const BillOfLadingV3: FunctionComponent = () => {
  return <BillOfLadingTemplate document={BillOfLadingSampleV3} handleObfuscation={() => {}} />;
};
