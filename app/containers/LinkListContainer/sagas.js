import { put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_LINKS, VOTE_LINK, START_ADD_LINK } from './constants';
import { requestLinksSucceeded, requestLinksFailed, requestVoteLinkSucceeded, requestVoteLinkFailed } from './actions';
import { selectTopic } from '../NavigationContainer/actions';
import selectLinkListContainer from './selectors';
import { push } from 'react-router-redux';

export function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try {
    yield put(selectTopic(action.topicName));
    const links = yield fetchLinksFromServer(action.topicName);
    yield put(requestLinksSucceeded({
      links,
      topicName: action.topicName,
    }));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

export function sendVoteLinkToServer({
  link,
  increment,
  email,
}) {
  return fetch(`http://localhost:3000/api/links/${link.id}/vote`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      increment,
      email,
    }),
  }).then(response => response.json());
}

function* voteLink(action) {
  const state = yield select(selectLinkListContainer());
  if (!state.email) {
    yield put(push('/login'));
    return;
  }

  try {
    const updatedLink = yield sendVoteLinkToServer({
      link: action.link,
      increment: action.increment,
      email: state.email,
    });
    yield put(requestVoteLinkSucceeded({
      link: updatedLink,
    }));
  } catch (e) {
    yield put(requestVoteLinkFailed(e.message));
  }
}


function* startAdd() {
  const state = yield select(selectLinkListContainer());
  if (!state.email) {
    yield put(push('/login'));
    return;
  }

  yield put(push(`/topics/${state.topicName}/add`));
}

// Individual exports for testing
export function* fetchLinksSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

export function* voteLinkSaga() {
  yield* takeLatest(VOTE_LINK, voteLink);
}

export function* startAddSaga() {
  yield* takeLatest(START_ADD_LINK, startAdd);
}

// All sagas to be loaded
export default [
  fetchLinksSaga,
  voteLinkSaga,
  startAddSaga,
];
