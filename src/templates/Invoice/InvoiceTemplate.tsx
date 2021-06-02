import styled from "@emotion/styled";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { format } from "date-fns";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { Invoice } from "./types";

const CustomStyles = styled.div`
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

  th {
    background-color: #4172af;
    color: white;
  }

  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
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
    total = 0,
  } = document;
  const qrCodeUrl = document?.links?.self.href;

  return (
    <Wrapper data-testid="invoice-template">
      <CustomStyles>
        <div className="flex flex-wrap">
          <div className="w-full md:w-5/12 mb-4 md:mb-0 md:ml-auto md:order-2">
            <h1 className="md:text-right leading-none mb-6">INVOICE</h1>
            <div className="flex flex-wrap bg-blue text-center">
              <div className="w-1/2 py-1">
                <p>INVOICE #</p>
              </div>
              <div className="w-1/2 py-1">
                <p>DATE</p>
              </div>
            </div>
            <div className="flex flex-wrap text-center">
              <div className="w-1/2 py-1">
                <p>{id}</p>
              </div>
              <div className="w-1/2 py-1">
                <p>{date && format(new Date(date), "d MMM yyyy")}</p>
              </div>
            </div>
            <div className="flex flex-wrap bg-blue text-center">
              <div className="w-1/2 py-1">
                <p>CUSTOMER ID</p>
              </div>
              <div className="w-1/2 py-1">
                <p>TERMS</p>
              </div>
            </div>
            <div className="flex flex-wrap text-center">
              <div className="w-1/2 py-1">
                <p>{customerId}</p>
              </div>
              <div className="w-1/2 py-1">{terms}</div>
            </div>
          </div>
          <div className="w-full md:w-5/12 md:order-1">
            <div className="mb-4">
              <h2>{billFrom?.name}</h2>
              <p>{billFrom?.streetAddress}</p>
              <p>
                {billFrom?.city}
                {billFrom?.postalCode && `, ${billFrom?.postalCode}`}
              </p>
              <p>{billFrom?.phoneNumber}</p>
            </div>
            <div className="flex flex-wrap bg-blue">
              <div className="pl-2">
                <p>BILL TO</p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="mb-4 py-2">
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
        <div className="flex flex-wrap mb-4 md:mb-0" />
        <div className="table-responsive mb-4">
          <table className="table-auto w-full border">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">DESCRIPTION</th>
                <th className="px-4 py-2 text-center">QTY</th>
                <th className="px-4 py-2 text-right">UNIT PRICE</th>
                <th className="px-4 py-2 text-right">AMOUNT</th>
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
        </div>
        <div className="w-full md:w-5/12 md:ml-auto mt-2 flex text-right">
          <div className="w-full md:w-1/2">
            <p className="font-bold">SUBTOTAL</p>
            <p className="font-bold">TAX (${tax}%)</p>
            <hr />
            <p className="font-bold">BALANCE DUE</p>
          </div>
          <div className="w-full md:w-1/2">
            <p>{subtotal}</p>
            <p>{taxTotal && taxTotal}</p>
            <hr />
            <p className="font-bold">{total}</p>
          </div>
        </div>
        {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
      </CustomStyles>
    </Wrapper>
  );
};
