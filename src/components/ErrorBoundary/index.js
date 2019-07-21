import React, { Component } from 'react';
import { node } from 'prop-types';

class ErrorBoundary extends Component {
  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    if (isError) {
      return <h1>Something wrong bro!</h1>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: node.isRequired,
};

export default ErrorBoundary;
