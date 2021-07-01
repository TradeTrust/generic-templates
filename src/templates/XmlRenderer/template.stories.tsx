import React, { FunctionComponent } from "react";
import { XMLRenderer } from "./template";
import { XMLRendererSampleData } from "./sample";

export default {
  title: "XML Renderer",
  component: XMLRenderer,
  parameters: {
    componentSubtitle: "XML Renderer Template.",
  },
};

export const Default: FunctionComponent = () => {
  return <XMLRenderer document={XMLRendererSampleData} handleObfuscation={() => {}} />;
};
