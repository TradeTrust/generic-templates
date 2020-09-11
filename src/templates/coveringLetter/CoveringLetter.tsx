import { css } from "@emotion/core";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { PrintWatermark } from "../../core/PrintWatermark";
import { CoveringLetter } from "./sample";

const container = css`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: #4e4e50;
  text-align: center;
  width: 100%;
  height: 100vh;
  max-height: 1000px;
  max-width: 980px;
  position: relative;
  margin: 0 auto;
`;

export const CoveringLetterTemplate: FunctionComponent<TemplateProps<CoveringLetter> & { className?: string }> = ({
  document,
  className = ""
}) => {
  const { logo, title, description, backgroundColor, titleColor, descriptionColor } = document;
  const qrCodeUrl = document?.links?.self.href;

  return (
    <div>
      <div
        css={container}
        className={className}
        id="covering-letter-template"
        style={{ backgroundColor, textAlign: "center", padding: 20 }}
      >
        <PrintWatermark />
        {logo ? (
          <img src={logo} style={{ maxWidth: 600, width: "100%", paddingTop: 50, paddingBottom: 50 }} />
        ) : (
          <div style={{ height: 300 }} />
        )}
        {title && <h1 style={{ color: titleColor }}>{title}</h1>}
        {description && <div style={{ color: descriptionColor, whiteSpace: "pre-wrap" }}>{description}</div>}
      </div>
      {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
    </div>
  );
};
