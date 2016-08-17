import { put, select, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_ADD, CANCEL_ADD, ADD_LINK_SUCCEEDED } from './constants';
import { requestAddLinkSucceeded, requestAddLinkFailed } from './actions';
import selectFormContainer from './selectors';
import { push, goBack } from 'react-router-redux';
import { sendAddLinkToServer } from '../api';

function* addLink(action) {
  const state = yield select(selectFormContainer());
  if (!state.topicName) {
    yield put(push('/login'));
    return;
  }

  try {
    yield call(sendAddLinkToServer, {
      topicName: state.topicName,
      url: action.url,
      description: action.description,
    });
    yield put(requestAddLinkSucceeded());
  } catch (e) {
    yield put(requestAddLinkFailed(e.message));
  }

  // .then(postResponse => {
  //   if (postResponse.status === 200) {
  //     dispatch(fetchLinks());
  //     dispatch(receiveAdd());
  //
  //     dispatch(push(`/list/${selectedTopic.name}`));
  //   }
  // });
}

function* cancelAdd() {
  yield put(goBack());
}

// Individual exports for testing
export function* cancelAddSaga() {
  yield* takeLatest(CANCEL_ADD, cancelAdd);
}

export function* addSucceededSaga() {
  yield* takeLatest(ADD_LINK_SUCCEEDED, cancelAdd);
}

export function* addLinkSaga() {
  yield* takeLatest(REQUEST_ADD, addLink);
}
// All sagas to be loaded
export default [
  addLinkSaga,
  cancelAddSaga,
  addSucceededSaga,
];
