import { v2 } from "@tradetrust-tt/tradetrust";

export type BillOfLadingMaerskPilotSchemaV2 = v2.OpenAttestationDocument & BillOfLadingMaerskPilotDocument;

export type BillOfLadingMaerskPilotSchema = BillOfLadingMaerskPilotSchemaV2;

export interface BillOfLadingMaerskPilotDocument {
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
  logo?: string;
  carrierReceipt?: string;
  placeOfIssueBL?: string;
  numberOfOriginalBL?: string;
  dateOfIssueBL?: string;
  carrierSignature?: string;
  shippedOnBoardDate?: string;
}
