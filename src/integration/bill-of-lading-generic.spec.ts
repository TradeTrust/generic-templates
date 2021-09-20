import { Selector } from "testcafe";

fixture("Bill of Lading Generic").page`http://localhost:3010`;

const BillOfLadingGenericTemplate = Selector("[data-testid='bill-of-lading-generic-template']");

test("Bill of Lading Generic is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='Bill of Lading (Generic)']"));
  await t.switchToIframe("#iframe");
  await t.expect(BillOfLadingGenericTemplate.visible).ok();
  await t.expect(BillOfLadingGenericTemplate.textContent).contains("B/L No: SGCNM21566325");
});
