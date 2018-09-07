import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Uuuups, something went wrong</h2>
          <h3>Please, try again later</h3>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;