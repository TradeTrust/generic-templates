import { Selector } from "testcafe";

fixture("Chafta COO").page`http://localhost:3010`;

const ChaftaCooTemplate = Selector("[data-testid='chafta-coo-template']");

test("Chafta COO is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='CHAFTA_COO']"));
  await t.switchToIframe("#iframe");
  await t.expect(ChaftaCooTemplate.visible).ok();
  await t.expect(ChaftaCooTemplate.textContent).contains("CERTIFICATE OF ORIGIN");
});
