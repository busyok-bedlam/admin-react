import { fork } from 'redux-saga/effects'
import userListSaga from './user-list-saga.js';

export default function * rootSaga(){
  yield fork(userListSaga)
}
