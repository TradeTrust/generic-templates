import { v2 } from "@govtechsg/open-attestation";

export interface BillOfLadingGeneric extends v2.OpenAttestationDocument {
  blNumber: string;
  logo: string;
  companyName: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
  field9: string;
}
