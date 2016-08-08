import { put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import { REQUEST_TOPICS, REQUEST_TOPICS_SUCCEEDED } from './constants';
import fetch from 'isomorphic-fetch';
import selectNavigationContainer from './selectors';
import { push } from 'react-router-redux';

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

function* selectDefaultTopic() {
  const state = yield select(selectNavigationContainer());
  if (!state.selectedTopicName) {
    yield put(push(`/topics/${state.topics[0].name}`));
  }
}

export function* selectDefaultTopicSaga() {
  yield* takeLatest(REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectDefaultTopicSaga,
];
