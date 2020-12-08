import React, { FunctionComponent } from "react";
import { CoveringLetterTemplate } from "./CoveringLetterTemplate";
import { CoveringLetterSample } from "./sample";

export default {
  title: "CoveringLetter",
  component: CoveringLetterTemplate,
  parameters: {
    componentSubtitle: "Covering letter template."
  }
};

export const Default: FunctionComponent = () => {
  return <CoveringLetterTemplate document={CoveringLetterSample} handleObfuscation={() => {}} />;
};
