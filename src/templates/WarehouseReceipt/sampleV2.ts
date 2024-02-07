import { v2 } from "@tradetrust-tt/tradetrust";
import { WarehouseReceiptSchemaV2 } from "./types";
import logo from "/static/images/logo-tradetrust.svg";
import { firstSignatoryAuthentication as randomSignature } from "../../core/Signatures";

export const WarehouseReceiptSampleV2: WarehouseReceiptSchemaV2 = {
  $template: {
    name: "WAREHOUSE_RECEIPT",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "<YOUR_HOSTED_RENDERER_URL>",
  },
  issuers: [
    {
      name: "abc",
      tokenRegistry: "0x142Ca30e3b78A840a82192529cA047ED759a6F7e",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "example.tradetrust.io",
      },
    },
  ],
  logo: logo,
  spl: "0001670",
  warehouseReceiptDetails: {
    warehouseReceipt: "POKL 4",
    issuanceDate: "21-Jun-2017",
    ourRef: "JI81449",
    rentStartDate: "22-Jun-2017",
    yourRef: "",
    commodity: "Copper",
    documentType: "Transferable",
    order: "AAA, Singapore Branch",
    account: "ABC Pte Ltd",
  },
  goods: [
    {
      brand: "AAA / Full Plate Cathode",
      piles: "10",
      bundles: "100",
      pieces: "/",
      netWeight: "249.663",
      grossWeight: "249.913",
    },
    {
      brand: "BBB / Full Plate Cathode",
      piles: "20",
      bundles: "200",
      pieces: "/",
      netWeight: "349.663",
      grossWeight: "349.913",
    },
  ],
  totalNetWeight: "599.326",
  warehouseAddress: "10 Anson Road, Singapore",
  markings: "Commodity: Copper Cathodes",
  storageAndServicesTerms:
    "Storage And Services Terms\n1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n4. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n5. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n6. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n7. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n8. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n\n",
  signature: randomSignature,
  termsAndConditions:
    "Terms And Conditions\n1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n4. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n5. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n6. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n7. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n8. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.\n\n",
};
