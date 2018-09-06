import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsItem from '../../components/NewsItem';

class NewsFeed extends Component {
  render() {
    return (
      <div className="news-feed">
        {
          this.props.newsList.map(item => {
            console.log(item)
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
  newsList: Object.values(state.newsReducer.news)
});

export default connect(mapStateToProps)(NewsFeed);