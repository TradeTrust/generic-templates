import QRCode, { ImageSettings } from "qrcode.react";
import React, { FunctionComponent, useState } from "react";
import "./style.css";

interface DocumentQrCode {
  url: string;
  logo?: string;
}

// https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getDimensions = ({
  width,
  height,
  maxWidth,
  maxHeight
}: {
  width: number;
  height: number;
  maxWidth: number;
  maxHeight: number;
}) => {
  const ratio = Math.min(maxWidth / width, maxHeight / height);
  return { width: Math.round(width * ratio), height: Math.round(height * ratio) };
};

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
        height: logoSize.height,
        width: logoSize.width,
        excavate: true
      });
    };
  }

  return (
    <div className="show-print">
      <QRCode value={url} size={400} imageSettings={imageSettings} />
      <div style={{ fontSize: 32, marginLeft: 64 }}>Scan the QR code with a QR code scanner device.</div>
      <div className="genterated-text">Automatically Generated</div>
    </div>
  );
};
