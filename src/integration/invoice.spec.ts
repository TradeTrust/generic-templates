import { Selector } from "testcafe";

fixture("Invoice").page`http://localhost:3010`;

const InvoiceTemplate = Selector("[data-testid='invoice-template']");

test("V2 Invoice is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='InvoiceV2']"));
  await t.switchToIframe("#iframe");
  await t.expect(InvoiceTemplate.visible).ok();
  await t.expect(InvoiceTemplate.textContent).contains("INVOICE");
});

test("V3 Invoice is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='InvoiceV3']"));
  await t.switchToIframe("#iframe");
  await t.expect(InvoiceTemplate.visible).ok();
  await t.expect(InvoiceTemplate.textContent).contains("INVOICE");
});

test("tt v4 Invoice is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='InvoiceV4']"));
  await t.switchToIframe("#iframe");
  await t.expect(InvoiceTemplate.visible).ok();
  await t.expect(InvoiceTemplate.textContent).contains("INVOICE");
});
test("tt idvc v4 Invoice is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='InvoiceIDVCV4']"));
  await t.switchToIframe("#iframe");
  await t.expect(InvoiceTemplate.visible).ok();
  await t.expect(InvoiceTemplate.textContent).contains("INVOICE");
});
