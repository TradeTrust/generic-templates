import { Selector } from "testcafe";

fixture("Chafta COO").page`http://localhost:3010`;

const ChaftaCooTemplate = Selector("[data-testid='chafta-coo-template']");

test("Chafta COO is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='Chafta COO V2']"));
  await t.switchToIframe("#iframe");
  await t.expect(ChaftaCooTemplate.visible).ok();
  await t.expect(ChaftaCooTemplate.textContent).contains("CERTIFICATE OF ORIGIN");
});

test("V3Chafta COO is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='Chafta COO V3']"));
  await t.switchToIframe("#iframe");
  await t.expect(ChaftaCooTemplate.visible).ok();
  await t.expect(ChaftaCooTemplate.textContent).contains("CERTIFICATE OF ORIGIN");
});
