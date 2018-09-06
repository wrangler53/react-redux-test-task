import React from 'react';
import PropTypes from 'prop-types';

const commentItem = ({ author, text }) => (
  <div className="comment__item">
    <div className="comment-author">
      Comment created by: {author}
    </div>
    <div className="comment-text">{text}</div>
  </div>
);

commentItem.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string
}

export default commentItem;