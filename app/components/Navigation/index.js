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

class Navigation extends React.Component {
  componentWillMount() {
    // this.props.requestTopics();
  }

  render() {
    const topicNodes = this.props.topics.map(t => (
      <Topic {...t} key={t.description} />
    ));

    return (
      <div className={styles.navigation}>
        <FormattedMessage {...messages.header} />
        {topicNodes}
      </div>
    );
  }
}


Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
    })
  ),
};

export default Navigation;
