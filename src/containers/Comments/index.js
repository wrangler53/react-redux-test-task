import React from 'react';
import { connect } from 'react-redux';

import CommentItem from '../../components/CommentItem';

const Comments = ({ commentsList, isUserLoggedIn }) => (
  <div className="comments">
    <form className="leave-comment">
      <input type="text" />
      <input type="submit" value="Comment" disabled={!isUserLoggedIn} />
    </form>
    {
      commentsList.map(comment => {
        const { id, author, text } = comment;
        return <CommentItem key={id} author={author} text={text} />
      })
    }
  </div>
);

const mapStateToProps = state => ({
  isUserLoggedIn: state.userReducer.currentUser.isLoggedIn,
  commentsList: state.newsReducer.news.filter(item => item.id === this.newsItemId)
});

export default connect(mapStateToProps)(Comments);

