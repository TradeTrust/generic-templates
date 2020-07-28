import React from "react";
import ReactDOM from "react-dom";
import { FramedDocumentRenderer, noAttachmentRenderer } from "@govtechsg/decentralized-renderer-react-components";
import { registry } from "./templates";

ReactDOM.render(
  <FramedDocumentRenderer templateRegistry={registry} attachmentToComponent={noAttachmentRenderer} />,
  document.getElementById("root")
);
