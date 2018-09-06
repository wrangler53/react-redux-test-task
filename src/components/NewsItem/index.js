import React from 'react';
import PropTypes from 'prop-types';

import Comments from '../../containers/Comments';

const newsItem = ({ id, text }) => (
  <div className="news-feed__item">
    <div className="text">
      {text}
    </div>
    <Comments newsItemId={id} />
  </div>
);

newsItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  text: PropTypes.string.isRequired
}

export default newsItem;