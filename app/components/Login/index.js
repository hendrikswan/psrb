/**
*
* Login
*
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
//   render() {
//     return (
//       <div>
//         <FormattedMessage {...messages.header} />
//       </div>
//     );
//   }
// }

class Login extends React.Component {
  login = () => {
    this.props.login(this.emailField.input.value);
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.props.cancelLogin}
      />,
      <FlatButton
        label="Login"
        primary
        onTouchTap={this.login}
      />,
    ];
    return (
      <Dialog
        title="Please provider your email to login"
        actions={actions}
        modal
        open
        contentStyle={{ width: 320 }}
      >
        <TextField
          hintText="Specify your email"
          ref={(f) => { this.emailField = f; }}
        />
      </Dialog>
    );
  }
}

Login.propTypes = {
  login: React.PropTypes.func.isRequired,
  cancelLogin: React.PropTypes.func.isRequired,
};

export default Login;
