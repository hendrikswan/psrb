/**
*
* Login
*
*/

import React from 'react';
import validator from 'email-validator';
import styles from './styles.css';
import classNames from 'classnames';
import TextInput from '../TextInput';

class Login extends React.Component {
  state = {
    errorText: null,
  }


  login = () => {
    const email = this.emailField.value();
    if (!validator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid email',
      });
      return;
    }

    this.props.login(this.emailField.value);
  }

  render() {
    return (
      <div
        className={styles.card}
      >
        <div
          className={styles.cardHeading}
        >
          Login with your email
        </div>

        <TextInput
          errorText={this.state.errorText}
          placeholder="Your e-mail address"
          ref={(f) => (this.emailField = f)}
        />

        <div
          className={styles.actionContainer}
        >
          <div
            className={classNames(styles.button, styles.action)}
            onClick={this.props.cancelLogin}
          >
            cancel
          </div>
          <div
            className={classNames(styles.button, styles.action)}
            onClick={this.login}
          >
            log in
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: React.PropTypes.func.isRequired,
  cancelLogin: React.PropTypes.func.isRequired,
};

export default Login;
