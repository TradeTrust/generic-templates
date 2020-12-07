import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface BillOfLading extends Document {
  blNumber: string;
  vessel: string;
  voyageNo: string;
  portOfLoading: string;
  portOfDischarge: string;
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
  links?: {
    self: {
      href: string;
    };
  };
}
