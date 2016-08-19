/**
*
* Link
*
*/

import React from 'react';
import styles from './styles.css';
import UpArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import VotingButton from '../VotingButton';


const Link = ({ link, onVoteUp, onVoteDown }) => (
  <div
    className={styles.linkCard}
  >
    <div>
      <VotingButton
        icon={<UpArrow />}
        onVote={() => onVoteUp(link)}
        link={link}
      />
      <div
        className={styles.votingCount}
      >
        {link.voteCount}
      </div>
      <VotingButton
        icon={<DownArrow />}
        onVote={() => onVoteDown(link)}
        link={link}
      />
    </div>
    <div
      className={styles.detailsContainer}
    >
      <div>
        {link.url}
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
