import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import styled from "@emotion/styled";
import { XmlRendererFileInterface } from "./typesFile";
import { XmlRendererInterface } from "./typesData";
import { Parser, processors } from "xml2js";
import { htmlUnescape } from "escape-goat";

const TemplateContainer = styled.div`
  .template-container {
    width: 210mm;
    height: 297mm;
    display: block;
    position: relative;
    background-color: white;
    color: black;
    font-family: "Arial";
    font-size: 12pt;
    padding: 35px 70px;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .divTable {
    display: table;
    width: 100%;
  }
  .divTableRow {
    display: table-row;
  }
  .divTableHeading {
    background-color: #eee;
    display: table-header-group;
  }
  .divTableCell,
  .divTableHead {
    border: 1px solid #999999;
    display: table-cell;
    padding: 1fr 3fr;
  }
  .divTableHeading {
    background-color: #eee;
    display: table-header-group;
    font-weight: bold;
  }
  .divTableFoot {
    background-color: #eee;
    display: table-footer-group;
    font-weight: bold;
  }
  .divTableBody {
    display: table-row-group;
  }

  @media print {
    .template-container {
      box-shadow: none;
      margin: 0;
      border: none;
    }
  }

  @page {
    margin: 0;
  }
`;

// Parse XML to Json
const parser = new Parser({
  trim: true,
  normalize: true,
  explicitArray: false,
  ignoreAttrs: true,
  tagNameProcessors: [processors.stripPrefix],
});

export const XMLRenderer: FunctionComponent<TemplateProps<XmlRendererFileInterface>> = ({ document }) => {
  // Decode html entities and remove byte order mark
  const output = htmlUnescape(document.xmlData).replace("\\ufeff", "");

  // Placeholder data field
  let jsonDocument = {} as XmlRendererInterface;

  // Convert XML string to Json
  parser.parseString(output, function (err: string, result: XmlRendererInterface) {
    if (!err) {
      jsonDocument = result;
    }
  });
  return (
    <TemplateContainer>
      <div className="divTable">
        <div className="divTableBody">
          <div className="divTableRow">
            <div className="divTableHead">Invoice</div>
            <div className="divTableCell">
              <div className="divTable">
                <div className="divTableBody">
                  <div className="divTableRow">
                    <div className="divTableHead">UBLVersionID</div>
                    <div className="divTableCell">{jsonDocument?.Invoice?.UBLVersionID || ""}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">CustomizationID</div>
                    <div className="divTableCell">{jsonDocument?.Invoice?.CustomizationID || ""}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">ProfileID</div>
                    <div className="divTableCell"> {jsonDocument?.Invoice?.ProfileID || ""}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">ID</div>
                    <div className="divTableCell">{jsonDocument?.Invoice?.ID || ""}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">IssueDate</div>
                    <div className="divTableCell">{jsonDocument?.Invoice?.IssueDate || ""}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">DueDate</div>
                    <div className="divTableCell">{jsonDocument?.Invoice?.DueDate || ""}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">InvoiceTypeCode</div>
                    <div className="divTableCell">{jsonDocument?.Invoice?.InvoiceTypeCode || ""}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">DocumentCurrencyCode</div>
                    <div className="divTableCell">{jsonDocument?.Invoice?.DocumentCurrencyCode || ""}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">BuyerReference</div>
                    <div className="divTableCell">{jsonDocument?.Invoice?.BuyerReference || ""}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">AccountingSupplierParty</div>
                    <div className="divTableCell">
                      <div className="divTable">
                        <div className="divTableBody">
                          <div className="divTableRow">
                            <div className="divTableHead">Party</div>
                            <div className="divTableCell">
                              <div className="divTable">
                                <div className="divTableBody">
                                  <div className="divTableRow">
                                    <div className="divTableHead">EndpointID</div>
                                    <div className="divTableCell">
                                      <div className="divTable">
                                        <div className="divTableBody">
                                          <div className="divTableRow">
                                            <div className="divTableHead">#text</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingSupplierParty?.Party?.EndpointID || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">@_schemeID</div>
                                            <div className="divTableCell" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">PartyIdentification</div>
                                    <div className="divTableCell">
                                      <div className="divTable">
                                        <div className="divTableBody">
                                          <div className="divTableRow">
                                            <div className="divTableHead">ID</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingSupplierParty?.Party
                                                ?.PartyIdentification?.ID || ""}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">PostalAddress</div>
                                    <div className="divTableCell">
                                      <div className="divTable">
                                        <div className="divTableBody">
                                          <div className="divTableRow">
                                            <div className="divTableHead">StreetName</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingSupplierParty?.Party?.PostalAddress
                                                ?.StreetName || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">AdditionalStreetName</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingSupplierParty?.Party?.PostalAddress
                                                ?.AdditionalStreetName || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">CityName</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingSupplierParty?.Party?.PostalAddress
                                                ?.CityName || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">PostalZone</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingSupplierParty?.Party?.PostalAddress
                                                ?.PostalZone || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">CountrySubentity</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingSupplierParty?.Party?.PostalAddress
                                                ?.CountrySubentity || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">Country</div>
                                            <div className="divTableCell">
                                              <div className="divTable">
                                                <div className="divTableBody">
                                                  <div className="divTableRow">
                                                    <div className="divTableHead">IdentificationCode</div>
                                                    <div className="divTableCell">
                                                      {jsonDocument?.Invoice?.AccountingSupplierParty?.Party
                                                        ?.PostalAddress?.Country?.IdentificationCode || ""}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">PartyTaxScheme</div>
                                    <div className="divTableCell">
                                      <div className="divTable">
                                        <div className="divTableBody">
                                          <div className="divTableRow">
                                            <div className="divTableHead">CompanyID</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingSupplierParty?.Party?.PartyTaxScheme
                                                ?.CompanyID || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">TaxScheme</div>
                                            <div className="divTableCell">
                                              <div className="divTable">
                                                <div className="divTableBody">
                                                  <div className="divTableRow">
                                                    <div className="divTableHead">ID</div>
                                                    <div className="divTableCell">
                                                      {jsonDocument?.Invoice?.AccountingSupplierParty?.Party
                                                        ?.PartyTaxScheme?.TaxScheme.ID || ""}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">PartyLegalEntity</div>
                                    <div className="divTableCell">
                                      <div className="divTable">
                                        <div className="divTableBody">
                                          <div className="divTableRow">
                                            <div className="divTableHead">RegistrationName</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingSupplierParty?.Party?.PartyLegalEntity
                                                ?.RegistrationName || ""}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">AccountingCustomerParty</div>
                    <div className="divTableCell">
                      <div className="divTable">
                        <div className="divTableBody">
                          <div className="divTableRow">
                            <div className="divTableHead">Party</div>
                            <div className="divTableCell">
                              <div className="divTable">
                                <div className="divTableBody">
                                  <div className="divTableRow">
                                    <div className="divTableHead">EndpointID</div>
                                    <div className="divTableCell">
                                      <div className="divTable">
                                        <div className="divTableBody">
                                          <div className="divTableRow">
                                            <div className="divTableHead">#text</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingCustomerParty?.Party?.EndpointID || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">@_schemeID</div>
                                            <div className="divTableCell" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">PartyIdentification</div>
                                    <div className="divTableCell">
                                      <div className="divTable">
                                        <div className="divTableBody">
                                          <div className="divTableRow">
                                            <div className="divTableHead">ID</div>
                                            <div className="divTableCell">
                                              <div className="divTable">
                                                <div className="divTableBody">
                                                  <div className="divTableRow">
                                                    <div className="divTableHead">#text</div>
                                                    <div className="divTableCell">
                                                      {jsonDocument?.Invoice?.AccountingCustomerParty?.Party
                                                        ?.PartyIdentification.ID || ""}
                                                    </div>
                                                  </div>
                                                  <div className="divTableRow">
                                                    <div className="divTableHead">@_schemeID</div>
                                                    <div className="divTableCell" />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">PostalAddress</div>
                                    <div className="divTableCell">
                                      <div className="divTable">
                                        <div className="divTableBody">
                                          <div className="divTableRow">
                                            <div className="divTableHead">StreetName</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingCustomerParty?.Party?.PostalAddress
                                                ?.StreetName || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">AdditionalStreetName</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingCustomerParty?.Party?.PostalAddress
                                                ?.AdditionalStreetName || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">CityName</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingCustomerParty?.Party?.PostalAddress
                                                ?.CityName || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">PostalZone</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingCustomerParty?.Party?.PostalAddress
                                                ?.PostalZone || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">CountrySubentity</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingCustomerParty?.Party?.PostalAddress
                                                ?.CountrySubentity || ""}
                                            </div>
                                          </div>
                                          <div className="divTableRow">
                                            <div className="divTableHead">Country</div>
                                            <div className="divTableCell">
                                              <div className="divTable">
                                                <div className="divTableBody">
                                                  <div className="divTableRow">
                                                    <div className="divTableHead">IdentificationCode</div>
                                                    <div className="divTableCell">
                                                      {jsonDocument?.Invoice?.AccountingCustomerParty?.Party
                                                        ?.PostalAddress?.Country?.IdentificationCode || ""}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">PartyLegalEntity</div>
                                    <div className="divTableCell">
                                      <div className="divTable">
                                        <div className="divTableBody">
                                          <div className="divTableRow">
                                            <div className="divTableHead">RegistrationName</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.AccountingCustomerParty?.Party?.PartyLegalEntity
                                                ?.RegistrationName || ""}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">PaymentMeans</div>
                    <div className="divTableCell">
                      <div className="divTable">
                        <div className="divTableBody">
                          <div className="divTableRow">
                            <div className="divTableHead">PaymentMeansCode</div>
                            <div className="divTableCell">
                              <div className="divTable">
                                <div className="divTableBody">
                                  <div className="divTableRow">
                                    <div className="divTableHead">#text</div>
                                    <div className="divTableCell">
                                      {jsonDocument?.Invoice?.PaymentMeans?.PaymentMeansCode || ""}
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">@_name</div>
                                    <div className="divTableCell" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="divTableRow">
                            <div className="divTableHead">PaymentID</div>
                            <div className="divTableCell">{jsonDocument?.Invoice?.PaymentMeans?.PaymentID || ""}</div>
                          </div>
                          <div className="divTableRow">
                            <div className="divTableHead">PayeeFinancialAccount</div>
                            <div className="divTableCell">
                              <div className="divTable">
                                <div className="divTableBody">
                                  <div className="divTableRow">
                                    <div className="divTableHead">ID</div>
                                    <div className="divTableCell">
                                      {jsonDocument?.Invoice?.PaymentMeans?.PayeeFinancialAccount?.ID || ""}
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">Name</div>
                                    <div className="divTableCell">
                                      {jsonDocument?.Invoice?.PaymentMeans?.PayeeFinancialAccount?.Name || ""}
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">FinancialInstitutionBranch</div>
                                    <div className="divTableCell">
                                      <div className="divTable">
                                        <div className="divTableBody">
                                          <div className="divTableRow">
                                            <div className="divTableHead">ID</div>
                                            <div className="divTableCell">
                                              {jsonDocument?.Invoice?.PaymentMeans?.PayeeFinancialAccount
                                                ?.FinancialInstitutionBranch?.ID || ""}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">PaymentTerms</div>
                    <div className="divTableCell">
                      <div className="divTable">
                        <div className="divTableBody">
                          <div className="divTableRow">
                            <div className="divTableHead">Note</div>
                            <div className="divTableCell">{jsonDocument?.Invoice?.PaymentTerms?.Note || ""}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">TaxTotal</div>
                    <div className="divTableCell">
                      <div className="divTable">
                        <div className="divTableBody">
                          <div className="divTableRow">
                            <div className="divTableHead">TaxAmount</div>
                            <div className="divTableCell">
                              <div className="divTable">
                                <div className="divTableBody">
                                  <div className="divTableRow">
                                    <div className="divTableHead">#text</div>
                                    <div className="divTableCell">
                                      {jsonDocument?.Invoice?.TaxTotal?.TaxAmount || ""}
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">@_currencyID</div>
                                    <div className="divTableCell" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="divTableRow">
                            <div className="divTableHead">TaxSubtotal</div>
                            <div className="divTableCell">
                              <div className="divTable">
                                <div className="divTableHeading">
                                  <div className="divTableRow">
                                    <div className="divTableHead">TaxableAmount</div>
                                    <div className="divTableHead">TaxAmount</div>
                                    <div className="divTableHead">TaxCategory</div>
                                  </div>
                                </div>
                                <div className="divTableBody">
                                  {jsonDocument?.Invoice?.TaxTotal?.TaxSubtotal?.map((data, index) => (
                                    <div className="divTableRow" key={index}>
                                      <div className="divTableCell">
                                        <div className="divTable">
                                          <div className="divTableBody">
                                            <div className="divTableRow">
                                              <div className="divTableHead">#text</div>
                                              <div className="divTableCell">{data?.TaxableAmount || ""}</div>
                                            </div>
                                            <div className="divTableRow">
                                              <div className="divTableHead">@_currencyID</div>
                                              <div className="divTableCell" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="divTableCell">
                                        <div className="divTable">
                                          <div className="divTableBody">
                                            <div className="divTableRow">
                                              <div className="divTableHead">#text</div>
                                              <div className="divTableCell">{data?.TaxAmount || ""}</div>
                                            </div>
                                            <div className="divTableRow">
                                              <div className="divTableHead">@_currencyID</div>
                                              <div className="divTableCell" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="divTableCell">
                                        <div className="divTable">
                                          <div className="divTableBody">
                                            <div className="divTableRow">
                                              <div className="divTableHead">ID</div>
                                              <div className="divTableCell">{data?.TaxCategory.ID || ""}</div>
                                            </div>
                                            <div className="divTableRow">
                                              <div className="divTableHead">Percent</div>
                                              <div className="divTableCell">{data?.TaxCategory?.Percent || ""}</div>
                                            </div>
                                            <div className="divTableRow">
                                              <div className="divTableHead">TaxScheme</div>
                                              <div className="divTableCell">
                                                <div className="divTable">
                                                  <div className="divTableBody">
                                                    <div className="divTableRow">
                                                      <div className="divTableHead">ID</div>
                                                      <div className="divTableCell">
                                                        {data?.TaxCategory?.TaxScheme?.ID || ""}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">LegalMonetaryTotal</div>
                    <div className="divTableCell">
                      <div className="divTable">
                        <div className="divTableBody">
                          <div className="divTableRow">
                            <div className="divTableHead">LineExtensionAmount</div>
                            <div className="divTableCell">
                              <div className="divTable">
                                <div className="divTableBody">
                                  <div className="divTableRow">
                                    <div className="divTableHead">#text</div>
                                    <div className="divTableCell">
                                      {jsonDocument?.Invoice?.LegalMonetaryTotal?.LineExtensionAmount || ""}
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">@_currencyID</div>
                                    <div className="divTableCell" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="divTableRow">
                            <div className="divTableHead">TaxExclusiveAmount</div>
                            <div className="divTableCell">
                              <div className="divTable">
                                <div className="divTableBody">
                                  <div className="divTableRow">
                                    <div className="divTableHead">#text</div>
                                    <div className="divTableCell">
                                      {jsonDocument?.Invoice?.LegalMonetaryTotal?.TaxExclusiveAmount || ""}
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">@_currencyID</div>
                                    <div className="divTableCell" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="divTableRow">
                            <div className="divTableHead">TaxInclusiveAmount</div>
                            <div className="divTableCell">
                              <div className="divTable">
                                <div className="divTableBody">
                                  <div className="divTableRow">
                                    <div className="divTableHead">#text</div>
                                    <div className="divTableCell">
                                      {jsonDocument?.Invoice?.LegalMonetaryTotal?.TaxInclusiveAmount || ""}
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">@_currencyID</div>
                                    <div className="divTableCell" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="divTableRow">
                            <div className="divTableHead">PayableAmount</div>
                            <div className="divTableCell">
                              <div className="divTable">
                                <div className="divTableBody">
                                  <div className="divTableRow">
                                    <div className="divTableHead">#text</div>
                                    <div className="divTableCell">
                                      {jsonDocument?.Invoice?.LegalMonetaryTotal?.PayableAmount || ""}
                                    </div>
                                  </div>
                                  <div className="divTableRow">
                                    <div className="divTableHead">@_currencyID</div>
                                    <div className="divTableCell" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableHead">InvoiceLine</div>
                    <div className="divTableCell">
                      <div className="divTable">
                        <div className="divTableHeading">
                          <div className="divTableRow">
                            <div className="divTableHead">ID</div>
                            <div className="divTableHead">InvoicedQuantity</div>
                            <div className="divTableHead">LineExtensionAmount</div>
                            <div className="divTableHead">AllowanceCharge</div>
                            <div className="divTableHead">Item</div>
                            <div className="divTableHead">Price</div>
                          </div>
                        </div>
                        <div className="divTableBody">
                          {jsonDocument?.Invoice?.InvoiceLine?.map((data, index) => (
                            <div className="divTableRow" key={index}>
                              <div className="divTableCell">{index}</div>
                              <div className="divTableCell">
                                <div className="divTable">
                                  <div className="divTableBody">
                                    <div className="divTableRow">
                                      <div className="divTableHead">#text</div>
                                      <div className="divTableCell">{data?.InvoicedQuantity || ""}</div>
                                    </div>
                                    <div className="divTableRow">
                                      <div className="divTableHead">@_unitCode</div>
                                      <div className="divTableCell" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="divTableCell">
                                <div className="divTable">
                                  <div className="divTableBody">
                                    <div className="divTableRow">
                                      <div className="divTableHead">#text</div>
                                      <div className="divTableCell">{data?.LineExtensionAmount || ""}</div>
                                    </div>
                                    <div className="divTableRow">
                                      <div className="divTableHead">@_currencyID</div>
                                      <div className="divTableCell" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="divTableCell">
                                <div className="divTable">
                                  <div className="divTableBody">
                                    <div className="divTableRow">
                                      <div className="divTableHead">ChargeIndicator</div>
                                      <div className="divTableCell">{data?.AllowanceCharge?.ChargeIndicator || ""}</div>
                                    </div>
                                    <div className="divTableRow">
                                      <div className="divTableHead">AllowanceChargeReasonCode</div>
                                      <div className="divTableCell">
                                        {data?.AllowanceCharge?.AllowanceChargeReasonCode || ""}
                                      </div>
                                    </div>
                                    <div className="divTableRow">
                                      <div className="divTableHead">AllowanceChargeReason</div>
                                      <div className="divTableCell">
                                        {data?.AllowanceCharge?.AllowanceChargeReason || ""}
                                      </div>
                                    </div>
                                    <div className="divTableRow">
                                      <div className="divTableHead">MultiplierFactorNumeric</div>
                                      <div className="divTableCell">
                                        {data?.AllowanceCharge?.MultiplierFactorNumeric || ""}
                                      </div>
                                    </div>
                                    <div className="divTableRow">
                                      <div className="divTableHead">Amount</div>
                                      <div className="divTableCell">
                                        <div className="divTable">
                                          <div className="divTableBody">
                                            <div className="divTableRow">
                                              <div className="divTableHead">#text</div>
                                              <div className="divTableCell">{data?.AllowanceCharge?.Amount || ""}</div>
                                            </div>
                                            <div className="divTableRow">
                                              <div className="divTableHead">@_currencyID</div>
                                              <div className="divTableCell" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="divTableRow">
                                      <div className="divTableHead">BaseAmount</div>
                                      <div className="divTableCell">
                                        <div className="divTable">
                                          <div className="divTableBody">
                                            <div className="divTableRow">
                                              <div className="divTableHead">#text</div>
                                              <div className="divTableCell">
                                                {data?.AllowanceCharge?.BaseAmount || ""}
                                              </div>
                                            </div>
                                            <div className="divTableRow">
                                              <div className="divTableHead">@_currencyID</div>
                                              <div className="divTableCell" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="divTableCell">
                                <div className="divTable">
                                  <div className="divTableBody">
                                    <div className="divTableRow">
                                      <div className="divTableHead">Name</div>
                                      <div className="divTableCell">{data?.Item?.Name || ""}</div>
                                    </div>
                                    <div className="divTableRow">
                                      <div className="divTableHead">SellersItemIdentification</div>
                                      <div className="divTableCell">
                                        <div className="divTable">
                                          <div className="divTableBody">
                                            <div className="divTableRow">
                                              <div className="divTableHead">ID</div>
                                              <div className="divTableCell">
                                                {data?.Item?.SellersItemIdentification?.ID || ""}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="divTableRow">
                                      <div className="divTableHead">classNameifiedTaxCategory</div>
                                      <div className="divTableCell">
                                        <div className="divTable">
                                          <div className="divTableBody">
                                            <div className="divTableRow">
                                              <div className="divTableHead">ID</div>
                                              <div className="divTableCell">
                                                {data?.Item?.ClassifiedTaxCategory?.ID || ""}
                                              </div>
                                            </div>
                                            <div className="divTableRow">
                                              <div className="divTableHead">Percent</div>
                                              <div className="divTableCell">
                                                {data?.Item?.ClassifiedTaxCategory?.Percent || ""}
                                              </div>
                                            </div>
                                            <div className="divTableRow">
                                              <div className="divTableHead">TaxScheme</div>
                                              <div className="divTableCell">
                                                <div className="divTable">
                                                  <div className="divTableBody">
                                                    <div className="divTableRow">
                                                      <div className="divTableHead">ID</div>
                                                      <div className="divTableCell">
                                                        {data?.Item?.ClassifiedTaxCategory?.TaxScheme?.ID || ""}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="divTableCell">
                                <div className="divTable">
                                  <div className="divTableBody">
                                    <div className="divTableRow">
                                      <div className="divTableHead">PriceAmount</div>
                                      <div className="divTableCell">
                                        <div className="divTable">
                                          <div className="divTableBody">
                                            <div className="divTableRow">
                                              <div className="divTableHead">#text</div>
                                              <div className="divTableCell">{data?.Price?.PriceAmount || ""}</div>
                                            </div>
                                            <div className="divTableRow">
                                              <div className="divTableHead">@_currencyID</div>
                                              <div className="divTableCell" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="divTableRow">
                                      <div className="divTableHead">BaseQuantity</div>
                                      <div className="divTableCell">
                                        <div className="divTable">
                                          <div className="divTableBody">
                                            <div className="divTableRow">
                                              <div className="divTableHead">#text</div>
                                              <div className="divTableCell">{data?.Price?.BaseQuantity || ""}</div>
                                            </div>
                                            <div className="divTableRow">
                                              <div className="divTableHead">@_unitCode</div>
                                              <div className="divTableCell" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TemplateContainer>
  );
};
