import { fork, takeEvery,call,put } from 'redux-saga/effects';
import { setUsers,filterUserAction } from '../actions/users';
import { filterUsers } from '../api';

export default function * filterUsersSaga(){
  yield fork(filterUsersWatcher)
}

function * filterUsersWatcher(){
  yield takeEvery(filterUserAction,filterUsersWorker);
}
function * filterUsersWorker({payload}){
  const { filter,value } = payload;
  const users = yield call(filterUsers, filter, value);
  yield put(setUsers(users))
}
