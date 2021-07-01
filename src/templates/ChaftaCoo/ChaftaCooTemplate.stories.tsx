import React, { FunctionComponent } from "react";
import { ChaftaCooTemplate } from "./ChaftaCooTemplate";
import { ChaftaCooSample } from "./sample";

export default {
  title: "ChaftaCoo",
  component: ChaftaCooTemplate,
  parameters: {
    componentSubtitle: "Chafta COO template.",
  },
};

export const Default: FunctionComponent = () => {
  return <ChaftaCooTemplate document={ChaftaCooSample} handleObfuscation={() => {}} />;
};
