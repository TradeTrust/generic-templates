import React, { FunctionComponent, useEffect, useState } from "react";
import { RedactableValue, TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import { getDocumentData } from "../../utils";
import { Wrapper } from "../../core/Wrapper";
import { BrochureSchema, BrochureDocument } from "./types";
import govtechLogo from "/static/images/logo-govtech.png";
import imdaLogo from "/static/images/logo-imda.png";
import ttLogo from "/static/images/logo-tradetrust.png";
import oaLogo from "/static/images/logo-oa.png";
import govtechCurve from "/static/images/pattern-waves-vertical.png";
import QRCode from "qrcode.react";
import { IconRedact, PrivacyFilter } from "../../core/PrivacyFilter";
import { utils } from "@tradetrust-tt/tradetrust";

export const BrochureHeader: React.FC = () => (
  <>
    <div className="flex flex-row">
      <img className="w-32 md:w-36" src={govtechLogo} />
      <div className="grow" />
      <img className="w-32 md:w-36" src={imdaLogo} />
    </div>
    <div className="h-0.5 w-full bg-gradient-to-r from-green-700 to-sky-400 my-4" />
  </>
);

interface BrochurePageProps {
  logo: string;
  description: string;
  backgroundStyle: React.CSSProperties;
  page: number;
  header?: string;
  footnote?: string;
  footer?: React.ReactNode;
}

export const BrochurePage: React.FC<BrochurePageProps> = ({
  logo,
  description,
  backgroundStyle,
  page,
  header,
  footnote,
  footer,
  children,
}) => (
  <div className="m-auto border bg-no-repeat border-black box-border p-[70px] relative w-[65rem] h-[90rem]">
    <div style={{ ...backgroundStyle, zIndex: -1 }} className="absolute left-0 bottom-0 h-full w-full bg-no-repeat" />
    <BrochureHeader />
    <div className="flex flex-col h-full">
      {header && <div className="text-2xl pb-4 font-ubuntu-normal">{header}</div>}
      <div className="flex flex-row gap-12">
        <div className="flex flex-col basis-1/4 justify-between">
          <div className="relative text-zinc-500">
            <img src={logo} className="my-4 w-36" />
            {description}
            <div className="h-full w-0.5 absolute -right-4 top-0 bg-gradient-to-b from-green-700 to-sky-400" />
          </div>
          {footnote && (
            <>
              <a className="text-sm text-zinc-500 break-all" href={footnote} target="_blank" rel="noreferrer">
                <sup className="text-sky-500">1</sup>
                {footnote}
              </a>
            </>
          )}
        </div>
        <div className="basis-3/4">{children}</div>
      </div>
      <div className="grow" />
      {footer}
      <div className="text-sm absolute bottom-0 right-10 p-2 text-gray-800">{page}</div>
    </div>
  </div>
);

export const ParagraphsWithLinks: React.FC<{
  bodies?: string[];
  links?: { title?: string; url: string }[];
  linkClassNames: string;
  startWithLink?: boolean;
}> = ({ bodies, links, linkClassNames, startWithLink = false }) => {
  if (!bodies || !links) return <></>;
  if (startWithLink) {
    return (
      <>
        {links.map((item, i) => (
          <React.Fragment key={i}>
            <a className={linkClassNames} href={item.url} target="_blank" rel="noreferrer">
              {item.title ? item.title : item.url}
            </a>
            {bodies[i] && <span>{bodies[i]}</span>}
          </React.Fragment>
        ))}
      </>
    );
  } else {
    return (
      <>
        {bodies.map((item, i) => (
          <React.Fragment key={i}>
            <span>{item}</span>
            {links[i] && (
              <a className={linkClassNames} href={links[i].url} target="_blank" rel="noreferrer">
                {links[i].title ? links[i].title : links[i].url}
              </a>
            )}
          </React.Fragment>
        ))}
      </>
    );
  }
};

const Page1: React.FC<{ document: BrochureDocument; isMobile: boolean }> = ({ document, isMobile }) => {
  const contents = document.page1.contents;
  const page1Elements = (
    <>
      {contents.map((section, i) => {
        if (i === 0) {
          return (
            <React.Fragment key={`page1-section-${i}`}>
              <div>
                <div className="text-xl font-semibold">{section.subheader}</div>
                <span>{section.bodyAsList?.[0]}</span>
                <sup className="text-sky-500">1</sup>
                <span>{section.bodyAsList?.[1]}</span>
              </div>
              <br />
            </React.Fragment>
          );
        } else if (i === contents.length - 1) {
          return (
            <React.Fragment key={`page1-section-${i}`}>
              <div className="text-xl font-semibold">{section.subheader}</div>
              {section.bodyAsList?.[0]}
              <b>{section.bolded?.[0]}</b>
              {section.bodyAsList?.[1]}
              <b>{section.bolded?.[1]}</b>
              {section.bodyAsList?.[2]}
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={`page1-section-${i}`}>
              <div className="text-xl font-semibold">{section.subheader}</div>
              <div>{section.body}</div>
              <br />
            </React.Fragment>
          );
        }
      })}
    </>
  );

  if (isMobile) {
    const header = document.page1.header;
    const description = document.shared.tradeTrust.description;
    const footnote = document.page1.footnote;
    return (
      <>
        <BrochureHeader />
        {header && <div className="font-ubuntu-normal text-2xl pb-4">{header}</div>}
        <div className="flex flex-col text-zinc-500 items-center mb-6">
          <img src={ttLogo} className="my-4 w-36" />
          {description}
        </div>
        {page1Elements}
        <div className="my-6">
          <a className="text-sm text-zinc-500 break-all" href={footnote} target="_blank" rel="noreferrer">
            <sup className="text-sky-500">1</sup>
            {footnote}
          </a>
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-green-700 to-sky-400 my-4" />
      </>
    );
  } else {
    return (
      <BrochurePage
        description={document.shared.tradeTrust.description}
        backgroundStyle={{
          backgroundImage: `url(${govtechCurve})`,
          backgroundPosition: "-58% 120%",
          backgroundSize: "45%",
        }}
        page={1}
        logo={ttLogo}
        footnote={document.page1.footnote}
        header={document.page1.header}
      >
        {page1Elements}
      </BrochurePage>
    );
  }
};

const Page2: React.FC<{ document: BrochureDocument; isMobile: boolean }> = ({ document, isMobile }) => {
  const contents = document.page2.contents;
  const description = document.shared.openAttestation.description;
  const page2Elements = (
    <>
      <div className="text-xl font-semibold">{contents[0].subheader}</div>
      <div>{contents[0].body}</div>
      <br />
      <div>{contents[1].body}</div>
      <br />
      <ul className="list-disc ml-4">
        {contents[1].listItems?.map((item, i) => (
          <React.Fragment key={i}>
            <li>
              <b>{item.name} </b>
              {item.description}
            </li>
            <br />
          </React.Fragment>
        ))}
      </ul>
      <div>
        <ParagraphsWithLinks
          bodies={contents[2].bodyAsList}
          links={contents[2].links}
          linkClassNames="text-sky-500 font-bold"
        />
      </div>
      <br />
      <div className="text-xl font-semibold">{contents[3].subheader}</div>
      <div>
        <ParagraphsWithLinks bodies={contents[3].bodyAsList} links={contents[3].links} linkClassNames="text-sky-500" />
      </div>
    </>
  );

  if (isMobile) {
    return (
      <>
        <div className="flex flex-col text-zinc-500 items-center mb-6">
          <img src={oaLogo} className="my-4 w-36" />
          {description}
        </div>
        {page2Elements}
      </>
    );
  } else {
    return (
      <BrochurePage
        description={document.shared.openAttestation.description}
        backgroundStyle={{
          backgroundImage: `url(${govtechCurve})`,
          backgroundPosition: "110% -70%",
          backgroundSize: "50%",
          transform: "scale(-1)",
        }}
        page={2}
        logo={oaLogo}
      >
        {page2Elements}
      </BrochurePage>
    );
  }
};

const Page3: React.FC<{ document: BrochureDocument; isMobile: boolean }> = ({ document, isMobile }) => {
  const contents = document.page3.contents;
  const page3Elements = (
    <>
      <div className="text-xl font-semibold">{contents[0].subheader}</div>
      <div>{contents[0].body}</div>
      <br />
      <ul className="list-decimal ml-4">
        {contents[1].listItems?.map((item, i) => {
          if (item.descriptionAsList) {
            return (
              <React.Fragment key={i}>
                <li>
                  <div className="font-semibold">{item.name} </div>
                </li>
                {item.descriptionAsList?.map((part, partIndex) => (
                  <React.Fragment key={`page3-description-${i}-${partIndex}`}>
                    <div>{part}</div>
                    <br />
                  </React.Fragment>
                ))}
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={i}>
                <li>
                  <b>{item.name} </b>
                </li>
                <div>{item.description}</div>
                <br />
              </React.Fragment>
            );
          }
        })}
      </ul>
    </>
  );
  if (isMobile) {
    return <div className="mt-8">{page3Elements}</div>;
  } else {
    return (
      <BrochurePage
        description={document.shared.openAttestation.description}
        backgroundStyle={{
          backgroundImage: `url(${govtechCurve})`,
          backgroundPosition: "-20% 105%",
          backgroundSize: "45%",
        }}
        page={3}
        logo={oaLogo}
      >
        {page3Elements}
      </BrochurePage>
    );
  }
};

const Page4: React.FC<{
  document: BrochureDocument;
  editable: boolean;
  handleObfuscation: (field: string) => void;
  isMobile: boolean;
  isV4: boolean;
}> = ({ document, editable, handleObfuscation, isMobile, isV4 }) => {
  const contents = document.page4.contents;
  const footer = document.page4.footer;
  const page4Elements = (
    <>
      <div className="text-xl font-semibold">{contents[0].subheader}</div>
      <div>{contents[0].body}</div>
      <br />
      <ul className="list-disc ml-4">
        {contents[1].listItems?.map((item, i) => {
          if (i < 3) {
            return (
              <React.Fragment key={i}>
                <li>
                  <ParagraphsWithLinks
                    bodies={item.description ? [item.description] : item.descriptionAsList}
                    links={contents[1].links?.[i] ? [contents[1].links?.[i]] : []}
                    linkClassNames="text-sky-500 font-bold"
                    startWithLink={i === 0 || i === 1}
                  />
                </li>
                <br />
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={i}>
              <li>
                <div className="inline-grid">
                  <RedactableValue
                    editable={editable}
                    value={item.description}
                    onRedactionRequested={() =>
                      handleObfuscation(
                        `${isV4 ? "credentialSubject." : ""}page4.contents[1].listItems[${i}].description`
                      )
                    }
                    iconRedact={<IconRedact />}
                    noValueMessage="[Data has been redacted.]"
                  />
                </div>
              </li>
              <br />
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
  if (isMobile) {
    return (
      <>
        <div className="mt-4" />
        {page4Elements}
        <div className="flex flex-row items-center h-fit w-full bg-gradient-to-r from-green-700 to-sky-400 rounded-lg p-7 mb-16">
          <div className="flex flex-col text-left text-white text-sm">
            {footer.links.map((item, i) => (
              <React.Fragment key={`footer-link-${i}`}>
                <b className={i === 0 ? "" : "mt-4"}>{item.prompt}</b>
                {item.urls.map((link, i) => (
                  <a
                    key={i}
                    className="text-white"
                    href={`${link.includes("@") ? `mailto:${link}` : `https://${link}`}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link}
                  </a>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <BrochurePage
        footer={
          <>
            <div className="h-0.5 w-full bg-gradient-to-r from-green-700 to-sky-400 my-4 mb-2" />
            <div className="flex flex-row items-center h-fit w-full bg-gradient-to-r from-green-700 to-sky-400 rounded-lg p-7 mb-16">
              <QRCode includeMargin={true} value={footer.qrUrl} level="M" size={200} />
              <div className="w-48 ml-4 text-white text-sm">{footer.qrPrompt}</div>
              <div className="grow" />
              <div className="flex flex-col text-right text-white text-sm">
                {footer.links.map((item, i) => (
                  <React.Fragment key={`footer-link-${i}`}>
                    <b className={i === 0 ? "mb-2" : "mt-4 mb-2"}>{item.prompt}</b>
                    {item.urls.map((link, i) => (
                      <a
                        key={i}
                        className="text-white"
                        href={`${link.includes("@") ? `mailto:${link}` : `https://${link}`}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link}
                      </a>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        }
        description={document.shared.openAttestation.description}
        backgroundStyle={{
          backgroundImage: `url(${govtechCurve})`,
          backgroundPosition: "180% 31%",
          backgroundSize: "70%",
          transform: "scale(-1)",
        }}
        page={4}
        logo={oaLogo}
      >
        {page4Elements}
      </BrochurePage>
    );
  }
};

export const BrochureTemplate: FunctionComponent<TemplateProps<BrochureSchema>> = ({ document, handleObfuscation }) => {
  const documentData = getDocumentData(document) as BrochureDocument;
  const isV4 = utils.isRawOAV4Document(document);
  const [editable, setEditable] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const updateWidth = (): void => setWidth(window.innerWidth);
  const isMobile = (currentWidth: number): boolean => currentWidth < 768;
  const privacyFilterOptions = {
    className: "print:hidden m-auto bg-cover bg-cerulean-500 text-white rounded-lg p-8 md:w-[65rem]",
    description: `Remove sensitive information on this document (click \"Redact Data\" and scroll down). The downloaded document remains
    valid.`,
    buttonText: "Redact Data",
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Wrapper data-testid="brochure-template">
      <div className="text-gray-700 font-sans font-gilroy-normal">
        <Page1 document={documentData} isMobile={isMobile(width)} />
        <Page2 document={documentData} isMobile={isMobile(width)} />
        <Page3 document={documentData} isMobile={isMobile(width)} />
        <PrivacyFilter
          editable={editable}
          onToggleEditable={() => setEditable(!editable)}
          options={privacyFilterOptions}
        />
        <Page4
          document={documentData}
          editable={editable}
          handleObfuscation={handleObfuscation}
          isMobile={isMobile(width)}
          isV4={isV4}
        />
      </div>
    </Wrapper>
  );
};
