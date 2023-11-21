import { v2, v3 } from "@tradetrust-tt/tradetrust";

export type BillOfLadingSchemaV2 = v2.OpenAttestationDocument & BillOfLadingDocument;
export type BillOfLadingSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: BillOfLadingDocument;
};

export type BillOfLadingSchema = BillOfLadingSchemaV2 | BillOfLadingSchemaV3;

export interface BillOfLadingDocument {
  scac: string;
  blNumber: string;
  vessel: string;
  voyageNo: string;
  portOfLoading: string;
  portOfDischarge: string;
  carrierName?: string;
  packages?: {
    description: string;
    weight: string;
    measurement: string;
  }[];
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
}
