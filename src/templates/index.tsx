import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./coveringLetter";
import { invoiceTemplate } from "./invoice";

export const registry: TemplateRegistry<any> = {
  COVERING_LETTER: templates,
  INVOICE: invoiceTemplate
};
