/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS,
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
  VOTE_LINK,
  VOTE_LINK_SUCCEEDED,
  VOTE_LINK_FAILED,
} from './constants';

export function requestLinks(topicName) {
  return {
    type: REQUEST_LINKS,
    topicName,
  };
}

export function requestLinksSucceeded({ links, topicName }) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links,
    topicName,
  };
}

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message,
  };
}

export function voteLink({ link, increment }) {
  return {
    type: VOTE_LINK,
    link,
    increment,
  };
}

export function requestVoteLinkSucceeded({ link }) {
  return {
    type: VOTE_LINK_SUCCEEDED,
    link,
  };
}

export function requestVoteLinkFailed(message) {
  return {
    type: VOTE_LINK_FAILED,
    message,
  };
}
