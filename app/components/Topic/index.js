/**
*
* Topic
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Topic({ description }) {
  return (
    <div className={styles.topic}>
      <FormattedMessage {...messages.header} />
      description: {description}
    </div>
  );
}

Topic.propTypes = {
  description: React.PropTypes.string.isRequired,
};

export default Topic;
