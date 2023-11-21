import {
  FrameActions,
  FrameConnector,
  HostActionsHandler,
} from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { useCallback, useEffect, useState } from "react";

interface AppProps {
  documents: {
    name: string;
    document: any;
  }[];
}

export const App: React.FunctionComponent<AppProps> = ({ documents }): React.ReactElement => {
  const [toFrame, setToFrame] = useState<HostActionsHandler>();
  const [height, setHeight] = useState(0);
  const [templates, setTemplates] = useState<{ id: string; label: string }[]>([]);
  const [document, setDocument] = useState<{ name: string; document: any }>();
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const fn = useCallback((toFrame: HostActionsHandler) => {
    // wrap into a function otherwise toFrame function will be executed
    setToFrame(() => toFrame);
  }, []);

  const fromFrame = (action: FrameActions): void => {
    if (action.type === "UPDATE_HEIGHT") {
      setHeight(action.payload);
    }
    if (action.type === "UPDATE_TEMPLATES") {
      setTemplates(action.payload);
      setSelectedTemplate(action.payload[0].id);
    }
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.renderDocument = (document) => {
    if (toFrame && document) {
      toFrame({
        type: "RENDER_DOCUMENT",
        payload: {
          document,
        },
      });
    }
  };
  useEffect(() => {
    if (toFrame && document) {
      toFrame({
        type: "RENDER_DOCUMENT",
        payload: {
          document: document.document,
        },
      });
    }
  }, [toFrame, document]);
  useEffect(() => {
    if (toFrame && selectedTemplate) {
      toFrame({
        type: "SELECT_TEMPLATE",
        payload: selectedTemplate,
      });
    }
  }, [selectedTemplate, toFrame]);

  return (
    <div className="my-4">
      <div className="w-full text-center mb-2">
        <button
          className="bg-sky-500 text-white py-2 px-4 rounded "
          onClick={() => {
            if (toFrame) {
              toFrame({
                type: "PRINT",
              });
            }
          }}
        >
          Print
        </button>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <aside className="w-1/4">
            <p className="font-bold p-2 text-center">Documents</p>
            {documents.length === 0 && <div>Please configure the application and provide at least one document</div>}
            {documents.map((d, index) => {
              return (
                <div
                  key={index}
                  data-testid={`${d.name}`}
                  className={`bg-sky-50 p-2 border-t-4 border-sky-500 cursor-pointer hover:bg-sky-100 document ${
                    document === d ? "active" : ""
                  }`}
                  onClick={() => setDocument(d)}
                >
                  {d.name}
                </div>
              );
            })}
          </aside>
          <main className="w-3/4">
            {document ? (
              <>
                <ul>
                  {templates.map((template) => (
                    <li
                      key={template.id}
                      className={`inline-block p-2 border border-b-0 ${
                        selectedTemplate === template.id ? "text-sky-500" : ""
                      }`}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <a href="#">{template.label}</a>
                    </li>
                  ))}
                </ul>
                <FrameConnector
                  source="http://localhost:3000"
                  dispatch={fromFrame}
                  onConnected={fn}
                  className={`w-full ${height !== 0 ? "border" : ""}`}
                  style={{ height: `${height}px` }}
                />
              </>
            ) : (
              <div className="text-center p-8">Please select a document on the left bar</div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
