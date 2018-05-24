import * as actions from '../actions/users';
import { handleActions } from 'redux-actions'
import { append } from 'rambda'
const initialState = {
  users: [],
}
const reducer = handleActions({
  [actions.setUsers]: (state, { payload }) => ({
    ...state,
    users: payload
  }),
  [actions.setUser]: (state, { payload: user}) => ({
    ...state,
    users: append(user, state.users)
  }),
  [actions.deleteUser]: (state, { payload: id }) => ({
    ...state,
    users: state.users.filter( user => user.id !== id )
  }),
  [actions.updateUser]: (state,{ payload: updatedUser }) => ({...state,
    users: state.users.map(user => user.id === updatedUser.id ? updatedUser : user)
  })

}, initialState)

export default reducer;
