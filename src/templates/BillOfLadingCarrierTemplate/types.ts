import { v2 } from "@tradetrust-tt/tradetrust";
import { SignedVerifiableCredential } from "@trustvc/trustvc";

export type BillOfLadingCarrierSchemaV2 = v2.OpenAttestationDocument & BillOfLadingCarrierDocument;
export type BillOfLadingCarrierSchemaW3C = SignedVerifiableCredential & {
  credentialSubject: BillOfLadingCarrierDocument;
};

export type BillOfLadingCarrierSchema = BillOfLadingCarrierSchemaV2 | BillOfLadingCarrierSchemaW3C;

export interface BillOfLadingCarrierDocument {
  scac: string;
  blNumber: string;
  onwardInlandRouting?: string;
  vessel?: string;
  voyageNo?: string;
  portOfLoading?: string;
  portOfDischarge?: string;
  carrierName?: string;
  packages?: PackageItem[] | W3CPackageItem[];
  shipper?: {
    name?: string;
    address?: {
      street: string;
      country: string;
    };
  };
  consignee?: {
    toOrderOfText?: string;
    name?: string;
  };
  notifyParty?: { name?: string };
  placeOfReceipt?: string;
  placeOfDelivery?: string;
  links?: {
    self: {
      href: string;
    };
  };
  logo?: string;
  carrierReceipt?: string;
  placeOfIssueBL?: string;
  numberOfOriginalBL?: string;
  dateOfIssueBL?: string;
  signedForCarrierText?: string;
  carrierSignature?: string;
  signForTermsAndCondition?: string;
  shippedOnBoardDate?: string;
  termsOfCarriage?: string;

  // W3C only
  shipperName?: string;
  shipperAddressStreet?: string;
  shipperAddressCountry?: string;
  toOrderOfText?: string;
  consigneeName?: string;
  notifyPartyName?: string;
}

export interface PackageItem {
  description: string;
  weight: string;
  measurement: string;
}

export interface W3CPackageItem {
  packagesDescription: string;
  packagesWeight: string;
  packagesMeasurement: string;
}
