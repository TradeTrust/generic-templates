import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { BillOfLadingTemplates } from "./BillOfLading";
import { ChaftaCooTemplates } from "./ChaftaCoo";
import { CoveringLetterTemplates } from "./CoveringLetter";
import { InvoiceTemplates } from "./Invoice";
import { BillOfLadingGenericTemplates } from "./BillOfLadingGeneric";

export const registry: TemplateRegistry<any> = {
  BILL_OF_LADING: BillOfLadingTemplates,
  BILL_OF_LADING_GENERIC: BillOfLadingGenericTemplates,
  CHAFTA_COO: ChaftaCooTemplates,
  COVERING_LETTER: CoveringLetterTemplates,
  INVOICE: InvoiceTemplates
};
