import React, { FunctionComponent } from "react";
import { BillOfLadingMaerskTpacTemplate } from "./BillOfLadingMaerskTpacTemplate";
import { BillOfLadingMaerskTpacSampleV2 } from "./sampleV2";

export default {
  title: "BillOfLadingMaerskTpac",
  component: BillOfLadingMaerskTpacTemplate,
  parameters: {
    componentSubtitle: "Bill of Lading Maersk Pilot template (Redact).",
  },
};

export const BillOfLadingV2MaerskTpacEmpty: FunctionComponent = () => {
  return <BillOfLadingMaerskTpacTemplate document={{} as any} handleObfuscation={() => {}} />; // when empty, visually should not show any dangling values
};

export const BillOfLadingV2MaerskTpac: FunctionComponent = () => {
  return <BillOfLadingMaerskTpacTemplate document={BillOfLadingMaerskTpacSampleV2} handleObfuscation={() => {}} />;
};
