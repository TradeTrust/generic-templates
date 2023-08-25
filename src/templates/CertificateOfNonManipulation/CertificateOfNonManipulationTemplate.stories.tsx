import React, { FunctionComponent } from "react";
import { CertificateOfNonManipulationTemplate } from "./CertificateOfNonManipulationTemplate";
import { CertificateOfNonManipulationSampleV2 } from "./sampleV2";

export default {
  title: "CertificateOfNonManipulation",
  component: CertificateOfNonManipulationTemplate,
  parameters: {
    componentSubtitle: "Certificate of Non Manipulation template.",
  },
};

export const CertificateOfNonManipulationEmpty: FunctionComponent = () => {
  return <CertificateOfNonManipulationTemplate document={{} as any} handleObfuscation={() => {}} />;
};

export const CertificateOfNonManipulation: FunctionComponent = () => {
  return (
    <CertificateOfNonManipulationTemplate
      document={CertificateOfNonManipulationSampleV2}
      handleObfuscation={() => {}}
    />
  );
};
