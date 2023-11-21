import { TemplateRegistry } from "@tradetrust-tt/decentralized-renderer-react-components";
import { BillOfLadingTemplates } from "./BillOfLading";
import { BillOfLadingMaerskPilotTemplates } from "./BillOfLadingMaerskPilot";
import { BillOfLadingCarrierTemplates } from "./BillOfLadingCarrierTemplate";
import { BillOfLadingMaerskTpacTemplates } from "./BillOfLadingMaerskTpac";
import { ChaftaCooTemplates } from "./ChaftaCoo";
import { CoveringLetterTemplates } from "./CoveringLetter";
import { InvoiceTemplates } from "./Invoice";
import { BillOfLadingGenericTemplates } from "./BillOfLadingGeneric";
import { XMLRendererTemplate } from "./XmlRenderer";
import { SimpleCooTemplates } from "./SimpleCoo";
import { CertificateOfNonManipulationTemplates } from "./CertificateOfNonManipulation";
import { BrochureTemplates } from "./Brochure";
import { BillOfLadingV1BimcoStandardTemplates } from "./BillOfLadingBimcoStandard";

export const registry: TemplateRegistry<any> = {
  BILL_OF_LADING: BillOfLadingTemplates,
  BILL_OF_LADING_MAERSK_PILOT: BillOfLadingMaerskPilotTemplates,
  BILL_OF_LADING_MAERSK_TPAC: BillOfLadingMaerskTpacTemplates,
  BILL_OF_LADING_GENERIC: BillOfLadingGenericTemplates,
  BILL_OF_LADING_CARRIER: BillOfLadingCarrierTemplates,
  BILL_OF_LADING_V1_BIMCO_STANDARD: BillOfLadingV1BimcoStandardTemplates,
  CHAFTA_COO: ChaftaCooTemplates,
  COVERING_LETTER: CoveringLetterTemplates,
  INVOICE: InvoiceTemplates,
  XML_RENDERER: XMLRendererTemplate,
  SIMPLE_COO: SimpleCooTemplates,
  CERTIFICATE_OF_NON_MANIPULATION: CertificateOfNonManipulationTemplates,
  W3C_BROCHURE: BrochureTemplates,
};
