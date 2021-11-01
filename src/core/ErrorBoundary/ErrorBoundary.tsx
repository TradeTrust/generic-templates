import React, { ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: { message: string; stack: string };
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: { message: "", stack: "" } };
  }

  static getDerivedStateFromError(error: ErrorBoundaryState["error"]): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1 className="text-xl font-bold mb-2">Template renderer encountered an error</h1>
          <div className="mb-2">
            <span className="font-medium">Message:</span> {this.state.error.message}
          </div>
          <div className="mb-2">
            <span className="font-medium">Stack:</span> {this.state.error.stack}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
