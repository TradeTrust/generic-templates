import React, { FunctionComponent } from "react";
import QRCode from "qrcode.react";
import "./style.css";

interface DocumentQrCode {
  url: string;
  size?: number;
}

export const DocumentQrCode: FunctionComponent<DocumentQrCode> = ({ url, size = 250 }) => (
  <div className="show-print">
    <QRCode value={url} size={size} />
    <div style={{ fontSize: 32, marginLeft: 64 }}>Scan the QR code with a QR code scanner device.</div>
    <div className="genterated-text">Automatically Generated</div>
  </div>
);
