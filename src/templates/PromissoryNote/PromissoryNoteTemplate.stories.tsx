import React, { FunctionComponent } from "react";
import { PromissoryNoteTemplate } from "./PromissoryNoteTemplate";
import { PromissoryNoteSampleV2 } from "./sampleV2";
import { PromissoryNoteSampleW3C } from "./sampleW3C";

export default {
  title: "PromissoryNote",
  component: PromissoryNoteTemplate,
  parameters: {
    componentSubtitle: "Promissory Note template.",
  },
};

export const PromissoryNoteEmpty: FunctionComponent = () => {
  return <PromissoryNoteTemplate document={{} as any} handleObfuscation={() => {}} />; // when empty, visually should not show any dangling values
};

export const PromissoryNoteV2: FunctionComponent = () => {
  return <PromissoryNoteTemplate document={PromissoryNoteSampleV2} handleObfuscation={() => {}} />;
};

export const PromissoryNoteW3C: FunctionComponent = () => {
  return <PromissoryNoteTemplate document={PromissoryNoteSampleW3C} handleObfuscation={() => {}} />;
};
