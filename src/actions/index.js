import * as actionsTypes from '../constants/actionsTypes';
import checkIsUserExistsInDB from '../helpers/checkIsUserExistsInDB';

export const loginUserSuccess = userName => ({
  type: actionsTypes.LOGIN_SUCCESS,
  userName
});

export const loginUserFailed = () => ({
  type: actionsTypes.LOGIN_FAILED
});

export const loginUser = userName => (dispatch, getStore) => {
  const users = getStore().userReducer.users;
  (checkIsUserExistsInDB(users, userName)) ?
    dispatch(loginUserSuccess(userName)) :
    dispatch(loginUserFailed());
}

export const addComment = (newsItemId, commentText, author) => ({
  type: actionsTypes.ADD_COMMENT,
  payload: { id: new Date(), newsItemId, commentText, author }
})
