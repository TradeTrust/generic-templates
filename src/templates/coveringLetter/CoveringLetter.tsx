import { css } from "@emotion/core";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { PrintWatermark } from "../../core/PrintWatermark";
import { CoveringLetter } from "./types";

const container = css`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: #4e4e50;
  width: 100%;
  height: 100vh;
  max-height: 1000px;
  max-width: 980px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CoveringLetterTemplate: FunctionComponent<TemplateProps<CoveringLetter> & { className?: string }> = ({
  document,
  className = ""
}) => {
  const { logo, title, remarks, backgroundColor, titleColor, remarksColor } = document;
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
        {logo ? <img src={logo} style={{ maxWidth: 250, width: "100%" }} /> : <div style={{ height: 300 }} />}
        {title && <h1 style={{ color: titleColor, display: "flex", alignItems: "flex-start" }}>{title}</h1>}
        {remarks && (
          <div>
            <div
              style={{
                color: remarksColor,
                fontWeight: "bold",
                textAlign: "left",
                marginTop: 16,
                marginBottom: 16
              }}
            >
              Remarks:
            </div>
            <div
              style={{
                color: remarksColor,
                whiteSpace: "pre-wrap",
                display: "flex",
                alignItems: "flex-start",
                textAlign: "left"
              }}
            >
              {remarks}
            </div>
          </div>
        )}
      </div>
      {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
    </div>
  );
};
