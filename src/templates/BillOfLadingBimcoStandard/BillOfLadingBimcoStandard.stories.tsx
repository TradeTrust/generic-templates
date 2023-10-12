import React, { FunctionComponent } from "react";
import { BillOfLadingBimcoStandard } from "./BillOfLadingBimcoStandard";
import { BillOfLadingBimcoSampleV1 } from "./sample";
import { BillOfLadingBimcoSchemaV1 } from "./types";

export default {
  title: "BillOfLadingBimco",
  component: BillOfLadingBimcoStandard,
  parameters: {
    componentSubtitle: "Bill of Lading BIMCO template.",
  },
};

export const BillOfLadingBimcoEmpty: FunctionComponent = () => {
  return <BillOfLadingBimcoStandard document={{}} handleObfuscation={() => {}} />;
};

export const BillOfLadingBimcoV1: FunctionComponent = () => {
  return (
    <BillOfLadingBimcoStandard
      document={BillOfLadingBimcoSampleV1 as BillOfLadingBimcoSchemaV1}
      handleObfuscation={() => {}}
    />
  );
};
