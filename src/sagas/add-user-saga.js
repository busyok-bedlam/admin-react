import { call,put,fork,takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { addUser as addUserAction, toggleForm } from '../actions/add-user';
import { setUser } from '../actions/users';
import { postUser } from '../api';



export default function * userAddSaga() {
  yield fork(addUserWatcher);
}

function * addUserWatcher(){
  yield takeEvery(addUserAction,addUserWorker)
}

function * addUserWorker({payload: user}){
  yield delay(1000);
  const postData = yield call(postUser, user );
  yield put(setUser(postData));
  yield put(toggleForm());
}
