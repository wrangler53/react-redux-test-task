import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authUser } from '../../actions';

class authUserForm extends Component {
  state = {
    userName: '',
    showMessage: false
  }

  inputChangeHandler = event => {
    this.setState({ userName: event.target.value })
  }

  authUserHandler = event => {
    event.preventDefault();
    this.props.authUser(this.state.userName);
    this.setState({ userName: '', showMessage: true });
  }

  render() {
    const { isUserLoggedIn, isUserJustGeristered, userNickname } = this.props;

    return (
      <div className="auth-user">
        <form className="auth-user__form" onSubmit={event => this.authUserHandler(event)}>
          <input
            type="text"
            value={this.state.userName}
            onChange={event => this.inputChangeHandler(event)}
          />
          <input
            type="submit"
            value="Login"
            disabled={this.state.userName.length === 0}
          />
        </form>
        {
          (this.state.showMessage) ?
            (isUserLoggedIn && isUserJustGeristered) ?
              <div className="msg msg_success">User {userNickname} was successfully registered and logged in</div> :
              <div className="msg msg_success">User {userNickname} was successfully logged in</div>
            : null
          // (this.state.showMessage) ?
          //   (isUserLoggedIn) ?
          //     <div className="msg msg_success">User {userNickname} was successfully logged in</div> :
          //     <div className="msg msg_error">Login failed</div>
          //   : null
        }
      </div>
    )
  }
};

const mapStateToProps = state => ({
  isUserLoggedIn: state.userReducer.currentUser.isLoggedIn,
  isUserJustGeristered: state.userReducer.currentUser.isUserJustGeristered,
  userNickname: state.userReducer.currentUser.nickname
});

const mapDispatchToProps = { authUser }

export default connect(mapStateToProps, mapDispatchToProps)(authUserForm);