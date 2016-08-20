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
import Button from '../Button';

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

    this.props.login(email);
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
          <Button
            className={styles.action}
            text="cancel"
            onClick={this.props.cancelLogin}
          />
          <Button
            className={styles.action}
            onClick={this.login}
            text="log in"
          />
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
