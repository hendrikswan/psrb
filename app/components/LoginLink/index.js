/**
*
* LoginLink
*
*/

import React from 'react';
import gravatar from 'gravatar';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

function LoginLink({ startLogin, email }) {
  if (email) {
    return (
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
          src={gravatar.url(email)}
          size={30}
          style={{
            marginRight: 5,
          }}
        />
        {email}
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: 5,
      }}
    >
      <FlatButton
        label="Log in"
        onMouseUp={startLogin}
        style={{
          color: '#fff',
        }}
      />
    </div>
  );
}

LoginLink.propTypes = {
  email: React.PropTypes.string,
  startLogin: React.PropTypes.func.isRequired,
};

export default LoginLink;
