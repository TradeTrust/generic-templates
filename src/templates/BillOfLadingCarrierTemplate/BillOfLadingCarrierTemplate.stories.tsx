import React, { FunctionComponent } from "react";
import { BillOfLadingCarrierTemplate } from "./BillOfLadingCarrierTemplate";
import { BillOfLadingCarrierSampleV2 } from "./sampleV2";

export default {
  title: "BillOfLadingCarrier",
  component: BillOfLadingCarrierTemplate,
  parameters: {
    componentSubtitle: "Bill of Lading Carrier template.",
  },
};

export const BillOfLadingV2CarrierEmpty: FunctionComponent = () => {
  return <BillOfLadingCarrierTemplate document={{} as any} handleObfuscation={() => {}} />; // when empty, visually should not show any dangling values
};

export const BillOfLadingV2Carrier: FunctionComponent = () => {
  return <BillOfLadingCarrierTemplate document={BillOfLadingCarrierSampleV2} handleObfuscation={() => {}} />;
};
