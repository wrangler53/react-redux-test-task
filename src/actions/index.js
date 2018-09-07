import * as actionsTypes from '../constants/actionsTypes';
import checkIsUserExistsInDB from '../helpers/checkIsUserExistsInDB';

export const loginUser = (userName, isNewUser = false) => ({
  type: actionsTypes.LOGIN_USER,
  payload: { userName, isNewUser }
});

export const registerUser = userName => ({
  type: actionsTypes.REGISTER_USER,
  payload: { id: new Date(), userName }
});

export const authUser = userName => (dispatch, getStore) => {
  const users = getStore().userReducer.users;

  if (userName.length === 0) {
    throw new Error('User name length should be greather than 0');
  } else {
    if (checkIsUserExistsInDB(users, userName)) {
      dispatch(loginUser(userName));
    } else {
      dispatch(registerUser(userName));
      dispatch(loginUser(userName, true));
    }
  }
}

export const addComment = (newsItemId, commentText, author) => {
  if ((commentText.length === 0 || commentText.length > 100) || author == null) {
    throw new Error('User is not logged in in system');
  } else {
    return {
      type: actionsTypes.ADD_COMMENT,
      payload: { id: new Date(), newsItemId, commentText, author }
    }
  }
}
