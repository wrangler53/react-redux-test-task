import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsItem from '../../components/NewsItem';

class NewsFeed extends Component {
  render() {
    const { newsList } = this.props
    return (
      <div className="news">
        {
          newsList.map(item => {
            const { id, text } = item;
            return <NewsItem
              id
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

export default connect(mapStateToProps)(NewsFeed);