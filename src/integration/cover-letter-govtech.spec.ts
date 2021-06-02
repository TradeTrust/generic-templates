import { Selector } from "testcafe";

fixture("Cover Letter GovTech").page`http://localhost:3010`;

const CoveringLetterTemplate = Selector("[data-testid='covering-letter-template']");

test("Covering Letter (GovTech) is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='COVERING_LETTER']").withText("Covering Letter (GovTech)"));
  await t.switchToIframe("#iframe");
  await t.expect(CoveringLetterTemplate.exists).ok();
  await t.expect(CoveringLetterTemplate.textContent).contains("Documents Bundle");
  await t.expect(Selector('img[src="https://www.aretese.com/images/govtech-animated-logo.gif"]').exists).ok();
});
