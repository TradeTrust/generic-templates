import styled from "@emotion/styled";
import QRCode, { ImageSettings } from "qrcode.react";
import React, { FunctionComponent } from "react";

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

interface DocumentQrCode {
  url: string;
}

export const DocumentQrCode: FunctionComponent<DocumentQrCode> = ({ url }) => {
  const imageSettings: ImageSettings = {
    src: `/static/images/logo-qrcode.png`,
    height: 90,
    width: 100,
    excavate: true,
  };

  return (
    <Print>
      <QRCode value={url} level="M" size={400} imageSettings={imageSettings} />
      <div style={{ fontSize: 32, marginLeft: 64 }}>Scan the QR code with a QR code scanner device.</div>
      <div className="generated-text">Automatically Generated</div>
    </Print>
  );
};
