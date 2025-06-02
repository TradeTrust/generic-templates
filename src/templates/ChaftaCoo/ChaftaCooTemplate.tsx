import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import { format } from "date-fns";
import React, { FunctionComponent, useState } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import {
  ChaftaCooDocumentSchema,
  ChaftaCooDocument,
  W3CConsignmentItem,
  ConsignmentItem,
  W3CTradeLineItem,
  TradeLineItem,
  W3CTransportPackage,
  TransportPackage,
} from "./types";
import { getDocumentData, getQRCodeURL } from "./../../utils";
import { secondSignatoryAuthentication } from "../../core/Signatures";
import { vc } from "@trustvc/trustvc";

const getValue = (id?: string): string | undefined => {
  if (!id) return undefined;
  const values = id.split(":");
  return values[values.length - 1];
};

const printDate = (date?: string): string | undefined => {
  if (!date) return undefined;
  return format(new Date(date), "yyyy-MM-dd");
};

interface PrivacyButtonProps {
  handleObfuscation: (path: string) => void;
  isPrivacyOn?: boolean;
  paths?: string[];
}

type ObfuscationHandling = {
  handleObfuscation: (path: string) => void;
  isPrivacyOn: boolean;
  isW3C: boolean;
};

type ChaftaCooDocumentWithObfuscation = ChaftaCooDocument & ObfuscationHandling;
type ChaftaCooTemplateProps = TemplateProps<ChaftaCooDocumentSchema>;

const UnderlineDashed: FunctionComponent = () => <div className="border-dashed border-b-2 my-2" />;

export const PrivacyButton: FunctionComponent<PrivacyButtonProps> = ({
  isPrivacyOn,
  handleObfuscation,
  paths,
}: PrivacyButtonProps) => {
  if (!isPrivacyOn || !paths) return null;
  const hideSection: VoidFunction = () => {
    paths.forEach((path) => handleObfuscation(path));
  };

  return (
    <div className="inline-block align-middle">
      <div
        className="rounded-full flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: "red", width: "12px", height: "12px" }}
        onClick={hideSection}
      >
        <div className="bg-white" style={{ width: "8px", height: "2px" }} />
      </div>
    </div>
  );
};

export const ExporterSection: FunctionComponent<ChaftaCooDocumentWithObfuscation> = ({
  supplyChainConsignment,
  exporterId,
  exporterName,
  exporterLine1,
  exporterLine2,
  exporterCityName,
  exporterPostcode,
  exporterCountrySubDivisionName,
  exporterCountryCode,
  handleObfuscation,
  isPrivacyOn,
  isW3C,
}) => {
  const exporter = supplyChainConsignment?.exporter ?? {
    iD: exporterId,
    name: exporterName,
    postalAddress: {
      line1: exporterLine1,
      line2: exporterLine2,
      cityName: exporterCityName,
      postcode: exporterPostcode,
      countrySubDivisionName: exporterCountrySubDivisionName,
      countryCode: exporterCountryCode,
    },
  };
  const postalAddress = exporter?.postalAddress;
  const privacyPath = ["supplyChainConsignment.exporter"];

  return (
    <div className="border p-2 flex-1">
      <h5 className="mb-2">
        1. Exporter’s name, address and country:{" "}
        {!isW3C && (
          <PrivacyButton isPrivacyOn={isPrivacyOn} handleObfuscation={handleObfuscation} paths={privacyPath} />
        )}
      </h5>
      <p>{exporter?.name}</p>
      <p>{postalAddress?.line1}</p>
      <p>{postalAddress?.line2}</p>
      <p>{postalAddress?.cityName}</p>
      <p>
        {postalAddress?.countrySubDivisionName} {postalAddress?.postcode} {postalAddress?.countryCode}
      </p>
      {exporter?.iD && <p>ABN {getValue(exporter?.iD)}</p>}
    </div>
  );
};

export const ProducerSection: FunctionComponent<ChaftaCooDocumentWithObfuscation> = ({
  supplyChainConsignment,
  includedConsignmentItems,
  handleObfuscation,
  isPrivacyOn,
  isW3C,
}) => {
  const consignmentItem = supplyChainConsignment?.includedConsignmentItems ?? includedConsignmentItems;

  const firstConsignmentItem = consignmentItem?.[0];

  const manufacturer = isW3C
    ? (() => {
        const item = firstConsignmentItem as W3CConsignmentItem | undefined;
        if (!item) return undefined;

        return {
          iD: item.manufacturerId,
          name: item.manufacturerName,
          postalAddress: {
            line1: item.manufacturerLine1,
            line2: item.manufacturerLine2,
            cityName: item.manufacturerCityName,
            postcode: item.manufacturerPostcode,
            countrySubDivisionName: item.manufacturerCountrySubDivisionName,
            countryCode: item.manufacturerCountryCode,
          },
        };
      })()
    : (firstConsignmentItem as ConsignmentItem | undefined)?.manufacturer;

  const postalAddress = manufacturer?.postalAddress;
  const privacyPath = consignmentItem?.map(
    (_item, index) => `supplyChainConsignment.includedConsignmentItems[${index}].manufacturer`
  );

  return (
    <div className="border p-2 flex-1">
      <h5 className="mb-2">
        2. Producer’s name and address (if known):{" "}
        {!isW3C && (
          <PrivacyButton isPrivacyOn={isPrivacyOn} handleObfuscation={handleObfuscation} paths={privacyPath} />
        )}
      </h5>
      <p>{manufacturer?.name}</p>
      <p>
        {postalAddress?.line1}
        {postalAddress?.line1 && postalAddress?.cityName && `, `}
        {postalAddress?.cityName}
      </p>
      <p>
        {postalAddress?.countrySubDivisionName} {postalAddress?.postcode} {postalAddress?.countryCode}
      </p>
    </div>
  );
};

export const SummarySection: FunctionComponent<ChaftaCooDocument> = ({ iD, cooId }) => {
  return (
    <div className="border p-2 h-full">
      <h5 className="mb-2">Certificate No.: {getValue(iD ?? cooId)}</h5>
      <div className="text-center">
        <div className="py-4">
          <p className="font-bold">CERTIFICATE OF ORIGIN</p>
          <p className="font-bold">Form for China-Australia Free Trade Agreement</p>
        </div>
        <p>
          Issued in: <span className="font-bold underline">AUSTRALIA</span>
        </p>
      </div>
    </div>
  );
};

export const OfficialUseSection: FunctionComponent = () => {
  return (
    <div className="border p-2 h-full">
      <h5 className="mb-2">For official use only:</h5>
      <div style={{ minHeight: "80px" }} />
    </div>
  );
};

export const ImporterSection: FunctionComponent<ChaftaCooDocumentWithObfuscation> = ({
  supplyChainConsignment,
  importerName,
  importerLine1,
  importerLine2,
  importerCityName,
  importerPostcode,
  importerCountrySubDivisionName,
  importerCountryCode,
  handleObfuscation,
  isPrivacyOn,
  isW3C,
}) => {
  const importer = supplyChainConsignment?.importer ?? {
    name: importerName,
    postalAddress: {
      line1: importerLine1,
      line2: importerLine2,
      cityName: importerCityName,
      postcode: importerPostcode,
      countrySubDivisionName: importerCountrySubDivisionName,
      countryCode: importerCountryCode,
    },
  };
  const postalAddress = importer?.postalAddress;
  const privacyPath = ["supplyChainConsignment.importer"];

  return (
    <div className="border p-2 h-full">
      <h5 className="mb-2">
        3. Importer’s name, address and country (if known):{" "}
        {!isW3C && (
          <PrivacyButton isPrivacyOn={isPrivacyOn} handleObfuscation={handleObfuscation} paths={privacyPath} />
        )}
      </h5>
      <p>{importer?.name ?? importerName}</p>
      <p>{postalAddress?.line1 ?? importerLine1}</p>
      <p>{postalAddress?.line2 ?? importerLine2}</p>
      <p>{postalAddress?.cityName ?? importerCityName}</p>
      <p>
        {postalAddress?.countrySubDivisionName ?? importerCountrySubDivisionName}{" "}
        {postalAddress?.postcode ?? importerPostcode} {postalAddress?.countryCode ?? importerCountryCode}
      </p>
    </div>
  );
};

export const RemarksSection: FunctionComponent<ChaftaCooDocument & { isW3C?: boolean }> = ({
  supplyChainConsignment,
  supplyChainConsignmentId,
  supplyChainConsignmentInformation,
  includedConsignmentItems,
  isW3C,
}) => {
  const consignmentItems = supplyChainConsignment?.includedConsignmentItems ?? includedConsignmentItems;
  const id = supplyChainConsignment?.iD ?? supplyChainConsignmentId;
  const information = supplyChainConsignment?.information ?? supplyChainConsignmentInformation;
  return (
    <div className="border p-2 h-full">
      <h5 className="mb-2">5. Remarks:</h5>
      {id && <p>Consignment Ref: {getValue(id)}</p>}
      <p>{information}</p>
      {consignmentItems && consignmentItems?.length > 0 && (
        <ul className="list-disc pl-4">
          {consignmentItems?.map((item, index) => {
            const info = isW3C
              ? (item as W3CConsignmentItem).includedConsignmentItemsInformation
              : (item as ConsignmentItem).information;
            return (
              <li key={index}>
                <p>{info}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export const TransportSection: FunctionComponent<ChaftaCooDocumentWithObfuscation> = ({
  supplyChainConsignment,
  loadingBaseportLocationId,
  unloadingBaseportLocationId,
  usedTransportMeansId,
  departureDateTime,
  handleObfuscation,
  isPrivacyOn,
  isW3C,
}) => {
  const loadingPortLocation = supplyChainConsignment?.loadingBaseportLocation ?? { iD: loadingBaseportLocationId };
  const unloadingBaseportLocation = supplyChainConsignment?.unloadingBaseportLocation ?? {
    iD: unloadingBaseportLocationId,
  };
  const transportMovement = supplyChainConsignment?.mainCarriageTransportMovement ?? {
    usedTransportMeans: {
      iD: usedTransportMeansId,
    },
    departureEvent: {
      departureDateTime: departureDateTime,
    },
  };
  const departureEvent = transportMovement?.departureEvent;
  const privacyPath = [
    "supplyChainConsignment.loadingBaseportLocation",
    "supplyChainConsignment.mainCarriageTransportMovement",
  ];

  return (
    <div className="border p-2 h-full">
      <h5 className="mb-2">
        4. Means of transport and route (if known):{" "}
        {!isW3C && (
          <PrivacyButton isPrivacyOn={isPrivacyOn} handleObfuscation={handleObfuscation} paths={privacyPath} />
        )}
      </h5>
      <p>Departure Date: {printDate(departureEvent?.departureDateTime)}</p>
      <p>Vessel/Flight/Train/Vehicle No.: {getValue(transportMovement?.usedTransportMeans?.iD)}</p>
      <p>Port of loading: {getValue(loadingPortLocation?.iD)}</p>
      <p>Port of discharge: {getValue(unloadingBaseportLocation?.iD)}</p>
    </div>
  );
};

interface TradeLineItemData {
  sn?: number;
  marks?: string;
  description?: string;
  code?: string;
  origin?: string;
  quantity?: string;
  invoiceNo?: string;
  invoiceDate?: string;
}

export const TradeLineItemsSection: FunctionComponent<ChaftaCooDocument & { isW3C?: boolean }> = ({
  supplyChainConsignment,
  includedConsignmentItems,
  isW3C,
}) => {
  const consignmentItems = supplyChainConsignment?.includedConsignmentItems ?? includedConsignmentItems;
  const lineItems: TradeLineItemData[] = [];

  consignmentItems?.forEach((consignmentItem) => {
    const { tradeLineItems } = consignmentItem;

    tradeLineItems?.forEach((tradeLineItem) => {
      let firstLineItem = true;

      // W3C and non-W3C branching
      const transportPackages = tradeLineItem.transportPackages;

      const description = isW3C
        ? (tradeLineItem as W3CTradeLineItem).tradeProductDescription
        : (tradeLineItem as TradeLineItem).tradeProduct?.description;

      const code = isW3C
        ? (tradeLineItem as W3CTradeLineItem).harmonisedTariffclassCode
        : (tradeLineItem as TradeLineItem).tradeProduct?.harmonisedTariffCode?.classCode;

      const invoiceDate = isW3C
        ? (tradeLineItem as W3CTradeLineItem).formattedIssueDateTime
        : printDate((tradeLineItem as TradeLineItem).invoiceReference?.formattedIssueDateTime);

      const invoiceNo = isW3C
        ? (tradeLineItem as W3CTradeLineItem).invoiceReferenceId
        : getValue((tradeLineItem as TradeLineItem).invoiceReference?.iD);

      transportPackages?.forEach((transportPackage) => {
        function showIfFirstItemInTradeLineItem<T>(value: T): T | undefined {
          return firstLineItem ? value : undefined;
        }

        const marks = getValue(
          isW3C
            ? (transportPackage as W3CTransportPackage).transportPackagesId
            : (transportPackage as TransportPackage).iD
        );
        const quantity = `${
          isW3C
            ? (transportPackage as W3CTransportPackage).transportPackagesGrossVolume
            : (transportPackage as TransportPackage).grossVolume
        }, ${
          isW3C
            ? (transportPackage as W3CTransportPackage).transportPackagesGrossWeight
            : (transportPackage as TransportPackage).grossWeight
        }`;
        const origin = showIfFirstItemInTradeLineItem(
          isW3C
            ? (consignmentItem as W3CConsignmentItem).originCriteriaText
            : (consignmentItem as ConsignmentItem).crossBorderRegulatoryProcedure.originCriteriaText
        );

        lineItems.push({
          sn: showIfFirstItemInTradeLineItem(tradeLineItem.sequenceNumber),
          marks,
          description: showIfFirstItemInTradeLineItem(description),
          code: showIfFirstItemInTradeLineItem(code),
          origin,
          quantity,
          invoiceDate,
          invoiceNo,
        });

        firstLineItem = false;
      });
    });
  });

  return (
    <div className="border-t border-b">
      <div className="flex flex-nowrap justify-center">
        <div style={{ width: "10%" }} className={`p-2 border-l border-r ${consignmentItems ? "border-b-2" : ""}`}>
          6. Item number (max. 20)
        </div>
        <div style={{ width: "20%" }} className={`p-2 border-l border-r ${consignmentItems ? "border-b-2" : ""}`}>
          7. Marks and numbers on packages (optional)
        </div>
        <div style={{ width: "20%" }} className={`p-2 border-l border-r ${consignmentItems ? "border-b-2" : ""}`}>
          8. Number and kind of packages; description of goods
        </div>
        <div style={{ width: "10%" }} className={`p-2 border-l border-r ${consignmentItems ? "border-b-2" : ""}`}>
          9. HS code (6 digit code)
        </div>
        <div style={{ width: "10%" }} className={`p-2 border-l border-r ${consignmentItems ? "border-b-2" : ""}`}>
          10. Origin criterion
        </div>
        <div style={{ width: "15%" }} className={`p-2 border-l border-r ${consignmentItems ? "border-b-2" : ""}`}>
          11. Gross or net weight or odiver quantity (e.g. Quantity Unit, litres, m³.)
        </div>
        <div style={{ width: "15%" }} className={`p-2 border-l border-r ${consignmentItems ? "border-b-2" : ""}`}>
          12. Invoice number and date
        </div>
      </div>
      {lineItems.map((line, index) => (
        <div key={index} className="flex flex-nowrap justify-center">
          <div style={{ width: "10%" }} className="p-2 border-l border-r">
            {line.sn}
          </div>
          <div style={{ width: "20%" }} className="p-2 border-l border-r">
            {line.marks}
          </div>
          <div style={{ width: "20%" }} className="p-2 border-l border-r">
            {line.description}
          </div>
          <div style={{ width: "10%" }} className="p-2 border-l border-r">
            {line.code}
          </div>
          <div style={{ width: "10%" }} className="p-2 border-l border-r">
            {line.origin}
          </div>
          <div style={{ width: "15%" }} className="p-2 border-l border-r">
            {line.quantity}
          </div>
          <div style={{ width: "15%" }} className="p-2 border-l border-r">
            <div>{line.invoiceNo}</div>
            <div>{line.invoiceDate}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const DeclarationSection: FunctionComponent<ChaftaCooDocument> = ({
  supplyChainConsignment,
  firstSignatoryAuthentication,
  importerName,
  loadingBaseportLocationName,
  signature,
}) => {
  const importer = supplyChainConsignment?.importer ?? { name: importerName };
  const loadingBaseportLocation = supplyChainConsignment?.loadingBaseportLocation ?? {
    name: loadingBaseportLocationName,
  };
  const firstSignatory = firstSignatoryAuthentication ?? { signature: signature };
  return (
    <div className="border p-2 h-full">
      <h5 className="mb-2">13. Declaration by the exporter or producer</h5>
      <p>The undersigned hereby declares that the above-stated information is correct and that the goods exported to</p>
      <div className="my-8 text-center">
        <p>{importer?.name}</p>
        <UnderlineDashed />
        <p>(Importing Party)</p>
      </div>
      <p>comply with the origin requirements specified in the China-Australia Free Trade Agreement.</p>
      <div className="my-4">
        <p>
          {loadingBaseportLocation.name}
          {loadingBaseportLocation.name && firstSignatory.actualDateTime && `, `}
          {printDate(firstSignatory.actualDateTime)}
        </p>
        <div style={{ minHeight: "80px" }}>
          <img className="w-1/2 mx-auto" data-testid="signature" src={firstSignatory.signature} />
        </div>
      </div>
      <UnderlineDashed />
      <p>Place, date and signature of authorised person</p>
    </div>
  );
};

export const CertificationSection: FunctionComponent<ChaftaCooDocument> = () => {
  return (
    <div className="border p-2 h-full">
      <div className="flex flex-col h-full">
        <h5 className="mb-2">14. Certification</h5>
        <p>
          On the basis of the control carried out, it is hereby certified that the information herein is correct and
          that the described goods comply with the origin requirements of the China-Australia Free Trade Agreement.
        </p>
        <div className="flex-grow">
          <img className="w-1/2 mx-auto" src={secondSignatoryAuthentication} />
        </div>
        <UnderlineDashed />
        <p>Place, date and signature of authorised person</p>
      </div>
    </div>
  );
};

export const ChaftaCooTemplate: FunctionComponent<ChaftaCooTemplateProps> = (props) => {
  const [isPrivacyOn, setIsPrivacyOn] = useState(false);
  const { document, handleObfuscation } = props;
  const documentData = getDocumentData(document);
  const qrCodeUrl = getQRCodeURL(document);
  const isW3C = vc.isSignedDocument(document);

  return (
    <Wrapper data-testid="chafta-coo-template">
      <div style={{ fontSize: "0.8em", width: "210mm" }} className="mx-auto">
        {!isW3C && (
          <div className="flex items-center">
            <div className="w-auto mr-2">
              <input
                className="align-middle"
                type="checkbox"
                id="privacySwitch"
                checked={isPrivacyOn}
                onChange={(e) => setIsPrivacyOn(e.target.checked)}
              />
            </div>
            <div className="w-auto">
              <label htmlFor="privacySwitch">Privacy Filter</label>
            </div>
          </div>
        )}
        <div className="text-center mt-4">
          <h1 style={{ fontSize: "0.9em" }} className="font-bold mb-4">
            CERTIFICATE OF ORIGIN
          </h1>
        </div>
        <div className="border">
          <div className="flex">
            <div className="w-1/2">
              <div className="flex flex-col h-full">
                <ExporterSection
                  {...documentData}
                  handleObfuscation={handleObfuscation}
                  isPrivacyOn={isPrivacyOn}
                  isW3C={isW3C}
                />
                <ProducerSection
                  {...documentData}
                  handleObfuscation={handleObfuscation}
                  isPrivacyOn={isPrivacyOn}
                  isW3C={isW3C}
                />
              </div>
            </div>
            <div className="w-1/2">
              <SummarySection {...documentData} />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <ImporterSection
                {...documentData}
                handleObfuscation={handleObfuscation}
                isPrivacyOn={isPrivacyOn}
                isW3C={isW3C}
              />
            </div>
            <div className="w-1/2">
              <OfficialUseSection />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <TransportSection
                {...documentData}
                handleObfuscation={handleObfuscation}
                isPrivacyOn={isPrivacyOn}
                isW3C={isW3C}
              />
            </div>
            <div className="w-1/2">
              <RemarksSection {...documentData} isW3C={isW3C} />
            </div>
          </div>
          <div>
            <TradeLineItemsSection {...documentData} isW3C={isW3C} />
          </div>
          <div className="flex">
            <div className="w-1/2">
              <DeclarationSection {...documentData} />
            </div>
            <div className="w-1/2">
              <CertificationSection />
            </div>
          </div>
        </div>
      </div>
      {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
    </Wrapper>
  );
};
