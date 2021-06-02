import { Selector } from "testcafe";

fixture("Bill of Lading").page`http://localhost:3010`;

const BillOfLadingTemplate = Selector("[data-testid='bill-of-lading-template']");

test("Bill of Lading is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='BILL_OF_LADING']"));
  await t.switchToIframe("#iframe");
  await t.expect(BillOfLadingTemplate.visible).ok();
  await t.expect(BillOfLadingTemplate.textContent).contains("B/L No SGCNM21566325");
});
