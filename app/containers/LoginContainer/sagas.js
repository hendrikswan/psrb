import { put } from 'redux-saga/effects';
import { goBack } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { CANCEL_LOGIN, LOGIN } from './constants';

// todo: not sure whether we should do nav stuff in a SAGA...

function* cancelLogin() {
  yield put(goBack());
}

// Individual exports for testing
export function* cancelLoginSaga() {
  yield* takeLatest(CANCEL_LOGIN, cancelLogin);
}

function* doLogin() {
  yield put(goBack());
}

export function* doLoginSaga() {
  yield* takeLatest(LOGIN, doLogin);
}

// All sagas to be loaded
export default [
  cancelLoginSaga,
  doLoginSaga,
];
