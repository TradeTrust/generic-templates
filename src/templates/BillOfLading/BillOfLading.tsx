import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
// import "./bootstrap.min.css";
import { BillOfLading } from "./types";

const borderStyle = {
  borderStyle: "solid",
  borderWidth: 0.5,
  borderColor: "#000"
};

const smallText = (text: string): JSX.Element => <div style={{ fontSize: "0.8em" }}>{text}</div>;

const Section3 = (): JSX.Element => (
  <div style={borderStyle}>
    <div className="row">
      <div className="col-3 p-2" style={{ minHeight: 100, ...borderStyle }}>
        {smallText("Freight & Charges")}
      </div>
      <div className="col-2 p-2" style={{ minHeight: 100, ...borderStyle }}>
        {smallText("Rule")}
      </div>
      <div className="col-2 p-2" style={{ minHeight: 100, ...borderStyle }}>
        {smallText("Unit")}
      </div>
      <div className="col-1 p-2" style={{ minHeight: 100, ...borderStyle }}>
        {smallText("Currency")}
      </div>
      <div className="col-2 p-2" style={{ minHeight: 100, ...borderStyle }}>
        {smallText("Prepaid")}
      </div>
      <div className="col-2 p-2" style={{ minHeight: 100, ...borderStyle }}>
        {smallText("Collect")}
      </div>
    </div>

    <div className="row">
      <div className="col-6 d-flex flex-column">
        {/* Row1 */}
        <div className="d-flex" style={{ flex: 1 }}>
          <div className="p-2 col-6" style={{ ...borderStyle }}>
            {smallText(
              "Carrier's Receipt (see clause 1 and 14). Total number of containers or packages received by Carrier."
            )}
            <div>1 container</div>
          </div>
          <div className="d-flex flex-column col-6">
            <div className="p-2" style={{ flex: 1, ...borderStyle }}>
              {smallText("Place of Issue of B/L")}
            </div>
          </div>
        </div>

        {/* Row2 */}
        <div className="d-flex" style={{ flex: 1 }}>
          <div className="p-2 col-6" style={{ ...borderStyle }}>
            {smallText("Number & Sequence of Original B(s)/L")}
            THREE/3
          </div>
          <div className="d-flex flex-column col-6">
            <div className="p-2" style={{ flex: 1, ...borderStyle }}>
              {smallText("Date of Issue of B/L")}
            </div>
          </div>
        </div>

        {/* Row2 */}
        <div className="d-flex" style={{ flex: 1 }}>
          <div className="p-2 col-6" style={{ ...borderStyle }}>
            {smallText("Declared Value (see clause 7.3)")}
          </div>
          <div className="d-flex flex-column col-6">
            <div className="p-2" style={{ flex: 1, ...borderStyle }}>
              {smallText("Shipped on Board Date (Local Time)")}
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 p-2" style={borderStyle}>
        <div>
          {smallText(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur purus ut faucibus. Diam quam nulla porttitor massa. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Amet mauris commodo quis imperdiet massa tincidunt. Luctus accumsan tortor posuere ac ut. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Eros donec ac odio tempor orci dapibus. Varius morbi enim nunc faucibus a pellentesque sit amet. Velit aliquet sagittis id consectetur purus ut. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Odio ut sem nulla pharetra diam sit. Nunc sed augue lacus viverra vitae congue eu consequat ac. Eros in cursus turpis massa tincidunt dui ut ornare lectus."
          )}
        </div>
        <div className="text-center mt-3 mb-5">
          <strong>{smallText("Signed for the Carrier A.P. Moller - Maersk A/S trading as Maersk Line")}</strong>
        </div>
        <hr />
        <div className="text-center mt-2">
          <strong>{smallText("As Agent(s) for the Carrier")}</strong>
        </div>
      </div>
    </div>
  </div>
);

const Section2 = (document: BillOfLading): JSX.Element => {
  const packages = document.packages || [];
  const renderedKindOfPackage = packages.map((pkg, index) => <div key={index}>{pkg.description}</div>);
  const renderedWeight = packages.map((pkg, index) => <div key={index}>{pkg.weight}</div>);
  const renderedMeasurement = packages.map((pkg, index) => <div key={index}>{pkg.measurement}</div>);

  return (
    <div className="row" style={borderStyle}>
      <div className="col-8 p-2" style={borderStyle}>
        <div style={{ fontSize: "0.8em" }}>
          Kind of Packages: Description of goods, Marks and Numbers: Container No./Serial No.
        </div>
        {renderedKindOfPackage}
        <div style={{ fontSize: "0.8em" }} className="mt-2">
          Above particulars as declared by Shipper, but without responsibility of our representation by Carrier (see
          clause 14)
        </div>
      </div>
      <div className="col-2 p-2" style={borderStyle}>
        <div style={{ fontSize: "0.8em" }}>Weight</div>
        {renderedWeight}
      </div>
      <div className="col-2 p-2" style={borderStyle}>
        <div style={{ fontSize: "0.8em" }}>Measurement</div>
        {renderedMeasurement}
      </div>
    </div>
  );
};

const Section1 = (document: BillOfLading): JSX.Element => {
  const { shipper = {}, blNumber, consignee = {}, notifyParty = {} } = document;
  return (
    <div className="d-flex flex-column" style={borderStyle}>
      {/* Row 1 */}
      <div className="d-flex">
        <div className="p-2 col-6" style={{ ...borderStyle }}>
          <div className="d-flex align-items-center justify-content-center h-100 text-center">
            <img style={{ width: "150px" }} src="/static/images/logo-tradetrust.svg" />
          </div>
        </div>
        <div className="d-flex col-6">
          <div className="d-flex" style={{ flex: 1 }}>
            <div className="p-2" style={{ flex: 5, ...borderStyle }}>
              <strong>BILL OF LADING FOR OCEAN TRANSPORT OR MULTIMODAL TRANSPORT</strong>
            </div>
            <div style={{ flex: 3 }} className="d-flex flex-column">
              <div className="p-2" style={{ flex: 1, ...borderStyle }}>
                SCAC <strong>MAEU</strong>
              </div>
              <div className="p-2" style={{ flex: 1, ...borderStyle }}>
                B/L No <strong>{blNumber}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="d-flex">
        <div className="p-2 col-6" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>Shipper</div>
          <div className="p-2 m-2">
            <div>{shipper.name || ""}</div>
            <div>{(shipper.address && shipper.address.street) || ""}</div>
            <div>{(shipper.address && shipper.address.country) || ""}</div>
          </div>
        </div>
        <div className="col-6 d-flex flex-column justify-content-between">
          <div className="p-1" style={{ flex: 1, ...borderStyle }}>
            <div style={{ fontSize: "0.8em" }}>Booking No</div>
            <div>{blNumber}</div>
          </div>
          <div className="p-1" style={{ flex: 1, ...borderStyle }}>
            <div style={{ fontSize: "0.8em" }}>Export references</div>
          </div>
          <div className="p-1" style={{ flex: 1, ...borderStyle }}>
            <div style={{ fontSize: "0.8em" }}>
              Onward inland routing (Not part of Carriage as defined in clasuse 1. For account and risk of Merchant)
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="d-flex">
        <div className="p-2 col-6" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>
            Consignee (negotiable is consiged &quot;to order&quot;, &quot;to order of&quot; a named Person or &quot;to
            order of bearer&quot;)
          </div>
          <div className="p-2 m-2">
            <div>TO THE ORDER OF</div>
            <div>{consignee.name || ""}</div>
          </div>
        </div>
        <div className="p-2 col-6" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>Notify Party (see clause 22)</div>
          <div className="p-2 m-2">
            <div>{notifyParty.name || ""}</div>
          </div>{" "}
        </div>
      </div>

      {/* Row 4 */}
      <div className="d-flex">
        <div className="col-3 p-2" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>Vessel (see clause 1 + 19)</div>
          {document.vessel || ""}
        </div>
        <div className="col-3 p-2" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>Voyage No.</div>
          {document.voyageNo || ""}
        </div>
        <div className="col-6 p-2" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>
            Place of Receipt. Applicable only when document used as Multimodal Transport B/L (see clause 1)
          </div>
        </div>
      </div>

      {/* Row 5 */}
      <div className="d-flex">
        <div className="col-3 p-2" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>Port of Loading</div>
          {document.portOfLoading || ""}
        </div>
        <div className="col-3 p-2" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>Port of Discharge</div>
          {document.portOfDischarge || ""}
        </div>
        <div className="col-6 p-2" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>
            Place of Delivery. Applicable only when document used as Multimodal Transport B/L (see clause 1)
          </div>
        </div>
      </div>
    </div>
  );
};

export const BillOfLadingTemplate: FunctionComponent<TemplateProps<BillOfLading>> = ({ document }) => {
  const qrCodeUrl = document?.links?.self.href;
  return (
    // Section 1
    <div>
      <div className="container">
        {Section1(document)}
        <br />
        <div className="text-center">
          <strong>PARTICULARS FURNISHED BY SHIPPER</strong>
        </div>
        {Section2(document)}
        <br />
        {Section3()}
      </div>
      {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
    </div>
  );
};
