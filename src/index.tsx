import React from "react";
import ReactDOM from "react-dom";
import { FramedDocumentRenderer, fullAttachmentRenderer } from "@tradetrust-tt/decentralized-renderer-react-components";
import { registry } from "./templates";
import "./main.css";

ReactDOM.render(
  <FramedDocumentRenderer templateRegistry={registry} attachmentToComponent={fullAttachmentRenderer} />,
  document.getElementById("root")
);
