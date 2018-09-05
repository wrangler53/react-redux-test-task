import React from 'react';

const newsItem = ({ text }) => (
  <div className="news__item">
    <div className="text">
      {text}
    </div>
    <form className="leave-comment">
      <input type="text" />
      <input type="submit" value="Comment" />
    </form>
  </div>
);

export default newsItem;