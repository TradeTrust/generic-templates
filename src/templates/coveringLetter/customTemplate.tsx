import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { CoveringLetter } from "./sample";
import { PrintWatermark } from "../../core/PrintWatermark";

export const CustomTemplate: FunctionComponent<TemplateProps<CoveringLetter> & { className?: string }> = ({
  document,
  className = ""
}) => {
  const { logo, title, description, backgroundColor, titleColor, descriptionColor } = document;
  return (
    <div className={className} id="custom-template" style={{ backgroundColor, textAlign: "center", padding: 20 }}>
      <PrintWatermark />
      {logo ? (
        <img src={logo} style={{ maxWidth: 600, width: "100%", paddingTop: 50, paddingBottom: 50 }} />
      ) : (
        <div style={{ height: 300 }}></div>
      )}
      {title && <h1 style={{ color: titleColor }}>{title}</h1>}
      {description && <div style={{ color: descriptionColor, whiteSpace: "pre-wrap" }}>{description}</div>}
    </div>
  );
};
