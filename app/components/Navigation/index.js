import React from 'react';
import AppBar from '../AppBar';
import Drawer from '../Drawer';


class Navigation extends React.Component {
  componentWillMount() {
    this.props.requestTopics(); // should be done in a container component
  }

  render() {
    return (
      <div>
        <AppBar
          email={this.props.email}
          startLogin={this.props.startLogin}
          toggleDrawer={this.props.toggleDrawer}
        />

        <Drawer
          topics={this.props.topics}
          selectTopic={this.props.selectTopic}
          isDrawerOpen={this.props.isDrawerOpen}
        />
      </div>
    );
  }
}


Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
    })
  ),
  requestTopics: React.PropTypes.func.isRequired,
  selectTopic: React.PropTypes.func.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string,
  startLogin: React.PropTypes.func.isRequired,
};

export default Navigation;
