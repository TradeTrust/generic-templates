import { css } from "@emotion/core";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Invoice } from "./types";
import { format } from "date-fns";

const container = css`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: #4e4e50;
  width: 100%;
  height: 100vh;
  max-height: 1000px;
  max-width: 980px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const InvoiceTemplate: FunctionComponent<TemplateProps<Invoice> & { className?: string }> = ({
  document,
  className = ""
}) => {
  const { id, date, customerId, terms, billFrom, billTo, invoiceItems } = document;

  return (
    <div>
      <div css={container} className={className}>
        <h1 style={{ color: "#4172AF", textAlign: "right" }}>INVOICE</h1>
        <div className="m-0" style={{ position: "absolute", top: "0" }}>
          <h1 style={{ color: "#4172AF", textAlign: "left" }}>{billFrom?.companyName}</h1>
          <h3 style={{ textAlign: "left" }}>{billFrom?.streetAddress}</h3>
          <h3 style={{ textAlign: "left" }}>
            {billFrom?.city} {billFrom?.postalCode}
          </h3>
          <h3 style={{ textAlign: "left" }}>{billFrom?.phoneNumber}</h3>
        </div>
        <table
          className="table"
          style={{ width: "40%", right: "0", top: "100px", position: "absolute", textAlign: "center" }}
        >
          <thead style={{ backgroundColor: "#4172AF", color: "white" }}>
            <tr>
              <th scope="col">INVOICE #</th>
              <th scope="col">DATE</th>
            </tr>
          </thead>
          <tbody>
            <td>{id}</td>
            {date && <td>{format(new Date(date), "d MMM yyyy")}</td>}
          </tbody>
        </table>
        <table
          className="table"
          style={{ width: "40%", right: "0", top: "180px", position: "absolute", textAlign: "center" }}
        >
          <thead style={{ backgroundColor: "#4172AF", color: "white" }}>
            <tr>
              <th scope="col">CUSTOMER ID</th>
              <th scope="col">TERMS</th>
            </tr>
          </thead>
          <tbody>
            <td>{customerId}</td>
            <td>{terms}</td>
          </tbody>
        </table>
        <table className="table" style={{ width: "40%", left: "0", top: "120px", position: "relative" }}>
          <thead style={{ backgroundColor: "#4172AF", color: "white" }}>
            <tr>
              <th scope="col">BILL TO</th>
            </tr>
          </thead>
          <tbody>
            <tr>{billTo?.name}</tr>
            <tr>{billTo?.company.companyName}</tr>
            <tr>{billTo?.company.streetAddress}</tr>
            <tr>
              {billTo?.company.city},{billTo?.company.postalCode}
            </tr>
            <tr>
              {billTo?.company.city},{billTo?.company.phoneNumber}
            </tr>
            <tr>{billTo?.email}</tr>
          </tbody>
        </table>
        <table className="table" style={{ position: "relative", top: "150px" }}>
          <thead style={{ backgroundColor: "#4172AF", color: "white" }}>
            <tr>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">QTY</th>
              <th scope="col">UNIT PRICE</th>
              <th scope="col">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {invoiceItems?.map(item => {
              return (
                <tr>
                  <td style={{ borderStyle: "none none solid solid", borderColor: "black", borderWidth: "2px" }}>
                    {item.description}
                  </td>
                  <td
                    style={{
                      borderStyle: "none none solid solid",
                      borderColor: "black",
                      borderWidth: "2px",
                      textAlign: "center"
                    }}
                  >
                    {item.quantity}
                  </td>
                  <td
                    style={{
                      borderStyle: "none none solid solid",
                      borderColor: "black",
                      borderWidth: "2px",
                      textAlign: "right"
                    }}
                  >
                    {item.unitPrice}
                  </td>
                  <td
                    style={{
                      borderStyle: "none solid solid solid",
                      borderColor: "black",
                      borderWidth: "2px",
                      textAlign: "right"
                    }}
                  >
                    {item.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {}
    </div>
  );
};
