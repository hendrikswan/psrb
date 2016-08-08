/**
*
* Topic
*
*/

import React from 'react';
import styles from './styles.css';

function Topic({ topic, selectTopic }) {
  return (
    <div className={styles.topic}>
      <a
        onClick={(e) => {
          selectTopic(topic);
          e.preventDefault();
        }}
      >
        {topic.description}
      </a>
    </div>
  );
}

Topic.propTypes = {
  topic: React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
  }),
  selectTopic: React.PropTypes.func.isRequired,
};

export default Topic;
