/**
*
* LinkList
*
*/
import React from 'react';
import styles from './styles.css';
import Link from './../Link';

class LinkList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const linkNodes = this.props.links.map(link => (
      <Link
        key={link.id}
        link={link}
        onVoteDown={this.props.onVoteDown}
        onVoteUp={this.props.onVoteUp}
      />
    ));
    return (
      <div className={styles.linkList}>
        {linkNodes}
      </div>
    );
  }
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired,
    })).isRequired,
  onVoteUp: React.PropTypes.func.isRequired,
  onVoteDown: React.PropTypes.func.isRequired,
};

export default LinkList;
