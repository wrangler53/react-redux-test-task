import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../actions';

class loginUserForm extends Component {
  state = {
    userName: '',
    showMessage: false
  }

  inputChangeHandler = event => {
    this.setState({ userName: event.target.value })
  }

  loginUserHandler = event => {
    event.preventDefault();
    this.props.loginUser(this.state.userName);
    this.setState({ showMessage: true });
  }

  render() {
    const { isUserLoggedIn, userNickname } = this.props;

    return (
      <div className="login-user">
        <form className="login-user__form" onSubmit={event => this.loginUserHandler(event)}>
          <input type="text" onChange={event => this.inputChangeHandler(event)} />
          <input type="submit" value="Login" disabled={this.state.userName.length === 0} />
        </form>
        {
          (this.state.showMessage) ?
            (isUserLoggedIn) ?
              <div className="msg msg_success">User {userNickname} was successfully logged in</div> :
              <div className="msg msg_error">Login failed</div>
            : null
        }
      </div>
    )
  }
};

const mapStateToProps = state => ({
  isUserLoggedIn: state.userReducer.currentUser.isLoggedIn,
  userNickname: state.userReducer.currentUser.nickname
});

const mapDispatchToProps = dispatch => ({
  loginUser: userName => dispatch(loginUser(userName))
});

export default connect(mapStateToProps, mapDispatchToProps)(loginUserForm);