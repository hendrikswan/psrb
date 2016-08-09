/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINKS_SUCCEEDED,
  VOTE_LINK_SUCCEEDED,
} from './constants';

import {
  LOGIN,
} from '../LoginContainer/constants';

const initialState = fromJS({
  links: [],
});

function mapLinks(state) {
  const email = state.get('email');

  const mappedLinks = state.get('links').map(l => {
    const votingEnabled = !email || l.voters.indexOf(state.get('email')) < 0;
    return Object.assign({}, l, {
      votingEnabled,
    });
  });
  return state.set('links', mappedLinks);
}

function setVote(state, link) {
  const links = state.get('links');
  const newLinks = links.map((l) => {
    if (l.id === link.id) {
      return Object.assign({}, link, {
        votingEnabled: false,
      });
    }
    return l;
  });
  return state.set('links', newLinks);
}

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return mapLinks(state.set('email', action.email), state.get('links'));
    case REQUEST_LINKS_SUCCEEDED:
      return mapLinks(
        state.set('links', action.links)
          .set('topicName', action.topicName)
      );
    case VOTE_LINK_SUCCEEDED:
      return setVote(state, action.link);
    default:
      return state;
  }
}

export default linkListContainerReducer;
