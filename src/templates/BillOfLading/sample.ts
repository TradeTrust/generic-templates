import { v2 } from "@govtechsg/open-attestation";
import { BillOfLading } from "./types";

export const BillOfLadingSample: BillOfLading = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "BILL_OF_LADING",
    url: "http://localhost:3000",
  },
  issuers: [
    {
      name: "abc",
      documentStore: "0x1245e5B64D785b25057f7438F715f4aA5D965733",
    },
  ],
  links: {
    self: {
      href: "https://action.openattestation.com/?q=%7B%22type%22:%22DOCUMENT%22,%22payload%22:%20%7B%22uri%22:%20%22https://api-ropsten.tradetrust.io/storage/33737b71-96f6-4019-b6c1-5fcea04fcc2a%22,%22key%22:%20%22edcbadf17301fe5dfe174496c7edf29e0702e2775ee919bbccb74d0dfd5a1b4b%22,%22permittedActions%22:%20%5B%22STORE%22%5D,%22redirect%22:%20%22https://dev.tradetrust.io%22%7D%7D",
    },
  },
  scac: "SGPU",
  blNumber: "SGCNM21566325",
  packages: [
    {
      description: "description",
      weight: "10",
      measurement: "20",
    },
  ],
  shipper: {
    name: "Shipper Name",
    address: {
      street: "101 ORCHARD ROAD",
      country: "SINGAPORE",
    },
  },
  vessel: "vessel",
  voyageNo: "voyageNo",
  consignee: {
    name: "Consignee name",
  },
  notifyParty: {
    name: "Notify Party Name",
  },
  portOfDischarge: "Paris",
  portOfLoading: "Singapore",
  carrierName: "A.P. Moller",
};
