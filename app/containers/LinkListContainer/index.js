/*
 *
 * LinkListContainer
 *
 */

import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';

import LinkList from '../../components/LinkList';
import React from 'react';
import { requestLinks, voteLink } from './actions';

const mapStateToProps = selectLinkListContainer();

class LinkListContainer extends React.Component {
  componentWillReceiveProps(newProps) {
    if (newProps.routeParams && newProps.routeParams.topicName) { // selector for this
      if (this.props.topicName !== newProps.routeParams.topicName) {
        // if (this.props.selectedTopic)
        //   console.log(this.props.selectedTopic.name, newProps.routeParams.topicName);
        this.props.requestLinks(newProps.routeParams.topicName); // todo: make this simpler
      }
    }
  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.routeTopicName && this.props.topicName !== newProps.routeTopicName) {
  //     // if (this.props.selectedTopic)
  //     //   console.log(this.props.selectedTopic.name, newProps.routeParams.topicName);
  //     this.props.requestLinks(newProps.routeTopicName); // todo: make this simpler
  //   }
  // }

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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
