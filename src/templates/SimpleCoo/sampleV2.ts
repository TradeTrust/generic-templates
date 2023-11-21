import { v2 } from "@tradetrust-tt/tradetrust";
import { firstSignatoryAuthentication, secondSignatoryAuthentication } from "../../core/Signatures";
import { SimpleCooDocumentSchemaV2 } from "./types";

export const SimpleCooSampleV2: SimpleCooDocumentSchemaV2 = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "SIMPLE_COO",
    url: "http://localhost:3000",
  },
  issuers: [
    {
      name: "abc",
      documentStore: "0x1245e5B64D785b25057f7438F715f4aA5D965733",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "demo-tradetrust.openattestation.com",
      },
    },
  ],
  documentName: "Form for Free Trade Agreement",
  issueDateAndTime: "21 September 2021, 3:05pm",
  issueIn: "IMDA Singapore",
  cooId: "IMDA0001",
  exporterDetails: {
    exportCountry: "AU",
    exporterName: "TREASURY WINE ESTATES VINTNERS LIMITED",
    exporterAddress: {
      line1: "161 Collins Street, Melbourne",
      line2: "VIC Australia",
      postalCode: "3000 ",
    },
  },
  importerDetails: {
    importCountry: "SG",
    importerName: "Singapore Wines Pte Ltd",
    importerAddress: {
      line1: "10 Pasir Panjang Road",
      line2: "#03-01, Mapletree Business City",
      postalCode: "Singapore 117438",
    },
  },
  descriptionOfGoods: {
    includedConsignments: "SG",
    importerNameMarksAndNumber: "SSCC: 59312345670002345",
    numberAndKindOfPackage: "Bin 23 Pinot Noir 201",
    hsCode: "2204.21",
    invoiceNumber: "1122345",
    dateOfInvoice: "5 July 2021",
    loadingBaseportLocationName: "AUMEL",
    mainCarriageTransportMovementId: "IMO 9367815",
  },
  firstSignatoryAuthentication: {
    actualDate: "21 September 2021",
    statement:
      "The undersigned hereby declares that the above-stated information is correct and that the goods exported to",
    signature: firstSignatoryAuthentication,
  },
  secondSignatoryAuthentication: {
    actualDate: "",
    statement: "",
    signature: secondSignatoryAuthentication,
  },
};
