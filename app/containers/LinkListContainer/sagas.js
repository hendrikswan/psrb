import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { TOPIC_SELECTED } from '../NavigationContainer/constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';

export function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.id}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try {
    // console.log('!!!!!!!!!!! fetchlinks executing in the saga:', action);
    const links = yield fetchLinksFromServer(action.topic);
    yield put(requestLinksSucceeded(links));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchLinksSaga() {
  yield* takeLatest(TOPIC_SELECTED, fetchLinks);
}

// All sagas to be loaded
export default [
  fetchLinksSaga,
];
