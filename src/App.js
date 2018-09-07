import React, { Component } from 'react';

import AuthUserForm from './components/AuthUserForm';
import NewsFeed from './containers/NewsFeed';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AuthUserForm />
        <NewsFeed />
      </div>
    );
  }
}

export default App;
