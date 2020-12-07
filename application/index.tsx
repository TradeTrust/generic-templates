import React from "react";
import ReactDOM from "react-dom";
import { BillOfLadingSample } from "../src/templates/BillOfLading/sample";
import { CoveringLetterSample } from "../src/templates/CoveringLetter/sample";
import { InvoiceSample } from "../src/templates/Invoice/sample";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Generic Templates - Bill of Lading", document: BillOfLadingSample },
      { name: "Generic Templates - Covering Letter", document: CoveringLetterSample },
      { name: "Generic Templates - Invoice", document: InvoiceSample }
    ]}
  />,
  document.getElementById("root")
);
