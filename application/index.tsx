import React from "react";
import ReactDOM from "react-dom";
import { BillOfLadingSampleV2 } from "../src/templates/BillOfLading/sampleV2";
import { BillOfLadingSampleV3 } from "../src/templates/BillOfLading/sampleV3";
import { BillOfLadingMaerskPilotSampleV2 } from "../src/templates/BillOfLadingMaerskPilot/sampleV2";
import { BillOfLadingMaerskTpacSampleV2 } from "../src/templates/BillOfLadingMaerskTpac/sampleV2";
import { BillOfLadingGenericSample } from "../src/templates/BillOfLadingGeneric/sample";
import { BillOfLadingCarrierW3C } from "../src/templates/BillOfLadingCarrierTemplate/sampleW3C";
import { ChaftaCooSampleV2 } from "../src/templates/ChaftaCoo/sampleV2";
import { ChaftaCooSampleV3 } from "../src/templates/ChaftaCoo/sampleV3";
import { ChaftaCooSampleW3C } from "../src/templates/ChaftaCoo/sampleW3C";
import { CoveringLetterSampleV2a } from "../src/templates/CoveringLetter/sampleV2a";
import { CoveringLetterSampleV2b } from "../src/templates/CoveringLetter/sampleV2b";
import { CoveringLetterSampleV2malformed } from "../src/templates/CoveringLetter/sampleV2malformed";
import { CoveringLetterSampleV3 } from "../src/templates/CoveringLetter/sampleV3";
import { InvoiceSampleV2 } from "../src/templates/Invoice/sampleV2";
import { InvoiceSampleV3 } from "../src/templates/Invoice/sampleV3";
import { InvoiceSampleW3C } from "../src/templates/Invoice/sampleW3C";
import { XMLRendererSampleData } from "../src/templates/XmlRenderer/sample";
import { SimpleCooSampleV2 } from "../src/templates/SimpleCoo/sampleV2";
import { SimpleCooSampleV3 } from "../src/templates/SimpleCoo/sampleV3";
import { CertificateOfNonManipulationSampleV2 } from "../src/templates/CertificateOfNonManipulation/sampleV2";
import { BrochureSampleV2 } from "../src/templates/Brochure/sampleV2";
import { WarehouseReceiptSampleV2 } from "../src/templates/WarehouseReceipt/sampleV2";
import { WarehouseReceiptSampleW3C } from "../src/templates/WarehouseReceipt/sampleW3C";
import { App } from "./app";
import "./main.css";

ReactDOM.render(
  <App
    documents={[
      { name: "Bill of Lading V2", document: BillOfLadingSampleV2 },
      { name: "Bill of Lading V3", document: BillOfLadingSampleV3 },
      { name: "Bill of Lading W3C(Carrier)", document: BillOfLadingCarrierW3C },
      {
        name: "Bill of Lading V2 (Maersk Pilot)",
        document: BillOfLadingMaerskPilotSampleV2,
      },
      {
        name: "Bill of Lading V2 (Maersk TPAC)",
        document: BillOfLadingMaerskTpacSampleV2,
      },
      { name: "Bill of Lading (Generic)", document: BillOfLadingGenericSample },
      { name: "Chafta COO V2", document: ChaftaCooSampleV2 },
      { name: "Chafta COO V3", document: ChaftaCooSampleV3 },
      { name: "Chafta COO W3C", document: ChaftaCooSampleW3C },
      { name: "Covering Letter V2", document: CoveringLetterSampleV2a },
      {
        name: "Covering Letter V2 (Variant)",
        document: CoveringLetterSampleV2b,
      },
      {
        name: "Covering Letter V2 (Malformed)",
        document: CoveringLetterSampleV2malformed,
      },
      { name: "Covering Letter V3", document: CoveringLetterSampleV3 },
      { name: "InvoiceV2", document: InvoiceSampleV2 },
      { name: "InvoiceV3", document: InvoiceSampleV3 },
      { name: "InvoiceW3C", document: InvoiceSampleW3C },
      { name: "XML Renderer", document: XMLRendererSampleData },
      { name: "Simple COO V2", document: SimpleCooSampleV2 },
      { name: "Simple COO V3", document: SimpleCooSampleV3 },
      {
        name: "Certificate of Non Manipulation V2",
        document: CertificateOfNonManipulationSampleV2,
      },
      { name: "W3C Brochure V2", document: BrochureSampleV2 },
      { name: "Warehouse Receipt V2", document: WarehouseReceiptSampleV2 },
      { name: "Warehouse Receipt W3C", document: WarehouseReceiptSampleW3C },
    ]}
  />,
  document.getElementById("root")
);
