import { fork, takeEvery, call, put } from 'redux-saga/effects'
import { getUsers as getUsersAction,setUsers } from "../actions/users";
import { getUsers } from '../api'

export default function * userListSaga(){
  yield fork(getUsersWatcher);
}

function * getUsersWatcher(){
  yield takeEvery(getUsersAction, getUsersWorker)
}

function * getUsersWorker(){
  const users = yield call(getUsers);
  yield put( setUsers(users) );
}
