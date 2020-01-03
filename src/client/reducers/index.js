import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import mostSearchReducer from './mostSearchReducer';

export default combineReducers({
  home: usersReducer,
  auth: authReducer,
  all: adminsReducer,
  mostSearch: mostSearchReducer

});
