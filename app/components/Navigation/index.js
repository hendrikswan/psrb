/**
*
* Navigation
*
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import List from 'material-ui/List/List';
import LoginLink from '../LoginLink';

class Navigation extends React.Component {
  componentWillMount() {
    this.props.requestTopics();
  }

  render() {
    const topicNodes = this.props.topics.map(topic => (
      <MenuItem
        key={topic.name}
        onTouchTap={() => {
          this.props.selectTopic(topic);
        }}
      >
          {topic.name}
      </MenuItem>
    ));

    return (
      <div>
        <AppBar
          title="Coder daily"
          onTitleTouchTap={this.props.toggleDrawer}
          onLeftIconButtonTouchTap={this.props.toggleDrawer}
          iconElementRight={<LoginLink email={this.props.email} startLogin={this.props.startLogin} />}
        />

        <Drawer
          open={this.props.isDrawerOpen}
          docked={false}
          onRequestChange={this.props.toggleDrawer}
        >
          <List>
            {topicNodes}
          </List>
        </Drawer>
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
