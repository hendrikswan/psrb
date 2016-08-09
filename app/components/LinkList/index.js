/**
*
* LinkList
*
*/
import React from 'react';
import Link from './../Link';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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

      <FloatingActionButton
        style={{ position: 'fixed', right: 30, top: 110 }}
        onMouseUp={onAdd}
        secondary
      >
        <ContentAdd />
      </FloatingActionButton>
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
