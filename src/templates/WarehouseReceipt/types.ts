import { v2, v3 } from "@tradetrust-tt/tradetrust";

export type WarehouseReceiptSchemaV2 = v2.OpenAttestationDocument & WarehouseReceiptDocument;
export type WarehouseReceiptSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: WarehouseReceiptDocument;
};

export type WarehouseReceiptSchema = WarehouseReceiptSchemaV2 | WarehouseReceiptSchemaV3;

export interface WarehouseReceiptDocument {
  logo?: string;
  spl?: string;
  warehouseReceiptDetails?: WarehouseReceiptDetails;
  goods?: Goods[];
  totalNetWeight?: string;
  warehouseAddress?: string;
  markings?: string;
  storageAndServicesTerms?: string;
  signature?: string;
  termsAndConditions?: string;
}

interface WarehouseReceiptDetails {
  warehouseReceipt?: string;
  issuanceDate?: string;
  ourRef?: string;
  rentStartDate?: string;
  yourRef?: string;
  commodity?: string;
  documentType?: string;
  order?: string;
  account?: string;
}

interface Goods {
  brand?: string;
  piles?: string;
  bundles?: string;
  pieces?: string;
  netWeight?: string;
  grossWeight?: string;
}
