import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../core/Wrapper";
import { SimpleCooDocumentSchema } from "./types";

export const SimpleCooTemplate: FunctionComponent<TemplateProps<SimpleCooDocumentSchema>> = ({ document }) => {
  const { credentialSubject } = document;

  const {
    documentName,
    exporterDetails,
    importerDetails,
    descriptionOfGoods,
    cooId,
    issueDateAndTime,
    issueIn,
    firstSignatoryAuthentication,
    secondSignatoryAuthentication,
  } = credentialSubject;

  const { exporterAddress, exportCountry, exporterName } = exporterDetails;
  const { importerAddress, importCountry, importerName } = importerDetails;
  const {
    includedConsignments,
    importerNameMarksAndNumber,
    hsCode,
    invoiceNumber,
    dateOfInvoice,
    loadingBaseportLocationName,
    mainCarriageTransportMovementId,
    numberAndKindOfPackage,
  } = descriptionOfGoods;

  const ExporterSection: FunctionComponent = () => {
    return (
      <>
        <h5 className="font-bold mb-4">Exporter&apos;s Name Address and Country</h5>
        <p>{exporterName}</p>
        <p>{exporterAddress.line1}</p>
        <p>
          {exporterAddress.line2} {exporterAddress.postalCode}
        </p>
        <p>{exportCountry}</p>
      </>
    );
  };

  const ImporterSection: FunctionComponent = () => {
    return (
      <>
        <h5 className="font-bold mb-4">Importer&apos;s Name Address and Country</h5>
        <p>{importerName}</p>
        <p>{importerAddress.line1}</p>
        <p>{importerAddress.line2}</p>
        <p>{importerAddress.postalCode}</p>
        <p>{importCountry}</p>
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

  const StandardSection: FunctionComponent<{ label: string; value: string }> = ({ label, value }) => {
    return (
      <>
        <h5 className="mb-4 font-bold">{label}</h5>
        <p>{value}</p>
      </>
    );
  };

  const DeclarationSection: FunctionComponent = () => {
    return (
      <>
        <h5 className="mb-4 font-bold">
          Declaration by the exporter or producer {firstSignatoryAuthentication?.statement}
        </h5>
        <p className="text-center border-b">{importerName}</p>
        <p className="mb-6 text-center">(Importing Party)</p>
      </>
    );
  };

  const FirstSignatureSection: FunctionComponent = () => {
    return (
      <>
        <p className="mb-4">
          comply with the origin requirements specified in the
          <br />
          {documentName}.<br />
          {loadingBaseportLocationName}, {firstSignatoryAuthentication?.actualDate}
        </p>
        <img className="w-1/2 mx-auto" src={firstSignatoryAuthentication?.signature} />
        <SignatureLine />
      </>
    );
  };

  const CertificationSection: FunctionComponent = () => {
    return (
      <div className="flex flex-col justify-between h-full">
        <h5 className="mb-4 font-bold">Certification</h5>
        <img className="w-1/2 mx-auto" src={secondSignatoryAuthentication?.signature} />
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
            <StandardSection label="Time and Date Issued" value={`${issueDateAndTime}`} />
          </div>
        </div>

        <div className="flex border-b">
          <div className="w-1/3 p-3 border-r">
            <StandardSection label="Included Consignments" value={includedConsignments} />
          </div>
          <div className="w-1/3 p-3 border-r">
            <StandardSection label="Importer Name Marks and Number" value={importerNameMarksAndNumber} />
          </div>
          <div className="w-1/3 p-3">
            <StandardSection label="H.S. Code" value={hsCode} />
          </div>
        </div>
        <div className="p-3 border-b">
          <StandardSection label="Number and Kind of package; Description of Goods" value={numberAndKindOfPackage} />
        </div>
        <div className="flex border-b">
          <div className="w-1/4 p-3 border-r">
            <StandardSection label="Invoice Number" value={invoiceNumber} />
          </div>
          <div className="w-1/4 p-3 border-r">
            <StandardSection label="Date of Invoice" value={dateOfInvoice} />
          </div>
          <div className="w-1/4 p-3 border-r">
            <StandardSection label="Loading Baseport Location Name" value={loadingBaseportLocationName} />
          </div>
          <div className="w-1/4 p-3">
            <StandardSection label="Main Carriage Transport Movement ID" value={mainCarriageTransportMovementId} />
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
