/**
*
* LinkList
*
*/
import React from 'react';
import Link from './../Link';
import IconButton from '../IconButton';
import styles from './styles.css';

const LinkList = ({ links, onVoteDown, onVoteUp, topicName, onAdd }) => {
  const linkNodes = links.map(link => (
    <Link
      key={link.id}
      link={link}
      onVoteDown={onVoteDown}
      onVoteUp={onVoteUp}
    />
  ));
  return (
    <div>
      <h1
        style={{
          color: '#222',
          fontWeight: '100',
        }}
      >
        {topicName}
      </h1>

      <IconButton
        icon="plus"
        onClick={onAdd}
        buttonClass={styles.button}
        iconClass={styles.icon}
      />

      {linkNodes}
    </div>
  );
};

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired,
    })).isRequired,
  onVoteUp: React.PropTypes.func.isRequired,
  onVoteDown: React.PropTypes.func.isRequired,
  topicName: React.PropTypes.string,
  onAdd: React.PropTypes.func.isRequired,
};

export default LinkList;
