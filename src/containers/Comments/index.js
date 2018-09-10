import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addComment } from '../../actions';

import CommentItem from '../../components/CommentItem';

class Comments extends Component {
  state = {
    comment: '',
    maxSymbolsCount: 100,
    showMaxSymbolsError: false,
    showEmptyFieldErrorMessage: false,
    showUserErrorMessage: false
  }

  inputChangeHandler = event => {
    this.setState({ comment: event.target.value });
  }

  addCommentHandler = event => {
    event.preventDefault();
    const { newsItemId, userNickname, addComment } = this.props;
    const { comment, maxSymbolsCount } = this.state;

    if (userNickname === null) {
      this.setState({ showUserErrorMessage: true });
    } else if (comment.length === 0) {
      this.setState({ showEmptyFieldErrorMessage: true });
    } else if (comment.length > maxSymbolsCount) {
      this.setState({ showMaxSymbolsError: true });
    } else {
      addComment(newsItemId, comment, userNickname);
      this.setState({
        comment: '',
        showMaxSymbolsError: false,
        showEmptyFieldErrorMessage: false,
        showUserErrorMessage: false
      });
    }
  }

  render() {
    const { commentsList, isUserLoggedIn } = this.props;
    const {
      comment,
      maxSymbolsCount,
      showMaxSymbolsError,
      showEmptyFieldErrorMessage,
      showUserErrorMessage
    } = this.state;

    return (
      <div className="comments">
        <form className="leave-comment" onSubmit={event => this.addCommentHandler(event)}>
          <input
            type="text"
            value={comment}
            className="leave-comment__input"
            maxLength={maxSymbolsCount}
            onChange={event => this.inputChangeHandler(event)}
          />
          <div className="msg-container">
            <div className="characters-count">
              Characters left: {maxSymbolsCount - comment.length}
            </div>
            {
              (comment.length === 0 && showEmptyFieldErrorMessage) ?
                <div className="msg msg_error">Comments field shouldn`t be empty</div> :
                null
            }
            {
              (!isUserLoggedIn && showUserErrorMessage) ?
                <div className="msg msg_error">Register or log in please to leave a comment!</div> :
                null
            }
            {
              (showMaxSymbolsError) ?
                <div className="msg msg_error">Commit length should be less than {maxSymbolsCount} symbols</div> :
                null
            }
          </div>
          <input
            type="submit"
            value="Comment"
            disabled={!isUserLoggedIn}
          />
        </form>
        {
          commentsList.map(comment => {
            const { id, author, commentText } = comment;
            return <CommentItem
              key={id}
              author={author}
              text={commentText}
            />
          })
        }
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({
  isUserLoggedIn: state.userReducer.currentUser.isLoggedIn,
  userNickname: state.userReducer.currentUser.nickname,
  commentsList:
    state.newsReducer.news
      .filter(item => item.id === ownProps.newsItemId)
      .map(item => item.comments)[0]
});

const mapDispatchToProps = { addComment };

Comments.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  userNickname: PropTypes.string,
  commentsList: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

