import { Selector } from "testcafe";

fixture("Generic Templates").page`http://localhost:3010`;

const CustomTemplate = Selector("[data-testid='covering-letter-template']");
const InvoiceTemplate = Selector("[data-testid='invoice-template']");

test("Generic template is rendered correctly", async test => {
  // test the title is displayed
  await test.click(Selector("[data-testid='COVERING_LETTER']"));
  await test.switchToIframe("#iframe");
  await test.expect(CustomTemplate.visible).ok();
  await test.expect(CustomTemplate.textContent).contains("Documents Bundle");
});
test("Invoice template is rendered correctly", async test => {
  // test the title is displayed
  await test.click(Selector("[data-testid='INVOICE']"));
  await test.switchToIframe("#iframe");
  await test.expect(InvoiceTemplate.visible).ok();
  await test.expect(InvoiceTemplate.textContent).contains("INVOICE");
});
