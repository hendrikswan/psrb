/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
} from './constants';

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}
