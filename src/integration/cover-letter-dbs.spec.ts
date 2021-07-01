import { Selector } from "testcafe";

fixture("Cover Letter DBS").page`http://localhost:3010`;

const CoveringLetterTemplate = Selector("[data-testid='covering-letter-template']");

test("Covering Letter (DBS) is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='COVERING_LETTER']").withText("Covering Letter (DBS)"));
  await t.switchToIframe("#iframe");
  await t.expect(CoveringLetterTemplate.exists).ok();
  await t.expect(CoveringLetterTemplate.textContent).contains("Documents Bundle");
  await t.expect(Selector('img[src="/static/images/logo-dbs.png"]').exists).ok();
});
