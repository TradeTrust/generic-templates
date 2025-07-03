/// <reference types="@emotion/react/types/css-prop" />

import React, { FunctionComponent } from "react";
import { css } from "@emotion/react";
import watermark from "./watermark.svg";

export const PrintWatermark: FunctionComponent = () => (
  <div
    css={css`
      position: fixed;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      opacity: 0;
      display: none;
      background-image: url(${watermark});
      background-repeat: repeat;
      z-index: -1; /* Ensure the watermark is behind the content */

      @media print {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        display: block;
        print-color-adjust: exact;
        z-index: -1; /* Keep the watermark behind the content on print */
      }
    `}
  />
);
