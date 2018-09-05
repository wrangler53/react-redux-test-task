import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  users: [
    {
      id: 1,
      nickname: 'hello-world',
    },
    {
      id: 2,
      nickname: 'test-user',
    },
    {
      id: 3,
      nickname: 'husky',
    },
    {
      id: 4,
      nickname: 'wrangler',
    },
    {
      id: 5,
      nickname: 'user',
    }
  ]
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      console.log(state)
      return state;
  }
  return state;
}

export default userReducer;