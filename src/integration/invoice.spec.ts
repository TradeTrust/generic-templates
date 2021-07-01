import { Selector } from "testcafe";

fixture("Invoice").page`http://localhost:3010`;

const InvoiceTemplate = Selector("[data-testid='invoice-template']");

test("Invoice is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='INVOICE']"));
  await t.switchToIframe("#iframe");
  await t.expect(InvoiceTemplate.visible).ok();
  await t.expect(InvoiceTemplate.textContent).contains("INVOICE");
});
