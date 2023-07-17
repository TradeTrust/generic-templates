import React, { FunctionComponent } from "react";
import { CoveringLetterTemplate } from "./CoveringLetterTemplate";
import { CoveringLetterSampleV2a } from "./sampleV2a";
import { CoveringLetterSampleV2b } from "./sampleV2b";

export default {
  title: "CoveringLetter",
  component: CoveringLetterTemplate,
  parameters: {
    componentSubtitle: "Covering letter template.",
  },
};

export const Default: FunctionComponent = () => {
  return <CoveringLetterTemplate document={CoveringLetterSampleV2a} handleObfuscation={() => {}} />;
};

export const DBS: FunctionComponent = () => {
  return <CoveringLetterTemplate document={CoveringLetterSampleV2b} handleObfuscation={() => {}} />;
};
