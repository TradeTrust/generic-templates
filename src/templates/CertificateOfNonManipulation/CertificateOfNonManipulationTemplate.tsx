import React, { FunctionComponent } from "react";
import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import { CertificateOfNonManipulationSchema } from "./types";

const Header = ({ recipient = {}, id }: CertificateOfNonManipulationSchema): JSX.Element => (
  <div className="flex flex-wrap">
    <div className="w-full md:w-1/2 border border-black">
      <div className="p-4">
        <p>
          <strong>1. Name & Address of Shipping Agent/Freight Forwarder</strong>
        </p>
        <pre className="p-2">
          <p>{recipient.name || ""}</p>
          <p>{(recipient.address && recipient.address.street) || ""}</p>
          <p>{(recipient.address && recipient.address.country) || ""}</p>
        </pre>
      </div>
    </div>
    <div className="w-full md:w-1/2 border border-black">
      <div className="p-4">
        <p>
          <strong>DEMO CUSTOMS</strong>
        </p>
        <div className="p-2">
          <p>55 Newton Road</p>
          <p>#07-01 Revenue House</p>
          <p>Singapore 307987</p>
          <p>Tel : 6355 2000</p>
        </div>
        <div className="text-center p-2">
          <p>
            <strong>CERTIFICATE OF NON-MANIPULATION</strong>
          </p>
          <p>No. {id}</p>
        </div>
      </div>
    </div>
  </div>
);

const ConsignmentRow = ({ title, value }: { title: string; value: string }): JSX.Element => (
  <div className="flex flex-wrap h-full">
    <div className="w-1/3 border border-black">
      <div className="p-4">
        <p>{title}</p>
      </div>
    </div>
    <div className="w-2/3 flex-1 border border-black">
      <pre className="p-4">{value}</pre>
    </div>
  </div>
);

const ConsignmentDetails = ({ consignment }: CertificateOfNonManipulationSchema): JSX.Element => (
  <div className="flex flex-wrap">
    <div className="w-full border border-black">
      <div className="p-4">
        <p>
          <strong>2. Details of Consignment</strong>
        </p>
      </div>
    </div>
    {/* Row for description and quantity */}
    <div className="w-full md:w-1/2 border border-black">
      <div className="p-4">
        <p>Item(s) Description</p>
        <pre className="p-2">{(consignment && consignment.description) || ""}</pre>
      </div>
    </div>
    <div className="w-full md:w-1/2 border border-black">
      <div className="p-4">
        <p>Quantity/ Gross Weight</p>
        <pre className="p-2">
          {`${(consignment && consignment.quantity && consignment.quantity.value) || ""} ${
            (consignment && consignment.quantity && consignment.quantity.unit) || ""
          }`}
        </pre>
      </div>
    </div>
    {/* Row for country of origin and outward bill */}
    <div className="w-full md:w-1/2">
      <ConsignmentRow title="Country of Origin of Goods" value={(consignment && consignment.countryOfOrigin) || ""} />
    </div>
    <div className="w-full md:w-1/2">
      <ConsignmentRow
        title="Outward Bill of Lading No./ Air Waybill No."
        value={(consignment && consignment.outwardBillNo) || ""}
      />
    </div>
    {/* Row for discharge date and departure date */}
    <div className="w-full md:w-1/2">
      <ConsignmentRow
        title="Date of Discharge in Singapore"
        value={(consignment && consignment.dateOfDischarge) || ""}
      />
    </div>
    <div className="w-full md:w-1/2">
      <ConsignmentRow
        title="Date of Departure from Singapore"
        value={(consignment && consignment.dateOfDeparture) || ""}
      />
    </div>
    {/* Row for country of final destination and outgoing vehicle */}
    <div className="w-full md:w-1/2">
      <ConsignmentRow
        title="Country of Final Destination"
        value={(consignment && consignment.countryOfFinalDestination) || ""}
      />
    </div>
    <div className="w-full md:w-1/2">
      <ConsignmentRow
        title="Outgoing Vessel/ Vehicle/ Flight No."
        value={(consignment && consignment.outgoingVehicleNo) || ""}
      />
    </div>
  </div>
);

const Declaration = ({ declaration }: CertificateOfNonManipulationSchema): JSX.Element => (
  <div className="flex flex-wrap">
    <div className="w-full border border-black">
      <div className="p-4">
        <p>
          <strong>3. Declaration by Shipping Agent/Freight Forwarder</strong>
        </p>
      </div>
    </div>
    <div className="w-full border border-black">
      <div className="p-4">
        <p>I/We undertake that</p>
        <div className="pl-4">
          <p>
            a) the goods indicated, when transhipped via Singapore, will not undergo operations beyond the following:
          </p>
          <div className="pl-4">
            <p>i. ensuring the preservation of goods in good condition for the purpose of transport or storage;</p>
            <p>ii. facilitating shipment or transportation; and</p>
            <p>iii. packaging or presenting goods for sale.</p>
          </div>
        </div>
        <div className="pl-4">
          <p>b) all the information provided is true and correct.</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap">
          <div className="w-1/3 md:w-1/5">
            <p>Name:</p>
          </div>
          <div className="w-2/3 md:w-4/5">
            <p>{(declaration && declaration.name) || ""}</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/3 md:w-1/5">
            <p>Designation:</p>
          </div>
          <div className="w-2/3 md:w-4/5">
            <p>{(declaration && declaration.designation) || ""}</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/3 md:w-1/5">
            <p>Date:</p>
          </div>
          <div className="w-2/3 md:w-4/5">
            <p>{(declaration && declaration.date) || ""}</p>
          </div>
        </div>
        <p>(This is an electronically submitted declaration. No signature is required.)</p>
      </div>
    </div>
  </div>
);

const Certification = ({ certification }: CertificateOfNonManipulationSchema): JSX.Element => (
  <div className="flex flex-wrap">
    <div className="w-full border border-black">
      <div className="p-4">
        <p>
          <strong>4. Certification by Singapore Customs</strong>
        </p>
      </div>
    </div>
    <div className="w-full border border-black">
      <div className="p-4">
        <p>
          We certify that, to the best of our knowledge, the declaration by the shipping agent/ freight forwarder is
          true and correct.
        </p>
        <p>
          This Certificate is issued without any prejudice or liability whatsoever on our part arising from any
          circumstances.
        </p>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap">
              <div className="w-1/3">
                <p>Authorised Signature:</p>
              </div>
              <div className="w-2/3">
                <img
                  data-testid="certificate-signature"
                  src={(certification && certification.signature) || ""}
                  style={{ width: 100, height: "auto" }}
                />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-1/3">
                <p>Name:</p>
              </div>
              <div className="w-2/3">
                <p>{(certification && certification.name) || ""}</p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-1/3">
                <p>Designation:</p>
              </div>
              <div className="w-2/3">
                <p>{(certification && certification.designation) || ""}</p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-1/3">
                <p>Date:</p>
              </div>
              <div className="w-2/3">
                <p>{(certification && certification.date) || ""}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <img
              data-testid="certificate-stamp"
              className="w-[100px] mx-auto"
              src={(certification && certification.stamp) || ""}
            />
            <div>(Stamp)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const CertificateOfNonManipulationTemplate: FunctionComponent<
  TemplateProps<CertificateOfNonManipulationSchema>
> = ({ document }) => (
  <div className="container">
    <div className="border border-black">
      {Header(document)}
      {ConsignmentDetails(document)}
      {Declaration(document)}
      {Certification(document)}
    </div>
  </div>
);
