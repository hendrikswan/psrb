/**
*
* LoginLink
*
*/

import React from 'react';
import styles from './styles.css';
import Button from '../Button';

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
    <Button
      text="log in"
      onClick={startLogin}
      className={styles.loginLink}
    />
  );
}

LoginLink.propTypes = {
  email: React.PropTypes.string,
  startLogin: React.PropTypes.func.isRequired,
};

export default LoginLink;
