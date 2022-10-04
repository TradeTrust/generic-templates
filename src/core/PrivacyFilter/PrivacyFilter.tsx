import { Button } from "@govtechsg/tradetrust-ui-components";
import React, { FunctionComponent } from "react";
import patternWaves from "/static/images/pattern-waves.png";

interface PrivacyFilterProps {
  editable: boolean;
  onToggleEditable: () => void;
}

export const PrivacyFilter: FunctionComponent<PrivacyFilterProps> = ({ editable, onToggleEditable }) => (
  <div
    className="print:hidden bg-cover bg-cerulean text-white rounded-lg p-4 mb-8"
    style={{ backgroundImage: `url(${patternWaves})` }}
  >
    <div className="container">
      <div className="md:flex items-center">
        <div className="grow mb-4 md:mb-0 mr-0 md:mr-4">
          <h3 className="font-normal">The document allows fields to be selectively disclosed.</h3>
          <p>
            Remove sensitive information on this document by clicking on the edit button. Downloaded document remains
            valid.
          </p>
        </div>
        <Button onClick={onToggleEditable} className="bg-white text-cerulean hover:bg-gray-50 whitespace-nowrap">
          {editable ? "Done" : "Edit Document"}
        </Button>
      </div>
    </div>
  </div>
);
