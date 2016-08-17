/*
 *
 * FormContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectFormContainer from './selectors';
import Form from '../../components/Form';
import { cancelAdd, requestAdd } from './actions';

export class FormContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Form {...this.props} />
    );
  }
}

const mapStateToProps = selectFormContainer();

function mapDispatchToProps(dispatch) {
  return {
    cancelAdd: () => dispatch(cancelAdd()),
    add: ({ url, description }) => dispatch(requestAdd({ url, description })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
