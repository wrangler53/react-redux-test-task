import React from 'react';

import Comments from '../../containers/Comments';

const newsItem = ({ id, text }) => (
  <div className="news__item">
    <div className="text">
      {text}
    </div>
    <Comments newsItemId={id} />
  </div>
);

export default newsItem;