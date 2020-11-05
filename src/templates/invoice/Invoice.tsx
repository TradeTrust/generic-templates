import { css } from "@emotion/core";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Invoice } from "./types";
import { format } from "date-fns";
import styled from "@emotion/styled";

const Container = styled.div`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  width: 100%;
  height: 100vh;
  max-height: 1000px;
  max-width: 980px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h1 {
    color: #4172af;
    text-align: right;
  }

  th {
    background-color: #4172af;
    color: white;
  }

  .table-right {
    width: 40%;
    right: 0;
    top: 100px;
    position: absolute;
    text-align: center;
  }

  .table-left {
    width: 40%;
    left: 0;
    top: 120px;
    position: relative;
  }

  .table-full {
    position: relative;
    top: 150px;
  }

  .border {
    border-style: none none solid solid;
    border-color: black;
    border-width: 2px;
  }

  .total {
    font-weight: 700;
    text-align: left;
    margin-top: 150px;
    margin-left: 590px;
    width: 40%;
    line-height: 10px;
  }

  .amount {
    width: 10%;
    margin-left: 700px;
  }
`;

export const InvoiceTemplate: FunctionComponent<TemplateProps<Invoice>> = ({ document }) => {
  const { id, date, customerId, terms, billFrom, billTo, billableItems } = document;

  return (
    <div>
      <Container>
        <h1>INVOICE</h1>
        <div style={{ position: "absolute", top: "0" }}>
          <h1 style={{ color: "#4172AF", textAlign: "left" }}>{billFrom?.name}</h1>
          <h3 style={{ textAlign: "left" }}>{billFrom?.streetAddress}</h3>
          <h3 style={{ textAlign: "left" }}>
            {billFrom?.city}
            {`, ${billFrom?.postalCode}`}
          </h3>
          <h3 style={{ textAlign: "left" }}>{billFrom?.phoneNumber}</h3>
        </div>
        <table className="table-right">
          <thead>
            <tr>
              <th scope="col">INVOICE #</th>
              <th scope="col">DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              {date && <td>{format(new Date(date), "d MMM yyyy")}</td>}
            </tr>
          </tbody>
        </table>
        <table className="table-right" style={{ top: "180px" }}>
          <thead>
            <tr>
              <th scope="col">CUSTOMER ID</th>
              <th scope="col">TERMS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{customerId}</td>
              <td>{terms}</td>
            </tr>
          </tbody>
        </table>
        <table className="table-left">
          <thead>
            <tr>
              <th scope="col">BILL TO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{billTo?.name}</td>
            </tr>
            <tr>
              <td>{billTo?.company.name}</td>
            </tr>
            <tr>
              <td>{billTo?.company.streetAddress}</td>
            </tr>
            <tr>
              <td>
                {billTo?.company.city}
                {`, ${billTo?.company.postalCode}`}
              </td>
            </tr>
            <tr>
              <td>{billTo?.company.phoneNumber}</td>
            </tr>
            <tr>
              <td>{billTo?.email}</td>
            </tr>
          </tbody>
        </table>
        <table className="table-full">
          <thead>
            <tr>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">QTY</th>
              <th scope="col">UNIT PRICE</th>
              <th scope="col">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {billableItems?.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border">{item.description}</td>
                  <td
                    className="border"
                    style={{
                      textAlign: "center"
                    }}
                  >
                    {item.quantity}
                  </td>
                  <td
                    className="border"
                    style={{
                      textAlign: "right"
                    }}
                  >
                    {item.unitPrice}
                  </td>
                  <td
                    className="border"
                    style={{
                      borderStyle: "none solid solid solid",
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
        <div className="total">
          <h4>SUBTOTAL</h4>
          <h4>TAX</h4>
          <hr />
          <h4>BALANCE DUE</h4>
        </div>
      </Container>
    </div>
  );
};
