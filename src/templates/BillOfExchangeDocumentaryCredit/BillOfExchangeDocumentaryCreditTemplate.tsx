import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import styled from "@emotion/styled";
import React, { FunctionComponent, ReactNode } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { getDocumentData, getQRCodeURL } from "../../utils";
import {
  BillOfExchangeDocumentaryCreditDocument,
  BillOfExchangeDocumentaryCreditParty,
  BillOfExchangeDocumentaryCreditSchema,
} from "./types";

/**
 * A Bill of Exchange is inherently a landscape-shaped document (like a
 * cheque) — wider than tall. The printed page itself stays a normal,
 * upright A4 portrait sheet (no rotation — the reader never turns the page);
 * the landscape-proportioned card just shrinks to fit the portrait page's
 * width, with the rest of the page left blank below it.
 */
const PrintPage = styled.div`
  @media print {
    @page {
      size: A4 portrait;
      margin: 10mm;
    }
  }
`;

const PageGutter = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  background: #fff;
  max-width: 896px;
  margin: 0 auto;
  padding: 16px;

  @media print {
    max-width: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  /*
   * The card below keeps its fixed desktop layout/width at every screen
   * size (same look on mobile as on desktop, nothing reflows or shrinks).
   * On a narrow viewport that card is wider than the screen, so this
   * container scrolls both ways: horizontally to pan across the full-width
   * card, and vertically (bounded to the viewport height) so it stays
   * reachable inside any fixed-height mobile embedding instead of relying
   * on the host page to scroll.
   */
  @media screen and (max-width: 640px) {
    max-height: 100vh;
    max-height: 100dvh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

/**
 * Font sizes and a few spacing values are exposed as CSS custom properties
 * (rather than plain numbers) specifically so the inline-styled text below
 * (labelStyle/valueStyle/etc.) can shrink under print via `var(...)` without
 * needing every span converted to its own styled-component. Screen values
 * are unchanged; only the print block below is new.
 */
const Card = styled.div`
  --label-size: 14px;
  --value-size: 15px;
  --party-size: 14px;
  --caption-size: 12px;
  --heading-size: 13px;
  --field-min-height: 24px;
  --field-pad-bottom: 6px;
  --row-gap: 48px;
  --logo-max-height: 56px;
  --logo-max-width: 200px;
  --sig-img-max-height: 48px;

  border: 1px solid #94a3b8;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  min-height: 760px;
  /*
   * Never shrink narrower than this on screen, even on a mobile viewport —
   * that's what keeps the two-column rows below from squeezing/wrapping and
   * looking different from desktop. PageGutter's horizontal scroll (above)
   * is what makes the rest of this fixed-width card reachable on mobile.
   * (Comfortably below the ~864px desktop content width, so it never
   * affects desktop rendering.)
   */
  min-width: 700px;

  @media print {
    --label-size: 9px;
    --value-size: 10px;
    --party-size: 9px;
    --caption-size: 7px;
    --heading-size: 9px;
    --field-min-height: 12px;
    --field-pad-bottom: 2px;
    --row-gap: 20px;
    --logo-max-height: 28px;
    --logo-max-width: 110px;
    --sig-img-max-height: 24px;

    width: 190mm;
    max-width: 100%;
    min-width: 0;
    min-height: 0;
    padding: 10px 14px;
  }
`;

const FieldRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 20px;

  @media print {
    margin-bottom: 6px;
  }
`;

const PartyRow = styled.div`
  display: flex;
  gap: 48px;
  margin-top: 8px;

  @media print {
    margin-top: 4px;
  }
`;

const SignatureRow = styled.div`
  display: flex;
  gap: 48px;
`;

const SignatureCol = styled.div`
  flex: 1;
  margin-top: 24px;

  @media print {
    margin-top: 6px;
  }
`;

const SignatureImageArea = styled.div`
  min-height: 48px;
  display: flex;
  align-items: flex-end;

  @media print {
    min-height: 16px;
  }
`;

const IndorsementBlock = styled.div`
  border-top: 1px solid #d1d5db;
  margin-top: 32px;
  padding-top: 24px;

  @media print {
    margin-top: 8px;
    padding-top: 6px;
  }
`;

const QrRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: 32px;

  @media print {
    padding-top: 6px;
  }
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;

  @media print {
    margin-bottom: 6px;
  }
`;

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

const formatPlaceAndDate = (placeOfIssue?: string, dateOfIssue?: string): string =>
  [placeOfIssue, formatBoeDate(dateOfIssue)].filter(Boolean).join(", ");

/**
 * Signature comes from credential data and must never be used as an arbitrary
 * image URL (e.g. a remote tracking pixel). Only accept self-contained inline
 * base64 image data.
 */
const DATA_IMAGE_URI = /^data:image\/(png|jpe?g|gif|webp|svg\+xml);base64,[A-Za-z0-9+/]+=*$/;

const isValidInlineImage = (value?: string): value is string => !!value && DATA_IMAGE_URI.test(value);

const labelStyle: React.CSSProperties = {
  fontSize: "var(--label-size, 14px)",
  color: "#000",
  whiteSpace: "nowrap",
};

const valueStyle: React.CSSProperties = {
  fontSize: "var(--value-size, 15px)",
  fontWeight: 700,
  color: "#000",
  wordBreak: "break-word",
};

/**
 * A printed-form field: label sits plain (no underline), the value area is
 * underlined (blank fill-in line when empty) — matches the paper BoE layout,
 * where only the part meant to be written on is ruled.
 */
const Field = ({
  label,
  value,
  style,
  uppercase,
}: {
  label: string;
  value?: ReactNode;
  style?: React.CSSProperties;
  /** Entity/bank names are always shown in capitals, regardless of source casing. */
  uppercase?: boolean;
}): JSX.Element => (
  <FieldRow style={style}>
    <span style={labelStyle}>{label}</span>
    <span
      style={{
        ...valueStyle,
        flex: 1,
        minHeight: "var(--field-min-height, 24px)",
        borderBottom: "1px solid #000",
        paddingBottom: "var(--field-pad-bottom, 6px)",
        ...(uppercase ? { textTransform: "uppercase" } : null),
      }}
    >
      {value}
    </span>
  </FieldRow>
);

/** Lays out two Fields (or two blocks) side by side, each taking half the card width. */
const Row = styled.div`
  display: flex;
  gap: var(--row-gap, 48px);
`;

const PartyBlock = ({ label, party }: { label: string; party?: BillOfExchangeDocumentaryCreditParty }): JSX.Element => (
  <div style={{ flex: 1 }}>
    <div style={{ fontWeight: 700, fontSize: "var(--party-size, 14px)", marginBottom: 8 }}>{label}</div>
    {party?.name && <div style={{ fontSize: "var(--party-size, 14px)", textTransform: "uppercase" }}>{party.name}</div>}
    {party?.address && (
      <div style={{ fontSize: "var(--party-size, 14px)", wordBreak: "break-word" }}>{party.address}</div>
    )}
  </div>
);

const SignatureBlock = ({
  signature,
  partyName,
}: {
  signature?: string;
  /** Party-specific accessible name (e.g. "Drawee"/"Drawer") — disambiguates the
   * alt text and test id when multiple signature blocks share the same visible caption. */
  partyName: string;
}): JSX.Element => {
  const testIdSuffix = partyName.toLowerCase().replace(/\s+/g, "-");
  return (
    <SignatureCol>
      <SignatureImageArea>
        {isValidInlineImage(signature) && (
          <img
            src={signature}
            alt={`${partyName} signature image`}
            data-testid={`signature-image-${testIdSuffix}`}
            style={{ maxHeight: "var(--sig-img-max-height, 48px)", maxWidth: "70%", objectFit: "contain" }}
          />
        )}
      </SignatureImageArea>
      <div style={{ borderTop: "1px solid #000", marginTop: 4, paddingTop: 6 }}>
        <div style={{ fontSize: "var(--caption-size, 12px)", color: "#6b7280" }}>Authorised signature</div>
      </div>
    </SignatureCol>
  );
};

export const BillOfExchangeDocumentaryCreditTemplate: FunctionComponent<
  TemplateProps<BillOfExchangeDocumentaryCreditSchema>
> = ({ document }) => {
  // Match classic BoE extractData: never crash on missing/partial document payloads.
  const data = (getDocumentData(document) ?? {}) as BillOfExchangeDocumentaryCreditDocument;
  const qrCodeUrl = getQRCodeURL(document);
  const {
    bankLogo,
    referenceNumber,
    amountInFigures,
    amountInWords,
    currencyCode,
    placeOfIssue,
    dateOfIssue,
    maturityDate,
    payee,
    drawnUnder,
    documentaryCreditNumber,
    documentaryCreditDate,
    indorsement,
    drawee,
    drawer,
  } = data;

  return (
    <Wrapper data-testid="bill-of-exchange-documentary-credit-template">
      <PrintPage>
        <PageGutter>
          <Card>
            {isValidInlineImage(bankLogo) && (
              <LogoRow>
                <img
                  src={bankLogo}
                  alt="Bank logo"
                  data-testid="bank-logo"
                  style={{
                    maxHeight: "var(--logo-max-height, 56px)",
                    maxWidth: "var(--logo-max-width, 200px)",
                    objectFit: "contain",
                  }}
                />
              </LogoRow>
            )}

            <Row>
              <Field label="No." value={referenceNumber} style={{ flex: 1 }} />
              <Field label="Place & date" value={formatPlaceAndDate(placeOfIssue, dateOfIssue)} style={{ flex: 1 }} />
            </Row>
            <Row>
              <Field label="For" value={formatAmountInFigures(currencyCode, amountInFigures)} style={{ flex: 1 }} />
              <Field label="At" value={formatBoeDate(maturityDate)} style={{ flex: 1 }} />
            </Row>
            <Field label="PAY TO THE ORDER OF" value={payee} uppercase />
            <Field label="the sum of" value={amountInWords} />
            <Field label="value received, drawn under" value={drawnUnder} uppercase />
            <Row>
              <Field label="Documentary Credit No." value={documentaryCreditNumber} style={{ flex: 1 }} />
              <Field label="dated" value={formatBoeDate(documentaryCreditDate)} style={{ flex: 1 }} />
            </Row>

            <PartyRow>
              <PartyBlock label="To (Drawee)" party={drawee} />
              <PartyBlock label="For and on behalf of (Drawer)" party={drawer} />
            </PartyRow>

            <SignatureRow>
              <SignatureBlock partyName="Drawee" signature={drawee?.signature} />
              <SignatureBlock partyName="Drawer" signature={drawer?.signature} />
            </SignatureRow>

            <IndorsementBlock>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "var(--heading-size, 13px)",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Indorsement
              </div>
              <div style={{ fontSize: "var(--value-size, 15px)", fontWeight: 400, color: "#000" }}>
                PAY TO THE ORDER OF{" "}
                <span style={{ fontWeight: 700, textTransform: "uppercase" }}>{indorsement?.payee}</span>
              </div>
            </IndorsementBlock>

            {qrCodeUrl && (
              <QrRow>
                <DocumentQrCode url={qrCodeUrl} inline />
              </QrRow>
            )}
          </Card>
        </PageGutter>
      </PrintPage>
    </Wrapper>
  );
};
