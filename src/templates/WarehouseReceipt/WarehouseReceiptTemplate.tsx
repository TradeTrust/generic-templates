import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../core/Wrapper";
import { getDocumentData } from "../../utils";
import { WarehouseReceiptDocument, WarehouseReceiptSchema } from "./types";

const HeaderSection = (document: WarehouseReceiptDocument): JSX.Element => {
  const { spl } = document;
  return (
    <div className="flex justify-end items-end">
      <p>
        <strong>SPL </strong>
        {spl}
      </p>
    </div>
  );
};

const LogoSection = (document: WarehouseReceiptDocument): JSX.Element => {
  const { logo } = document;
  return (
    <div className="flex justify-center items-center">
      {logo && <img data-testid="logo" className="w-[150px]" src={logo} />}
    </div>
  );
};

const WarehouseReceiptDetailsSection = (document: WarehouseReceiptDocument): JSX.Element => {
  const { warehouseReceiptDetails } = document;
  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2">
            <strong>Warehouse Receipt</strong>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2">{warehouseReceiptDetails?.warehouseReceipt}</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <strong>Issuance Date</strong>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">{warehouseReceiptDetails?.issuanceDate}</div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <strong>Our Ref</strong>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">{warehouseReceiptDetails?.ourRef}</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <strong>Rent Start Date</strong>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">{warehouseReceiptDetails?.rentStartDate}</div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <strong>Your Ref(s)</strong>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">{warehouseReceiptDetails?.yourRef}</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <strong>Commodity</strong>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">{warehouseReceiptDetails?.commodity}</div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <strong>Document Type</strong>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">{warehouseReceiptDetails?.documentType}</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-full border-black border">
          <div className="p-2">
            <p>
              <strong>TO THE ORDER OF: </strong>
              {warehouseReceiptDetails?.order}
            </p>

            <p>
              <strong>FOR THE ACCOUNT OF: </strong>
              {warehouseReceiptDetails?.account}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoodsSection = (document: WarehouseReceiptDocument): JSX.Element => {
  const { goods, totalNetWeight } = document;
  const packages = goods || [];
  const renderedBrand = packages.map((pkg, index) => <p key={index}>{pkg.brand}</p>);
  const renderedPiles = packages.map((pkg, index) => <p key={index}>{pkg.piles}</p>);
  const renderedBundles = packages.map((pkg, index) => <p key={index}>{pkg.bundles}</p>);
  const renderedPieces = packages.map((pkg, index) => <p key={index}>{pkg.pieces}</p>);
  const renderedNetWeight = packages.map((pkg, index) => <p key={index}>{pkg.netWeight}</p>);
  const renderedGrossWeight = packages.map((pkg, index) => <p key={index}>{pkg.grossWeight}</p>);
  return (
    <div className="border-black border">
      <div className="flex">
        <div style={{ width: "36%" }} className="border-black border">
          <div className="p-2">
            <strong>Brand / Shape</strong>
          </div>
        </div>
        <div style={{ width: "10%" }} className="border-black border">
          <div className="p-2">
            <strong>Piles</strong>
          </div>
        </div>
        <div style={{ width: "14%" }} className="border-black border">
          <div className="p-2">
            <strong>Bundles</strong>
          </div>
        </div>
        <div style={{ width: "12%" }} className="border-black border">
          <div className="p-2">
            <strong>Pieces</strong>
          </div>
        </div>
        <div style={{ width: "14%" }} className="border-black border">
          <div className="p-2">
            <strong>Net Weight (MT)</strong>
          </div>
        </div>
        <div style={{ width: "14%" }} className="border-black border">
          <div className="p-2">
            <strong>Gross Weight (MT)</strong>
          </div>
        </div>
      </div>
      <div className="flex">
        <div style={{ width: "36%" }} className="border-black border">
          <div className="p-2">{renderedBrand}</div>
        </div>
        <div style={{ width: "10%" }} className="border-black border">
          <div className="p-2">{renderedPiles}</div>
        </div>
        <div style={{ width: "14%" }} className="border-black border">
          <div className="p-2">{renderedBundles}</div>
        </div>
        <div style={{ width: "12%" }} className="border-black border">
          <div className="p-2">{renderedPieces}</div>
        </div>
        <div style={{ width: "14%" }} className="border-black border">
          <div className="p-2">{renderedNetWeight}</div>
        </div>
        <div style={{ width: "14%" }} className="border-black border">
          <div className="p-2">{renderedGrossWeight}</div>
        </div>
      </div>
      <div className="flex">
        <div style={{ width: "60%" }} className="border-black border">
          <div className="p-2">
            <strong>Total Net Weight (MTs)</strong>
          </div>
        </div>
        <div style={{ width: "40%" }} className="border-black border">
          <div className="p-2">{totalNetWeight}</div>
        </div>
      </div>
    </div>
  );
};

const WarehouseAddressSection = (document: WarehouseReceiptDocument): JSX.Element => {
  const { warehouseAddress } = document;
  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <strong>Warehouse Address</strong>
          </div>
        </div>
        <div className="w-3/4 border-black border">
          <div className="p-2">{warehouseAddress}</div>
        </div>
      </div>
    </div>
  );
};

const MarkingsSection = (document: WarehouseReceiptDocument): JSX.Element => {
  const { markings } = document;
  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <strong>Markings / Remarks</strong>
          </div>
        </div>
        <div className="w-3/4 border-black border">
          <div className="p-2">{markings}</div>
        </div>
      </div>
    </div>
  );
};

const StorageAndServicesTermsSection = (document: WarehouseReceiptDocument): JSX.Element => {
  const { storageAndServicesTerms } = document;
  return (
    <div className="flex">
      <div className="p-2">
        <div style={{ fontSize: "0.8em" }}>{storageAndServicesTerms}</div>
      </div>
    </div>
  );
};

const SignatureSection = (document: WarehouseReceiptDocument): JSX.Element => {
  const { signature } = document;
  return (
    <div className="flex justify-center items-center">
      <strong>Signature of Issuer: </strong>
      {signature && <img data-testid="signature" className="w-[150px]" src={signature} />}
    </div>
  );
};

const TermsAndConditionsSection = (document: WarehouseReceiptDocument): JSX.Element => {
  const { termsAndConditions } = document;
  return (
    <div className="flex">
      <div className="p-2">
        <div style={{ fontSize: "0.8em" }}>{termsAndConditions}</div>
      </div>
    </div>
  );
};

export const WarehouseReceiptTemplate: FunctionComponent<TemplateProps<WarehouseReceiptSchema>> = ({ document }) => {
  const documentData = getDocumentData(document) as WarehouseReceiptDocument;
  return (
    <Wrapper data-testid="warehouse-receipt-template">
      {HeaderSection(documentData)}
      <div className="mb-8">{LogoSection(documentData)}</div>
      <div className="mb-8">{WarehouseReceiptDetailsSection(documentData)}</div>
      <div className="mb-8">{GoodsSection(documentData)}</div>
      <div className="mb-8">{WarehouseAddressSection(documentData)}</div>
      <div className="mb-8">{MarkingsSection(documentData)}</div>
      <div className="mb-8">
        <pre className="font-sans whitespace-pre-line">{StorageAndServicesTermsSection(documentData)}</pre>
      </div>
      <div className="mb-8">{SignatureSection(documentData)}</div>
      <div className="break-before-page">
        <pre className="font-sans whitespace-pre-line">{TermsAndConditionsSection(documentData)}</pre>
      </div>
    </Wrapper>
  );
};
