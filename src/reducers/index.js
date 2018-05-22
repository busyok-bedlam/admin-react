import { combineReducers } from 'redux';
import reducer from './users';
import formReducer from './add-user';

export default combineReducers({
   userList: reducer,
   isFormOpen: formReducer
 })
