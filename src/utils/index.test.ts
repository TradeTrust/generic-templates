import { ChaftaCooSampleV2 } from "./../templates/ChaftaCoo/sampleV2";
import { ChaftaCooSampleV3 } from "./../templates/ChaftaCoo/sampleV3";
import { InvoiceSampleV4 } from "./../templates/Invoice/sampleV4";
import { InvoiceSampleIDVCV4 } from "./../templates/Invoice/sampleIDVCV4";
import { getDocumentData } from "./";

describe("getDocumentData", () => {
  it("should render v2 data correctly", () => {
    const { iD } = getDocumentData(ChaftaCooSampleV2);
    expect(iD).toBe("wfa.org.au:coo:WBC208897");
  });

  it("should render v3 data correctly", () => {
    const documentData = getDocumentData(ChaftaCooSampleV3);
    expect(documentData).toMatchObject(ChaftaCooSampleV3.credentialSubject);
  });
  it("should render ttv4 data correctly", () => {
    const documentData = getDocumentData(InvoiceSampleV4);
    expect(documentData).toMatchObject(InvoiceSampleV4.credentialSubject);
  });
  it("should render ttv4 idvc data correctly", () => {
    const documentData = getDocumentData(InvoiceSampleIDVCV4);
    expect(documentData).toMatchObject(InvoiceSampleIDVCV4.credentialSubject);
  });
});
