import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { authUser } from '../../actions';

class AuthUserForm extends Component {
  state = {
    userName: '',
    showMessage: false,
    showEmptyFieldErrorMessage: false
  }

  inputChangeHandler = event => {
    this.setState({ userName: event.target.value });
  }

  authUserHandler = event => {
    event.preventDefault();

    if (this.state.userName.length === 0) {
      this.setState({ showEmptyFieldErrorMessage: true });
    } else {
      this.props.authUser(this.state.userName.trim());
      this.setState({
        userName: '',
        showMessage: true,
        showEmptyFieldErrorMessage: false
      });
    }
  }

  render() {
    const { isNewUser, userNickname } = this.props;
    const { showMessage, showEmptyFieldErrorMessage } = this.state;

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
            value="Sign In"
            disabled={this.state.userName.length === 0}
          />
        </form>
        {
          (showEmptyFieldErrorMessage) ?
            <div className="msg msg_error">User name field shouldn`t be empty</div> :
            null
        }
        {
          (showMessage) ?
            (isNewUser) ?
              <div className="msg msg_success">User {userNickname} was successfully registered and logged in</div> :
              <div className="msg msg_success">User {userNickname} was successfully logged in</div>
            : null
        }
      </div>
    )
  }
};

const mapStateToProps = state => ({
  isUserLoggedIn: state.userReducer.currentUser.isLoggedIn,
  isNewUser: state.userReducer.currentUser.isNewUser,
  userNickname: state.userReducer.currentUser.nickname
});

const mapDispatchToProps = { authUser }

AuthUserForm.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  isNewUser: PropTypes.bool.isRequired,
  userNickname: PropTypes.string,
  authUser: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthUserForm);