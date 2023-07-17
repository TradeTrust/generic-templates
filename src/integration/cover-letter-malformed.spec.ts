import { Selector } from "testcafe";

fixture("Cover Letter Malformed").page`http://localhost:3010`;

const DefaultTemplate = Selector("#default-template");

test("Covering Letter (Malformed) is rendered correctly", async (t) => {
  await t.click(Selector("[data-testid='Covering Letter V2 (Malformed)']"));
  await t.switchToIframe("#iframe");
  await t.expect(DefaultTemplate.visible).ok();
  await t
    .expect(DefaultTemplate.textContent)
    .contains("certificate issuer misconfigured the template configuration of your document");
});
