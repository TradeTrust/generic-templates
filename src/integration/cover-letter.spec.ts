import { Selector } from "testcafe";

fixture("Cover Letter").page`http://localhost:3010`;

const CoveringLetterTemplate = Selector("[data-testid='covering-letter-template']");

test("Covering Letter V2 is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='Covering Letter V2']"));
  await t.switchToIframe("#iframe");
  await t.expect(CoveringLetterTemplate.exists).ok();
  await t.expect(CoveringLetterTemplate.textContent).contains("Documents Bundle");
  await t.expect(Selector('img[src="https://www.aretese.com/images/govtech-animated-logo.gif"]').exists).ok();
});

test("Covering Letter V3 is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='Covering Letter V3']"));
  await t.switchToIframe("#iframe");
  await t.expect(CoveringLetterTemplate.exists).ok();
  await t.expect(CoveringLetterTemplate.textContent).contains("Documents Bundle");
});
