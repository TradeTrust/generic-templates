import React, { FunctionComponent } from "react";
import { BillOfLadingCarrierTemplate } from "./BillOfLadingCarrierTemplate";
import { BillOfLadingCarrierSampleV2 } from "./sampleV2";
import { BillOfLadingCarrierW3C, BillOfLadingCarrierW3C_V2 } from "./sampleW3C";

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

export const BillOfLadingW3CCarrier: FunctionComponent = () => {
  return <BillOfLadingCarrierTemplate document={BillOfLadingCarrierW3C} handleObfuscation={() => {}} />;
};

export const BillOfLadingW3CCarrier_V2: FunctionComponent = () => {
  return <BillOfLadingCarrierTemplate document={BillOfLadingCarrierW3C_V2} handleObfuscation={() => {}} />;
};
