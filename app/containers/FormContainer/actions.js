/*
 *
 * FormContainer actions
 *
 */

import {
  REQUEST_ADD,
  CANCEL_ADD,
  ADD_LINK_SUCCEEDED,
  ADD_LINK_FAILED,
} from './constants';

export function cancelAdd() {
  return {
    type: CANCEL_ADD,
  };
}

export function requestAdd({ url, description }) {
  return {
    type: REQUEST_ADD,
    url,
    description,
  };
}

// export function receiveAdd() {
//   return {
//     type: RECEIVE_ADD,
//   };
// }

export function requestAddLinkSucceeded() {
  return {
    type: ADD_LINK_SUCCEEDED,
  };
}

export function requestAddLinkFailed(message) {
  return {
    type: ADD_LINK_FAILED,
    message,
  };
}
