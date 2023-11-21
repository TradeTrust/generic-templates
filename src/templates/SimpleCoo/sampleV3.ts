import { v3 } from "@tradetrust-tt/tradetrust";
import { firstSignatoryAuthentication, secondSignatoryAuthentication } from "../../core/Signatures";
import { SimpleCooDocumentSchemaV3 } from "./types";

export const SimpleCooSampleV3: SimpleCooDocumentSchemaV3 = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
    // TODO: simple coo has no v3 schema defined at schemata yet -> https://schemata.openattestation.com
  ],
  type: ["VerifiableCredential", "OpenAttestationCredential"],
  issuanceDate: "2010-01-01T19:23:24Z",
  issuer: { id: "https://example.com", name: "DEMO STORE" },
  openAttestationMetadata: {
    template: {
      type: v3.TemplateType.EmbeddedRenderer,
      name: "SIMPLE_COO",
      url: "http://localhost:3000",
    },
    proof: {
      type: v3.ProofType.OpenAttestationProofMethod,
      method: v3.Method.DocumentStore,
      value: "0x8bA63EAB43342AAc3AdBB4B827b68Cf4aAE5Caca",
    },
    identityProof: {
      type: v3.IdentityProofType.DNSDid,
      identifier: "demo-tradetrust.openattestation.com",
    },
  },
  credentialSubject: {
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
  },
};
