import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import { REQUEST_TOPICS } from './constants';
import fetch from 'isomorphic-fetch';

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}

function* fetchTopics() {
  try {
    const topics = yield fetchTopicsFromServer();
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
];
