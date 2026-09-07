import styled from "@emotion/styled";
import { QRCodeSVG } from "qrcode.react";
import React, { FunctionComponent } from "react";
import qrcodeImg from "/static/images/logo-qrcode.png";

const Print = styled.div`
  display: none;

  @media print {
    page-break-before: always;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
    padding: 32px;

    .generated-text {
      position: absolute;
      right: 10px;
      bottom: 10px;
      font-size: 0.8em;
      color: grey;
    }
  }
`;

/**
 * Unlike `Print`, this renders in normal flow at all times (not hidden until
 * print, not forced onto its own page) so the QR stays exactly where it sits
 * on screen when printed, instead of being relocated to a separate page.
 */
const Inline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  break-inside: avoid;
  page-break-inside: avoid;
`;

interface DocumentQrCode {
  url: string;
  /** Render always-visible and in-place (screen + print) instead of the default print-only, own-page behavior. */
  inline?: boolean;
}

export const DocumentQrCode: FunctionComponent<DocumentQrCode> = ({ url, inline }) => {
  const imageSettings = {
    src: qrcodeImg,
    height: inline ? 27 : 90,
    width: inline ? 30 : 100,
    excavate: true,
  };

  if (inline) {
    return (
      <Inline>
        <QRCodeSVG data-testid="document-qrcode" value={url} level="M" size={120} imageSettings={imageSettings} />
        <div style={{ fontSize: 11, marginTop: 4, textAlign: "center", color: "#000" }}>Scan to verify / re-import</div>
      </Inline>
    );
  }

  return (
    <Print>
      <QRCodeSVG data-testid="document-qrcode" value={url} level="M" size={400} imageSettings={imageSettings} />
      <div style={{ fontSize: 32, marginLeft: 64 }}>Scan the QR code with a QR code scanner device.</div>
      <div className="generated-text">Automatically Generated</div>
    </Print>
  );
};
