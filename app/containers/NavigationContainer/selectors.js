import { createSelector } from 'reselect';
import selectLoginContainer from '../LoginContainer/selectors';

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
  selectLoginContainer(),
  // topics: state.get('navigationContainer').topics;
  (substate, loginSubstate) => {
    const substateJs = substate.toJS();
    return Object.assign(substateJs, loginSubstate);
  }
);

export default selectNavigationContainer;
// export {
//   selectNavigationContainerDomain,
// };
