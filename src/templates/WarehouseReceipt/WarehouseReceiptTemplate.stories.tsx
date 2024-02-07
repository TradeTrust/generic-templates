import React, { FunctionComponent } from "react";
import { WarehouseReceiptTemplate } from "./WarehouseReceiptTemplate";
import { WarehouseReceiptSampleV2 } from "./sampleV2";

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
