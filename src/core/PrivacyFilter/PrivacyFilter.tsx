import { Button } from "@tradetrust-tt/tradetrust-ui-components";
import React, { FunctionComponent } from "react";
import patternWaves from "/static/images/pattern-waves.png";

interface PrivacyFilterProps {
  editable: boolean;
  onToggleEditable: () => void;
  options?: {
    className?: string;
    description?: string;
    buttonText?: string;
  };
}

export const PrivacyFilter: FunctionComponent<PrivacyFilterProps> = ({ editable, onToggleEditable, options }) => {
  const defaultOptions = {
    className: "print:hidden bg-cover bg-cerulean-500 text-white rounded-lg p-4 mb-8",
    description: `Remove sensitive information on this document by clicking on the edit button. Downloaded document remains valid.`,
    buttonText: "Edit Document",
  };
  const { className, description, buttonText } = options ?? defaultOptions;

  return (
    <div className={className} style={{ backgroundImage: `url(${patternWaves})` }}>
      <div className="container">
        <div className="md:flex items-center">
          <div className="grow mb-4 md:mb-0 mr-0 md:mr-4">
            <h3 className="font-normal">The document allows fields to be selectively disclosed.</h3>
            <p>{description}</p>
          </div>
          <Button onClick={onToggleEditable} className="bg-white text-cerulean-500 hover:bg-gray-50 whitespace-nowrap">
            {editable ? "Done" : buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export const IconRedact: FunctionComponent = () => {
  return (
    <span className="transition-colors ease-out duration-200 text-red-600 hover:text-red-700 font-normal text-sm inline-block">
      [Remove]
    </span>
  );
};
