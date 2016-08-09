/**
*
* Form
*
*/

import React from 'react';
import Card from 'material-ui/Card/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
        // this.context.router.goBack();
  }

  render() {
    return (
      <Card
        style={{
          marginTop: 15,
          padding: 20,
        }}
      >
        <div
          style={{
            display: 'block',
            margin: '0 auto',
            width: 320,
          }}
        >
          <div>
            <TextField
              hintText="URL"
              ref={(i) => (this.url = i)}
              style={inputStyle}
              errorText={this.state.urlError}
            /><br />

            <TextField
              hintText="Description"
              ref={(i) => (this.description = i)}
              style={inputStyle}
              errorText={this.state.descriptionError}
            /><br />

            <RaisedButton
              label="Add"
              primary
              style={inputStyle}
              onMouseUp={this.onAdd}
            />

            <RaisedButton
              label="Cancel"
              secondary
              style={inputStyle}
              onMouseUp={this.props.cancelAdd}
            />
          </div>
        </div>

      </Card>
  );
  }
}

Form.propTypes = {
  cancelAdd: React.PropTypes.func.isRequired,
  add: React.PropTypes.func.isRequired,
};


export default Form;
