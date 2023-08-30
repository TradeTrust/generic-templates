import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { getDocumentData } from "../../utils";
import { Wrapper } from "../../core/Wrapper";
import { BrochureSchema, BrochureDocument } from "./types";
import govtechLogo from "/static/images/logo-govtech.png";
import imdaLogo from "/static/images/logo-imda.png";
import ttLogo from "/static/images/logo-tradetrust.png";
import oaLogo from "/static/images/logo-oa.png";
import govtechCurve from "/static/images/pattern-waves-vertical.png"
import QRCode from "qrcode.react";

export const BrochureHeader: React.FC = () => (
  <>
    <div className="flex flex-row">
      <img className="w-36" src={govtechLogo} />
      <div className="grow"></div>
      <img className="w-36" src={imdaLogo} />
    </div>
    <div className="h-0.5 w-full bg-gradient-to-r from-green-700 to-sky-400 my-4"></div>
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
    <div style={{...backgroundStyle, zIndex: -1}} className="absolute left-0 bottom-0 h-full w-full bg-no-repeat"></div>
    <BrochureHeader />
    <div className="flex flex-col h-full">
      {header && <div className="text-2xl pb-4">{header}</div>}
      <div className="flex flex-row gap-12">
        <div className="flex flex-col basis-1/4 justify-between">
          <div className="relative text-zinc-500">
            <img src={logo} className="my-4 w-36" />
            {description}
            <div className="h-full w-0.5 absolute -right-4 top-0 bg-gradient-to-b from-green-700 to-sky-400"></div>
          </div>
          {footnote && (<>
            <a className="text-sm text-zinc-500 break-all" href={footnote} target="_blank">
            <sup>1</sup>
            {footnote}
            </a>
            </>
          )}
        </div>
        <div className="basis-3/4">{children}</div>
      </div>
      <div className="grow"></div>
      {footer}
      <div className="text-sm absolute bottom-0 right-10 p-2 text-gray-800">{page}</div>
    </div>
  </div>
);

export const ParagraphsWithLinks: React.FC<{ bodies?: string[], 
  links?: { title?: string, url: string}[],
  linkClassNames: string
  startWithLink?: boolean }> = ({ bodies, links, linkClassNames, startWithLink = false }) => {
    if (!bodies || !links) return <></>
    if (startWithLink) { 
      return (
      <>
      {links.map((item, i) => (
        <>
          <a className={linkClassNames} href={item.url} target="_blank">{item.title ? item.title : item.url}</a>
          {bodies[i] && <span>{bodies[i]}</span>}
        </>
      ))}
      </>)
    } else {
      return (
        <>
        {bodies.map((item, i) => (
          <>
            <span>{item}</span>
            {links[i] && <a className={linkClassNames} href={links[i].url} target="_blank">{links[i].title ? links[i].title : links[i].url}</a>}
          </>
        ))}
        </>)
    }
}

const Page1: React.FC<{ document: BrochureDocument }> = ({ document }) => {
  const contents = document.page1.contents;
  return (
    <BrochurePage
      description={document.shared.tradeTrust.description}
      backgroundStyle={{ backgroundImage: `url(${govtechCurve})`, backgroundPosition: "-58% 120%", backgroundSize: "45%" }}
      page={1}
      logo={ttLogo}
      footnote={document.page1.footnote}
      header={document.page1.header}
    >
      
      {contents.map((section, i) => {
        if (i === contents.length - 1)
          return (
            <>
              <h5>{section.subheader}</h5>
              {section.bodyAsList?.[0]}
              <b>{section.bolded?.[0]}</b>
              {section.bodyAsList?.[1]}
              <b>{section.bolded?.[1]}</b>
              {section.bodyAsList?.[2]}
            </>
          );
        else {
          return (
            <>
              <h5>{section.subheader}</h5>
              <div>{section.body}</div>
              <br />
            </>
          );
        }
      })}
    </BrochurePage>
  );
};

const Page2: React.FC<{ document: BrochureDocument }> = ({ document }) => {
  const contents = document.page2.contents;
  return (
    <BrochurePage
      description={document.shared.openAttestation.description}
      backgroundStyle={{ backgroundImage: `url(${govtechCurve})`, backgroundPosition: "110% -70%", backgroundSize: "50%", transform: "scale(-1)" }}
      page={2}
      logo={oaLogo}
    >
      <h5>{contents[0].subheader}</h5>
      <div>{contents[0].body}</div>
      <br />
      <div>{contents[1].body}</div>
      <br />
      <ul className="list-disc ml-4">
        {contents[1].listItems?.map((item) => (
          <>
            <li>
              <b>{item.name} </b>
              {item.description}
            </li>
            <br />
          </>
        ))}
      </ul>
      <div>
      <ParagraphsWithLinks 
        bodies={contents[2].bodyAsList} 
        links={contents[2].links} 
        linkClassNames="text-sky-500 font-bold"/>
      </div>
      <br />
      <h5>{contents[3].subheader}</h5>
      <div>
      <ParagraphsWithLinks 
        bodies={contents[3].bodyAsList} 
        links={contents[3].links} 
        linkClassNames="text-sky-500"/>
      </div>
    </BrochurePage>
  );
};

const Page3: React.FC<{ document: BrochureDocument }> = ({ document }) => {
  const contents = document.page3.contents;
  return (
    <BrochurePage
      description={document.shared.openAttestation.description}
      backgroundStyle={{ backgroundImage: `url(${govtechCurve})`, backgroundPosition: "-20% 105%", backgroundSize: "45%" }}
      page={3}
      logo={oaLogo}
    >
      <h5>{contents[0].subheader}</h5>
      <div>{contents[0].body}</div>
      <br />
      <ul className="list-decimal ml-4">
        {contents[1].listItems?.map((item, i) => {
          if (item.descriptionAsList) {
            return (
              <>
                <li>
                  <div className="font-semibold">{item.name} </div>
                </li>
                {item.descriptionAsList?.map((part) => (
                  <>
                    <div>{part}</div>
                    <br />
                  </>
                ))}
              </>
            );
          } else {
            return (
              <>
                <li>
                  <b>{item.name} </b>
                </li>
                <div>{item.description}</div>
                <br />
              </>
            );
          }
        })}
      </ul>
    </BrochurePage>
  );
};

const Page4: React.FC<{ document: BrochureDocument }> = ({ document }) => {
  const contents = document.page4.contents;
  const footer = document.page4.footer;
  return (
    <BrochurePage
    footer={
      <>
        <div className="h-0.5 w-full bg-gradient-to-r from-green-700 to-sky-400 my-4 mb-2" />
        <div className="flex flex-row items-center h-fit w-full bg-gradient-to-r from-green-700 to-sky-400 rounded-lg p-7 mb-16">
          <QRCode includeMargin={true} value={footer.qrUrl} level="M" size={200}/>
          <div className="w-48 ml-4 text-white text-sm">{footer.qrPrompt}</div>
          <div className="grow" />
          <div className="flex flex-col text-right text-white text-sm">
            {footer.links.map((item, i) => (
              <>
                <b className={i === 0 ? "mb-2" : "mt-4 mb-2"}>{item.title}</b>
                {item.urls.map((link) => (
                  <div>{link}</div>
                ))}
              </>
            ))}
          </div>
        </div>
      </>
    }
      description={document.shared.openAttestation.description}
      backgroundStyle={{ backgroundImage: `url(${govtechCurve})`, backgroundPosition: "180% 31%", backgroundSize: "70%", transform: "scale(-1)" }}
      page={4}
      logo={oaLogo}
    >
        <h5>{contents[0].subheader}</h5>
        <div>{contents[0].body}</div>
        <br />
        <ul className="list-disc ml-4">
          {contents[1].listItems?.map((item, i) => {
            if (i < 3) {
              return (
              <>
                <li>
                  <ParagraphsWithLinks
                  bodies={item.description? [item.description] : item.descriptionAsList}
                  links={[contents[1].links![i]]}
                  linkClassNames="text-sky-500 font-bold"
                  startWithLink={i === 0 || i === 1}
                  />
                </li>
                <br />
              </>
              )
            }
            return (
              <>
                <li>
                  {item.description}</li>
                <br />
              </>
            )
          })}
        </ul>
    </BrochurePage>
  );
};

export const BrochureTemplate: FunctionComponent<TemplateProps<BrochureSchema>> = ({ document }) => {
  const documentData = getDocumentData(document) as BrochureDocument;
  return (
    <Wrapper data-testid="brochure-template">
      <Page1 document={documentData} />
      <Page2 document={documentData} />
      <Page3 document={documentData} />
      <Page4 document={documentData} />
    </Wrapper>
  );
};
