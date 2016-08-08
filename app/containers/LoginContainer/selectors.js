import { createSelector } from 'reselect';

/**
 * Direct selector to the loginContainer state domain
 */
const selectLoginContainerDomain = () => state => state.get('loginContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginContainer
 */

const selectLoginContainer = () => createSelector(
  selectLoginContainerDomain(),
  (substate) => {
    if (substate) {
      return substate.toJS();
    }

    return {};
  }
);

export default selectLoginContainer;
export {
  selectLoginContainerDomain,
};
