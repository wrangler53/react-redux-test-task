import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addComment } from '../../actions';

import CommentItem from '../../components/CommentItem';

class Comments extends Component {
  state = {
    comment: ''
  }

  inputChangeHandler = event => {
    this.setState({ comment: event.target.value });
  }

  addCommentHandler = event => {
    event.preventDefault();
    this.props.addComment(this.props.newsItemId, this.state.comment, this.props.userNickname);
  }

  render() {
    const { commentsList, isUserLoggedIn } = this.props;
    return (
      <div className="comments">
        <form className="leave-comment" onSubmit={event => this.addCommentHandler(event)}>
          <input
            type="text"
            value={this.state.comment}
            className="leave-comment__input"
            onChange={event => this.inputChangeHandler(event)}
          />
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
    Object.values(state.newsReducer.news)
      .filter(item => item.id === ownProps.newsItemId)
      .map(item => item.comments)[0]
});

const mapDispatchToProps = dispatch => ({
  addComment: (newsItemId, commentText, author) => dispatch(addComment(newsItemId, commentText, author))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

