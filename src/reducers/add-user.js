import { handleActions } from 'redux-actions';
import { toggleForm } from '../actions/add-user';
const initialStatus = false;


const formReducer = handleActions({
[toggleForm]: (state,action) => !state

},initialStatus)
export default formReducer;
