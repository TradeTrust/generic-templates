import React from "react";
import { FunctionComponent } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

export default {
  title: "Error/ErrorBoundary",
  component: ErrorBoundary,
  parameters: {
    componentSubtitle: "ErrorBoundary.",
  },
};

const ErrorComponent: FunctionComponent = () => {
  const error = new Error("Error encountered");
  error.stack =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad rem quae quis, dolorem dicta mollitia accusamus? Reprehenderit et veniam deleniti! Provident et saepe in, excepturi possimus blanditiis consectetur rem.";
  throw error;
};
export const Default: FunctionComponent = () => (
  <ErrorBoundary>
    <ErrorComponent />
  </ErrorBoundary>
);
