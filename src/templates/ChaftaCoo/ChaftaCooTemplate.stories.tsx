import React, { FunctionComponent } from "react";
import { ChaftaCooTemplate } from "./ChaftaCooTemplate";
import { ChaftaCooSampleV2 } from "./sampleV2";
import { ChaftaCooSampleV3 } from "./sampleV3";

export default {
  title: "ChaftaCoo",
  component: ChaftaCooTemplate,
  parameters: {
    componentSubtitle: "Chafta COO template.",
  },
};

export const ChaftaCooEmpty: FunctionComponent = () => {
  return <ChaftaCooTemplate document={{} as any} handleObfuscation={() => {}} />; // when empty, visually should not show any dangling values
};

export const ChaftaCooV2: FunctionComponent = () => {
  return <ChaftaCooTemplate document={ChaftaCooSampleV2} handleObfuscation={() => {}} />;
};

export const ChaftaCooV3: FunctionComponent = () => {
  return <ChaftaCooTemplate document={ChaftaCooSampleV3} handleObfuscation={() => {}} />;
};
