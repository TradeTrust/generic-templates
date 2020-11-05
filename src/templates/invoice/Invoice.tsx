import { css } from "@emotion/core";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Invoice } from "./types";
import { format } from "date-fns";
import styled from "@emotion/styled";

const Container = styled.div`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  position: relative;

  h1 {
    color: #4172af;
    font-size: 40px;
    font-weight: 700;
  }

  h2 {
    color: #4172af;
    font-size: 28px;
    font-weight: 700;
  }

  .bg-blue {
    background-color: #4172af;
    color: #fff;
  }

  /*
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
    width: 40%;
    line-height: 10px;
  }

  .amount {
    width: 10%;
    margin-left: 700px;
  } */
`;

export const InvoiceTemplate: FunctionComponent<TemplateProps<Invoice>> = ({ document }) => {
  const { id, date, customerId, terms, billFrom, billTo, billableItems } = document;

  return (
    <Container className="p-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-auto md:ml-auto md:order-2 mb-4 md:mb-0">
          <h1>INVOICE</h1>
        </div>
        <div className="w-full md:w-1/2 md:order-1 mb-4 md:mb-0">
          <h2>{billFrom?.name}</h2>
          <h3>{billFrom?.streetAddress}</h3>
          <h3>
            {billFrom?.city}
            {`, ${billFrom?.postalCode}`}
          </h3>
          <h3>{billFrom?.phoneNumber}</h3>
        </div>
      </div>
      <div className="flex flex-wrap text-center mb-4 md:mb-0">
        <div className="w-full md:w-1/2 md:ml-auto">
          <div className="flex flex-wrap bg-blue">
            <div className="w-1/2 p-1">
              <p>INVOICE #</p>
            </div>
            <div className="w-1/2 p-1">
              <p>DATE</p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-1/2 p-1">
              <p>{id}</p>
            </div>
            <div className="w-1/2 p-1">{date && <p>{format(new Date(date), "d MMM yyyy")}</p>}</div>
          </div>
        </div>
      </div>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Title</th>
            <th class="px-4 py-2">Author</th>
            <th class="px-4 py-2">Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2">Intro to CSS</td>
            <td class="border px-4 py-2">Adam</td>
            <td class="border px-4 py-2">858</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2">
              A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design
            </td>
            <td class="border px-4 py-2">Adam</td>
            <td class="border px-4 py-2">112</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Intro to JavaScript</td>
            <td class="border px-4 py-2">Chris</td>
            <td class="border px-4 py-2">1,280</td>
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
  );
};
