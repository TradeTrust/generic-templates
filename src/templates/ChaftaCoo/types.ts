import { v2, v3 } from "@tradetrust-tt/tradetrust";

export type ChaftaCooDocumentSchemaV2 = v2.OpenAttestationDocument & ChaftaCooDocument;

export type ChaftaCooDocumentSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: ChaftaCooDocument;
};

export type ChaftaCooDocumentSchema = ChaftaCooDocumentSchemaV2 | ChaftaCooDocumentSchemaV3;

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

interface ConsignmentItem {
  iD: string;
  information: string;
  crossBorderRegulatoryProcedure: {
    originCriteriaText: string;
  };
  manufacturer: Entity;
  tradeLineItems: TradeLineItem[];
}

interface TradeLineItem {
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

interface TransportPackage {
  iD?: string;
  grossVolume?: string;
  grossWeight?: string;
}
