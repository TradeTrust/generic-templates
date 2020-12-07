import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { CoveringLetterTemplates } from "./CoveringLetter";
import { InvoiceTemplates } from "./Invoice";

export const registry: TemplateRegistry<any> = {
  COVERING_LETTER: CoveringLetterTemplates,
  INVOICE: InvoiceTemplates
};
