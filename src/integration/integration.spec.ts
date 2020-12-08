import { Selector } from "testcafe";

fixture("Generic Templates").page`http://localhost:3010`;

const CoveringLetterTemplate = Selector("[data-testid='covering-letter-template']");
const InvoiceTemplate = Selector("[data-testid='invoice-template']");

test("Covering Letter (GovTech) is rendered correctly", async t => {
  await t.click(Selector("[data-testid='COVERING_LETTER']").withText("Covering Letter (GovTech)"));
  await t.switchToIframe("#iframe");
  await t.expect(CoveringLetterTemplate.visible).ok();
  await t.expect(CoveringLetterTemplate.textContent).contains("Documents Bundle");
  await t.expect(Selector('img[src="https://www.aretese.com/images/govtech-animated-logo.gif"]')).ok();
});

test("Covering Letter (DBS) is rendered correctly", async t => {
  await t.click(Selector("[data-testid='COVERING_LETTER']").withText("Covering Letter (DBS)"));
  await t.switchToIframe("#iframe");
  await t.expect(CoveringLetterTemplate.visible).ok();
  await t.expect(CoveringLetterTemplate.textContent).contains("Documents Bundle");
  await t.expect(Selector('img[src="/static/images/logo-dbs.png"]')).ok();
});

test("Invoice is rendered correctly", async t => {
  await t.click(Selector("[data-testid='INVOICE']"));
  await t.switchToIframe("#iframe");
  await t.expect(InvoiceTemplate.visible).ok();
  await t.expect(InvoiceTemplate.textContent).contains("INVOICE");
});
