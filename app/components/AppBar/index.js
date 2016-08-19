import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './styles.css';
import LoginLink from '../LoginLink';

const AppBar = ({ email, startLogin, toggleDrawer }) => (
  <div className={styles.bar}>
    <div
      className={styles.menuLink}
      onClick={toggleDrawer}
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
