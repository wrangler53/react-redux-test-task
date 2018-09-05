import * as actionTypes from '../constants/actionsTypes';

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
  ],
  currentUser: {
    nickname: null,
    isLoggedIn: false
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: {
          nickname: action.userName,
          isLoggedIn: true
        }
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        currentUser: {
          nickname: null,
          isLoggedIn: false
        }
      };
    default:
      return state;
  }
}

export default userReducer;