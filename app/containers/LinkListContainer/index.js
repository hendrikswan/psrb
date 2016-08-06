/*
 *
 * LinkListContainer
 *
 */

import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';
import LinkList from '../../components/LinkList';
import { requestLinks } from './actions';

const mapStateToProps = selectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: () => {
      dispatch(requestLinks());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);
