import { v2 } from "@tradetrust-tt/tradetrust";
import { BillOfLadingV1BimcoSchema } from "./types";
import { firstSignatoryAuthentication as randomSignature } from "../../core/Signatures";

export const BillOfLadingV1BimcoSample: BillOfLadingV1BimcoSchema = {
  $template: {
    name: "BILL_OF_LADING_BIMCO",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "<YOUR_HOSTED_RENDERER_URL>",
  },
  issuers: [],
  shipper: {
    party: {
      partyName: "Shipping company",
      taxReference: "WON-KFMW-1GB",
      phone: "+88 620 72 99 28",
      email: "contact@scompany.com",
      url: "",
      address: {
        street: "Maashaven ",
        streetNumber: "79",
        floor: "",
        postCode: "3087 BM",
        city: "Rotterdam",
        stateRegion: "Zuid-Holland",
        country: "Netherlands",
      },
    },
  },
  consignee: {
    party: {
      partyName: "Consignee company",
      taxReference: "5DCU-ORSB-E3",
      phone: "+651 84 311 512",
      email: "contact@ccompany.com",
      url: "ccompany.com",
      address: {
        street: "Anson road",
        streetNumber: "10",
        floor: "",
        postCode: "",
        city: "Signapore",
        stateRegion: "",
        country: "Signapore",
      },
    },
  },
  notifyParty: {
    party: {
      partyName: "Notify company",
      taxReference: "HCW-OP1T2M-1",
      phone: " +66 634 31 36 43",
      email: "contact@ncompany.nl",
      url: "",
      address: {
        street: "Voorstraat",
        streetNumber: "909",
        floor: "",
        postCode: "3045 QP",
        city: "Rotterdam",
        stateRegion: "Zuid-Holland",
        country: "Netherlands",
      },
    },
  },
  portOfLoading: {
    location: {
      locationName: "Port of Rotterdam",
      UNLocationCode: "NLRTM",
    },
  },
  portOfDischarge: {
    location: {
      locationName: "Port of Signapore",
      UNLocationCode: "SGSIN",
    },
  },
  descriptionOfGoods: ["Steel plates\n130 units\nPalletized\nLength: 6 meters\nWidth: 2 meters\nThickness: 10 mm"],
  freightPayableAsPerCharterPartyDated: "2023-10-17",
  vessel: "Cargo Crusader",
  referenceNo: "1e9e5f95-1ea8-42b1-beca-97d6143f794d",
  billOfLadingNo: "3941a15c-9d13-4b13-ae4d-e678686c4dea",
  cargoGrossWeight: "122460 KGM",
  measurement: "15.6 M3",
  dateOfIssue: "Rotterdam, 2023-10-17",
  shippedOnBoardDate: "2023-10-18",
  signedBy: randomSignature,
  SCAC: null,
  termsAndConditions:
    "Your electronic signature on this Bill of Lading serves as a binding authentication method, confirming your acceptance of the cargo and its stated condition.",
  cargoShippedOnDeck: null,
};

export const BillOfLadingV1BimcoEmptySample: BillOfLadingV1BimcoSchema = {
  $template: {
    name: "",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "",
  },
  issuers: [],
  shipper: {
    party: {
      partyName: "",
      taxReference: "",
      phone: "",
      email: "",
      url: "",
      address: {
        street: "",
        streetNumber: "",
        floor: "",
        postCode: "",
        city: "",
        stateRegion: "",
        country: "",
      },
    },
  },
  consignee: {
    party: {
      partyName: "",
      taxReference: "",
      phone: "",
      email: "",
      url: "",
      address: {
        street: "",
        streetNumber: "",
        floor: "",
        postCode: "",
        city: "",
        stateRegion: "",
        country: "",
      },
    },
  },
  notifyParty: {
    party: {
      partyName: "",
      taxReference: "",
      phone: "",
      email: "",
      url: "",
      address: {
        street: "",
        streetNumber: "",
        floor: "",
        postCode: "",
        city: "",
        stateRegion: "",
        country: "",
      },
    },
  },
  portOfLoading: {
    location: {
      locationName: "",
      UNLocationCode: "",
    },
  },
  portOfDischarge: {
    location: {
      locationName: "",
      UNLocationCode: "",
    },
  },
  descriptionOfGoods: [""],
  freightPayableAsPerCharterPartyDated: "",
  vessel: "",
  referenceNo: "",
  billOfLadingNo: "",
  cargoGrossWeight: "",
  measurement: "",
  dateOfIssue: "",
  shippedOnBoardDate: "",
  signedBy: "",
  SCAC: null,
  termsAndConditions: "",
  cargoShippedOnDeck: null,
};
