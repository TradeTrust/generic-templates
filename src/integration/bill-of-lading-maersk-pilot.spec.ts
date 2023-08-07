import { Selector } from "testcafe";

fixture("Bill of Lading Maersk Pilot").page`http://localhost:3010`;

const BillOfLadingMaerskPilotTemplate = Selector("[data-testid='bill-of-lading-maersk-pilot-template']");

test("Bill of Lading Maersk Pilot is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='Bill of Lading V2 (Maersk Pilot)']"));
  await t.switchToIframe("#iframe");
  await t.expect(BillOfLadingMaerskPilotTemplate.visible).ok();
  await t.expect(BillOfLadingMaerskPilotTemplate.textContent).contains("SGCNM21566325");
});
