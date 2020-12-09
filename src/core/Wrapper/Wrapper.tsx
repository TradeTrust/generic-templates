import React, { FunctionComponent } from "react";

// `container mx-auto px-4` <- this is in line with tt and creator's tw config, so containers can align
export const Wrapper: FunctionComponent = ({ children, ...props }) => {
  return (
    <div className="container mx-auto px-4 py-4" {...props}>
      {children}
    </div>
  );
};
