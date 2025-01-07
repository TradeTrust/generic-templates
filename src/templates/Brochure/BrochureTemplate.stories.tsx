import React, { FunctionComponent } from "react";
import { BrochureTemplate } from "./BrochureTemplate";
import { BrochureSampleV2 } from "./sampleV2";

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
