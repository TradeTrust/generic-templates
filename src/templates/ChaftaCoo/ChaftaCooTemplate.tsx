import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { format } from "date-fns";
import React, { FunctionComponent, useState } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { ChaftaCooDocument } from "./types";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getValue = (id?: string) => {
  if (!id) return undefined;
  const values = id.split(":");
  return values[values.length - 1];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const printDate = (date?: string) => {
  if (!date) return undefined;
  return format(new Date(date), "yyyy-MM-dd");
};

interface HasPrivacyToggle {
  isPrivacyOn?: boolean;
}

interface PrivacyButtonProps {
  isPrivacyOn?: boolean;
  handleObfuscation: (path: string) => void;
  paths?: string[];
}

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

export const ExporterSection: FunctionComponent<TemplateProps<ChaftaCooDocument> & HasPrivacyToggle> = ({
  document,
  handleObfuscation,
  isPrivacyOn,
}) => {
  const exporter = document.supplyChainConsignment?.exporter;
  const postalAddress = exporter?.postalAddress;

  const privacyPath = ["supplyChainConsignment.exporter"];

  return (
    <div className="border p-2">
      <div>
        1. Exporter’s name, address and country:{" "}
        <PrivacyButton isPrivacyOn={isPrivacyOn} handleObfuscation={handleObfuscation} paths={privacyPath} />
      </div>
      <div>{exporter?.name}</div>
      <div>{postalAddress?.line1}</div>
      <div>{postalAddress?.line2}</div>
      <div>{postalAddress?.cityName}</div>
      <div>
        {postalAddress?.countrySubDivisionName} {postalAddress?.postcode} {postalAddress?.countryCode}
      </div>
      <div>ABN {getValue(exporter?.iD)}</div>
    </div>
  );
};

export const ProducerSection: FunctionComponent<TemplateProps<ChaftaCooDocument> & HasPrivacyToggle> = ({
  document,
  isPrivacyOn,
  handleObfuscation,
}) => {
  const consignmentItem = document.supplyChainConsignment?.includedConsignmentItems;
  const firstConsignmentItem = consignmentItem ? consignmentItem[0] : undefined;
  const manufacturer = firstConsignmentItem?.manufacturer;
  const postalAddress = manufacturer?.postalAddress;
  const privacyPath = consignmentItem?.map(
    (_item, index) => `supplyChainConsignment.includedConsignmentItems[${index}].manufacturer`
  );
  return (
    <div className="border p-2">
      <div>
        2. Producer’s name and address (if known):{" "}
        <PrivacyButton isPrivacyOn={isPrivacyOn} handleObfuscation={handleObfuscation} paths={privacyPath} />
      </div>
      <div>{manufacturer?.name}</div>
      <div>
        {postalAddress?.line1}
        {", "}
        {postalAddress?.cityName},
      </div>
      <div>
        {postalAddress?.countrySubDivisionName} {postalAddress?.postcode} {postalAddress?.countryCode}
      </div>
    </div>
  );
};

export const SummarySection: FunctionComponent<TemplateProps<ChaftaCooDocument> & HasPrivacyToggle> = ({
  document,
}) => {
  return (
    <div className="border p-2 h-full text-center">
      <div>Certificate No.: {getValue(document.iD)}</div>
      <div className="p-2">
        <div>CERTIFICATE OF ORIGIN</div>
        <div>Form for China-Australia Free Trade Agreement</div>
      </div>
      <div>Issued in: AUSTRALIA</div>
    </div>
  );
};

export const OfficialUseSection: FunctionComponent<TemplateProps<ChaftaCooDocument> & HasPrivacyToggle> = () => {
  return (
    <div className="border p-2 h-full">
      <div>For official use only:</div>
    </div>
  );
};

export const ImporterSection: FunctionComponent<TemplateProps<ChaftaCooDocument> & HasPrivacyToggle> = ({
  document,
  isPrivacyOn,
  handleObfuscation,
}) => {
  const importer = document.supplyChainConsignment?.importer;
  const postalAddress = importer?.postalAddress;
  const privacyPath = ["supplyChainConsignment.importer"];
  return (
    <div className="border p-2">
      <div>
        3. Importer’s name, address and country (if known):{" "}
        <PrivacyButton isPrivacyOn={isPrivacyOn} handleObfuscation={handleObfuscation} paths={privacyPath} />
      </div>
      <div>{importer?.name}</div>
      <div>{postalAddress?.line1}</div>
      <div>{postalAddress?.line2}</div>
      <div>{postalAddress?.cityName}</div>
      <div>
        {postalAddress?.countrySubDivisionName} {postalAddress?.postcode} {postalAddress?.countryCode}
      </div>
    </div>
  );
};

export const RemarksSection: FunctionComponent<TemplateProps<ChaftaCooDocument> & HasPrivacyToggle> = ({
  document,
}) => {
  const supplyChainConsignment = document.supplyChainConsignment;
  const consignmentItems = supplyChainConsignment?.includedConsignmentItems;
  return (
    <div className="border p-2 h-full">
      <div>5. Remarks:</div>
      <div>Consignment Ref: {getValue(supplyChainConsignment?.iD)}</div>
      <div>{supplyChainConsignment?.information}</div>
      {consignmentItems?.map((item, index) => {
        return <div key={index}>- {item.information}</div>;
      })}
    </div>
  );
};

export const TransportSection: FunctionComponent<TemplateProps<ChaftaCooDocument> & HasPrivacyToggle> = ({
  document,
  isPrivacyOn,
  handleObfuscation,
}) => {
  const supplyChainConsignment = document.supplyChainConsignment;
  const loadingPortLocation = supplyChainConsignment?.loadingBaseportLocation;
  const transportMovement = supplyChainConsignment?.mainCarriageTransportMovement;
  const departureEvent = transportMovement?.departureEvent;
  const privacyPath = [
    "supplyChainConsignment.loadingBaseportLocation",
    "supplyChainConsignment.mainCarriageTransportMovement",
  ];
  return (
    <div className="border p-2 h-full">
      <div>
        4. Means of transport and route (if known){" "}
        <PrivacyButton isPrivacyOn={isPrivacyOn} handleObfuscation={handleObfuscation} paths={privacyPath} />
      </div>
      <div>Departure Date: {printDate(departureEvent?.departureDateTime)}</div>
      <div>Vessel/Flight/Train/Vehicle No.: {getValue(transportMovement?.usedTransportMeans?.iD)}</div>
      <div>Port of loading: {getValue(loadingPortLocation?.iD)}</div>
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

export const TradeLineItemsSection: FunctionComponent<TemplateProps<ChaftaCooDocument> & HasPrivacyToggle> = ({
  document,
}) => {
  const supplyChainConsignment = document.supplyChainConsignment;
  const consignmentItems = supplyChainConsignment?.includedConsignmentItems;

  const lineItems: TradeLineItemData[] = [];

  consignmentItems?.forEach((consignmentItem) => {
    const { tradeLineItems } = consignmentItem;
    tradeLineItems.forEach((tradeLineItem) => {
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
        <div style={{ width: "10%" }} className="p-2 border-l border-r border-b-2">
          6. Item number (max. 20)
        </div>
        <div style={{ width: "20%" }} className="p-2 border-l border-r border-b-2">
          7. Marks and numbers on packages (optional)
        </div>
        <div style={{ width: "20%" }} className="p-2 border-l border-r border-b-2">
          8. Number and kind of packages; description of goods
        </div>
        <div style={{ width: "10%" }} className="p-2 border-l border-r border-b-2">
          9. HS code (6 digit code)
        </div>
        <div style={{ width: "10%" }} className="p-2 border-l border-r border-b-2">
          10. Origin criterion
        </div>
        <div style={{ width: "15%" }} className="p-2 border-l border-r border-b-2">
          11. Gross or net weight or odiver quantity (e.g. Quantity Unit, litres, m³.)
        </div>
        <div style={{ width: "15%" }} className="p-2 border-l border-r border-b-2">
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

export const DeclarationSection: FunctionComponent<TemplateProps<ChaftaCooDocument> & HasPrivacyToggle> = ({
  document,
}) => {
  const importer = document.supplyChainConsignment?.importer;
  const { firstSignatoryAuthentication, supplyChainConsignment } = document;
  return (
    <div className="border h-full">
      <div className="p-2">
        13. Declaration by the exporter or producer The undersigned hereby declares that the above-stated information is
        correct and that the goods exported to
      </div>

      <div className="text-center my-4">
        <div>{importer?.name}</div>
        <div className="border-b-2" />
        <div>(Importing Party)</div>
      </div>

      <div className="p-2">
        <div className="my-4">
          comply with the origin requirements specified in the ChinaAustralia Free Trade Agreement.
        </div>
        <div className="my-2">
          {supplyChainConsignment?.loadingBaseportLocation?.name},{" "}
          {printDate(firstSignatoryAuthentication?.actualDateTime)}
        </div>
        <div className="w-1/2 mx-auto">
          <img data-testid="signature" src={firstSignatoryAuthentication?.signature} />
        </div>
        <div>Place, date and signature of authorised person</div>
      </div>
    </div>
  );
};

export const CertificationSection: FunctionComponent<TemplateProps<ChaftaCooDocument> & HasPrivacyToggle> = ({
  document,
}) => {
  const { secondSignatoryAuthentication } = document;
  return (
    <div className="border p-2 h-full">
      <div className="flex flex-col h-full">
        <div>14. Certification</div>
        <div className="flex-grow">
          <img className="w-1/2 mx-auto" src={secondSignatoryAuthentication?.signature} />
        </div>
        <div className="border-t border-dashed mb-2" />
        <div>Place, date and signature of authorised person</div>
      </div>
    </div>
  );
};

export const ChaftaCooTemplate: FunctionComponent<TemplateProps<ChaftaCooDocument> & HasPrivacyToggle> = (props) => {
  const [isPrivacyOn, setIsPrivacyOn] = useState(false);
  const { document } = props;
  const qrCodeUrl = document?.links?.self.href;

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
              <ExporterSection {...props} isPrivacyOn={isPrivacyOn} />
              <ProducerSection {...props} isPrivacyOn={isPrivacyOn} />
            </div>
            <div className="w-1/2">
              <SummarySection {...props} isPrivacyOn={isPrivacyOn} />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <ImporterSection {...props} isPrivacyOn={isPrivacyOn} />
            </div>
            <div className="w-1/2">
              <OfficialUseSection {...props} isPrivacyOn={isPrivacyOn} />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <TransportSection {...props} isPrivacyOn={isPrivacyOn} />
            </div>
            <div className="w-1/2">
              <RemarksSection {...props} isPrivacyOn={isPrivacyOn} />
            </div>
          </div>
          <div>
            <TradeLineItemsSection {...props} isPrivacyOn={isPrivacyOn} />
          </div>
          <div className="flex">
            <div className="w-1/2">
              <DeclarationSection {...props} isPrivacyOn={isPrivacyOn} />
            </div>
            <div className="w-1/2">
              <CertificationSection {...props} isPrivacyOn={isPrivacyOn} />
            </div>
          </div>
        </div>
      </div>
      {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
    </Wrapper>
  );
};
