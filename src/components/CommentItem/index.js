import React from 'react';

const commentItem = ({ author, text }) => (
  <div className="comment__item">
    <div className="comment-author">{author}</div>
    <div className="comment-text">{text}</div>
  </div>
);

export default commentItem;