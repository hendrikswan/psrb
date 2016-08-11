/**
*
* Form
*
*/

import React from 'react';
import Card from 'material-ui/Card/Card';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';


const inputStyle = {
  width: '100%',
  marginTop: 10,
};

//       <FormattedMessage {...messages.header} />


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
      urlError = 'please specify a valid url';
    }

    if (!description) {
      descriptionError = 'please specify a description for your link';
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
        label="Cancel"
        secondary
        onTouchTap={this.props.cancelAdd}
      />,
      <FlatButton
        label="Add"
        primary
        onTouchTap={this.onAdd}
      />,
    ];
    return (
      <Dialog
        title="Add a link"
        actions={actions}
        modal
        open
        contentStyle={{ width: 520 }}
      >
        <TextField
          hintText="URL"
          ref={(i) => (this.url = i)}
          style={inputStyle}
          errorText={this.state.urlError}
        />
        <TextField
          hintText="Description"
          ref={(i) => (this.description = i)}
          style={inputStyle}
          errorText={this.state.descriptionError}
        />
      </Dialog>
  );
  }
}

Form.propTypes = {
  cancelAdd: React.PropTypes.func.isRequired,
  add: React.PropTypes.func.isRequired,
};


export default Form;
