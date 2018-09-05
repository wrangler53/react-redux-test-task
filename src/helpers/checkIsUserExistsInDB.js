const checkIsUserExistsInDB = (users, userName) =>
  users.some(user => user.nickname === userName);

export default checkIsUserExistsInDB;