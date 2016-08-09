/**
*
* Login
*
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import validator from 'email-validator';

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
  state = {
    errorText: null,
  }


  login = () => {
    const email = this.emailField.input.value;
    if (!validator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid email',
      });
      return;
    }

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
        title="Log in with your email"
        actions={actions}
        modal
        open
        contentStyle={{ width: 320 }}
      >
        <TextField
          hintText="Your email"
          errorText={this.state.errorText}
          floatingLabelText="Your email"
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
