import { put } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { REQUEST_LINKS, VOTE_LINK } from './constants';
import { requestLinksSucceeded, requestLinksFailed, requestVoteLinkSucceeded, requestVoteLinkFailed } from './actions';

export function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try {
    const links = yield fetchLinksFromServer(action.topicName);
    yield put(requestLinksSucceeded({
      links,
      topicName: action.topicName,
    }));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

// todo auth
export function sendVoteLinkToServer(link, increment) {
  return fetch(`http://localhost:3000/api/links/${link.id}/vote`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    //  Authorization: `Bearer ${getState().main.idToken}`,
    },
    body: JSON.stringify({
      increment,
    }),
  }).then(response => response.json());
}

// todo auth
function* voteLink(action) {
  // if (!getState().main.profile) {
  //   dispatch(showLock());
  //   return;
  // }
  try {
    const updatedLink = yield sendVoteLinkToServer(action.link, action.increment);
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
