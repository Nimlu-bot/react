import React, { ErrorInfo, PureComponent, ReactNode } from 'react';

type State = {
  hasError: boolean;
  errorMessage: string;
};

type Props = {
  children: ReactNode;
};

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
    this.setState({ errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>{this.state.errorMessage}</p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
