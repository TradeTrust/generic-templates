import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../core/Wrapper";
import { BillOfLadingGeneric } from "./types";

export const BillOfLadingGenericTemplate: FunctionComponent<TemplateProps<BillOfLadingGeneric>> = ({ document }) => {
  const {
    blNumber,
    logo,
    companyName,
    field1,
    field2,
    field3,
    field4,
    field5,
    field6,
    field7,
    field8,
    field9
  } = document;
  return (
    <Wrapper data-testid="bill-of-lading-generic-template">
      <div className="mb-8">
        <div className="border-black border">
          <div className="flex">
            {logo && (
              <div className="w-1/2 border-black border">
                <div className="p-2 h-full flex justify-center items-center">
                  <img data-testid="logo" style={{ maxWidth: "150px" }} src={logo} />
                </div>
              </div>
            )}
            <div className="flex-grow border-black border">
              <div className="p-2">
                {companyName && (
                  <>
                    Company Name: <strong className="break-all">{companyName}</strong>
                    <br />
                  </>
                )}
                B/L No: <strong className="break-all">{blNumber}</strong>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2 border-black border">
              <div className="p-2">{field1 && <strong className="break-all">Field 1: {field1}</strong>}</div>
            </div>
            <div className="w-1/2 border-black border">
              <div className="p-2">{field2 && <strong className="break-all">Field 2: {field2}</strong>}</div>
            </div>
            <div className="w-1/2 border-black border">
              <div className="p-2">{field3 && <strong className="break-all">Field 3: {field3}</strong>}</div>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2 border-black border">
              <div className="p-2">{field4 && <strong className="break-all">Field 4: {field4}</strong>}</div>
            </div>
            <div className="w-1/2 border-black border">
              <div className="p-2">{field5 && <strong className="break-all">Field 5: {field5}</strong>}</div>
            </div>
            <div className="w-1/2 border-black border">
              <div className="p-2">{field6 && <strong className="break-all">Field 6: {field6}</strong>}</div>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2 border-black border">
              <div className="p-2">{field7 && <strong className="break-all">Field 7: {field7}</strong>}</div>
            </div>
            <div className="w-1/2 border-black border">
              <div className="p-2">{field8 && <strong className="break-all">Field 8: {field8}</strong>}</div>
            </div>
            <div className="w-1/2 border-black border">
              <div className="p-2">{field9 && <strong className="break-all">Field 9: {field9}</strong>}</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
