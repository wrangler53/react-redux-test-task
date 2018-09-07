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
    isLoggedIn: false,
    isNewUser: false,
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_USER:
      const { userName, id } = action.payload;
      return {
        ...state,
        users: [
          ...state.users,
          { id, nickname: userName }
        ]
      }
    case actionTypes.LOGIN_USER:
      const { isNewUser } = action.payload;
      return {
        ...state,
        currentUser: {
          nickname: userName,
          isLoggedIn: true,
          isNewUser
        }
      };
    default:
      return state;
  }
}

export default userReducer;