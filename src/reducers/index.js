import { combineReducers } from 'redux';
import reducer from './users';

export default combineReducers({ userList: reducer })
