/**
*
* Navigation
*
*/

import React from 'react';
import Topic from '../Topic';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import List from 'material-ui/List/List';
import styles from './styles.css';
import FlatButton from 'material-ui/FlatButton';
import gravatar from 'gravatar';
import Avatar from 'material-ui/Avatar';

class Navigation extends React.Component {
  componentWillMount() {
    this.props.requestTopics();
  }

  toggle = () => {
    console.log('toggling drawer!');
    this.props.toggleDrawer();
  }

  render() {
    let loginComponent = (
      <div
        style={{
          marginTop: 5,
        }}
      >
        <FlatButton
          label="Log in"
          onMouseUp={this.props.startLogin}
          style={{
            color: '#fff',
          }}
        />
      </div>
    );

    if (this.props.email) {
      loginComponent = (
        <div
          style={{
            color: '#fff',
            marginRight: 15,
            marginTop: 7,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar
            src={gravatar.url(this.props.email)}
            size={30}
            style={{
              marginRight: 5,
            }}
          />
          {this.props.email}
        </div>
      );
    }

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
          onLeftIconButtonTouchTap={this.toggle}
          iconElementRight={loginComponent}
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
