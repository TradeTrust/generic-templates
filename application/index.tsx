import React from "react";
import ReactDOM from "react-dom";
// import { customTemplateCertificate } from "../src/templates/samples";
import { coveringLetter } from "../src/templates/coveringLetter/sample";
import { App } from "./app";

ReactDOM.render(
  <App documents={[{ name: "Generic Templates - Covering Letter", document: coveringLetter }]} />,
  document.getElementById("root")
);
