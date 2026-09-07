import React, { FunctionComponent } from "react";
import { BillOfExchangeDocumentaryCreditTemplate } from "./BillOfExchangeDocumentaryCreditTemplate";
import {
  BillOfExchangeDocumentaryCreditSampleW3C,
  BillOfExchangeDocumentaryCreditSampleW3CNoQrCode,
} from "./sampleW3C";

export default {
  title: "BillOfExchangeDocumentaryCredit",
  component: BillOfExchangeDocumentaryCreditTemplate,
  parameters: {
    componentSubtitle: "Bill of Exchange (ObligationRecords) template. W3C VC only.",
  },
};

export const BillOfExchangeDocumentaryCreditEmpty: FunctionComponent = () => {
  return <BillOfExchangeDocumentaryCreditTemplate document={{} as any} handleObfuscation={() => {}} />;
};

export const BillOfExchangeDocumentaryCreditW3C: FunctionComponent = () => {
  return (
    <BillOfExchangeDocumentaryCreditTemplate
      document={BillOfExchangeDocumentaryCreditSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};

export const BillOfExchangeDocumentaryCreditW3CNoQrCode: FunctionComponent = () => {
  return (
    <BillOfExchangeDocumentaryCreditTemplate
      document={BillOfExchangeDocumentaryCreditSampleW3CNoQrCode}
      handleObfuscation={() => {}}
    />
  );
};
