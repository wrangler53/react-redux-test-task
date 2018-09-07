import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../../containers/ErrorBoundary';
import Comments from '../../containers/Comments';

const newsItem = ({ id, text }) => (
  <div className="news-feed__item">
    <div className="text">
      {text}
    </div>
    <ErrorBoundary>
      <Comments newsItemId={id} />
    </ErrorBoundary>
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