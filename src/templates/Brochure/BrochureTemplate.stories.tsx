import React, { FunctionComponent } from "react";
import { BrochureTemplate } from "./BrochureTemplate";
import { BrochureSample } from "./sample";

export default {
  title: "Brochure",
  component: BrochureTemplate,
  parameters: {
    componentSubtitle: "Brochure template.",
  },
};

export const BrochureEmpty: FunctionComponent = () => {
  return <BrochureTemplate document={{} as any} handleObfuscation={() => {}} />; // when empty, visually should not show any dangling values
};

export const Brochure: FunctionComponent = () => {
  return <BrochureTemplate document={BrochureSample} handleObfuscation={() => {}} />;
};