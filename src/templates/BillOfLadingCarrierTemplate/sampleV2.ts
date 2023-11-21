import { v2 } from "@tradetrust-tt/tradetrust";
import { BillOfLadingCarrierSchemaV2 } from "./types";
import logo from "/static/images/logo-maersk.jpg?inline";
import { firstSignatoryAuthentication as randomSignature } from "../../core/Signatures";

export const BillOfLadingCarrierSampleV2: BillOfLadingCarrierSchemaV2 = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "BILL_OF_LADING_CARRIER",
    url: "http://localhost:3000",
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
  scac: "SGPU",
  blNumber: "SGCNM21566325",
  onwardInlandRouting:
    "Onward inland routing (Not part of Carriage as defined in clause 1. For account and risk of Merchant)",
  packages: [
    {
      description:
        "SHIPPED ON BOARD MSC KALAMATA VII - 331W ON 2023-08-21 AT MIAMI, USA\n\n1 Container Said to Contain 1 PACKAGE\n\n20.130 SHREDDED ELECTRIC MOTOR SCRAP FOR MELTING PURPOSE AS P.O.NO  3900006867 DATED 10.08.2023 CFR MUNDRA PORT PORT, INCOTERMS 2020H.S.CODE : 72044900FREIGHT PREPAIDTOTAL NET WT 20.130 MTDESTINATION CHARGES TO BE COLLECT FROM CONSIGNEE ACCOUNTX20230817805840A.) LETTER OF CREDIT NO. 0008MLC00018524 DATE OF ISSUE : 21.08.2023B.) APPLICANTS PO NO 3900006867 DATED 10.08.2023\n \nNO\n \nTTNU1090579 20 DRY 8'6 1 PACKAGE 20130.000 KGS 33.200 CBMShipper Seal: UL1975486SHIPPER'S LOAD, STOW, WEIGHT AND COUNT\n \nFREIGHT PREPAID\n \nFor India GST purposes, since destination country as per this document is india and for import into India the Maersk Line India Pvt Ltd office located either in the same State or the nearest State with respect to the above referenced cargo drop-off location shall be the billing office to the Indian customer\n \nAPPLICABLE FREE TIME 10 DAYS DETENTION AT (PORT OF DISCHARGE / PLACE OF DELIVERY)\n \nCY/CY",
      weight: "10",
      measurement: "20",
    },
  ],
  shipper: {
    name: "Shipper Name",
    address: {
      street: "101 ORCHARD ROAD",
      country: "SINGAPORE",
    },
  },
  vessel: "vessel",
  voyageNo: "voyageNo",
  consignee: {
    toOrderOfText: "TO ORDER OF",
    name: "Consignee name",
  },
  notifyParty: {
    name: "JINDAL STAINLESS LIMITED, \nO.P JINDAL MARG HISAR, \nINDIA 125005, \nGST NO : 06AABCJ1969M1Z7, \nIEC NO : 0588085146, \nPAN NO : AABCJ1969M, \nEMAIL ID : SSHARMA(AT)JINDALSTAINLES.COM AND N.JENA(AT)JINDALSTAINELSS.COM",
  },
  portOfDischarge: "Paris",
  portOfLoading: "Singapore",
  carrierName: "MAERSK SINGAPORE PTE LTD (REG NO.197401342Z) AS AGENT(S)",
  placeOfDelivery: "Singapore",
  placeOfReceipt: "Singapore",
  logo,
  carrierReceipt: "1 container",
  placeOfIssueBL: "Malaysia",
  numberOfOriginalBL: "THREE/3",
  dateOfIssueBL: "01/08/23",
  shippedOnBoardDate: "01/08/23",
  signForTermsAndCondition:
    "SHIPPED, as far as ascertained by reasonable means of checking, in apparent good order and condition unless otherwise stated herein, the total number or quantity of Containers or other packages or units indicated in the box entitled \"Carrier's Receipt\" for carriage from the Port of Loading (or the Place of Receipt, if mentioned above) to the Port of Discharge (or the Place of Delivery, if mentioned above), such carriage being always subject to the terms, rights, defences, provisions, conditions, exceptions, limitations, and liberties hereof (INCLUDING ALL THOSE TERMS AND CONDITIONS ON THE REVERSE HEREOF NUMBERED 1-26 AND THOSE TERMS AND CONDITIONS CONTAINED IN THE CARRIER'S APPLICABLE TARIFF) and the Merchant's attention is drawn in particular to the Carrier's liberties in respect of on deck stowage (see clause 18) and the carrying vessel (see clause 19). Where the bill of lading is non-negotiable the Carrier may give delivery of the Goods to the named consignee upon reasonable proof of identity and without requiring surrender of an original bill of lading. Where the bill of lading is negotiable, the Merchant is obliged to surrender one original, duly endorsed, in exchange for the Goods. The Carrier accepts a duty of reasonable care to check that any such document which the Merchant surrenders as a bill of lading is genuine and original. If the Carrier complies with this duty, it will be entitled to deliver the Goods against what it reasonably believes to be a genuine and original bill of lading, such delivery discharging the Carrier’s delivery obligations. In accepting this bill of lading, any local customs or privileges to the contrary notwithstanding, the Merchant agrees to be bound by all Terms and Conditions stated herein whether written, printed, stamped or incorporated on the face or reverse side hereof, as fully as if they were all signed by the Merchant. IN WITNESS WHEREOF the number of original Bills of Lading stated on this side have been signed and wherever one original Bill of Lading has been surrendered any others shall be void.",
  signedForCarrierText: "Signed for the Carrier Maersk A/S",
  carrierSignature: randomSignature,
  termsOfCarriage:
    "1.  Definitions\n“Carriage” means the whole or any part of the carriage, loading, unloading, handling and any and all other services whatsoever undertaken by the Carrier in relation to the Goods.\n\n“Carrier” means Maersk A/S of 50 Esplanaden, 1263 Copenhagen K, Denmark.\n\n“Container” includes any container (including an open top container), flat rack, platform, trailer, transportable tank, pallet or any other similar article used to consolidate the Goods and any connected equipment. \n\n“Freight” includes all charges payable to the Carrier in accordance with the applicable Tariff and this bill of lading.\n\n“Goods” means the whole or any part of the cargo and any packaging accepted from the Shipper and includes any Container not supplied by or on behalf of the Carrier.\n\n“Hague Rules” means the provisions of the International Convention for the Unification of Certain Rules relating to Bills of Lading signed at Brussels on 25th August 1924.\n\n“Holder” means any Person for the time being in possession of this Bill of Lading or to whom rights of suit and/or liability under this bill of lading have been transferred or vested.\n\n“Merchant” includes the Shipper, Holder, Consignee, Receiver of the Goods, any Person owning or entitled to the possession of the Goods or of this bill of lading and anyone acting on behalf of such Person. \n\n",
};
