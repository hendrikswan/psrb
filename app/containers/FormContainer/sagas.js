import { put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_ADD, CANCEL_ADD, ADD_LINK_SUCCEEDED } from './constants';
import { requestAddLinkSucceeded, requestAddLinkFailed } from './actions';
import selectFormContainer from './selectors';
import { push, goBack } from 'react-router-redux';


export function sendAddLinkToServer({ topicName, url, description }) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url,
      description,
      topicName,
    }),
  }).then(response => response.json());
}

function* addLink(action) {
  const state = yield select(selectFormContainer());
  if (!state.topicName) {
    yield put(push('/login'));
    return;
  }

  try {
    yield sendAddLinkToServer({
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
