import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BillOfLadingBimcoStandard } from "./BillOfLadingBimcoStandard";
import bimcoSample from "./assets/bimcoSample.json";

export default {
  title: "BillOfLadingBimcoStandard",
  component: BillOfLadingBimcoStandard,
} as ComponentMeta<typeof BillOfLadingBimcoStandard>;

const Template: ComponentStory<typeof BillOfLadingBimcoStandard> = (args) => <BillOfLadingBimcoStandard {...args} />;

export const BimcoV1 = Template.bind({});
BimcoV1.args = {
  document: bimcoSample,
};
