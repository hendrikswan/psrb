/*
 * Form Messages
 *
 * This contains all the text for the Form component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.Form.header',
    defaultMessage: 'Add a link',
  },
  cancelButton: {
    id: 'app.components.Form.cancelButton',
    defaultMessage: 'Cancel',
  },
  addButton: {
    id: 'app.components.Form.addButton',
    defaultMessage: 'Add',
  },
  urlTextField: {
    id: 'app.components.Form.urlTextField',
    defaultMessage: 'URL',
  },
  descriptionTextField: {
    id: 'app.components.Form.descriptionTextField',
    defaultMessage: 'description',
  },
  urlError: {
    id: 'app.components.Form.urlError',
    defaultMessage: 'please specify a valid url',
  },
  descriptionError: {
    id: 'app.components.Form.descriptionError',
    defaultMessage: 'please specify a description for your link',
  },
});
