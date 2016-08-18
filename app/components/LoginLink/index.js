/**
*
* LoginLink
*
*/

import React from 'react';
import styles from './styles.css';

function LoginLink({ startLogin, email }) {
  if (email) {
    return (
      <div
        className={styles.profile}
      >
        {email}
      </div>
    );
  }

  return (
    <div
      className={styles.loginLink}
      onClick={startLogin}
    >
      log in
    </div>
  );
}

LoginLink.propTypes = {
  email: React.PropTypes.string,
  startLogin: React.PropTypes.func.isRequired,
};

export default LoginLink;
