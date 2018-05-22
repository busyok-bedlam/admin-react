import { call, fork,put,takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { toggleForm } from '../actions/add-user';
import { deleteUser as deleteUserAction } from '../actions/users';
import { deleteUser } from '../api';

export default function * delUserSaga(){
  yield fork(delUserWatcher);
}

function * delUserWatcher(){
  yield takeEvery(deleteUserAction,delUserWorker);
}
function * delUserWorker({payload: id}){
  yield delay(2000);
  yield call(deleteUser(id));
  yield put(deleteUserAction(id));
}
