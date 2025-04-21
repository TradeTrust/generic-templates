import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../core/Wrapper";
import { getDocumentData } from "../../utils";
import { EApostilleSchema, EApostilleDocument } from "./types";
import { format } from "date-fns";

const styles = `
  html {
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  body {
    margin: 0;
    padding: 0;
    counter-reset: my-sec-counter;
  }

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    color: black;
  }

  .page {
    width: 20.8cm;
    padding: 0.5cm;
    margin: 0;
    background: #fff;
    font-family: Serif;
  }

  .ac_container {
    display: flex;
    flex-direction: column;
    font-size: 14pt;
    border: 1px #797979 solid;
    height: auto;
  }

  .top_ac_container {
    display: flex;
    flex-flow: row nowrap;
  }

  .title_ac_container {
    display: flex;
    flex-flow: column;
  }

  .content_ac_container {
    display: flex;
    flex-flow: column;
  }

  .item_ac_container {
    display: flex;
    flex-flow: row;
  }

  .item_desc {
    display: block;
    border: 1px #797979 solid;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-width: thin;
    font-size: 14pt;
    padding: 2px 0px 0px 3px;
  }

  .item_title {
    display: block;
    border: 1px #797979 solid;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-width: thin;
    text-align: center;
    font-size: 14pt;
    padding: 2px 0px 0px 3px;
  }

  .apostille-text {
    font-size: 25pt;
    margin: 0px;
  }

  .item_increment {
    display: block;
    border: 1px #797979 solid;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-width: thin;
    text-align: center;
    font-size: 14pt;
    padding: 2px 0px 0px 3px;
  }

  .item_label {
    border: 1px #797979 solid;
    border-left: none;
    border-right: none;
    border-bottom: none;
    font-size: 14pt;
    padding: 2px 0px 0px 3px;
  }

  .item_data {
    border: 1px #797979 solid;
    border-right: none;
    border-bottom: none;
    border-width: thin;
    font-size: 14pt;
    padding: 2px 0px 0px 3px;
  }

  .content_ac_container p {
    margin-block-start: 0.3em;
    margin-block-end: 0.3em;
  }

  .content_ac_container .item_title p {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }

  .top_ac_container p {
    margin-block-start: 0em;
    margin-block-end: 0.5em;
  }

  div.image {
    background-repeat: no-repeat;
    background-position: center;
  }

  div.transparentbox {
    background-color: #ffffff;
    opacity: 0.9;
    filter: alpha(opacity=90);
  }

  .qr-code-details {
    position: static;
    text-align: center;
    padding: 2px;
  }

  p {
    display: block;
  }

  .p_text_justify {
    font-size: 12pt;
    text-align: justify;
  }

  .p_text_left {
    text-align: left;
  }

  .p_text_center {
    text-align: center;
  }

  .signature {
    display: block;
    margin: auto;
    max-width: 80%;
    max-height: 80%;
  }

  .sealStamp {
    display: block;
    max-width: 50%;
    max-height: 50%;
    margin-left: 15%;
    margin-right: 35%;
  }

  .disclaimer {
    font-size: 12pt;
  }
`;

const EApostilleTemplate: FunctionComponent<TemplateProps<EApostilleSchema>> = ({ document }) => {
  const documentData = getDocumentData(document) as EApostilleDocument;

  return (
    <Wrapper>
      <style>{styles}</style>
      <div className="p-4">
        <div className="image" style={{ justifyContent: "center", display: "flex" }}>
          <div className="page">
            <div className="ac_container">
              <div className="title_ac_container" style={{ width: "100%" }}>
                <p className="p_text_center apostille-text">
                  <strong>{documentData.title}</strong>
                </p>
                <p className="p_text_center" style={{ fontSize: "14pt" }}>
                  <strong>{documentData.subtitle}</strong>
                </p>
                <p className="p_text_justify">{documentData.disclaimer}</p>
              </div>

              <div className="content_ac_container">
                {/* Item 1 */}
                <div className="item_ac_container">
                  <div className="item_increment" style={{ width: "5%" }}>
                    <p className="span_Data">1.</p>
                  </div>
                  <div className="item_label" style={{ width: "35%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      <strong>Country:</strong>
                    </p>
                  </div>
                  <div className="item_data" style={{ width: "60%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      {documentData.country}
                    </p>
                  </div>
                </div>
                <div className="item_desc" style={{ width: "100%" }}>
                  <p className="span_Title p_text_left">
                    <strong>This public document</strong>
                  </p>
                </div>

                {/* Item 2 */}
                <div className="item_ac_container">
                  <div className="item_increment" style={{ width: "5%" }}>
                    <p className="span_Data">2.</p>
                  </div>
                  <div className="item_label" style={{ width: "35%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      <strong>Has been signed by:</strong>
                    </p>
                  </div>
                  <div className="item_data" style={{ width: "60%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      {documentData.signedBy}
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="item_ac_container">
                  <div className="item_increment" style={{ width: "5%" }}>
                    <p className="span_Data">3.</p>
                  </div>
                  <div className="item_label" style={{ width: "35%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      <strong>Acting in the capacity of:</strong>
                    </p>
                  </div>
                  <div className="item_data" style={{ width: "60%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      {documentData.actingOf}
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="item_ac_container">
                  <div className="item_increment" style={{ width: "5%" }}>
                    <p className="span_Data">4.</p>
                  </div>
                  <div className="item_label" style={{ width: "35%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      <strong>Bears the seal/stamp of:</strong>
                    </p>
                  </div>
                  <div className="item_data" style={{ width: "60%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      {documentData.sealStampOf}
                    </p>
                  </div>
                </div>
                <div className="item_title" style={{ width: "100%" }}>
                  <p className="span_Title">
                    <strong>Certified</strong>
                  </p>
                </div>

                {/* Item 5 */}
                <div className="item_ac_container">
                  <div className="item_increment" style={{ width: "5%" }}>
                    <p className="span_Data">5.</p>
                  </div>
                  <div className="item_label" style={{ width: "35%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      <strong>At:</strong>
                    </p>
                  </div>
                  <div className="item_data" style={{ width: "60%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      {documentData.certifiedAt}
                    </p>
                  </div>
                </div>

                {/* Item 6 */}
                <div className="item_ac_container">
                  <div className="item_increment" style={{ width: "5%" }}>
                    <p className="span_Data">6.</p>
                  </div>
                  <div className="item_label" style={{ width: "35%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      <strong>Date:</strong>
                    </p>
                  </div>
                  <div className="item_data" style={{ width: "60%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      {documentData.certifiedOn && format(new Date(documentData.certifiedOn), "dd'th' MMM yyyy")}
                    </p>
                  </div>
                </div>

                {/* Item 7 */}
                <div className="item_ac_container">
                  <div className="item_increment" style={{ width: "5%" }}>
                    <p className="span_Data">7.</p>
                  </div>
                  <div className="item_label" style={{ width: "35%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      <strong>By:</strong>
                    </p>
                  </div>
                  <div className="item_data" style={{ width: "60%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      {documentData.certifiedBy}
                    </p>
                  </div>
                </div>

                {/* Item 8 */}
                <div className="item_ac_container">
                  <div className="item_increment" style={{ width: "5%" }}>
                    <p className="span_Data">8.</p>
                  </div>
                  <div className="item_label" style={{ width: "35%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      <strong>No:</strong>
                    </p>
                  </div>
                  <div className="item_data" style={{ width: "60%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      {documentData.apostilleNo}
                    </p>
                  </div>
                </div>

                {/* Item 9 */}
                <div className="item_ac_container">
                  <div className="item_increment" style={{ width: "5%" }}>
                    <p className="span_Data">9.</p>
                  </div>
                  <div className="item_label" style={{ width: "35%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      <strong>Seal/Stamp:</strong>
                    </p>
                    {documentData.certifiedBySealStamp && (
                      <div>
                        <img
                          className="sealStamp"
                          src={`data:image/jpeg;base64,${documentData.certifiedBySealStamp}`}
                          alt="Seal/Stamp"
                        />
                      </div>
                    )}
                  </div>
                  <div className="item_data" style={{ width: "60%" }}>
                    <p className="span_Data" style={{ textAlign: "left" }}>
                      <strong>Signature:</strong>
                    </p>
                    {documentData.certifiedBySignature && (
                      <div>
                        <img
                          className="signature"
                          src={`data:image/jpeg;base64,${documentData.certifiedBySignature}`}
                          alt="Signature"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default EApostilleTemplate;
