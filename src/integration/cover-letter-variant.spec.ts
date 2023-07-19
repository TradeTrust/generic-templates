import { Selector } from "testcafe";

fixture("Cover Letter Variant").page`http://localhost:3010`;

const CoveringLetterTemplate = Selector("[data-testid='covering-letter-template']");

test("Covering Letter (Variant) is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='Covering Letter V2 (Variant)']"));
  await t.switchToIframe("#iframe");
  await t.expect(CoveringLetterTemplate.exists).ok();
  await t.expect(CoveringLetterTemplate.textContent).contains("Documents Bundle");
});
