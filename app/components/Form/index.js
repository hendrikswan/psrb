/**
*
* Form
*
*/

import React from 'react';
import messages from './messages';
import { injectIntl, intlShape } from 'react-intl';
import TextInput from '../TextInput';
import Button from '../Button';
import Modal from '../Modal';
import styles from './styles.css';

const inputStyle = {
  width: '100%',
  marginTop: 10,
};

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      urlError: '',
      descriptionError: '',
    };
  }

  onAdd = () => {
    const url = this.url.value();
    const description = this.description.value();
    let urlError = '';
    let descriptionError = '';

    if (!url.match(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)) {
      urlError = this.props.intl.formatMessage(messages.urlError);
    }

    if (!description) {
      descriptionError = this.props.intl.formatMessage(messages.descriptionError);
    }

    if (urlError || descriptionError) {
      this.setState({
        urlError,
        descriptionError,
      });

      return;
    }

    this.props.add({
      url,
      description,
    });
  }

  render() {
    const actions = [
      <Button
        text="Cancel"
        onClick={this.props.cancelAdd}
      />,
      <Button
        onClick={this.onAdd}
        text="Add"
      />,
    ];
    return (
      <Modal
        headingText={this.props.intl.formatMessage(messages.header)}
        actions={actions}
      >
        <TextInput
          errorText={this.state.urlError}
          placeholder={this.props.intl.formatMessage(messages.urlTextField)}
          ref={(f) => (this.url = f)}
          className={styles.input}
        />

        <TextInput
          placeholder={this.props.intl.formatMessage(messages.descriptionTextField)}
          ref={(f) => (this.description = f)}
          style={inputStyle}
          errorText={this.state.descriptionError}
          className={styles.input}
        />
      </Modal>
    );
  }
}

Form.propTypes = {
  cancelAdd: React.PropTypes.func.isRequired,
  add: React.PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};


export default injectIntl(Form);
