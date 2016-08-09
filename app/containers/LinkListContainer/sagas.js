import { put, select, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_LINKS, VOTE_LINK } from './constants';
import { requestLinksSucceeded, requestLinksFailed, requestVoteLinkSucceeded, requestVoteLinkFailed } from './actions';
import { selectTopic } from '../NavigationContainer/actions';
import selectLinkListContainer from './selectors';
import { push } from 'react-router-redux';
import { fetchLinksFromServer, sendVoteLinkToServer } from '../api';


function* fetchLinks(action) {
  try {
    yield put(selectTopic(action.topicName));
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinksSucceeded({
      links,
      topicName: action.topicName,
    }));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}


function* voteLink(action) {
  const state = yield select(selectLinkListContainer());
  if (!state.email) {
    yield put(push('/login'));
    return;
  }

  try {
    const updatedLink = yield call(sendVoteLinkToServer, {
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

// Individual exports for testing
export function* fetchLinksSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

export function* voteLinkSaga() {
  yield* takeLatest(VOTE_LINK, voteLink);
}
// All sagas to be loaded
export default [
  fetchLinksSaga,
  voteLinkSaga,
];
