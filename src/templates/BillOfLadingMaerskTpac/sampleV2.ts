import { v2 } from "@tradetrust-tt/tradetrust";
import { BillOfLadingMaerskTpacSchemaV2 } from "./types";
import logo from "/static/images/logo-maersk.jpg?inline";
import { firstSignatoryAuthentication as randomSignature } from "../../core/Signatures";

export const BillOfLadingMaerskTpacSampleV2: BillOfLadingMaerskTpacSchemaV2 = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "BILL_OF_LADING_MAERSK_TPAC",
    url: "http://localhost:3000",
  },
  issuers: [
    {
      name: "abc",
      tokenRegistry: "0x142Ca30e3b78A840a82192529cA047ED759a6F7e",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "example.tradetrust.io",
      },
    },
  ],
  scac: "SGPU",
  blNumber: "SGCNM21566325",
  packages: [
    {
      description: "Apples",
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
  vessel: "Vessel",
  voyageNo: "Voyage Number",
  consignee: {
    name: "Consignee Name",
  },
  notifyParty: {
    name: "Notify Party Name",
  },
  portOfDischarge: "Paris",
  portOfLoading: "Singapore",
  carrierName: "MAERSK SINGAPORE PTE LTD (REG NO.197401342Z) AS AGENT(S)",
  placeOfDelivery: "Singapore",
  placeOfReceipt: "Singapore",
  logo,
  carrierReceipt: "1 container",
  placeOfIssueBL: "Malaysia",
  numberOfOriginalBL: "THREE/3",
  dateOfIssueBL: "01/08/23",
  shippedOnBoardDate: "01/08/23",
  carrierSignature: randomSignature,
};
