const initialState = {
  news: [
    {
      id: 1,
      text: 'Hello! This is my first post created using React/Redux',
      createdBy: '',
      comments: []
    },
    {
      id: 2,
      text: 'My name is Yaroslav and I am 21 years old',
      createdBy: '',
      comments: []
    },
    {
      id: 3,
      text: 'Guitar and Fronted are my life :)',
      createdBy: '',
      comments: []
    }
  ]
}

const newsReducer = (state = initialState, action) => {
  return state;
}

export default newsReducer;