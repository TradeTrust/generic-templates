import React, { FunctionComponent } from "react";
import { BrochureTemplate } from "./BrochureTemplate";
import { BrochureSampleV2 } from "./sampleV2";
import { BrochureSampleV4 } from "./sampleV4";

export default {
  title: "Brochure",
  component: BrochureTemplate,
  parameters: {
    componentSubtitle: "Brochure template.",
  },
};

export const BrochureV2: FunctionComponent = () => {
  return <BrochureTemplate document={BrochureSampleV2} handleObfuscation={() => {}} />;
};

export const BrochureV4: FunctionComponent = () => {
  return <BrochureTemplate document={BrochureSampleV4} handleObfuscation={() => {}} />;
};
