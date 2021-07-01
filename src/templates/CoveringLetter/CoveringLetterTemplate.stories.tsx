import React, { FunctionComponent } from "react";
import { CoveringLetterTemplate } from "./CoveringLetterTemplate";
import { CoveringLetterSample } from "./sample";
import { CoveringLetterSample2 } from "./sample2";

export default {
  title: "CoveringLetter",
  component: CoveringLetterTemplate,
  parameters: {
    componentSubtitle: "Covering letter template.",
  },
};

export const Default: FunctionComponent = () => {
  return <CoveringLetterTemplate document={CoveringLetterSample} handleObfuscation={() => {}} />;
};

export const DBS: FunctionComponent = () => {
  return <CoveringLetterTemplate document={CoveringLetterSample2} handleObfuscation={() => {}} />;
};
