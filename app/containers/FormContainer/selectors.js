import { createSelector } from 'reselect';
import selectLinkListContainer from '../LinkListContainer/selectors';

/**
 * Direct selector to the formContainer state domain
 */
const selectFormContainerDomain = () => state => state.get('formContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FormContainer
 */

const selectFormContainer = () => createSelector(
  selectFormContainerDomain(),
  selectLinkListContainer(),
  (substate, linkListSubstate) => {
    const substateJs = substate.toJS();
    return Object.assign(substateJs, linkListSubstate);
  }
);

export default selectFormContainer;
export {
  selectFormContainerDomain,
};
