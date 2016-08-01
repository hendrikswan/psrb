/**
*
* Navigation
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Topic from '../Topic';

import styles from './styles.css';

function Navigation({ topics }) {
  const topicNodes = topics.map(t => (
    <Topic {...t} />
  ));

  return (
    <div className={styles.navigation}>
      <FormattedMessage {...messages.header} />
      {topicNodes}
    </div>
  );
}

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
    })
  ),
};

export default Navigation;
