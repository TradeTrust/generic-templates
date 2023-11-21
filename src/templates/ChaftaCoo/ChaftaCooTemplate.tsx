import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import { format } from "date-fns";
import React, { FunctionComponent, useState } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { ChaftaCooDocumentSchema, ChaftaCooDocument } from "./types";
import { getDocumentData } from "./../../utils";
import { secondSignatoryAuthentication } from "../../core/Signatures";

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
};

type ChaftaCooDocumentWithObfuscation = ChaftaCooDocument & ObfuscationHandling;
type ChaftaCooTemplateProps = TemplateProps<ChaftaCooDocumentSchema>;

const UnderlineDashed: FunctionComponent<React.ReactNode> = () => <div className="border-dashed border-b-2 my-2" />;

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
  handleObfuscation,
  isPrivacyOn,
}) => {
  const exporter = supplyChainConsignment?.exporter;
  const postalAddress = exporter?.postalAddress;
  const privacyPath = ["supplyChainConsignment.exporter"];

  return (
    <div className="border p-2 flex-1">
      <h5 className="mb-2">
        1. Exporter’s name, address and country:{" "}
        <PrivacyButton isPrivacyOn={isPrivacyOn} handleObfuscation={handleObfuscation} paths={privacyPath} />
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
  handleObfuscation,
  isPrivacyOn,
}) => {
  const consignmentItem = supplyChainConsignment?.includedConsignmentItems;
  const firstConsignmentItem = consignmentItem ? consignmentItem[0] : undefined;
  const manufacturer = firstConsignmentItem?.manufacturer;
  const postalAddress = manufacturer?.postalAddress;
  const privacyPath = consignmentItem?.map(
    (_item, index) => `supplyChainConsignment.includedConsignmentItems[${index}].manufacturer`
  );

  return (
    <div className="border p-2 flex-1">
      <h5 className="mb-2">
        2. Producer’s name and address (if known):{" "}
        <PrivacyButton isPrivacyOn={isPrivacyOn} handleObfuscation={handleObfuscation} paths={privacyPath} />
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

export const SummarySection: FunctionComponent<ChaftaCooDocument> = ({ iD }) => {
  return (
    <div className="border p-2 h-full">
      <h5 className="mb-2">Certificate No.: {getValue(iD)}</h5>
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
  handleObfuscation,
  isPrivacyOn,
}) => {
  const importer = supplyChainConsignment?.importer;
  const postalAddress = importer?.postalAddress;
  const privacyPath = ["supplyChainConsignment.importer"];

  return (
    <div className="border p-2 h-full">
      <h5 className="mb-2">
        3. Importer’s name, address and country (if known):{" "}
        <PrivacyButton isPrivacyOn={isPrivacyOn} handleObfuscation={handleObfuscation} paths={privacyPath} />
      </h5>
      <p>{importer?.name}</p>
      <p>{postalAddress?.line1}</p>
      <p>{postalAddress?.line2}</p>
      <p>{postalAddress?.cityName}</p>
      <p>
        {postalAddress?.countrySubDivisionName} {postalAddress?.postcode} {postalAddress?.countryCode}
      </p>
    </div>
  );
};

export const RemarksSection: FunctionComponent<ChaftaCooDocument> = ({ supplyChainConsignment }) => {
  const consignmentItems = supplyChainConsignment?.includedConsignmentItems;

  return (
    <div className="border p-2 h-full">
      <h5 className="mb-2">5. Remarks:</h5>
      {supplyChainConsignment?.iD && <p>Consignment Ref: {getValue(supplyChainConsignment?.iD)}</p>}
      <p>{supplyChainConsignment?.information}</p>
      {consignmentItems && consignmentItems?.length > 0 && (
        <ul className="list-disc pl-4">
          {consignmentItems?.map((item, index) => {
            return (
              <li key={index}>
                <p>{item.information}</p>
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
  handleObfuscation,
  isPrivacyOn,
}) => {
  const loadingPortLocation = supplyChainConsignment?.loadingBaseportLocation;
  const unloadingBaseportLocation = supplyChainConsignment?.unloadingBaseportLocation;
  const transportMovement = supplyChainConsignment?.mainCarriageTransportMovement;
  const departureEvent = transportMovement?.departureEvent;
  const privacyPath = [
    "supplyChainConsignment.loadingBaseportLocation",
    "supplyChainConsignment.mainCarriageTransportMovement",
  ];

  return (
    <div className="border p-2 h-full">
      <h5 className="mb-2">
        4. Means of transport and route (if known):{" "}
        <PrivacyButton isPrivacyOn={isPrivacyOn} handleObfuscation={handleObfuscation} paths={privacyPath} />
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

export const TradeLineItemsSection: FunctionComponent<ChaftaCooDocument> = ({ supplyChainConsignment }) => {
  const consignmentItems = supplyChainConsignment?.includedConsignmentItems;
  const lineItems: TradeLineItemData[] = [];

  consignmentItems?.forEach((consignmentItem) => {
    const { tradeLineItems } = consignmentItem;
    tradeLineItems?.forEach((tradeLineItem) => {
      let firstLineItem = true;
      const { transportPackages, tradeProduct } = tradeLineItem;
      transportPackages?.forEach((transportPackage) => {
        function showIfFirstItemInTradeLineItem<T>(value: T): T | undefined {
          if (firstLineItem) return value;
        }
        lineItems.push({
          sn: showIfFirstItemInTradeLineItem(tradeLineItem.sequenceNumber),
          marks: getValue(transportPackage.iD),
          description: showIfFirstItemInTradeLineItem(tradeProduct?.description),
          code: showIfFirstItemInTradeLineItem(tradeProduct?.harmonisedTariffCode?.classCode),
          origin: showIfFirstItemInTradeLineItem(consignmentItem.crossBorderRegulatoryProcedure.originCriteriaText),
          quantity: `${transportPackage.grossVolume}, ${transportPackage.grossWeight}`,
          invoiceDate: printDate(tradeLineItem.invoiceReference?.formattedIssueDateTime),
          invoiceNo: getValue(tradeLineItem.invoiceReference?.iD),
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
}) => {
  const importer = supplyChainConsignment?.importer;

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
          {supplyChainConsignment?.loadingBaseportLocation?.name}
          {supplyChainConsignment?.loadingBaseportLocation?.name &&
            firstSignatoryAuthentication?.actualDateTime &&
            `, `}
          {printDate(firstSignatoryAuthentication?.actualDateTime)}
        </p>
        <div style={{ minHeight: "80px" }}>
          <img className="w-1/2 mx-auto" data-testid="signature" src={firstSignatoryAuthentication?.signature} />
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
  const qrCodeUrl = documentData.links?.self.href;

  return (
    <Wrapper data-testid="chafta-coo-template">
      <div style={{ fontSize: "0.8em", width: "210mm" }} className="mx-auto">
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
        <div className="text-center mt-4">
          <h1 style={{ fontSize: "0.9em" }} className="font-bold mb-4">
            CERTIFICATE OF ORIGIN
          </h1>
        </div>
        <div className="border">
          <div className="flex">
            <div className="w-1/2">
              <div className="flex flex-col h-full">
                <ExporterSection {...documentData} handleObfuscation={handleObfuscation} isPrivacyOn={isPrivacyOn} />
                <ProducerSection {...documentData} handleObfuscation={handleObfuscation} isPrivacyOn={isPrivacyOn} />
              </div>
            </div>
            <div className="w-1/2">
              <SummarySection {...documentData} />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <ImporterSection {...documentData} handleObfuscation={handleObfuscation} isPrivacyOn={isPrivacyOn} />
            </div>
            <div className="w-1/2">
              <OfficialUseSection />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <TransportSection {...documentData} handleObfuscation={handleObfuscation} isPrivacyOn={isPrivacyOn} />
            </div>
            <div className="w-1/2">
              <RemarksSection {...documentData} />
            </div>
          </div>
          <div>
            <TradeLineItemsSection {...documentData} />
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
