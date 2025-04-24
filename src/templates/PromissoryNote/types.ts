import { v2, v3 } from "@tradetrust-tt/tradetrust";
import { SignedVerifiableCredential } from "@trustvc/trustvc";

export type PromissoryNoteSchemaV2 = v2.OpenAttestationDocument & PromissoryNoteDocument;
export type PromissoryNoteSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: PromissoryNoteDocument;
};
export type PromissoryNoteSchemaW3C = SignedVerifiableCredential & {
  credentialSubject: PromissoryNoteDocument;
};

export type PromissoryNoteSchema = PromissoryNoteSchemaV2 | PromissoryNoteSchemaV3 | PromissoryNoteSchemaW3C;

export interface PromissoryNoteDocument {
  logo?: string;
  pNoteId?: string;
  commitmentDate?: string;
  drawerCompanyName?: string;
  drawerCompanyNo?: string;
  drawerJurisdiction?: string;
  drawerEmail?: string;
  drawerWalletAddress?: string;
  drawerPlaceOfIssue?: string;
  draweeCompanyName?: string;
  draweeCompanyNo?: string;
  draweeJurisdiction?: string;
  draweeEmail?: string;
  draweeWalletAddress?: string;
  dueDate?: string;
  currency?: string;
  amount?: string;
  clause?: string;
  signerName?: string;
  signerPosition?: string;
  signerEmail?: string;
  signerTimeStamp?: string;
}
