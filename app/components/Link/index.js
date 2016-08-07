/**
*
* Link
*
*/

import React from 'react';
import styles from './styles.css';
import ListItem from 'material-ui/List/ListItem';
import Card from 'material-ui/Card/Card';
import UpArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import VotingButton from '../VotingButton';

const Link = ({ link, onVoteUp, onVoteDown }) => (
  <Card
    key={link.id}
    style={{
      marginBottom: 10,
    }}
  >
    <div
      style={{
        display: 'flex',
        marginTop: 15,
      }}
    >
      <div
        className={styles.link}
        key={link.id}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <VotingButton
          icon={<UpArrow />}
          onVote={() => onVoteUp(link)}
        />
        <div
          style={{
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          {link.voteCount}
        </div>
        <VotingButton
          icon={<DownArrow />}
          onVote={() => onVoteDown(link)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <ListItem
          primaryText={link.url}
          secondaryText={link.description}
        />
      </div>
    </div>
  </Card>
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
