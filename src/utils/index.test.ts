import { ChaftaCooSampleV2 } from "./../templates/ChaftaCoo/sampleV2";
import { ChaftaCooSampleV3 } from "./../templates/ChaftaCoo/sampleV3";
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
});
