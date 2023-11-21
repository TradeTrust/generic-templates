import React from "react";
import { v2 } from "@tradetrust-tt/tradetrust";
import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import "./css/bimco.css";

interface Address {
  street: string;
  streetNumber: string;
  floor?: string;
  postCode: string;
  city: string;
  stateRegion: string;
  country: string;
}

interface Party {
  partyName: string;
  taxReference: string;
  address: Address;
  phone: string;
  email: string;
  url?: string;
}

interface BimcoV1Template extends v2.OpenAttestationDocument {
  $template: {
    // Included $template property
    name: string;
    type: v2.TemplateType.EmbeddedRenderer;
    url: string;
  };
  issuers: any[];
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
  SCAC: string | null;
  termsAndConditions: string;
  cargoShippedOnDeck: string | null;
}

export const BillOfLadingV1BimcoStandard: React.FunctionComponent<TemplateProps<BimcoV1Template>> = ({ document }) => {
  return (
    <div className="container">
      {RenderDocument(document)}
      <br />
    </div>
  );
};

const PartySection = ({ title, party }: { title: string; party?: Party }): JSX.Element => {
  return (
    <div className="w-full border p-2 px-3 py-2">
      <div className="field-title text-xs font-normal" style={{ fontSize: "12px" }}>
        {title}
      </div>
      <div className="flex">
        <div className="w-6/12">
          <div className="text-xs">{party?.partyName ?? ""}</div>
          <div className="text-xs">{party?.taxReference ?? ""}</div>
          <div className="text-xs">{party?.phone ?? ""}</div>
          <div className="text-xs">{party?.email ?? ""}</div>
        </div>
        <div className="w-6/12">
          <div className="text-xs">
            {party && party.address ? `${party.address.streetNumber ?? ""} ${party.address.street}` : ""}
          </div>
          <div className="text-xs">{party?.address?.postCode ?? ""}</div>
          <div className="text-xs">{party?.address?.city ?? ""}</div>
          <div className="text-xs">{party?.address?.country ?? ""}</div>
        </div>
      </div>
    </div>
  );
};
const DetailSection = ({ title, detail }: { title: string; detail: string }): JSX.Element => {
  return (
    <div className="w-full border p-2 px-3 py-2">
      <div className="field-title text-xs font-normal" style={{ fontSize: "12px" }}>
        {title}
      </div>
      <div className="text-xs">{detail}</div>
    </div>
  );
};

const PreCarriageSection = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="flex-row">
        <div className="border p-2 px-3 py-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Pre-Carriage by
          </div>
          <div className="text-xs">-</div>
        </div>
        <div className="border p-2 px-3 py-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Place of receipt by pre-carrier
          </div>
          <div className="text-xs">-</div>
        </div>
        <div className="border p-2 px-3 py-2">
          <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
            Place of delivery by on-carrier
          </div>
          <div className="text-xs">-</div>
        </div>
      </div>
    </div>
  );
};

const PackagesSection = ({ descriptionOfGoods }: { descriptionOfGoods?: string[] }): JSX.Element => {
  return (
    <div className="w-full border p-2 min-h-32">
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
  );
};

const ParticularsTitle = ({ title }: { title: string }): JSX.Element => {
  return (
    <div className="w-full border p-2 text-center">
      <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
        {title}
      </div>
    </div>
  );
};

const CarrierSection = ({ signedBy }: { signedBy: string }): JSX.Element => {
  return (
    <div className="w-full border p-2">
      <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
        Carrier or on behalf of
      </div>
      <div className="text-xs">Carrier company</div>
      <div className="my-4" />
      <div className="text-xs font-normal field-title" style={{ fontSize: "12px" }}>
        Signature
      </div>
      <div className="text-xs">
        {signedBy && <img data-testid="carrier-signature" className="w-[150px] mx-auto" src={signedBy} />}
      </div>
    </div>
  );
};

const RenderDocument = (document: BimcoV1Template): JSX.Element => {
  const defaultPartyContainer: { party?: Party } = {};
  const defaultPort = {
    location: {
      locationName: "",
      UNLocationCode: "",
    },
  };

  const {
    signedBy = "",
    shipper = defaultPartyContainer,
    consignee = defaultPartyContainer,
    notifyParty = defaultPartyContainer,
    billOfLadingNo = "",
    referenceNo = "",
    vessel = "",
    portOfDischarge = defaultPort,
    portOfLoading = defaultPort,
    descriptionOfGoods = [],
    cargoGrossWeight = "",
    measurement = "",
    dateOfIssue = "",
    termsAndConditions = "",
    freightPayableAsPerCharterPartyDated = "",
  } = document ?? {};

  return (
    <div className="flex flex-col border">
      <div className="border p-2 flex justify-center items-center">
        <div className="w-1/2 text-center">
          <strong>Digital Template for BIMCO Bill of Lading</strong>
        </div>
      </div>

      <div className="flex">
        <PartySection title="Shipper" party={shipper?.party} />
        <DetailSection title="Bill of Lading Nr." detail={billOfLadingNo} />
        <DetailSection title="Reference Nr." detail={referenceNo} />
      </div>

      <div className="flex">
        <PartySection title="Consignee" party={consignee?.party} />
        <PartySection title="Notify Address" party={notifyParty?.party} />
        <DetailSection title="Vessel" detail={vessel} />
      </div>

      <div className="flex">
        <PreCarriageSection />
        <DetailSection
          title="Port of loading"
          detail={`${portOfLoading?.location?.locationName ?? ""} ${portOfLoading?.location?.UNLocationCode ?? ""}`}
        />
        <DetailSection
          title="Port of discharge"
          detail={`${portOfDischarge?.location?.locationName ?? ""} ${portOfDischarge?.location?.UNLocationCode ?? ""}`}
        />
      </div>

      <div className="flex">
        <DetailSection title="Marks & Nos." detail="-" />
        <PackagesSection descriptionOfGoods={descriptionOfGoods} />
        <DetailSection title="Gross weight" detail={cargoGrossWeight ?? "-"} />
        <DetailSection title="Measurement" detail={measurement ?? "-"} />
      </div>

      <ParticularsTitle title="PARTICULARS DECLARED BY THE SHIPPER BUT NOT ACKNOWLEDGED BY THE CARRIER" />

      <div className="flex">
        <DetailSection title="Freight details, charges etc." detail="-" />
        <DetailSection title="Daily demurrage rate (if agreed)" detail="-" />
        <DetailSection title="Freight payable at" detail={freightPayableAsPerCharterPartyDated ?? "-"} />
        <DetailSection title="Terms and conditions" detail={termsAndConditions ?? "-"} />
      </div>

      <div className="flex">
        <DetailSection title="Number of original bills of lading" detail="-" />
        <DetailSection title="Place and date of issue" detail={dateOfIssue ?? ""} />
      </div>

      <CarrierSection signedBy={signedBy} />
    </div>
  );
};
