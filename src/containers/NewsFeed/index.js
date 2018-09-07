import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NewsItem from '../../components/NewsItem';

class NewsFeed extends Component {
  render() {
    return (
      <div className="news-feed">
        {
          this.props.newsList.map(item => {
            const { id, text } = item;
            return <NewsItem
              id={id}
              key={id}
              text={text}
            />
          })
        }
      </div>
    )
  }
};

const mapStateToProps = state => ({
  newsList: state.newsReducer.news
});

NewsFeed.propTypes = {
  newsList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect(mapStateToProps)(NewsFeed);