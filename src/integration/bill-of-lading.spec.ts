import { Selector } from "testcafe";

fixture("Bill of Lading").page`http://localhost:3010`;

const BillOfLadingTemplate = Selector("[data-testid='bill-of-lading-template']");
const BillOfLadingBLNumberField = Selector("[data-testid='blNumber']");
test("Bill of Lading is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='Bill of Lading V3']"));
  await t.switchToIframe("#iframe");
  await t.expect(BillOfLadingTemplate.visible).ok();
  await t.expect(BillOfLadingBLNumberField.textContent).contains("SGCNM21566325");
});

test("V3 Bill of Lading is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='Bill of Lading V3']"));
  await t.switchToIframe("#iframe");
  await t.expect(BillOfLadingTemplate.visible).ok();
  await t.expect(BillOfLadingBLNumberField.textContent).contains("SGCNM21566325");
});
