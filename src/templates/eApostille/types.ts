import { v2, v3 } from "@tradetrust-tt/tradetrust";
import { SignedVerifiableCredential } from "@trustvc/trustvc";

export type EApostilleSchemaV2 = v2.OpenAttestationDocument & EApostilleDocument;
export type EApostilleSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: EApostilleDocument;
};
export type EApostilleSchemaW3C = SignedVerifiableCredential & {
  credentialSubject: EApostilleDocument;
};

export type EApostilleSchema = EApostilleSchemaV2 | EApostilleSchemaV3 | EApostilleSchemaW3C;

export interface EApostilleDocument {
  title: string;
  subtitle: string;
  disclaimer: string;
  url: string;
  verificationCode?: string;
  country: string;
  signedBy: string;
  sealStampOf: string;
  actingOf?: string;
  certifiedBy: string;
  certifiedAt: string;
  certifiedOn?: string;
  apostilleNo?: string;
  certifiedBySealStamp?: string;
  certifiedBySignature?: string;
}
