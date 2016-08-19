import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

const Drawer = ({ topics, selectTopic, isDrawerOpen }) => {
  const topicNodes = topics.map(topic => (
    <div
      className={styles.topic}
      key={topic.name}
      onClick={() => {
        selectTopic(topic);
      }}
    >
        {topic.name}
    </div>
  ));

  return (
    <div
      className={classNames(styles.drawer, { [styles.drawerOpen]: isDrawerOpen })}
    >
    {topicNodes}
    </div>
  );
};


Drawer.propTypes = {
  isDrawerOpen: React.PropTypes.bool.isRequired,
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
    })
  ),
  selectTopic: React.PropTypes.func.isRequired,
};

export default Drawer;
