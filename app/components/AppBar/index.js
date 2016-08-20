import React from 'react';
import styles from './styles.css';
import LoginLink from '../LoginLink';
import IconButton from '../IconButton';

const AppBar = ({ email, startLogin, toggleDrawer }) => (
  <div className={styles.bar}>
    <div
      className={styles.menuLink}
    >
      <IconButton
        icon="bars"
        onClick={toggleDrawer}
        iconClass={styles.icon}
      />
    </div>
    <div>
      Coder daily
    </div>
    <div
      className={styles.loginLinkContainer}
    >
      <LoginLink email={email} startLogin={startLogin} />
    </div>
  </div>
);

AppBar.propTypes = {
  email: React.PropTypes.string,
  startLogin: React.PropTypes.func.isRequired,
  toggleDrawer: React.PropTypes.func.isRequired,
};

export default AppBar;
