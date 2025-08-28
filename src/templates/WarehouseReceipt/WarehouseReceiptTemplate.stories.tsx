import React, { FunctionComponent } from "react";
import { WarehouseReceiptTemplate } from "./WarehouseReceiptTemplate";
import { WarehouseReceiptSampleV2 } from "./sampleV2";
import { WarehouseReceiptSampleW3C, WarehouseReceiptSampleW3C_V2 } from "./sampleW3C";

export default {
  title: "WarehouseReceipt",
  component: WarehouseReceiptTemplate,
  parameters: {
    componentSubtitle: "Warehouse Receipt template.",
  },
};

export const WarehouseReceiptEmpty: FunctionComponent = () => {
  return <WarehouseReceiptTemplate document={{} as any} handleObfuscation={() => {}} />; // when empty, visually should not show any dangling values
};

export const WarehouseReceiptV2: FunctionComponent = () => {
  return <WarehouseReceiptTemplate document={WarehouseReceiptSampleV2} handleObfuscation={() => {}} />;
};

export const WarehouseReceiptW3C: FunctionComponent = () => {
  return <WarehouseReceiptTemplate document={WarehouseReceiptSampleW3C} handleObfuscation={() => {}} />;
};

export const WarehouseReceiptW3C_V2: FunctionComponent = () => {
  return <WarehouseReceiptTemplate document={WarehouseReceiptSampleW3C_V2} handleObfuscation={() => {}} />;
};
