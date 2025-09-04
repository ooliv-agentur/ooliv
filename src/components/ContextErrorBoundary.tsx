import React, { ErrorInfo, Component } from "react";

interface ContextErrorBoundaryState {
  hasError: boolean;
}

class ContextErrorBoundary extends Component<
  { children: React.ReactNode },
  ContextErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ContextErrorBoundaryState {
    console.warn('ContextErrorBoundary: Context initialization error detected');
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('ContextErrorBoundary caught context error:', error.message, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      console.log('ContextErrorBoundary: Rendering fallback due to context error');
      // Return a simple fallback UI
      return (
        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
          Loading...
        </div>
      );
    }

    return this.props.children;
  }
}

export default ContextErrorBoundary;