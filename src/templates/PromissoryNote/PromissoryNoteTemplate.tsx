import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../core/Wrapper";
import { formatCurrency, formatDate, formatDateTime, getDocumentData, toTitleCaseWords } from "../../utils";
import { PromissoryNoteDocument, PromissoryNoteSchema } from "./types";

const HeaderSection = (document: PromissoryNoteDocument): JSX.Element => {
  const { pNoteId, commitmentDate } = document;
  return (
    <div className="p-5">
      <p className="text-xl font-semibold">Electronic Promissory Note</p>
      <p className="text-sm">
        This electronic payment undertaking (ePU) with reference <strong>{pNoteId}</strong> is timestamped at{" "}
        <strong>{formatDateTime(commitmentDate)}</strong>
      </p>
    </div>
  );
};

const LogoSection = (document: PromissoryNoteDocument): JSX.Element => {
  const { logo } = document;
  return (
    <div className="flex flex-col items-center p-5">
      {logo && <p className="text-sm font-semibold">Secured by:</p>}
      {logo && <img data-testid="logo" className="w-[150px] mt-2" src={logo} />}
    </div>
  );
};

const PartyDetailsSection = (document: PromissoryNoteDocument): JSX.Element => {
  const {
    drawerCompanyName,
    drawerCompanyNo,
    drawerJurisdiction,
    drawerEmail,
    drawerWalletAddress,
    drawerPlaceOfIssue,
    draweeCompanyName,
    draweeCompanyNo,
    draweeJurisdiction,
    draweeEmail,
    draweeWalletAddress,
  } = document;
  return (
    <div className="p-5 text-sm">
      <p className="font-semibold mb-2">Party Details</p>
      <div className="flex flex-wrap">
        {/* Drawer column */}
        <div className="w-full md:w-1/2 pr-0 md:pr-4 break-words whitespace-normal">
          <span className="font-semibold">(Drawer)</span>
          <p>
            <span className="font-semibold">Company Name:</span> {drawerCompanyName}
          </p>
          <p>
            <span className="font-semibold">Company Number/LEI:</span> {drawerCompanyNo}
          </p>
          <p>
            <span className="font-semibold">Jurisdiction of Incorporation:</span> {drawerJurisdiction}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {drawerEmail}
          </p>
          <p>
            <span className="font-semibold">DNS:</span> did:ethr:{drawerWalletAddress}
          </p>
          <p>
            <span className="font-semibold">Place of Issue:</span> {drawerPlaceOfIssue}
          </p>
        </div>
        {/* Drawee column */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4 break-words whitespace-normal">
          <span className="font-semibold">(Drawee)</span>
          <p>
            <span className="font-semibold">Company Name:</span> {draweeCompanyName}
          </p>
          <p>
            <span className="font-semibold">Company Number/LEI:</span> {draweeCompanyNo}
          </p>
          <p>
            <span className="font-semibold">Jurisdiction of Incorporation:</span> {draweeJurisdiction}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {draweeEmail}
          </p>
          <p>
            <span className="font-semibold">DNS:</span> did:ethr:{draweeWalletAddress}
          </p>
          <p>&nbsp;</p> {/* empty line for alignment */}
        </div>
      </div>
    </div>
  );
};

const PaymentPromiseSection = (document: PromissoryNoteDocument): JSX.Element => {
  const { draweeCompanyName, amount, currency, dueDate } = document;
  return (
    <div className="text-sm p-5">
      <p>
        We promise to pay <span className="font-semibold">{draweeCompanyName}</span> on{" "}
        <span className="font-semibold">{formatDate(dueDate)}</span>, the sum of{" "}
        <span className="font-semibold">
          {currency} {formatCurrency(amount)} ({currency} {toTitleCaseWords(amount)})
        </span>{" "}
        for value received. Payment shall be made to the designated bank account of{" "}
        <span className="font-semibold">{draweeCompanyName}</span>.
      </p>
    </div>
  );
};

const LawAndArbitrationSection = (document: PromissoryNoteDocument): JSX.Element => {
  const { clause } = document;
  return (
    <div className="p-5 text-xs space-y-2">
      {clause ?? (
        <>
          <p className="font-semibold">Law and Arbitration</p>

          <p>The maker, payee and each indorsee and/or holder of this promissory note agree that:</p>

          <p>
            (1) This promissory note shall be subject to Singapore law, without reference to any conflict of law rules
            thereunder (but not limited to any conflict of law rules under the Bills of Exchange Act 1949) or under any
            other system of law.
          </p>

          <p>
            (2) Any and all disputes arising out of or in connection with this contract, including any question
            regarding its existence, validity or termination, shall be referred to and finally resolved by arbitration
            seated in Singapore in accordance with the Arbitration Rules of the Singapore Chamber of Maritime
            Arbitration (&#34;SCMA Rules&#34;) current at the commencement of the arbitration, which rules are deemed to
            be incorporated by reference in this clause.
          </p>

          <p className="font-semibold">No presentation / Notice / Protest Required</p>

          <p>
            The maker, payee and each indorsee and/or holder of this promissory note agree that any and all requirements
            for presentation, notice and/or protest under any law (whether as a precondition to liability or otherwise)
            are fully and irrevocably waived and all parties to this promissory note shall be estopped from raising the
            non-fulfillment of any such alleged requirements for presentation and/or notification to avoid liability for
            payment hereunder.
          </p>
        </>
      )}
    </div>
  );
};

const ExecutionStatementSection = (): JSX.Element => {
  return (
    <div className="p-5">
      <p className="text-sm font-semibold">
        Executed by the Issuer and signed by the person who under the laws of its jurisdiction are acting under the
        authority of the Issuer.
      </p>
    </div>
  );
};

const DigitalSignatureSection = (document: PromissoryNoteDocument): JSX.Element => {
  const { signerName, signerPosition, signerEmail, signerTimeStamp } = document;
  return (
    <div className="text-sm p-5">
      <p className="font-semibold text-red-600">Digitally Signed By:</p>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 pr-0 md:pr-4 break-words whitespace-normal">
          <p>
            <span className="font-semibold text-red-600">Name:</span> {signerName}
          </p>
          <p>
            <span className="font-semibold text-red-600">Position:</span> {signerPosition}
          </p>
        </div>
        <div className="w-full md:w-3/4 pl-0 md:pl-4 break-words whitespace-normal">
          <p>
            <span className="font-semibold text-red-600">Email:</span> {signerEmail}
          </p>
          <p>
            <span className="font-semibold text-red-600">Time Stamp:</span> {formatDateTime(signerTimeStamp)}
          </p>
        </div>
      </div>
    </div>
  );
};

const DisclaimerSection = (): JSX.Element => {
  return (
    <div className="p-5">
      <p className="text-xs font-semibold">
        This is a sample demonstration document generated for illustrative purposes only. It does not represent an
        actual legal or financial agreement.
      </p>
    </div>
  );
};

export const PromissoryNoteTemplate: FunctionComponent<TemplateProps<PromissoryNoteSchema>> = ({ document }) => {
  const documentData = getDocumentData(document) as PromissoryNoteDocument;
  return (
    <Wrapper data-testid="promissory-note-template">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
        <div className="w-full md:w-3/4 break-words whitespace-normal">{HeaderSection(documentData)}</div>
        <div className="w-full md:w-1/4 flex">{LogoSection(documentData)}</div>
      </div>
      <PartyDetailsSection {...documentData} />
      <PaymentPromiseSection {...documentData} />
      <LawAndArbitrationSection {...documentData} />
      <ExecutionStatementSection />
      <DigitalSignatureSection {...documentData} />
      <DisclaimerSection />
    </Wrapper>
  );
};
