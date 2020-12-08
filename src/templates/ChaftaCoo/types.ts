import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface SignatoryAuthentication {
  signature?: string;
  actualDateTime?: string;
  statement?: string;
}

export interface PostalAddress {
  line1?: string;
  line2?: string;
  cityName?: string;
  postcode?: string;
  countrySubDivisionName?: string;
  countryCode?: string;
}

export interface ChaftaCooDocument extends Document {
  iD?: string;
  issueDateTime?: string;
  name?: string;
  firstSignatoryAuthentication?: SignatoryAuthentication;
  secondSignatoryAuthentication?: SignatoryAuthentication;
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

export interface Entity {
  iD?: string;
  name?: string;
  postalAddress?: PostalAddress;
}

export interface Country {
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

export interface Consignment {
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
