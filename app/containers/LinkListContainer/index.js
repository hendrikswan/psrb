/*
 *
 * LinkListContainer
 *
 */

import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';

import LinkList from '../../components/LinkList';
import React from 'react';
import { requestLinks, voteLink, startAddLink } from './actions';

const mapStateToProps = selectLinkListContainer();

class LinkListContainer extends React.Component {
  static propTypes = {
    routeParams: React.PropTypes.shape({
      topicName: React.PropTypes.string.isRequired,
    }),
    requestLinks: React.PropTypes.func.isRequired,
    topicName: React.PropTypes.string,
  }

  componentWillMount() {
    if (this.props.routeParams && this.props.routeParams.topicName) {
      this.props.requestLinks(this.props.routeParams.topicName);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.routeParams && newProps.routeParams.topicName) { // selector for this
      if (this.props.topicName !== newProps.routeParams.topicName) {
        this.props.requestLinks(newProps.routeParams.topicName); // todo: make this simpler
      }
    }
  }

  render() {
    return (
      <LinkList
        {...this.props}
      />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    requestLinks: (topicName) => dispatch(requestLinks(topicName)),
    onVoteUp: (link) => dispatch(voteLink({ link, increment: 1 })),
    onVoteDown: (link) => dispatch(voteLink({ link, increment: -1 })),
    onAdd: () => dispatch(startAddLink()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
