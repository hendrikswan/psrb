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
import styles from './styles.css';
import FontAwesome from 'react-fontawesome';

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

        <div className={styles.bar}>
          <div
            className={styles.menuLink}
            onClick={this.props.toggleDrawer}
          >
            <FontAwesome
              className={styles.icon}
              name="bars"
            />
          </div>
          <div>
            Coder daily
          </div>
          <div
            className={styles.loginLinkContainer}
          >
            <LoginLink email={this.props.email} startLogin={this.props.startLogin} />
          </div>
        </div>

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
