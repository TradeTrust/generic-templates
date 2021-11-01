import React, { FunctionComponent } from "react";
import { ErrorBoundary } from "../ErrorBoundary";

// `container mx-auto px-4` <- this is in line with tt and creator's tw config, so containers can align
export const Wrapper: FunctionComponent = ({ children, ...props }) => {
  return (
    <ErrorBoundary>
      <div className="container mx-auto px-4 py-4" {...props}>
        {children}
      </div>
    </ErrorBoundary>
  );
};
