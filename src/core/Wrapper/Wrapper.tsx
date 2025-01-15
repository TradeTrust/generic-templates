import React, { FunctionComponent } from "react";
import { ErrorBoundary } from "../ErrorBoundary";

// `container mx-auto px-4` <- this is in line with tt and creator's tw config, so containers can align
interface WrapperProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const Wrapper: FunctionComponent<WrapperProps> = ({ children, ...props }) => {
  return (
    <ErrorBoundary>
      <div className="container mx-auto px-4 py-4" {...props}>
        {children}
      </div>
    </ErrorBoundary>
  );
};
