import { Meta, StoryFn } from "@storybook/react";
import React, { FunctionComponent } from "react";
import { BillOfLadingTemplate } from "./BillOfLadingTemplate";
import { BillOfLadingSampleV2 } from "./sampleV2";
import { BillOfLadingSampleV3 } from "./sampleV3";
import { BillOfLadingSampleW3C, BillOfLadingSampleW3C_V2 } from "./sampleW3C";
import { BillOfLadingDocument } from "./types";

export default {
  title: "BillOfLading",
  component: BillOfLadingTemplate,
  parameters: {
    componentSubtitle: "Bill of Lading template.",
  },
} as Meta;

export const BillOfLadingEmpty: FunctionComponent = () => {
  return <BillOfLadingTemplate document={{} as any} handleObfuscation={() => {}} />; // when empty, visually should not show any dangling values
};

export const BillOfLadingV2: FunctionComponent = () => {
  return <BillOfLadingTemplate document={BillOfLadingSampleV2} handleObfuscation={() => {}} />;
};

export const BillOfLadingV3: FunctionComponent = () => {
  return <BillOfLadingTemplate document={BillOfLadingSampleV3} handleObfuscation={() => {}} />;
};

export const BillOfLadingW3C: FunctionComponent = () => {
  return <BillOfLadingTemplate document={BillOfLadingSampleW3C} handleObfuscation={() => {}} />;
};

export const BillOfLadingW3C_V2: FunctionComponent = () => {
  return <BillOfLadingTemplate document={BillOfLadingSampleW3C_V2} handleObfuscation={() => {}} />;
};

const Template_: StoryFn<BillOfLadingDocument> = (args) => {
  const documentWithProperties = {
    ...BillOfLadingSampleW3C,
    credentialSubject: {
      ...BillOfLadingSampleW3C.credentialSubject,
      ...args,
    },
  };

  return <BillOfLadingTemplate document={documentWithProperties} handleObfuscation={() => {}} />;
};

export const BillOfLadingCustomisable = Template_.bind({});
BillOfLadingCustomisable.argTypes = {
  // Define controls for sample document values
  scac: { control: "text", description: "SCAC code" },
  blNumber: { control: "text", description: "Bill of Lading number" },
  vessel: { control: "text", description: "Vessel name" },
  voyageNo: { control: "text", description: "Voyage number" },
  portOfLoading: { control: "text", description: "Port of loading" },
  portOfDischarge: { control: "text", description: "Port of discharge" },
  carrierName: { control: "text", description: "Carrier name" },
  shipperName: { control: "text", description: "Shipper name" },
  shipperAddressStreet: { control: "text", description: "Shipper street address" },
  shipperAddressCountry: { control: "text", description: "Shipper country" },
  consigneeName: { control: "text", description: "Consignee name" },
  notifyPartyName: { control: "text", description: "Notify party name" },
  placeOfReceipt: { control: "text", description: "Place of receipt" },
  placeOfDelivery: { control: "text", description: "Place of delivery" },
  packages: {
    control: "object",
    description: "Array of package objects with description, weight, and measurement",
  },
};
BillOfLadingCustomisable.args = {
  ...BillOfLadingSampleW3C.credentialSubject,
  packages: [
    {
      description: "10 PALLETS OF ELECTRONICS",
      weight: "500",
      measurement: "1000",
    },
    {
      description: "5 CRATES OF MACHINE PARTS",
      weight: "750",
      measurement: "600",
    },
  ],
};
