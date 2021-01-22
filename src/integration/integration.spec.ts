import { Selector } from "testcafe";

fixture("Generic Templates").page`http://localhost:3010`;

const DefaultTemplate = Selector("#default-template");
const BillOfLadingTemplate = Selector("[data-testid='bill-of-lading-template']");
const BillOfLadingGenericTemplate = Selector("[data-testid='bill-of-lading-generic-template']");
const ChaftaCooTemplate = Selector("[data-testid='chafta-coo-template']");
const CoveringLetterTemplate = Selector("[data-testid='covering-letter-template']");
const InvoiceTemplate = Selector("[data-testid='invoice-template']");

test("Bill of Lading is rendered correctly", async t => {
  await t.click(Selector("[data-testid='BILL_OF_LADING']"));
  await t.switchToIframe("#iframe");
  await t.expect(BillOfLadingTemplate.visible).ok();
  await t.expect(BillOfLadingTemplate.textContent).contains("B/L No SGCNM21566325");
});

// test("Bill of Lading Generic is rendered correctly", async t => {
//   await t.click(Selector("[data-testid='BILL_OF_LADING_GENERIC']"));
//   await t.switchToIframe("#iframe");
//   await t.expect(BillOfLadingGenericTemplate.visible).ok();
//   await t.expect(BillOfLadingGenericTemplate.textContent).contains("B/L No SGCNM21566325");
// });

// test("Chafta COO is rendered correctly", async t => {
//   await t.click(Selector("[data-testid='CHAFTA_COO']"));
//   await t.switchToIframe("#iframe");
//   await t.expect(ChaftaCooTemplate.visible).ok();
//   await t.expect(ChaftaCooTemplate.textContent).contains("CERTIFICATE OF ORIGIN");
// });

// test("Covering Letter (GovTech) is rendered correctly", async t => {
//   await t.click(Selector("[data-testid='COVERING_LETTER']").withText("Covering Letter (GovTech)"));
//   await t.switchToIframe("#iframe");
//   await t.expect(CoveringLetterTemplate.visible).ok();
//   await t.expect(CoveringLetterTemplate.textContent).contains("Documents Bundle");
//   await t.expect(Selector('img[src="https://www.aretese.com/images/govtech-animated-logo.gif"]')).ok();
// });

// test("Covering Letter (DBS) is rendered correctly", async t => {
//   await t.click(Selector("[data-testid='COVERING_LETTER']").withText("Covering Letter (DBS)"));
//   await t.switchToIframe("#iframe");
//   await t.expect(CoveringLetterTemplate.visible).ok();
//   await t.expect(CoveringLetterTemplate.textContent).contains("Documents Bundle");
//   await t.expect(Selector('img[src="/static/images/logo-dbs.png"]')).ok();
// });

// test("Covering Letter (Malformed) is rendered correctly", async t => {
//   await t.click(Selector("[data-testid='some_typo_here']"));
//   await t.switchToIframe("#iframe");
//   await t.expect(DefaultTemplate.visible).ok();
//   await t
//     .expect(DefaultTemplate.textContent)
//     .contains("certificate issuer misconfigured the template configuration of your document");
// });

// test("Invoice is rendered correctly", async t => {
//   await t.click(Selector("[data-testid='INVOICE']"));
//   await t.switchToIframe("#iframe");
//   await t.expect(InvoiceTemplate.visible).ok();
//   await t.expect(InvoiceTemplate.textContent).contains("INVOICE");
// });
