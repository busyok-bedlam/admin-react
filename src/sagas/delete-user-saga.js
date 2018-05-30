import { call, fork,put,takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { deleteUser as deleteUserAction } from '../actions/users';
import { deleteUser } from '../api';

export default function * delUserSaga(){
  yield fork(delUserWatcher);
}

function * delUserWatcher(){
  yield takeEvery(deleteUserAction,delUserWorker);
}
function * delUserWorker({payload: id}){
  yield call(deleteUser(id));
  yield call(delay(2000));
  yield put(deleteUserAction(id));
}
