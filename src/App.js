import React, { Component } from 'react';

import ErrorBoundary from './containers/ErrorBoundary';
import AuthUserForm from './components/AuthUserForm';
import NewsFeed from './containers/NewsFeed';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ErrorBoundary>
          <AuthUserForm />
        </ErrorBoundary>
        <ErrorBoundary>
          <NewsFeed />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
