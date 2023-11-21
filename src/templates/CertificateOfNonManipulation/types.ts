import { v2 } from "@tradetrust-tt/tradetrust";

interface CertificateOfNonManipulation extends v2.OpenAttestationDocument {
  recipient?: {
    name?: string;
    address?: {
      street: string;
      country: string;
    };
  };
  consignment?: {
    description: string;
    countryOfOrigin: string;
    outwardBillNo: string;
    dateOfDischarge: string;
    dateOfDeparture: string;
    countryOfFinalDestination: string;
    outgoingVehicleNo: string;
    quantity?: {
      value: number;
      unit: string;
    };
  };
  declaration?: {
    name: string;
    designation: string;
    date: string;
  };
  certification?: {
    name: string;
    signature: string;
    designation: string;
    date: string;
    stamp: string;
  };
}

export type CertificateOfNonManipulationSchema = v2.OpenAttestationDocument & CertificateOfNonManipulation;
