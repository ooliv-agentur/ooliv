import React, { ErrorInfo, Component } from "react";

interface RouterErrorBoundaryState {
  hasError: boolean;
}

class RouterErrorBoundary extends Component<
  { children: React.ReactNode },
  RouterErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): RouterErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('RouterErrorBoundary caught error:', error.message, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null; // Silently fail for router context issues
    }

    return this.props.children;
  }
}

export default RouterErrorBoundary;