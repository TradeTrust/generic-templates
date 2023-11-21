import { v2 } from "@tradetrust-tt/tradetrust";

export type BillOfLadingCarrierSchemaV2 = v2.OpenAttestationDocument & BillOfLadingCarrierDocument;

export type BillOfLadingCarrierSchema = BillOfLadingCarrierSchemaV2;

export interface BillOfLadingCarrierDocument {
  scac: string;
  blNumber: string;
  onwardInlandRouting: string;
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
}
