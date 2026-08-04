import React, { FunctionComponent } from "react";
import { BillOfExchangeTemplate } from "./BillOfExchangeTemplate";
import { BillOfExchangeSampleV2 } from "./sampleV2";
import { BillOfExchangeSampleW3C } from "./sampleW3C";

export default {
  title: "BillOfExchange",
  component: BillOfExchangeTemplate,
  parameters: {
    componentSubtitle: "Bill of Exchange (BoE / ObligationRecords) template.",
  },
};

export const BillOfExchangeEmpty: FunctionComponent = () => {
  return <BillOfExchangeTemplate document={{} as any} handleObfuscation={() => {}} />;
};

export const BillOfExchangeV2: FunctionComponent = () => {
  return <BillOfExchangeTemplate document={BillOfExchangeSampleV2} handleObfuscation={() => {}} />;
};

export const BillOfExchangeW3C: FunctionComponent = () => {
  return <BillOfExchangeTemplate document={BillOfExchangeSampleW3C} handleObfuscation={() => {}} />;
};
