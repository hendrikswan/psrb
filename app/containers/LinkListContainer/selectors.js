import { createSelector } from 'reselect';
// need to get the selected topic here
const selectLinkListContainerDomain = () => state => state.get('linkListContainer');
/**
 * Other specific selectors
 */

/**
 * Default selector used by LinkListContainer
 */

const selectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain(),
  (substate) => substate.toJS()
);

export default selectLinkListContainer;
export {
  selectLinkListContainerDomain,
};
