import React, { ErrorInfo, ReactElement, ReactNode } from "react";

interface Props {
  children: ReactElement;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}


class ErrorBoundary extends React.Component<Props, State> {
  public state = {hasError: false, error: null };

  public static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
      if (this.state.hasError) {
        if (this.props.fallback) {
          return this.props.fallback;
        } else {
          return <></>
        }
      }

      return this.props.children
  }
}

export default ErrorBoundary;