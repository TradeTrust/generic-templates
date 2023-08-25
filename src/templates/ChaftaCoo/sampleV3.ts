import { v3 } from "@govtechsg/open-attestation";
import { ChaftaCooDocumentSchemaV3 } from "./types";

export const ChaftaCooSampleV3: ChaftaCooDocumentSchemaV3 = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/io/tradetrust/certificate-of-origin/1.0/CertificateOfOrigin.v3.json",
    "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
  ],
  type: ["VerifiableCredential", "OpenAttestationCredential"],
  issuanceDate: "2010-01-01T19:23:24Z",
  issuer: { id: "https://example.com", name: "DEMO STORE" },
  openAttestationMetadata: {
    template: {
      type: v3.TemplateType.EmbeddedRenderer,
      name: "CHAFTA_COO",
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
    iD: "wfa.org.au:coo:WBC208897",
    issueDateTime: "2020-06-03T00:46:34Z",
    name: "CHAFTA Certificate of Origin",
    firstSignatoryAuthentication: {
      signature:
        "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QOBaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTU3NzIsIDIwMTQvMDEvMTMtMTk6NDQ6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjI0NjlGRjdFNDlEMThFM0U5Njg1NjlEMUQxN0I2NEI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI2MTIxNkJFREE1QTExRTY4QjkyQUE2NTA4NTZFNkRCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI2MTIxNkJEREE1QTExRTY4QjkyQUE2NTA4NTZFNkRCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmY2OTUxMGQ5LWM0NGMtMzM0ZC1iNzJiLTU1MWZkMTdkZTBiMCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjUwYWY1Y2Y2LWQ5NmQtMTFlNi04NTdiLTg2NWI3MTA4OTkwZSIvPiA8L3JkZjpEZXNjcmlwdGlv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",
      actualDateTime: "2020-05-29T09:46:34Z",
    },
    issueLocation: {
      iD: "unece.un.org:locode:AUADL",
      name: "Adelaide",
    },
    issuer: {
      iD: "id:wfa.org.au",
      name: "Australian Grape and Wine Incorporated",
      postalAddress: {
        line1: "Level 1, Industry Offcies",
        line2: "Botanic Road",
        cityName: "Adelaide",
        postcode: "5000",
        countrySubDivisionName: "SA",
        countryCode: "AU",
      },
    },
    status: "issued",
    isPreferential: true,
    freeTradeAgreement: "CHAFTA",
    supplyChainConsignment: {
      iD: "dbschenker.com:hawb:DBS626578",
      information: "6 pallets of fine wine, please store below 20 DegC",
      exportCountry: {
        code: "AU",
      },
      exporter: {
        iD: "abr.gov.au:abn:55004094599",
        name: "TREASURY WINE ESTATES VINTNERS LIMITED",
        postalAddress: {
          line1: "161 Collins Street",
          cityName: "Melbourne",
          postcode: "3000",
          countrySubDivisionName: "VIC",
          countryCode: "AU",
        },
      },
      importCountry: {
        code: "CN",
      },
      importer: {
        iD: "id:emw-wines.com",
        name: "East meets west fine wines",
        postalAddress: {
          line1: "Room 202, Man Po International Business Center",
          line2: "No. 664 Xin Hua Rd, Changning District",
          cityName: "Shanghai",
          postcode: "200052",
          countryCode: "CN",
        },
      },
      includedConsignmentItems: [
        {
          iD: "penfolds.com:shipment:4738291",
          information: "2 pallets (80 cases) Bin23 Pinot and 2 pallets (80 cases) Bin 28 Shiraz",
          crossBorderRegulatoryProcedure: {
            originCriteriaText: "WP",
          },
          manufacturer: {
            iD: "id:penfolds.com",
            name: "Penfolds wine",
            postalAddress: {
              line1: "Penfolds vineyard",
              cityName: "Bordertown",
              postcode: "5268",
              countrySubDivisionName: "SA",
              countryCode: "AU",
            },
          },
          tradeLineItems: [
            {
              sequenceNumber: 1,
              invoiceReference: {
                iD: "tweglobal.com:invoice:1122345",
                formattedIssueDateTime: "2020-06-02T14:30:00Z",
                attachedBinaryFile: {
                  uRI: "https://docs.tweglobal.com/8c624a35-9497-41fb-a548-cb5cf43bac21.pdf",
                },
              },
              tradeProduct: {
                iD: "gs1.org:gtin:9325814006194",
                description: "Bin 23 Pinot Noir 2018",
                harmonisedTariffCode: {
                  classCode: "2204.21",
                  className: "Wine of fresh grapes, including fortified wines",
                },
                originCountry: {
                  code: "AU",
                },
              },
              transportPackages: [
                {
                  iD: "gs1.org:sscc:59312345670002345",
                  grossVolume: "0.55 m3",
                  grossWeight: "450 Kg",
                },
                {
                  iD: "gs1.org:sscc:59312345670002346",
                  grossVolume: "0.55 m3",
                  grossWeight: "450 Kg",
                },
              ],
            },
            {
              sequenceNumber: 2,
              invoiceReference: {
                iD: "tweglobal.com:invoice:1122345",
                formattedIssueDateTime: "2020-06-02T14:30:00Z",
                attachedBinaryFile: {
                  uRI: "https://docs.tweglobal.com/8c624a35-9497-41fb-a548-cb5cf43bac21.pdf",
                },
              },
              tradeProduct: {
                iD: "gs1.org:gtin:9325814007320",
                description: "Kalimna Bin 28 Shiraz 2017",
                harmonisedTariffCode: {
                  classCode: "2204.21",
                  className: "Wine of fresh grapes, including fortified wines",
                },
                originCountry: {
                  code: "AU",
                },
              },
              transportPackages: [
                {
                  iD: "gs1.org:sscc:59312345670002347",
                  grossVolume: "0.55 m3",
                  grossWeight: "450 Kg",
                },
                {
                  iD: "gs1.org:sscc:59312345670002348",
                  grossVolume: "0.55 m3",
                  grossWeight: "450 Kg",
                },
              ],
            },
          ],
        },
        {
          iD: "lindemans.com:shipment:228764",
          information: "2 pallets (80 cases) Limestone Ridge Shiraz red wine",
          crossBorderRegulatoryProcedure: {
            originCriteriaText: "PSR",
          },
          manufacturer: {
            iD: "id:lindemans.com",
            name: "Lindemans wine",
            postalAddress: {
              line1: "44 Johns way",
              cityName: "Red Cliffs",
              postcode: "3496",
              countrySubDivisionName: "VIC",
              countryCode: "AU",
            },
          },
          tradeLineItems: [
            {
              sequenceNumber: 3,
              invoiceReference: {
                iD: "tweglobal.com:invoice:8877654",
                formattedIssueDateTime: "2020-06-05T11:30:00Z",
                attachedBinaryFile: {
                  uRI: "https://docs.tweglobal.com/03e3754c-906d-4f6d-a592-67447c9119e9.pdf",
                },
              },
              tradeProduct: {
                iD: "gs1.org:gtin:4088700053621",
                description: "Coonawarra Trio Limestone Ridge Shiraz Cabernet 2013",
                harmonisedTariffCode: {
                  classCode: "2204.21",
                  className: "Wine of fresh grapes, including fortified wines",
                },
                originCountry: {
                  code: "AU",
                },
              },
              transportPackages: [
                {
                  iD: "gs1.org:sscc:59312345670002673",
                  grossVolume: "0.58 m3",
                  grossWeight: "465 Kg",
                },
                {
                  iD: "gs1.org:sscc:59312345670002674",
                  grossVolume: "0.58 m3",
                  grossWeight: "465 Kg",
                },
              ],
            },
          ],
        },
      ],
      loadingBaseportLocation: {
        iD: "unece.un.org:locode:AUMEL",
        name: "Melbourne",
      },
      mainCarriageTransportMovement: {
        iD: "iata.org:CX104",
        information: "Cathay Pacific Flight CX 104 Melbourne to Shangai",
        usedTransportMeans: {
          iD: "id:B-2398",
          name: "airbus A350",
        },
        departureEvent: {
          departureDateTime: "2020-06-20T09:30:00Z",
        },
      },
      unloadingBaseportLocation: {
        iD: "unece.un.org:locode:CNPVG",
        name: "Shanghai Pudon International Apt",
      },
    },
  },
};
