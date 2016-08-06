/**
*
* Link
*
*/

import React from 'react';
import styles from './styles.css';

class Link extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getUpButon({ link, onVoteUp }) {
    const upLink = (
      <a
        href="#Up"
        onClick={
                (e) => {
                  onVoteUp(link);
                  e.preventDefault();
                }
              }
      >
        Up
      </a>
    );
    return upLink;
  }

  getDownButton({ link, onVoteDown }) {
    const downLink = (
      <a
        href="#Down"
        onClick={
              (e) => {
                onVoteDown(link);
                e.preventDefault();
              }
            }
      >
        Down
      </a>
  );

    return downLink;
  }


  render() {
    const link = this.props.link;
    return (
      <div
        className={styles.link}
        key={link.id}
      >
        <div>
          {link.id} -
          {link.url} - {link.description} - {link.voteCount} -
          {this.getUpButon({ link, onVoteUp: this.props.onVoteUp })} - {this.getDownButton({ link, onVoteDown: this.props.onVoteDown })}
        </div>
      </div>

    );
  }
}

Link.propTypes = {
  link: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    voteCount: React.PropTypes.number.isRequired,
    votingDisabled: React.PropTypes.boolean,
  }),
  onVoteUp: React.PropTypes.func.isRequired,
  onVoteDown: React.PropTypes.func.isRequired,
};

export default Link;
