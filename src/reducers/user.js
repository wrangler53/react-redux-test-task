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
  const { payload, type } = action;
  switch (type) {
    case actionTypes.REGISTER_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: payload.id,
            nickname: payload.userName
          }
        ]
      }
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        currentUser: {
          nickname: payload.userName,
          isLoggedIn: true,
          isNewUser: payload.isNewUser
        }
      };
    default:
      return state;
  }
}

export default userReducer;