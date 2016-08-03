import { createSelector } from 'reselect';

/**
 * Direct selector to the navigationContainer state domain
 */
const selectNavigationContainerDomain = () => state => state.get('navigationContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavigationContainer
 */


const selectNavigationContainer = () => createSelector(
  selectNavigationContainerDomain(),
  // topics: state.get('navigationContainer').topics;
  (substate) => substate.toJS()
);

export default selectNavigationContainer;
// export {
//   selectNavigationContainerDomain,
// };
