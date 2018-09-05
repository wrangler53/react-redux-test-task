import * as actionsTypes from './actionsTypes';

export const loginUser = userName => ({
  type: actionsTypes.LOGIN_USER,
  userName
});