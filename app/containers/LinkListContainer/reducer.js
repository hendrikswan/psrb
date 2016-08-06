/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINKS,
  REQUEST_LINKS_SUCCEEDED,
  VOTE_LINK_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  links: [],
});

function setVote(state, link) {
  const links = state.get('links');
  const newLinks = links.map((l) => {
    if (l.id === link.id) {
      return Object.assign({}, link, {
        votingDisabled: true,
      });
    }
    return l;
  });
  return state.set('links', newLinks);
}

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS:
      return state;
    case REQUEST_LINKS_SUCCEEDED:
      return state.set('links', action.links).set('topicName', action.topicName);
    case VOTE_LINK_SUCCEEDED:
      return setVote(state, action.link);
    default:
      return state;
  }
}

export default linkListContainerReducer;
