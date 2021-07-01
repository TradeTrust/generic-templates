import styled from "@emotion/styled";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { CoveringLetter } from "./types";

const CustomStyles = styled.div`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  width: 100%;
  color: #4e4e50;
  min-height: 600px; // take note that logo image's height was never accounted in set iframe height, hence need a min-height in px, avoid using vh units

  .logo {
    max-width: 240px;
  }

  h1 {
    font-size: 32px;
  }
`;

export const CoveringLetterTemplate: FunctionComponent<TemplateProps<CoveringLetter>> = ({ document }) => {
  const { logo, title, remarks, backgroundColor, titleColor, remarksColor } = document;
  const qrCodeUrl = document?.links?.self.href;

  return (
    <Wrapper data-testid="covering-letter-template">
      <CustomStyles>
        <div className="p-4" style={{ backgroundColor }}>
          {logo && <img data-testid="logo" className="logo mb-8" src={logo} />}
          {title && (
            <h1 className="font-bold" style={{ color: titleColor }}>
              {title}
            </h1>
          )}
          {remarks && (
            <div className="my-4">
              <div
                className="font-bold"
                style={{
                  color: remarksColor,
                }}
              >
                Remarks:
              </div>
              <div
                style={{
                  color: remarksColor,
                }}
              >
                {remarks}
              </div>
            </div>
          )}
        </div>
        {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
      </CustomStyles>
    </Wrapper>
  );
};
