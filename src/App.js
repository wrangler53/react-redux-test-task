import React, { Component } from 'react';

import LoginUserForm from './components/LoginUserForm';
import NewsFeed from './containers/NewsFeed';

class App extends Component {
  render() {
    return (
      <div className="container">
        <LoginUserForm />
        <NewsFeed />
      </div>
    );
  }
}

export default App;
