import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent, ReactNode } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { getDocumentData, getQRCodeURL } from "../../utils";
import { BillOfExchangeDocument, BillOfExchangeParty, BillOfExchangeSchema } from "./types";

/** Matches classic BoE form dates e.g. "06 Jul 2022". */
const formatBoeDate = (input?: string): string => {
  const date = new Date(input || "");
  if (isNaN(date.getTime())) return input || "";
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-GB", { month: "short", timeZone: "UTC" });
  const year = date.getUTCFullYear();
  return `${day} ${month} ${year}`;
};

const formatAmountInFigures = (currencyCode?: string, amountInFigures?: string): string => {
  if (!amountInFigures && !currencyCode) return "";
  const amount = amountInFigures
    ? amountInFigures.replace(
        /^([+-]?\d+)(\.\d+)?$/,
        (_: string, whole: string, fraction = "") => `${whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${fraction}`
      )
    : "";
  return [currencyCode, amount].filter(Boolean).join(" ");
};

/**
 * Signature comes from credential data and must never be used as an arbitrary
 * image URL (e.g. a remote tracking pixel). Only accept self-contained inline
 * base64 image data.
 */
const DATA_IMAGE_URI = /^data:image\/(png|jpe?g|gif|webp|svg\+xml);base64,[A-Za-z0-9+/]+=*$/;

const isValidInlineImage = (value?: string): value is string => !!value && DATA_IMAGE_URI.test(value);

const cellStyle: React.CSSProperties = {
  border: "1px solid #000",
  padding: "8px",
  verticalAlign: "top",
  textAlign: "left",
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  lineHeight: 1.25,
  color: "#000",
};

const valueStyle: React.CSSProperties = {
  marginTop: 4,
  fontSize: 14,
  color: "#000",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
};

const FieldCell = ({
  label,
  value,
  colSpan,
  style,
}: {
  label: string;
  value?: ReactNode;
  colSpan?: number;
  style?: React.CSSProperties;
}): JSX.Element => (
  <td colSpan={colSpan} style={{ ...cellStyle, ...style }}>
    <div style={labelStyle}>{label}</div>
    {value !== undefined && value !== null && value !== "" && <div style={valueStyle}>{value}</div>}
  </td>
);

const PartySignedCell = ({
  label,
  party,
  colSpan,
}: {
  label: string;
  party?: BillOfExchangeParty;
  colSpan?: number;
}): JSX.Element => (
  <FieldCell
    label={label}
    colSpan={colSpan}
    style={{ height: 96 }}
    value={
      party?.name || party?.address ? (
        <>
          {party.name && <div style={{ fontWeight: 500 }}>{party.name}</div>}
          {party.address && <div style={{ fontSize: 12, marginTop: 4, color: "#1f2937" }}>{party.address}</div>}
        </>
      ) : undefined
    }
  />
);

const SignatureImageCell = ({
  label,
  signature,
  partyName,
  colSpan,
}: {
  label: string;
  signature?: string;
  /** Party-specific accessible name (e.g. "Drawee"/"Drawer") — disambiguates the
   * alt text and test id when multiple signature cells share the same visible label. */
  partyName?: string;
  colSpan?: number;
}): JSX.Element => {
  const altText = partyName ? `${partyName} ${label.toLowerCase()} image` : `${label} image`;
  const testIdSuffix = (partyName ?? label).toLowerCase().replace(/\s+/g, "-");
  return (
    <td colSpan={colSpan} style={{ ...cellStyle, height: 120 }}>
      <div style={labelStyle}>{label}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 8,
          minHeight: 72,
        }}
      >
        {isValidInlineImage(signature) ? (
          <img
            src={signature}
            alt={altText}
            data-testid={`signature-image-${testIdSuffix}`}
            style={{ maxHeight: 64, maxWidth: "100%", objectFit: "contain" }}
          />
        ) : null}
      </div>
    </td>
  );
};

export const BillOfExchangeTemplate: FunctionComponent<TemplateProps<BillOfExchangeSchema>> = ({ document }) => {
  // Match classic BoE extractData: never crash on missing/partial document payloads.
  const data = (getDocumentData(document) ?? {}) as BillOfExchangeDocument;
  const qrCodeUrl = getQRCodeURL(document);
  const {
    referenceNumber,
    amountInFigures,
    amountInWords,
    currencyCode,
    blDate,
    placeOfIssue,
    dateOfIssue,
    tenor,
    payee,
    drawnUnder,
    drawnUnderDate,
    issuedBy,
    drawee,
    drawer,
  } = data;

  return (
    <Wrapper data-testid="bill-of-exchange-template">
      <div
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          color: "#000",
          background: "#fff",
          maxWidth: 896,
          margin: "0 auto",
          padding: 16,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            margin: "0 0 12px",
          }}
        >
          Bill of Exchange
        </h1>

        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "25%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "25%" }} />
          </colgroup>
          <tbody>
            <tr>
              <FieldCell label="Reference No." value={referenceNumber} colSpan={2} style={{ height: 52 }} />
              <FieldCell
                label="Amount in figures"
                value={formatAmountInFigures(currencyCode, amountInFigures)}
                colSpan={2}
                style={{ height: 52 }}
              />
            </tr>
            <tr>
              <FieldCell
                label="B/L Date (if applicable)"
                value={formatBoeDate(blDate)}
                colSpan={2}
                style={{ height: 52 }}
              />
              <FieldCell label="Place of issue" value={placeOfIssue} style={{ height: 52 }} />
              <FieldCell label="Date of issue" value={formatBoeDate(dateOfIssue)} style={{ height: 52 }} />
            </tr>
            <tr>
              <FieldCell label="At" value={tenor} colSpan={4} style={{ height: 52 }} />
            </tr>
            <tr>
              <FieldCell label="Pay to the order of" value={payee} colSpan={4} style={{ height: 52 }} />
            </tr>
            <tr>
              <FieldCell
                label="The sum of (amount in words)"
                value={amountInWords}
                colSpan={4}
                style={{ height: 52 }}
              />
            </tr>
            <tr>
              <FieldCell label="Drawn under" value={drawnUnder} colSpan={2} style={{ height: 64 }} />
              <FieldCell label="Dated" value={formatBoeDate(drawnUnderDate)} colSpan={2} style={{ height: 64 }} />
            </tr>
            <tr>
              <FieldCell label="Issued by" value={issuedBy} colSpan={4} style={{ height: 52 }} />
            </tr>
            <tr>
              <PartySignedCell label="Signed for and on behalf of Drawee" party={drawee} colSpan={2} />
              <PartySignedCell label="Signed for and on behalf of Drawer" party={drawer} colSpan={2} />
            </tr>
            <tr>
              <FieldCell
                label="Name of authorized signatory"
                value={drawee?.authorisedSignatoryName}
                colSpan={2}
                style={{ height: 44 }}
              />
              <FieldCell
                label="Name of authorized signatory"
                value={drawer?.authorisedSignatoryName}
                colSpan={2}
                style={{ height: 44 }}
              />
            </tr>
            <tr>
              <SignatureImageCell label="Signature" partyName="Drawee" signature={drawee?.signature} colSpan={2} />
              <SignatureImageCell label="Signature" partyName="Drawer" signature={drawer?.signature} colSpan={2} />
            </tr>
          </tbody>
        </table>

        {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
      </div>
    </Wrapper>
  );
};
