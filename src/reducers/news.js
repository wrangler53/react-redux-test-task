import * as actionTypes from '../constants/actionsTypes';

const initialState = {
  news: [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis justo porta,',
      comments: [
        { id: 0, author: 'husky', commentText: 'Phasellus ut laoreet odio. Donec eget diam massa' }
      ]
    },
    {
      id: 2,
      text: 'luctus lectus id, egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      comments: [
        { id: 0, author: 'user', commentText: 'Aliquam euismod sem vitae lorem varius aliquam. Nulla mi metus, pellentesque et est sed, blandit euismod nibh' },
        { id: 1, author: 'hello-world', commentText: 'Nullam faucibus est sed nisl posuere convallis. Vivamus ut justo vehicula' }
      ]
    },
    {
      id: 3,
      text: 'Duis ex ligula, fermentum ac congue sodales, convallis vitae urna. ',
      comments: []
    }
  ]
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      const { id, author, commentText, newsItemId } = action.payload;
      const newsIndex = state.news.findIndex(item => item.id === newsItemId);

      const updatedItem = state.news[newsIndex];
      updatedItem.comments = [...updatedItem.comments];
      updatedItem.comments.push({ id, author, commentText });

      return {
        ...state,
        news: [...state.news]
      };
    default:
      return state;
  }
}

export default newsReducer;