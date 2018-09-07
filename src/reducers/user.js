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
  isUserJustGeristered: false,
  currentUser: {
    nickname: null,
    isLoggedIn: false
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_USER:
      const { id, userName } = action.payload;
      return {
        ...state,
        isUserJustGeristered: true,
        users: [
          ...state.users,
          { id, nickname: userName }
        ]
      }
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        currentUser: {
          nickname: action.userName,
          isLoggedIn: true
        }
      };
    default:
      return state;
  }
}

export default userReducer;