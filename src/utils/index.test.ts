import { ChaftaCooSampleV2 } from "./../templates/ChaftaCoo/sampleV2";
import { ChaftaCooSampleV3 } from "./../templates/ChaftaCoo/sampleV3";
import { formatCurrency, formatDate, formatDateTime, getDocumentData, toTitleCaseWords } from "./";

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

describe("formatDateTime", () => {
  it("should format valid datetime string correctly", () => {
    expect(formatDateTime("2023-04-25T14:45:00Z")).toBe("25 April 2023, 14:45 UTC");
  });

  it("should return input if invalid date", () => {
    expect(formatDateTime("invalid-date")).toBe("invalid-date");
  });

  it("should return empty string if input is undefined", () => {
    expect(formatDateTime()).toBe("");
  });
});

describe("formatDate", () => {
  it("should format valid date string correctly", () => {
    expect(formatDate("2023-04-25T14:45:00Z")).toBe("25 April 2023");
  });

  it("should return input if invalid date", () => {
    expect(formatDate("bad-date")).toBe("bad-date");
  });

  it("should return empty string if input is undefined", () => {
    expect(formatDate()).toBe("");
  });
});

describe("formatCurrency", () => {
  it("should format valid number correctly", () => {
    expect(formatCurrency(1234567.89)).toBe("1,234,567.89");
  });

  it("should format string number correctly", () => {
    expect(formatCurrency("987654.32")).toBe("987,654.32");
  });

  it("should default to 0 for invalid number", () => {
    expect(formatCurrency("not-a-number")).toBe("0");
  });

  it("should default to 0 for undefined input", () => {
    expect(formatCurrency()).toBe("0");
  });
});

describe("toTitleCaseWords", () => {
  it("should convert number to title case words", () => {
    expect(toTitleCaseWords(123)).toBe("One Hundred Twenty-three");
  });

  it("should convert string number to title case words", () => {
    expect(toTitleCaseWords("45")).toBe("Forty-five");
  });

  it("should default to Zero for invalid input", () => {
    expect(toTitleCaseWords("wrong")).toBe("Zero");
  });

  it("should default to Zero for undefined input", () => {
    expect(toTitleCaseWords()).toBe("Zero");
  });
});
