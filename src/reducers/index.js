import { combineReducers } from 'redux';
import newsReducer from './news';
import userReducer from './user';

const rootReducer = combineReducers({
  newsReducer,
  userReducer
});

export default rootReducer;