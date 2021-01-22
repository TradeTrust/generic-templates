import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../core/Wrapper";
import { BillOfLadingGeneric } from "./types";

export const BillOfLadingGenericTemplate: FunctionComponent<TemplateProps<BillOfLadingGeneric>> = ({ document }) => {
  const { blNumber, logo } = document;
  return (
    <Wrapper data-testid="bill-of-lading-generic-template">
      <div className="mb-8">
        <div className="border-black border">
          <div className="flex">
            <div className="w-1/2 border-black border">
              <div className="p-2 h-full flex justify-center items-center">
                <img data-testid="logo" style={{ width: "150px" }} src={logo} />
              </div>
            </div>
            <div className="w-1/2 border-black border">
              <div className="p-2">
                B/L No <strong className="break-all">{blNumber}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
