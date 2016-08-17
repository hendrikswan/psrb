/**
*
* Form
*
*/

import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import messages from './messages';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

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
    const url = this.url.getValue();
    const description = this.description.getValue();
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
      <FlatButton
        label={this.props.intl.formatMessage(messages.cancelButton)}
        secondary
        onTouchTap={this.props.cancelAdd}
      />,
      <FlatButton
        label={this.props.intl.formatMessage(messages.addButton)}
        primary
        onTouchTap={this.onAdd}
      />,
    ];
    return (
      <Dialog
        title={this.props.intl.formatMessage(messages.header)}
        actions={actions}
        modal
        open
        contentStyle={{ width: 520 }}
      >
        <TextField
          hintText={this.props.intl.formatMessage(messages.urlTextField)}
          ref={(i) => (this.url = i)}
          style={inputStyle}
          floatingLabelText={this.props.intl.formatMessage(messages.urlTextField)}
          errorText={this.state.urlError}
        />
        <TextField
          hintText={this.props.intl.formatMessage(messages.descriptionTextField)}
          ref={(i) => (this.description = i)}
          style={inputStyle}
          floatingLabelText={this.props.intl.formatMessage(messages.descriptionTextField)}
          errorText={this.state.descriptionError}
        />
      </Dialog>
  );
  }
}

Form.propTypes = {
  cancelAdd: React.PropTypes.func.isRequired,
  add: React.PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};


export default injectIntl(Form);
