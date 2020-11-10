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

  h4 {
    font-weight: 700;
  }

  .bg-blue {
    background-color: #4172af;
    color: #fff;
  }

  th {
    background-color: #4172af;
    color: white;
  }
`;

export const InvoiceTemplate: FunctionComponent<TemplateProps<Invoice>> = ({ document }) => {
  const {
    id,
    date,
    customerId,
    terms,
    billFrom,
    billTo,
    billableItems,
    subtotal = 0,
    tax = 0,
    taxTotal = 0,
    total = 0
  } = document;

  return (
    <Container className="p-4 mx-auto container" data-testid="invoice-template">
      <div className="flex flex-wrap">
        <div className="w-full md:w-5/12 md:ml-auto md:order-2">
          <h1 className="text-right">INVOICE</h1>
          <div className="flex flex-wrap bg-blue text-center">
            <div className="w-1/2 p-1">
              <p>INVOICE #</p>
            </div>
            <div className="w-1/2 p-1">
              <p>DATE</p>
            </div>
          </div>
          <div className="flex flex-wrap text-center">
            <div className="w-1/2 p-1">
              <p>{id}</p>
            </div>
            <div className="w-1/2 p-1">
              <p>{date && format(new Date(date), "d MMM yyyy")}</p>
            </div>
          </div>
          <div className="flex flex-wrap bg-blue text-center">
            <div className="w-1/2 p-1">
              <p>CUSTOMER ID</p>
            </div>
            <div className="w-1/2 p-1">
              <p>TERMS</p>
            </div>
          </div>
          <div className="flex flex-wrap text-center">
            <div className="w-1/2 p-1">
              <p>{customerId}</p>
            </div>
            <div className="w-1/2 p-1">{terms}</div>
          </div>
        </div>
        <div className="w-full md:w-5/12 md:order-1 mb-4 md:mb-0">
          <h2>{billFrom?.name}</h2>
          <h3>{billFrom?.streetAddress}</h3>
          <h3>
            {billFrom?.city}
            {billFrom?.postalCode && `, ${billFrom?.postalCode}`}
          </h3>
          <h3>{billFrom?.phoneNumber}</h3>
          <div className="flex flex-wrap bg-blue">
            <div className="p-1 pl-2">
              <p>BILL TO</p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="p-1">
              <p>{billTo?.name}</p>
              <p>{billTo?.company.name}</p>
              <p>{billTo?.company.streetAddress}</p>
              <p>
                {billTo?.company.city}
                {billTo?.company.postalCode && `, ${billTo?.company.postalCode}`}
              </p>
              <p>{billTo?.company.phoneNumber}</p>
              <p>{billTo?.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap text-center mb-4 md:mb-0" />
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">DESCRIPTION</th>
            <th className="px-4 py-2">QTY</th>
            <th className="px-4 py-2">UNIT PRICE</th>
            <th className="px-4 py-2">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {billableItems?.map((item, index) => {
            return (
              <tr key={index}>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2 text-center">{item.quantity}</td>
                <td className="border px-4 py-2 text-right">{item.unitPrice}</td>
                <td className="border px-4 py-2 text-right"> {item.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="w-full md:w-5/12 md:ml-auto mt-2 flex text-right">
        <div className="w-full md:w-1/2 border-bottom">
          <h4>SUBTOTAL</h4>
          <h4>TAX (${tax}%)</h4>
          <hr />
          <h4>BALANCE DUE</h4>
        </div>
        <div className="w-full md:w-1/2">
          <p>{subtotal}</p>
          <p>{taxTotal && taxTotal}</p>
          <hr />
          <p className="font-bold">{total}</p>
        </div>
      </div>
    </Container>
  );
};
