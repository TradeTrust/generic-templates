import percySnapshot from "@percy/testcafe";
import { Selector } from "testcafe";

fixture("Generic Templates").page`http://localhost:3010`;

const CustomTemplate = Selector("[data-testid='covering-letter-template']");

test("Generic template is rendered correctly", async test => {
  // test the title is displayed
  await test.click(Selector("[data-testid='COVERING_LETTER']"));
  await test.switchToIframe("#iframe");
  await test.expect(CustomTemplate.visible).ok();
  await test.expect(CustomTemplate.textContent).contains("Documents Bundle");

  // take a snapshot
  await percySnapshot(test, "Rendered generic template");
});
