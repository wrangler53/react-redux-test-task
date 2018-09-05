import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../actions';

class loginUserForm extends Component {
  state = {
    userName: ''
  }

  inputChangeHandler = event => {
    this.setState({ userName: event.target.value })
  }

  loginUserHandler = event => {
    event.preventDefault();
    this.props.loginUser(this.state.userName);
  }

  render() {
    return (
      <form className="login-user" onSubmit={event => this.loginUserHandler(event)}>
        <input type="text" onChange={event => this.inputChangeHandler(event)} />
        <input type="submit" value="Login" disabled={this.state.userName.length === 0} />
      </form>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  loginUser: userName => dispatch(loginUser(userName))
})

export default connect(null, mapDispatchToProps)(loginUserForm);