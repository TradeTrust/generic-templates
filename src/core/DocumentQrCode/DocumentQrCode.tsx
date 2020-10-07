import QRCode, { ImageSettings } from "qrcode.react";
import React, { FunctionComponent, useState } from "react";
import "./style.css";
import { getDimensions } from "./../../common/utils";

interface DocumentQrCode {
  url: string;
  logo?: string;
}

export const DocumentQrCode: FunctionComponent<DocumentQrCode> = ({ url, logo }) => {
  const [imageSettings, setImageSettings] = useState<ImageSettings>();

  if (logo) {
    const img: HTMLImageElement = new Image();
    img.src = logo;
    img.onload = () => {
      const logoSize = getDimensions({ width: img.width, height: img.height, maxWidth: 100, maxHeight: 100 });

      setImageSettings({
        src: logo,
        x: undefined,
        y: undefined,
        height: Math.round(logoSize.height),
        width: Math.round(logoSize.width),
        excavate: true
      });
    };
  }

  return (
    <div className="show-print">
      <QRCode value={url} level="M" size={400} imageSettings={imageSettings} />
      <div style={{ fontSize: 32, marginLeft: 64 }}>Scan the QR code with a QR code scanner device.</div>
      <div className="genterated-text">Automatically Generated</div>
    </div>
  );
};
