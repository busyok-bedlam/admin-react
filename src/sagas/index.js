import { fork } from 'redux-saga/effects'
import userListSaga from './user-list-saga.js';
import userAddSaga from './add-user-saga';
import delUserSaga from './delete-user-saga';

export default function * rootSaga(){
  yield fork(userListSaga);
  yield fork(userAddSaga);
  yield fork(delUserSaga);
}
