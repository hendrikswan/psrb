/*
 *
 * LoginContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLoginContainer from './selectors';
import Login from '../../components/Login';
import { cancelLogin, login } from './actions';

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Login {...this.props} />
    );
  }
}

const mapStateToProps = selectLoginContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    cancelLogin: () => dispatch(cancelLogin()),
    login: (email) => dispatch(login(email)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
