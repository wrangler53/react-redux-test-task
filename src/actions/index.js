import * as actionsTypes from '../constants/actionsTypes';
import checkIsUserExistsInDB from '../helpers/checkIsUserExistsInDB';

export const loginUser = userName => ({
  type: actionsTypes.LOGIN_USER,
  userName
});

export const registerUser = userName => ({
  type: actionsTypes.REGISTER_USER,
  payload: { id: new Date(), userName }
});

export const authUser = userName => (dispatch, getStore) => {
  const users = getStore().userReducer.users;

  if (checkIsUserExistsInDB(users, userName)) {
    dispatch(loginUser(userName));
  } else {
    dispatch(registerUser(userName));
    dispatch(loginUser(userName));
  }
}

export const addComment = (newsItemId, commentText, author) => ({
  type: actionsTypes.ADD_COMMENT,
  payload: { id: new Date(), newsItemId, commentText, author }
})
