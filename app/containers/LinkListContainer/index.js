/*
 *
 * LinkListContainer
 *
 */

import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';

import LinkList from '../../components/LinkList';
import React from 'react';
import { requestLinks } from './actions';

const mapStateToProps = selectLinkListContainer();

class LinkListContainer extends React.Component {
  componentWillMount() {
    if (!this.props.selectedTopic && this.props.routeParams && this.props.routeParams.topicName) {
      this.props.requestLinks(this.props.routeParams.topicName); // todo: make this simpler
    }
  }

  componentWillReceiveProps(newProps) {
    console.log('navigation', newProps);
    if (newProps.routeParams && newProps.routeParams.topicName) { // selector for this
      if (this.props.topicName !== newProps.routeParams.topicName) {
        // if (this.props.selectedTopic)
        //   console.log(this.props.selectedTopic.name, newProps.routeParams.topicName);
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
