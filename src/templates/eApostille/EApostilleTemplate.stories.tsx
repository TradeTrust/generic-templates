import React, { FunctionComponent } from "react";
import EApostilleTemplate from "./EApostilleTemplate";
import { eApostilleSample } from "./sampleW3C";
import { eApostilleSampleInvalidW3C } from "./sampleInvalidV2";

export default {
  title: "eApostille",
  component: EApostilleTemplate,
  parameters: {
    componentSubtitle: "eApostille template.",
  },
};

export const EApostilleEmpty: FunctionComponent = () => {
  return <EApostilleTemplate document={{} as any} handleObfuscation={() => {}} />; // when empty, visually should not show any dangling values
};

export const EApostilleFilled: FunctionComponent = () => {
  return <EApostilleTemplate document={eApostilleSample} handleObfuscation={() => {}} />;
};

export const EApostilleInvalid: FunctionComponent = () => {
  return <EApostilleTemplate document={eApostilleSampleInvalidW3C} handleObfuscation={() => {}} />;
};

