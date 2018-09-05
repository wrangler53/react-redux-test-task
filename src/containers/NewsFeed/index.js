import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsItem from '../../components/NewsItem';

class NewsFeed extends Component {
  render() {
    return (
      this.props.newsList.map(item => {
        const { id, text, createdBy, comments } = item;
        return <NewsItem
          key={id}
          text={text}
          author={createdBy}
          comments={comments}
        />
      })
    )
  }
};

const mapStateToProps = state => ({
  newsList: state.newsReducer.news
});

export default connect(mapStateToProps)(NewsFeed);