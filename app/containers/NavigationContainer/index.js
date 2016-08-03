/*
 *
 * NavigationContainer
 *
 */
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import { requestTopics } from './actions';
import Navigation from '../../components/Navigation';


// console.log('navigation:', Navigation);


const mapStateToProps = selectNavigationContainer();

// const mapStateToProps = (state) => {
//   console.log('in map state to props :', state);
//   return {
//     topics: () => [
//       { description: 'test' },
//       { description: 'test nr 2' },
//     ],
//   };
// };
// ({
//   topics: state.navigationContainer.topics,
// });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    requestTopics: () => {
      console.log('DISPATCHING THE REQUEST_TOPICS ACTION!!!!!!!!!!!!!!!!');
      dispatch(requestTopics());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
