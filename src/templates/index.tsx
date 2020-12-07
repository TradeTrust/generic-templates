import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { BillOfLadingTemplates } from "./BillOfLading";
import { CoveringLetterTemplates } from "./CoveringLetter";
import { InvoiceTemplates } from "./Invoice";

export const registry: TemplateRegistry<any> = {
  BILL_OF_LADING: BillOfLadingTemplates,
  COVERING_LETTER: CoveringLetterTemplates,
  INVOICE: InvoiceTemplates
};
