import React, { FunctionComponent } from "react";
import { BillOfLadingV1BimcoStandard } from "./BillOfLadingBimcoStandard";
import { BillOfLadingV1BimcoSample, BillOfLadingV1BimcoEmptySample } from "./sample";
import { BillOfLadingV1BimcoSchema } from "./types";

export default {
  title: "BillOfLadingBimco",
  component: BillOfLadingV1BimcoStandard,
  parameters: {
    componentSubtitle: "Bill of Lading BIMCO template.",
  },
};

export const BillOfLadingV1BimcoEmpty: FunctionComponent = () => {
  return (
    <BillOfLadingV1BimcoStandard
      document={BillOfLadingV1BimcoEmptySample as BillOfLadingV1BimcoSchema}
      handleObfuscation={() => {}}
    />
  );
};

export const BillOfLadingV1Bimco: FunctionComponent = () => {
  return (
    <BillOfLadingV1BimcoStandard
      document={BillOfLadingV1BimcoSample as BillOfLadingV1BimcoSchema}
      handleObfuscation={() => {}}
    />
  );
};
