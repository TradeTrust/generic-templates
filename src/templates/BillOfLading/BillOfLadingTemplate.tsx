import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { getDocumentData } from "../../utils";
import { BillOfLadingDocument, BillOfLadingSchema } from "./types";
import logo from "/static/images/logo-tradetrust.svg";

const smallText = (text: string): JSX.Element => <p style={{ fontSize: "0.8em" }}>{text}</p>;
const smallStrongText = (text: string): JSX.Element => (
  <p style={{ fontSize: "0.8em" }}>
    <strong>{text}</strong>
  </p>
);

const Section3 = (document: BillOfLadingDocument): JSX.Element => {
  const carrierName = document.carrierName;
  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2 h-24">{smallText("Freight & Charges")}</div>
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Rule")}</div>
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Unit")}</div>
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Currency")}</div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2 h-24">{smallText("Prepaid")}</div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2 h-24">{smallText("Collect")}</div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <div className="flex flex-col h-full">
            <div className="flex flex-1">
              <div className="w-1/2 border-black border">
                <div className="p-2">
                  {smallText(
                    "Carrier's Receipt (see clause 1 and 14). Total number of containers or packages received by Carrier."
                  )}
                  <p>1 container</p>
                </div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Place of Issue of B/L")}</div>
              </div>
            </div>

            <div className="flex flex-1">
              <div className="w-1/2 border-black border">
                <div className="p-2">
                  {smallText("Number & Sequence of Original B(s)/L")}
                  <p>THREE/3</p>
                </div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Date of Issue of B/L")}</div>
              </div>
            </div>

            <div className="flex flex-1">
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Declared Value (see clause 7.3)")}</div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Shipped on Board Date (Local Time)")}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 border-black border">
          <div className="p-2">
            {smallText(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur purus ut faucibus. Diam quam nulla porttitor massa. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Amet mauris commodo quis imperdiet massa tincidunt. Luctus accumsan tortor posuere ac ut. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Eros donec ac odio tempor orci dapibus. Varius morbi enim nunc faucibus a pellentesque sit amet. Velit aliquet sagittis id consectetur purus ut. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Odio ut sem nulla pharetra diam sit. Nunc sed augue lacus viverra vitae congue eu consequat ac. Eros in cursus turpis massa tincidunt dui ut ornare lectus."
            )}
            <div className="text-center mt-4 mb-16">
              {smallStrongText(`Signed for the Carrier ${carrierName || ""}`)}
            </div>
            <hr />
            <div className="text-center mt-2">{smallStrongText("As Agent(s) for the Carrier")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section2 = (document: BillOfLadingDocument): JSX.Element => {
  const packages = document.packages || [];
  const renderedKindOfPackage = packages.map((pkg, index) => <p key={index}>{pkg.description}</p>);
  const renderedWeight = packages.map((pkg, index) => <p key={index}>{pkg.weight}</p>);
  const renderedMeasurement = packages.map((pkg, index) => <p key={index}>{pkg.measurement}</p>);

  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-3/5 border-black border">
          <div className="p-2">
            {smallText("Kind of Packages: Description of goods, Marks and Numbers: Container No./Serial No.")}
            <div>{renderedKindOfPackage}</div>
            <p style={{ fontSize: "0.8em" }} className="mt-2">
              Above particulars as declared by Shipper, but without responsibility of our representation by Carrier (see
              clause 14)
            </p>
          </div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2">
            {smallText("Weight")}
            <div>{renderedWeight}</div>
          </div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2">
            {smallText("Measurement")}
            <div>{renderedMeasurement}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section1 = (document: BillOfLadingDocument): JSX.Element => {
  const { shipper = {}, scac, blNumber, consignee = {}, notifyParty = {} } = document;
  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2 h-full flex justify-center items-center">
            <img data-testid="logo" style={{ width: "150px" }} src={logo} />
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex">
            <div className="w-2/3 border-black border">
              <div className="p-2">
                <p>
                  <strong>BILL OF LADING FOR OCEAN TRANSPORT OR MULTIMODAL TRANSPORT</strong>
                </p>
              </div>
            </div>
            <div className="w-1/3 border-black border">
              <div className="p-2 border-black border-b-2">
                <p>
                  SCAC <strong>{scac}</strong>
                </p>
              </div>
              <div className="p-2">
                B/L No
                <p data-testid="blNumber">
                  <strong className="break-all">{blNumber}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Shipper</div>
            <div className="p-4">
              <p>{shipper.name || ""}</p>
              <p>{(shipper.address && shipper.address.street) || ""}</p>
              <p>{(shipper.address && shipper.address.country) || ""}</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2 border-black border-b-2">
            {smallText("Booking No")}
            <p>{blNumber}</p>
          </div>
          <div className="p-2 border-black border-b-2">{smallText("Export references")}</div>
          <div className="p-2">
            {smallText(
              "Onward inland routing (Not part of Carriage as defined in clasuse 1. For account and risk of Merchant)"
            )}
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2">
            {smallText(`Consignee (negotiable is consiged \"to order\", \"to order of\" a named Person or \"to
              order of bearer\")`)}
            <div className="p-4">
              <p>TO THE ORDER OF</p>
              <p>{consignee.name || ""}</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2">
            {smallText(`Notify Party (see clause 22)`)}
            <p className="p-4">{notifyParty.name || ""}</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            {smallText(`Vessel (see clause 1 + 19)`)}
            <p className="break-words">{document.vessel || ""}</p>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">
            {smallText(`Voyage No.`)}
            <p className="break-all">{document.voyageNo || ""}</p>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2">
            {smallText(
              `  Place of Receipt. Applicable only when document used as Multimodal Transport B/L (see clause 1)`
            )}

            <p className="break-all">{document.placeOfReceipt || ""}</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            {smallText(`Port of Loading`)}
            <p className="break-words">{document.portOfLoading || ""}</p>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">
            {smallText(`Port of Discharge`)}
            <p className="break-words">{document.portOfDischarge || ""}</p>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2">
            {smallText(
              `Place of Delivery. Applicable only when document used as Multimodal Transport B/L (see clause 1)`
            )}
            <p className="break-all">{document.placeOfDelivery || ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BillOfLadingTemplate: FunctionComponent<TemplateProps<BillOfLadingSchema>> = ({ document }) => {
  const documentData = getDocumentData(document) as BillOfLadingDocument;
  const qrCodeUrl = documentData?.links?.self.href;
  return (
    <Wrapper data-testid="bill-of-lading-template">
      <div className="mb-8">{Section1(documentData)}</div>
      <div className="text-center">
        <p>
          <strong>PARTICULARS FURNISHED BY SHIPPER</strong>
        </p>
      </div>
      <div className="mb-8">{Section2(documentData)}</div>
      {Section3(documentData)}
      {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
    </Wrapper>
  );
};
