/**
*
* Link
*
*/

import React from 'react';
import styles from './styles.css';
import IconButton from '../IconButton';

const Link = ({ link, onVoteUp, onVoteDown }) => (
  <div
    className={styles.linkCard}
  >
    <div className={styles.votingContainer}>
      <IconButton
        icon="angle-up"
        onClick={() => onVoteUp(link)}
        disabled={!link.votingEnabled}
        iconClass={styles.votingIcon}
      />
      <div
        className={styles.votingCount}
      >
        {link.voteCount}
      </div>
      <IconButton
        icon="angle-down"
        onClick={() => onVoteDown(link)}
        disabled={!link.votingEnabled}
        iconClass={styles.votingIcon}
      />
    </div>
    <div
      className={styles.detailsContainer}
    >
      <div>
        <a
          href={link.url}
          className={styles.linkAnchor}
        >
          {link.url}
        </a>
      </div>
      <div
        className={styles.description}
      >
        {link.description}
      </div>
    </div>
  </div>
);


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
