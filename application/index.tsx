import React from "react";
import ReactDOM from "react-dom";
import { BillOfLadingSample } from "../src/templates/BillOfLading/sample";
import { CoveringLetterSample } from "../src/templates/CoveringLetter/sample";
import { CoveringLetterSample2 } from "../src/templates/CoveringLetter/sample2";
import { InvoiceSample } from "../src/templates/Invoice/sample";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Bill of Lading", document: BillOfLadingSample },
      { name: "Covering Letter (GovTech)", document: CoveringLetterSample },
      { name: "Covering Letter (DBS)", document: CoveringLetterSample2 },
      { name: "Invoice", document: InvoiceSample }
    ]}
  />,
  document.getElementById("root")
);
