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

// import { createSelector } from 'reselect';
// // need to get the selected topic here
// const selectLinkListContainerDomain = () => state => state.get('linkListContainer');
// const selectRouteParams = () => state => state.get('route');
// /**
//  * Other specific selectors
//  */
//
// /**
//  * Default selector used by LinkListContainer
//  */
//
// const selectLinkListContainer = () => createSelector(
//   selectLinkListContainerDomain(),
//   selectRouteParams(),
//   (linkListSubstate, routeSubState) => {
//     const linkListState = linkListSubstate.toJS();
//     const routeParamsState = routeSubState.toJS();
//     const routeTopicName = (routeParamsState && routeParamsState.topicName)
//     ? routeParamsState.topicName
//     : undefined;
//     return Object.assign(linkListState, { routeTopicName });
//   },
// );
//
// export default selectLinkListContainer;
// export {
//   selectLinkListContainerDomain,
// };
