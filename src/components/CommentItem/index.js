import React from 'react';

const commentItem = ({ author, text }) => (
  <div className="comment__item">
    <div className="comment-author">
      Comment created by: {author}
    </div>
    <div className="comment-text">{text}</div>
  </div>
);

export default commentItem;