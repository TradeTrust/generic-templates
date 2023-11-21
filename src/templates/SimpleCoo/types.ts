import { v2, v3 } from "@tradetrust-tt/tradetrust";

export type SimpleCooDocumentSchemaV2 = v2.OpenAttestationDocument & SimpleCooDocument;

export type SimpleCooDocumentSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: SimpleCooDocument;
};

export type SimpleCooDocumentSchema = SimpleCooDocumentSchemaV2 | SimpleCooDocumentSchemaV3;
export interface SimpleCooDocument {
  documentName: string;
  issueIn?: string;
  issueDateAndTime?: string;
  cooId?: string;
  exporterDetails: ExporterDetails;
  importerDetails: ImporterDetails;
  descriptionOfGoods: DescriptionOfGoods;
  firstSignatoryAuthentication?: SignatoryAuthentication;
  secondSignatoryAuthentication?: SignatoryAuthentication;
}

interface ExporterDetails {
  exportCountry?: string;
  exporterName?: string;
  exporterAddress: Address;
}

interface ImporterDetails {
  importCountry?: string;
  importerName?: string;
  importerAddress: Address;
}

interface Address {
  line1?: string;
  line2?: string;
  postalCode?: string;
}

interface DescriptionOfGoods {
  includedConsignments: string;
  importerNameMarksAndNumber: string;
  numberAndKindOfPackage: string;
  hsCode: string;
  invoiceNumber: string;
  dateOfInvoice: string;
  loadingBaseportLocationName: string;
  mainCarriageTransportMovementId: string;
}

interface SignatoryAuthentication {
  signature?: string;
  actualDate?: string;
  statement?: string;
}
