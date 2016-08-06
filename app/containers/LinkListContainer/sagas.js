import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_LINKS } from './constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';
import { selectLinkListContainerDomain } from './selectors';

export function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try {
    console.log('requesting links!!!');
    // console.log('!!!!!!!!!!! fetchlinks executing in the saga:', action);
    const links = yield fetchLinksFromServer(action.topicName);
    yield put(requestLinksSucceeded({
      links,
      topicName: action.topicName,
    }));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchLinksSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

// All sagas to be loaded
export default [
  fetchLinksSaga,
];
