import { v2 } from "@tradetrust-tt/tradetrust";

export type BillOfLadingV1BimcoSchema = v2.OpenAttestationDocument & BillOfLadingBimcoDocument;

export type BillOfLadingBimcoSchema = BillOfLadingV1BimcoSchema;

interface Address {
  street: string;
  streetNumber: string;
  floor: string;
  postCode: string;
  city: string;
  stateRegion: string;
  country: string;
}

interface Party {
  partyName: string;
  taxReference: string;
  phone: string;
  email: string;
  url: string;
  address: Address;
}

interface Location {
  locationName: string;
  UNLocationCode: string;
}

export interface BillOfLadingBimcoDocument {
  $template: {
    name: string;
    type: v2.TemplateType.EmbeddedRenderer;
    url: string;
  };
  issuers: any[];
  shipper: { party: Party };
  consignee: { party: Party };
  notifyParty: { party: Party };
  portOfLoading: { location: Location };
  portOfDischarge: { location: Location };
  descriptionOfGoods: string[];
  freightPayableAsPerCharterPartyDated: string;
  vessel: string;
  referenceNo: string;
  billOfLadingNo: string;
  cargoGrossWeight: string;
  measurement: string;
  dateOfIssue: string;
  shippedOnBoardDate: string;
  signedBy: string;
  SCAC: string | null;
  termsAndConditions: string;
  cargoShippedOnDeck: string | null;
}
