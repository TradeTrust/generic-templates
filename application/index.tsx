import React from "react";
import ReactDOM from "react-dom";
import { coveringLetter } from "../src/templates/coveringLetter/sample";
import { invoice } from "../src/templates/invoice/sample";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Generic Templates - Covering Letter", document: coveringLetter },
      { name: "Generic Templates - Invoice", document: invoice }
    ]}
  />,
  document.getElementById("root")
);
