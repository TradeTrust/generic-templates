import React from "react";
import ReactDOM from "react-dom";
import { CoveringLetterSample } from "../src/templates/CoveringLetter/sample";
import { InvoiceSample } from "../src/templates/Invoice/sample";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Generic Templates - Covering Letter", document: CoveringLetterSample },
      { name: "Generic Templates - Invoice", document: InvoiceSample }
    ]}
  />,
  document.getElementById("root")
);
