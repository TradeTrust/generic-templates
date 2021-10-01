import React, { FunctionComponent } from "react";
import { SimpleCooTemplate } from "./SimpleCooTemplate";
import { SimpleCooSampleV2 } from "./sampleV2";
import { SimpleCooSampleV3 } from "./sampleV3";

export default {
  title: "SimpleCooTemplate",
  component: SimpleCooTemplate,
  parameters: {
    componentSubtitle: "Simple COO template.",
  },
};

export const ChaftaCooEmpty: FunctionComponent = () => {
  return <SimpleCooTemplate document={{} as any} handleObfuscation={() => {}} />;
};

export const ChaftaCooV2: FunctionComponent = () => {
  return <SimpleCooTemplate document={SimpleCooSampleV2} handleObfuscation={() => {}} />;
};

export const ChaftaCooV3: FunctionComponent = () => {
  return <SimpleCooTemplate document={SimpleCooSampleV3} handleObfuscation={() => {}} />;
};
