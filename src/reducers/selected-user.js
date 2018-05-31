import { selectedUser } from "../actions/users";
import { handleActions } from 'redux-actions';
const initialUser = null;

const checkedUser = handleActions({
  [selectedUser]: (state, {payload: user}) => user || null;
})
