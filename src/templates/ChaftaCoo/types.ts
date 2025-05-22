import { v2, v3 } from "@tradetrust-tt/tradetrust";
import { SignedVerifiableCredential } from "@trustvc/trustvc";

export type ChaftaCooDocumentSchemaV2 = v2.OpenAttestationDocument & ChaftaCooDocument;
export type ChaftaCooDocumentSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: ChaftaCooDocument;
};
export type ChaftaCooDocumentSchemaW3C = SignedVerifiableCredential & {
  credentialSubject: ChaftaCooDocument;
};

export type ChaftaCooDocumentSchema =
  | ChaftaCooDocumentSchemaV2
  | ChaftaCooDocumentSchemaV3
  | ChaftaCooDocumentSchemaW3C;

export interface ChaftaCooDocument {
  iD?: string;
  issueDateTime?: string;
  name?: string;
  firstSignatoryAuthentication?: SignatoryAuthentication;
  issueLocation?: {
    iD?: string;
    name?: string;
  };
  issuer?: Entity;
  status?: string;
  isPreferential?: boolean;
  freeTradeAgreement?: string;
  supplyChainConsignment?: Consignment;
  links?: { self: { href: string } };

  // W3C only
  includedConsignmentItems?: W3CConsignmentItem[];
  cooId?: string;
  signature?: string;
  supplyChainConsignmentId?: string;
  supplyChainConsignmentInformation?: string;
  exportCountryCode?: string;
  exporterId?: string;
  exporterName?: string;
  exporterLine1?: string;
  exporterLine2?: string;
  exporterCityName?: string;
  exporterPostcode?: string;
  exporterCountrySubDivisionName?: string;
  exporterCountryCode?: string;
  importCountryCode?: string;
  importerId?: string;
  importerName?: string;
  importerLine1?: string;
  importerLine2?: string;
  importerCityName?: string;
  importerPostcode?: string;
  importerCountrySubDivisionName?: string;
  importerCountryCode?: string;
  loadingBaseportLocationId?: string;
  loadingBaseportLocationName?: string;
  mainCarriageTransportMovementId?: string;
  mainCarriageTransportMovementInformation?: string;
  usedTransportMeansName?: string;
  usedTransportMeansId?: string;
  departureDateTime?: string;
  unloadingBaseportLocationId?: string;
  unloadingBaseportLocationName?: string;
}

interface SignatoryAuthentication {
  signature?: string;
  actualDateTime?: string;
}

interface PostalAddress {
  line1?: string;
  line2?: string;
  cityName?: string;
  postcode?: string;
  countrySubDivisionName?: string;
  countryCode?: string;
}

interface Entity {
  iD?: string;
  name?: string;
  postalAddress?: PostalAddress;
}

interface Country {
  code?: string;
}

export interface ConsignmentItem {
  iD: string;
  information: string;
  crossBorderRegulatoryProcedure: {
    originCriteriaText: string;
  };
  manufacturer: Entity;
  tradeLineItems: TradeLineItem[];
}

export interface TradeLineItem {
  sequenceNumber?: number;
  invoiceReference?: {
    iD?: string;
    formattedIssueDateTime?: string;
    attachedBinaryFile?: {
      uRI?: string;
    };
  };
  tradeProduct?: {
    iD?: string;
    description?: string;
    harmonisedTariffCode?: {
      classCode?: string;
      className?: string;
    };
    originCountry?: Country;
  };
  transportPackages?: TransportPackage[];
}

interface Consignment {
  iD?: string;
  information?: string;
  exportCountry?: Country;
  exporter?: Entity;
  importCountry?: Country;
  importer?: Entity;
  includedConsignmentItems?: ConsignmentItem[];
  loadingBaseportLocation?: {
    iD?: string;
    name?: string;
  };
  mainCarriageTransportMovement?: {
    iD?: string;
    information?: string;
    usedTransportMeans?: {
      iD?: string;
      name?: string;
    };
    departureEvent?: {
      departureDateTime?: string;
    };
  };
  // transportPackages?: TransportPackage[];
  unloadingBaseportLocation?: {
    iD?: string;
    name?: string;
  };
}

export interface TransportPackage {
  iD?: string;
  grossVolume?: string;
  grossWeight?: string;
}

export interface W3CConsignmentItem {
  includedConsignmentItemsId?: string;
  includedConsignmentItemsInformation?: string;
  originCriteriaText?: string;
  manufacturerId?: string;
  manufacturerName?: string;
  manufacturerLine1?: string;
  manufacturerLine2?: string;
  manufacturerCityName?: string;
  manufacturerPostcode?: string;
  manufacturerCountrySubDivisionName?: string;
  manufacturerCountryCode?: string;
  tradeLineItems: W3CTradeLineItem[];
}

export interface W3CTradeLineItem {
  sequenceNumber?: number;
  invoiceReferenceId?: string;
  formattedIssueDateTime?: string;
  attachedBinaryFileUri?: string;
  tradeProductId?: string;
  tradeProductDescription?: string;
  harmonisedTariffclassCode?: string;
  harmonisedTariffclassName?: string;
  originCountryCode?: string;
  transportPackages?: W3CTransportPackage[];
}

export interface W3CTransportPackage {
  transportPackagesId?: string;
  transportPackagesGrossVolume?: string;
  transportPackagesGrossWeight?: string;
}
