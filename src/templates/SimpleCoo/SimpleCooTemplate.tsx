import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../core/Wrapper";
import { SimpleCooDocumentSchema } from "./types";
import { getDocumentData } from "./../../utils";
import { secondSignatoryAuthentication } from "../../core/Signatures";

export const SimpleCooTemplate: FunctionComponent<TemplateProps<SimpleCooDocumentSchema>> = ({ document }) => {
  const documentData = getDocumentData(document);

  const {
    documentName,
    exporterDetails,
    importerDetails,
    descriptionOfGoods,
    cooId,
    issueDateAndTime,
    issueIn,
    firstSignatoryAuthentication,
  } = documentData;

  const ExporterSection: FunctionComponent = () => {
    return (
      <>
        <h5 className="font-bold mb-4">Exporter&apos;s Name Address and Country</h5>
        <p>{exporterDetails?.exporterName}</p>
        <p>{exporterDetails?.exporterAddress.line1}</p>
        <p>
          {exporterDetails?.exporterAddress.line2} {exporterDetails?.exporterAddress.postalCode}
        </p>
        <p>{exporterDetails?.exportCountry}</p>
      </>
    );
  };

  const ImporterSection: FunctionComponent = () => {
    return (
      <>
        <h5 className="font-bold mb-4">Importer&apos;s Name Address and Country</h5>
        <p>{importerDetails?.importerName}</p>
        <p>{importerDetails?.importerAddress.line1}</p>
        <p>{importerDetails?.importerAddress.line2}</p>
        <p>{importerDetails?.importerAddress.postalCode}</p>
        <p>{importerDetails?.importCountry}</p>
      </>
    );
  };

  const CooSection: FunctionComponent = () => {
    return (
      <>
        <div className="mb-3">
          <h5 className="font-bold">Certificate of Origin</h5>
          <p>{documentName}</p>
        </div>
        <div className="flex mb-3">
          <h5 className="font-bold">COO ID: </h5>
          <p className="ml-1">{cooId}</p>
        </div>
        <div className="flex">
          <h5 className="font-bold">Issued in: </h5>
          <p className="ml-1">{issueIn}</p>
        </div>
      </>
    );
  };

  const StandardSection: FunctionComponent<{
    label: string;
    value?: string;
  }> = ({ label, value }) => {
    return (
      <>
        <h5 className="mb-4 font-bold">{label}</h5>
        {value && <p>{value}</p>}
      </>
    );
  };

  const DeclarationSection: FunctionComponent = () => {
    return (
      <>
        <h5 className="mb-4 font-bold">Declaration by the exporter or producer</h5>
        <h5 className="mb-4 font-bold">{firstSignatoryAuthentication?.statement}</h5>
        <div className="text-center py-8">
          <p className="border-b border-dashed">{importerDetails?.importerName}</p>
          <p className="mb-6 text-center">(Importing Party)</p>
        </div>
      </>
    );
  };

  const FirstSignatureSection: FunctionComponent = () => {
    return (
      <>
        {documentName && <p className="mb-4">comply with the origin requirements specified in the {documentName}.</p>}
        <p>
          {descriptionOfGoods?.loadingBaseportLocationName && `${descriptionOfGoods?.loadingBaseportLocationName}, `}{" "}
          {firstSignatoryAuthentication?.actualDate}
        </p>
        {firstSignatoryAuthentication && (
          <img data-testid="signature-first" className="w-1/2 mx-auto" src={firstSignatoryAuthentication?.signature} />
        )}
        <SignatureLine />
      </>
    );
  };

  const CertificationSection: FunctionComponent = () => {
    return (
      <div className="flex flex-col justify-between h-full">
        <h5 className="mb-4 font-bold">Certification</h5>
        <img data-testid="signature-second" className="w-1/2 mx-auto" src={secondSignatoryAuthentication} />
        <div>
          <SignatureLine />
        </div>
      </div>
    );
  };

  const SignatureLine: FunctionComponent = () => {
    return (
      <>
        <div className="border-dotted border-t-2 my-2" />
        <p className="text-center">Place, date and signature of authorised person</p>
      </>
    );
  };

  return (
    <Wrapper>
      <h3 className="text-center text-2xl mb-3 text-cloud-900">Certificate of Origin</h3>
      <div style={{ fontSize: "0.8em", width: "210mm" }} className="text-cloud-900 mx-auto border border-cloud-300">
        <div className="flex border-b">
          <div className="w-2/3 p-3 border-r">
            <ExporterSection />
          </div>
          <div className="w-1/3 p-3">
            <CooSection />
          </div>
        </div>

        <div className="flex border-b">
          <div className="w-2/3 p-3 border-r">
            <ImporterSection />
          </div>
          <div className="w-1/3 p-3">
            <StandardSection label="Time and Date Issued" value={issueDateAndTime} />
          </div>
        </div>

        <div className="flex border-b">
          <div className="w-1/3 p-3 border-r">
            <StandardSection label="Included Consignments" value={descriptionOfGoods?.includedConsignments} />
          </div>
          <div className="w-1/3 p-3 border-r">
            <StandardSection
              label="Importer Name Marks and Number"
              value={descriptionOfGoods?.importerNameMarksAndNumber}
            />
          </div>
          <div className="w-1/3 p-3">
            <StandardSection label="H.S. Code" value={descriptionOfGoods?.hsCode} />
          </div>
        </div>
        <div className="p-3 border-b">
          <StandardSection
            label="Number and Kind of package; Description of Goods"
            value={descriptionOfGoods?.numberAndKindOfPackage}
          />
        </div>
        <div className="flex border-b">
          <div className="w-1/4 p-3 border-r">
            <StandardSection label="Invoice Number" value={descriptionOfGoods?.invoiceNumber} />
          </div>
          <div className="w-1/4 p-3 border-r">
            <StandardSection label="Date of Invoice" value={descriptionOfGoods?.dateOfInvoice} />
          </div>
          <div className="w-1/4 p-3 border-r">
            <StandardSection
              label="Loading Baseport Location Name"
              value={descriptionOfGoods?.loadingBaseportLocationName}
            />
          </div>
          <div className="w-1/4 p-3">
            <StandardSection
              label="Main Carriage Transport Movement ID"
              value={descriptionOfGoods?.mainCarriageTransportMovementId}
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 p-3 border-r">
            <div>
              <DeclarationSection />
            </div>
            <div>
              <FirstSignatureSection />
            </div>
          </div>
          <div className="w-1/2 p-3">
            <CertificationSection />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
