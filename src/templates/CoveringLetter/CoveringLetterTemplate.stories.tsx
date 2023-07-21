import React, { FunctionComponent } from "react";
import { CoveringLetterTemplate } from "./CoveringLetterTemplate";
import { CoveringLetterSampleV2a } from "./sampleV2a";
import { CoveringLetterSampleV2b } from "./sampleV2b";
import { CoveringLetterSampleV3 } from "./sampleV3";

export default {
  title: "CoveringLetter",
  component: CoveringLetterTemplate,
  parameters: {
    componentSubtitle: "Covering letter template.",
  },
};

export const CoveringLetterV2a: FunctionComponent = () => {
  return <CoveringLetterTemplate document={CoveringLetterSampleV2a} handleObfuscation={() => {}} />;
};

export const CoveringLetterV2b: FunctionComponent = () => {
  return <CoveringLetterTemplate document={CoveringLetterSampleV2b} handleObfuscation={() => {}} />;
};

export const CoveringLetterV3: FunctionComponent = () => {
  return <CoveringLetterTemplate document={CoveringLetterSampleV3} handleObfuscation={() => {}} />;
};
