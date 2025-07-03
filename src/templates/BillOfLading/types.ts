import { v2, v3, SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export type BillOfLadingSchemaV2 = v2.OpenAttestationDocument & BillOfLadingDocument;
export type BillOfLadingSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: BillOfLadingDocument;
};
export type BillOfLadingSchemaW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & BillOfLadingDocument;
};

export type BillOfLadingSchema = BillOfLadingSchemaV2 | BillOfLadingSchemaV3 | BillOfLadingSchemaW3C;

export interface BillOfLadingDocument {
  scac: string;
  blNumber: string;
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
  consignee?: { name?: string };
  notifyParty?: { name?: string };
  placeOfReceipt?: string;
  placeOfDelivery?: string;
  links?: {
    self: {
      href: string;
    };
  };

  // W3C only
  shipperName?: string;
  shipperAddressStreet?: string;
  shipperAddressCountry?: string;
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
