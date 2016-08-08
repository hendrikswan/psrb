/*
 *
 * NavigationContainer
 *
 */
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import { requestTopics, selectTopic, toggleDrawer } from './actions';
import Navigation from '../../components/Navigation';
import { push } from 'react-router-redux';


const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => {
      dispatch(requestTopics());
    },
    selectTopic: (topic) => {
      dispatch(push(`/topics/${topic.name}`));
      dispatch(selectTopic(topic.name));
      dispatch(toggleDrawer());
    },
    startLogin: () => {
      dispatch(push('/login'));
    },
    toggleDrawer: () => dispatch(toggleDrawer()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
