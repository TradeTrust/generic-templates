import React, { FunctionComponent } from "react";
import { BillOfLadingMaerskPilotTemplate } from "./BillOfLadingMaerskPilotTemplate";
import { BillOfLadingMaerskPilotSampleV2 } from "./sampleV2";

export default {
  title: "BillOfLadingMaerskPilot",
  component: BillOfLadingMaerskPilotTemplate,
  parameters: {
    componentSubtitle: "Bill of Lading Maersk Pilot template.",
  },
};

export const BillOfLadingV2MaerskPilotEmpty: FunctionComponent = () => {
  return <BillOfLadingMaerskPilotTemplate document={{} as any} handleObfuscation={() => {}} />; // when empty, visually should not show any dangling values
};

export const BillOfLadingV2MaerskPilot: FunctionComponent = () => {
  return <BillOfLadingMaerskPilotTemplate document={BillOfLadingMaerskPilotSampleV2} handleObfuscation={() => {}} />;
};
