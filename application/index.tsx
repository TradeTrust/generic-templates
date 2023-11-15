import React from "react";
import ReactDOM from "react-dom";
import { BillOfLadingSampleV2 } from "../src/templates/BillOfLading/sampleV2";
import { BillOfLadingSampleV3 } from "../src/templates/BillOfLading/sampleV3";
import { BillOfLadingMaerskPilotSampleV2 } from "../src/templates/BillOfLadingMaerskPilot/sampleV2";
import { BillOfLadingMaerskTpacSampleV2 } from "../src/templates/BillOfLadingMaerskTpac/sampleV2";
import { BillOfLadingGenericSample } from "../src/templates/BillOfLadingGeneric/sample";
import { ChaftaCooSampleV2 } from "../src/templates/ChaftaCoo/sampleV2";
import { ChaftaCooSampleV3 } from "../src/templates/ChaftaCoo/sampleV3";
import { CoveringLetterSampleV2a } from "../src/templates/CoveringLetter/sampleV2a";
import { CoveringLetterSampleV2b } from "../src/templates/CoveringLetter/sampleV2b";
import { CoveringLetterSampleV2malformed } from "../src/templates/CoveringLetter/sampleV2malformed";
import { CoveringLetterSampleV3 } from "../src/templates/CoveringLetter/sampleV3";
import { InvoiceSampleV2 } from "../src/templates/Invoice/sampleV2";
import { InvoiceSampleV3 } from "../src/templates/Invoice/sampleV3";
import { InvoiceSampleV4 } from "../src/templates/Invoice/sampleV4";
import { InvoiceSampleIDVCV4 } from "../src/templates/Invoice/sampleIDVCV4";
import { XMLRendererSampleData } from "../src/templates/XmlRenderer/sample";
import { SimpleCooSampleV2 } from "../src/templates/SimpleCoo/sampleV2";
import { SimpleCooSampleV3 } from "../src/templates/SimpleCoo/sampleV3";
import { CertificateOfNonManipulationSampleV2 } from "../src/templates/CertificateOfNonManipulation/sampleV2";
import { BrochureSampleV2 } from "../src/templates/Brochure/sampleV2";
import { BrochureSampleV4 } from "../src/templates/Brochure/sampleV4";
import { App } from "./app";
import "./main.css";

ReactDOM.render(
  <App
    documents={[
      { name: "Bill of Lading V2", document: BillOfLadingSampleV2 },
      { name: "Bill of Lading V3", document: BillOfLadingSampleV3 },
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
      { name: "InvoiceV4", document: InvoiceSampleV4 },
      { name: "InvoiceIDVCV4", document: InvoiceSampleIDVCV4 },
      { name: "XML Renderer", document: XMLRendererSampleData },
      { name: "Simple COO V2", document: SimpleCooSampleV2 },
      { name: "Simple COO V3", document: SimpleCooSampleV3 },
      {
        name: "Certificate of Non Manipulation V2",
        document: CertificateOfNonManipulationSampleV2,
      },
      { name: "W3C Brochure V2", document: BrochureSampleV2 },
      { name: "W3C Brochure V4", document: BrochureSampleV4 },
    ]}
  />,
  document.getElementById("root")
);
