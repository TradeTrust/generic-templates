import React, { FunctionComponent } from "react";

export const Wrapper: FunctionComponent = ({ children, ...props }) => {
  return (
    <div className="container mx-auto py-4" {...props}>
      {children}
    </div>
  );
};
