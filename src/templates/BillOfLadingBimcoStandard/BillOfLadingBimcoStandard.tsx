import React from "react";
import { v2 } from "@govtechsg/open-attestation";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import bimcoLogo from "./assets/bimcoLogo.svg";
import "./css/bimco.css";

interface Address {
  name?: string;
  street: string;
  streetNumber: string;
  floor?: string;
  postCode: string;
  city: string;
  stateRegion: string;
  country: string;
}

interface PartyContactDetails {
  phone: string;
  email: string;
  url?: string;
}

interface Party {
  partyName: string;
  taxReference: string;
  address: Address;
  partyContactDetails: PartyContactDetails[];
}

interface BimcoV1Template extends v2.OpenAttestationDocument {
  oaDocument: {
    shipper: { party: Party };
    consignee: { party: Party };
    notifyParty: { party: Party };
    freightPayableAsPerCharterPartyDated: string;
    portOfLoading: {
      location: {
        locationName: string;
        UNLocationCode: string;
      };
    };
    portOfDischarge: {
      location: {
        locationName: string;
        UNLocationCode: string;
      };
    };
    vessel: string;
    referenceNo: string;
    billOfLadingNo: string;
    descriptionOfGoods: string[];
    cargoGrossWeight: string;
    measurement: string;
    dateOfIssue: string;
    shippedOnBoardDate: string;
    signedBy: string;
    SCAC?: string;
    termsAndConditions: string;
    cargoShippedOnDeck?: string;
  };
}

export const BillOfLadingBimcoStandard: React.FunctionComponent<TemplateProps<BimcoV1Template>> = ({ document }) => {
  return (
    <div className="container" id="bill-of-lading-template">
      {RenderDocument(document)}
      <br />
    </div>
  );
};

const RenderDocument = (document: BimcoV1Template): JSX.Element => {
  const {
    signedBy,
    shipper,
    consignee,
    notifyParty,
    billOfLadingNo,
    referenceNo,
    vessel,
    portOfDischarge,
    portOfLoading,
    descriptionOfGoods,
    cargoGrossWeight,
    measurement,
    dateOfIssue,
    termsAndConditions,
    freightPayableAsPerCharterPartyDated,
  } = document.oaDocument;
  return (
    <div className="d-flex flex-column document border">
      {/* Row 1 - Bimco logo and title */}
      <div className="border p-2 flex justify-center items-center">
        <div className="w-1/2 text-center">
          <img src={bimcoLogo} className="logo mx-auto" alt="Bimco logo" />
          <strong>Digital Template for BIMCO Bill of Lading</strong>
        </div>
      </div>

      <div className="flex">
        {/* Shipper */}
        <div className="w-5/12 border p-2 px-3 py-2">
          <div className="field-title text-xs font-normal" style={{ fontSize: "12px" }}>
            Shipper
          </div>

          <div className="flex">
            <div className="w-6/12">
              <div className="text-xs">{shipper?.party?.partyName}</div>
              <div className="text-xs">{shipper?.party?.taxReference}</div>
              <div className="text-xs">{shipper?.party?.partyContactDetails?.[0]?.phone}</div>
              <div className="text-xs">{shipper?.party?.partyContactDetails?.[0]?.email}</div>
            </div>
            <div className="w-6/12">
              <div className="text-xs">{`${shipper?.party?.address?.streetNumber ?? ""} ${
                shipper?.party?.address?.street
              }`}</div>
              <div className="text-xs">{shipper?.party?.address?.postCode}</div>
              <div className="text-xs">{shipper?.party?.address?.city}</div>
              <div className="text-xs">{shipper?.party?.address?.country}</div>
            </div>
          </div>
        </div>

        {/* Bill of Lading Nr. */}
        <div className="w-3/12 border p-2 px-3 py-2">
          <div className="field-title text-xs font-normal" style={{ fontSize: "12px" }}>
            Bill of Lading Nr
          </div>
          <div className="text-xs">{billOfLadingNo}</div>
        </div>

        {/* Reference Nr. */}
        <div className="w-4/12 border p-2 px-3 py-2">
          <div className="field-title text-xs font-normal" style={{ fontSize: "12px" }}>
            Reference Nr
          </div>
          <div className="text-xs">{referenceNo}</div>
        </div>
      </div>

      <div className="flex">
        {/* Consignee */}
        <div className="w-4/12 border p-2 px-3 py-2">
          <div className="field-title text-xs font-normal" style={{ fontSize: "12px" }}>
            Consignee
          </div>
          <div className="flex">
            <div className="w-6/12">
              <div className="text-xs">{consignee?.party?.partyName}</div>
              <div className="text-xs">{consignee?.party?.taxReference}</div>
              <div className="text-xs">{consignee?.party?.partyContactDetails?.[0]?.phone}</div>
              <div className="text-xs">{consignee?.party?.partyContactDetails?.[0]?.email}</div>
            </div>
            <div className="w-6/12">
              <div className="text-xs">{`${consignee?.party?.address?.streetNumber ?? ""} ${
                consignee?.party?.address?.street
              }`}</div>
              <div className="text-xs">{consignee?.party?.address?.postCode}</div>
              <div className="text-xs">{consignee?.party?.address?.city}</div>
              <div className="text-xs">{consignee?.party?.address?.country}</div>
            </div>
          </div>
        </div>

        {/* Notify Address */}
        <div className="w-4/12 border p-2 px-3 py-2">
          <div className="field-title text-xs font-normal" style={{ fontSize: "12px" }}>
            Notify Address
          </div>
          <div className="flex">
            <div className="w-6/12">
              <div className="text-xs">{notifyParty?.party?.partyName}</div>
              <div className="text-xs">{notifyParty?.party?.taxReference}</div>
              <div className="text-xs">{notifyParty?.party?.partyContactDetails?.[0]?.phone}</div>
              <div className="text-xs">{notifyParty?.party?.partyContactDetails?.[0]?.email}</div>
            </div>
            <div className="w-6/12">
              <div className="text-xs">{`${notifyParty?.party?.address?.streetNumber ?? ""} ${
                notifyParty?.party?.address?.street
              }`}</div>
              <div className="text-xs">{notifyParty?.party?.address?.postCode}</div>
              <div className="text-xs">{notifyParty?.party?.address?.city}</div>
              <div className="text-xs">{notifyParty?.party?.address?.country}</div>
            </div>
          </div>
        </div>

        {/* Vessel */}
        <div className="w-4/12 border p-2 px-3 py-2">
          <div className="field-title text-xs font-normal" style={{ fontSize: "12px" }}>
            Vessel
          </div>
          <div className="flex">
            <div className="w-full">
              <div className="text-xs">{vessel}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Pre-Carriage by */}
        <div className="w-5/12">
          <div className="flex-row">
            <div className="border p-2 px-3 py-2">
              <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
                Pre-Carriage by
              </div>
              <div className="text-xs">-</div>
            </div>

            {/* Place of receipt by pre-carrier */}
            <div className="border p-2 px-3 py-2">
              <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
                Place of receipt by pre-carrier
              </div>
              <div className="text-xs">-</div>
            </div>

            {/* Place of delivery by on-carrier */}
            <div className="border p-2 px-3 py-2">
              <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
                Place of delivery by on-carrier
              </div>
              <div className="text-xs">-</div>
            </div>
          </div>
        </div>

        {/* Port of loading */}
        <div className="w-3/12 border p-2 px-3 py-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Port of loading
          </div>
          <div className="text-xs">
            {`${portOfLoading?.location?.locationName ?? ""}, ${portOfLoading?.location?.UNLocationCode ?? ""}`}
          </div>
        </div>

        {/* Port of discharge */}
        <div className="w-4/12 border p-2 px-3 py-2 ">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Port of discharge
          </div>
          <div className="text-xs">
            {`${portOfDischarge?.location?.locationName ?? ""}, ${portOfDischarge?.location?.UNLocationCode ?? ""}`}
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Marks & Nos. */}
        <div className="w-1/4 border p-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Marks & Nos.
          </div>
          <div className="text-xs">-</div>
        </div>

        {/* Number and kind of packages, description of goods */}
        <div className="w-5/12 border p-2 min-h-32">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Number and kind of packages, description of goods
          </div>
          {descriptionOfGoods && descriptionOfGoods.length > 0 && (
            <div className="text-xs">
              {descriptionOfGoods.map((g, index) => (
                <p key={index} className="whitespace-pre-line">
                  {g}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Gross weight */}
        <div className="w-1/6 border p-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Gross weight
          </div>
          <div className="text-xs">{cargoGrossWeight ?? "-"}</div>
        </div>

        {/* Measurement */}
        <div className="w-1/6 border p-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Measurement
          </div>
          <div className="text-xs">{measurement ?? "-"}</div>
        </div>
      </div>

      {/* Row 6 - particulars title */}
      <div className="flex">
        <div className="w-full border p-2 text-center">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            PARTICULARS DECLARED BY THE SHIPPER BUT NOT ACKNOWLEDGED BY THE CARRIER
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Freight details, charges etc. */}
        <div className="w-1/4 border p-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Freight details, charges etc.
          </div>
          <div className="text-xs">-</div>
        </div>

        {/* Daily demurrage rate (if agreed) */}
        <div className="w-1/4 border p-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Daily demurrage rate (if agreed)
          </div>
          <div className="text-xs">-</div>
        </div>

        {/* Freight payable at */}
        <div className="w-1/4 border p-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Freight payable at
          </div>
          <div className="text-xs">{freightPayableAsPerCharterPartyDated ?? "-"}</div>
        </div>

        {/* Terms and conditions */}
        <div className="w-1/4 border p-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Terms and conditions
          </div>
          <div className="text-xs">{termsAndConditions ?? "-"}</div>
        </div>
      </div>

      {/* Row 8 - number of original bills of lading, place and date of issue */}
      <div className="flex">
        {/* Number of original bills of lading */}
        <div className="w-1/2 border p-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Number of original bills of lading
          </div>
          <div className="text-xs">{false ?? "-"}</div>
        </div>

        {/* Place and date of issue */}
        <div className="w-1/2 border p-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Place and date of issue
          </div>
          <div className="text-xs">{false ?? "Place of issue"}</div>
          <div className="text-xs">{dateOfIssue ?? ""}</div>
        </div>
      </div>

      {/* Row 9 - Carrier, signature etc. */}
      <div className="flex">
        <div className="w-full border p-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            {" "}
            Carrier or on behalf of
          </div>
          <div className="text-xs">{signedBy ?? ""}</div>

          {/* Extra space */}
          <div className="my-4" />

          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Signature
          </div>
          <div className="text-xs">
            Document has been successfully signed with a secure digital signature, using the following public key:
            0x....
          </div>
        </div>
      </div>
    </div>
  );
};
